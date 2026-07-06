<?php
// ── Configurazione ──────────────────────────────────────────────
$admin_to  = "info@sphere.com.sa";          // riceve la notifica
$from      = "info@sphere.com.sa";           // mittente (dominio del sito)
$from_name = "Sphere";

// Risposta sempre in JSON (il form legge la risposta via fetch)
header('Content-Type: application/json; charset=utf-8');

// Solo POST è ammesso
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(403);
    echo json_encode(["message" => "Accesso negato."]);
    exit;
}

// Recupero e sanificazione dati
$name    = strip_tags(trim($_POST["name"] ?? ""));
$email   = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
$message = trim($_POST["message"] ?? "");
$privacy = isset($_POST["privacy"]) && $_POST["privacy"] === "true";

// Validazione
if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["message" => "Please fill in all fields correctly."]);
    exit;
}

// ── Helper: template mail coerente col sito ─────────────────────
// Palette: night #0D0B09 · ivory #F0EBE0 · gold #B8922C · mist #C8BEA8
function sphere_email(string $eyebrow, string $heading, string $bodyHtml): string {
    $year = date('Y');
    return <<<HTML
<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0D0B09;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0D0B09;">
    <tr>
      <td align="center" style="padding:56px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0D0B09;border:1px solid rgba(184,146,44,0.22);">
          <!-- Header -->
          <tr>
            <td align="center" style="padding:44px 40px 36px;border-bottom:1px solid rgba(184,146,44,0.18);">
              <div style="font-family:Georgia,'Times New Roman',serif;font-size:26px;letter-spacing:0.42em;color:#F0EBE0;text-transform:uppercase;padding-left:0.42em;">Sphere</div>
              <div style="width:28px;height:1px;background:#B8922C;margin:18px auto 0;"></div>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding:48px 40px 44px;">
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.24em;text-transform:uppercase;color:#B8922C;margin-bottom:20px;">$eyebrow</div>
              <div style="font-family:Georgia,'Times New Roman',serif;font-style:italic;font-weight:300;font-size:30px;line-height:1.15;color:#F0EBE0;margin-bottom:28px;">$heading</div>
              $bodyHtml
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:30px 40px 40px;border-top:1px solid rgba(184,146,44,0.18);">
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.9;color:#C8BEA8;">
                Riyadh, Kingdom of Saudi Arabia<br>
                <a href="mailto:info@sphere.com.sa" style="color:#B8922C;text-decoration:none;">info@sphere.com.sa</a>
              </div>
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.1em;color:#4A4038;margin-top:18px;">&copy; $year Sphere. All rights reserved.</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;
}

// Header MIME per mail HTML
function html_headers(string $fromName, string $from, string $replyTo = ''): string {
    $h  = "MIME-Version: 1.0\r\n";
    $h .= "Content-Type: text/html; charset=UTF-8\r\n";
    $h .= "From: {$fromName} <{$from}>\r\n";
    if ($replyTo !== '') $h .= "Reply-To: {$replyTo}\r\n";
    return $h;
}

// Dati sicuri per l'HTML
$e_name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$e_mail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$e_msg  = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

// ── 1) Mail all'ADMIN ───────────────────────────────────────────
$row = function (string $label, string $value): string {
    return '<tr>'
        . '<td style="font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#B8922C;padding:0 0 6px;">' . $label . '</td>'
        . '</tr><tr>'
        . '<td style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#F0EBE0;padding:0 0 24px;">' . $value . '</td>'
        . '</tr>';
};
$admin_body = '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">'
    . $row('Name', $e_name)
    . $row('Email', '<a href="mailto:' . $e_mail . '" style="color:#F0EBE0;text-decoration:none;border-bottom:1px solid rgba(184,146,44,0.5);">' . $e_mail . '</a>')
    . $row('Message', $e_msg)
    . $row('Privacy consent', $privacy ? 'Accepted' : 'Not accepted')
    . '</table>';

$admin_html = sphere_email('New Enquiry', 'A new request has arrived.', $admin_body);
$admin_ok = mail(
    $admin_to,
    'New enquiry from the Sphere website',
    $admin_html,
    html_headers($from_name, $from, "{$name} <{$email}>")
);

// ── 2) Mail di CONFERMA all'UTENTE ──────────────────────────────
$user_body = '<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.9;color:#C8BEA8;">'
    . 'Dear ' . $e_name . ',<br><br>'
    . 'Your request has been received. A member of our team will be in touch with the discretion and care your enquiry deserves.<br><br>'
    . 'For reference, this is the message you sent us:'
    . '</div>'
    . '<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.8;color:#F0EBE0;background:#1A1610;border-left:2px solid #B8922C;padding:18px 22px;margin:22px 0 8px;">' . $e_msg . '</div>'
    . '<div style="font-family:Georgia,\'Times New Roman\',serif;font-style:italic;font-size:15px;color:#B8922C;margin-top:30px;">The Sphere Team</div>';

$user_html = sphere_email('Thank you', 'We have received<br>your enquiry.', $user_body);
mail(
    $email,
    'We have received your enquiry — Sphere',
    $user_html,
    html_headers($from_name, $from, $from)
);

// ── Risposta al form ────────────────────────────────────────────
if ($admin_ok) {
    http_response_code(200);
    echo json_encode(["message" => "Message sent successfully."]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Something went wrong. Please try again later."]);
}
?>
