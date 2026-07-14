'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Locale = 'en' | 'ar'

const STORAGE_KEY = 'sphere_locale'

interface Dictionary {
  nav: {
    about: string
    events: string
    concierge: string
    news: string
    contact: string
    enquire: string
    menuAriaLabel: string
  }
  footer: {
    privacy: string
    instagramAriaLabel: string
  }
  switcher: {
    ariaLabel: string
  }
  hero: {
    line1: string
    line2: string
    line3: string
    quoteLine1: string
    quoteLine2: string
  }
  about: {
    label: string
    intro: string
    philosophyLabel: string
    philosophyLine1: string
    philosophyLine2: string
    philosophyBody: string
    heritageLabel: string
    heritageLine1: string
    heritageLine2: string
    heritageLine3: string
    heritageBody: string
    kingdomLabel: string
    kingdomQuote: string
    kingdomBody: string
  }
  events: {
    label: string
    line1: string
    line2: string
    tagline: string
    intro: string
    cards: { title: string; body: string }[]
    quote: string
  }
  concierge: {
    label: string
    heading1: string
    heading2: string
    quote: string
    intro: string
    cards: { title: string; body: string }[]
  }
  news: {
    label: string
    line1: string
    line2: string
    intro: string
    readMore: string
    articles: { date: string; category: string; title: string; excerpt: string }[]
  }
  contact: {
    label: string
    line1: string
    line2: string
    subtitle: string
    sentTitle: string
    sentBody: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    privacyPrefix: string
    privacyLink: string
    privacySuffix: string
    sendLabel: string
    sendingLabel: string
    errorMessage: string
    officeLabel: string
    officeValue: string
    emailColLabel: string
    followLabel: string
  }
  stats: {
    label: string
    items: string[]
  }
  cookie: {
    ariaLabel: string
    messagePrefix: string
    privacyLink: string
    messageSuffix: string
    decline: string
    accept: string
  }
  scrollTopAriaLabel: string
  privacy: {
    title: string
    lastUpdated: string
    back: string
    returnToSphere: string
    s1Title: string
    s1Body1: string
    s1Body2: string
    s2Title: string
    s2Intro: string
    s2Items: string[]
    s2Outro: string
    s3Title: string
    s3PurposeHeader: string
    s3BasisHeader: string
    s3Rows: [string, string][]
    s4Title: string
    s4Body: string
    s5Title: string
    s5Intro: string
    s5Items: string[]
    s5Outro: string
    s6Title: string
    s6Intro: string
    s6Essential: string
    s6EssentialBody: string
    s6Analytics: string
    s6AnalyticsBody: string
    s6Outro: string
    s7Title: string
    s7Body: string
    s8Title: string
    s8Body: string
  }
}

export const translations: Record<Locale, Dictionary> = {
  en: {
    nav: {
      about: 'About',
      events: 'Events',
      concierge: 'Concierge',
      news: 'News',
      contact: 'Contact',
      enquire: 'Enquire',
      menuAriaLabel: 'Menu',
    },
    footer: {
      privacy: 'Privacy',
      instagramAriaLabel: 'Sphere on Instagram',
    },
    switcher: {
      ariaLabel: 'Change language',
    },
    hero: {
      line1: 'A Name That Defines',
      line2: 'Our Commitment',
      line3: 'to Excellence.',
      quoteLine1: '"We are the Masters of Haute Living',
      quoteLine2: '& Whisperers of Excellence."',
    },
    about: {
      label: 'About',
      intro:
        'Saudi Arabia’s multidisciplinary experience partner for governments, luxury brands and visionary organizations. Every project is designed with responsibility, sustainability and long-term impact in mind.',
      philosophyLabel: 'Our Philosophy',
      philosophyLine1: 'Where Hospitality',
      philosophyLine2: 'Meets Influence.',
      philosophyBody:
        'Strategic thinking shapes every project with purpose. Creative excellence transforms ideas into unforgettable experiences, while flawless delivery ensures precision in every detail. Rooted in human-centered hospitality, we put people first and earn the trust of governments, luxury brands, and visionary organizations.',
      heritageLabel: 'Heritage',
      heritageLine1: 'Elegance Crafted',
      heritageLine2: 'in Italy, Rooted',
      heritageLine3: 'in Kingdom Culture.',
      heritageBody:
        'S.P.H.E.R.E. brings together the timeless elegance and refined taste of Italy with an authentic Saudi touch — creating experiences that feel both international and deeply local.',
      kingdomLabel: 'Kingdom',
      kingdomQuote:
        '"What sets us apart is our deep understanding of Saudi culture, traditions and expectations. We don\'t simply work in the region: we are part of it."',
      kingdomBody:
        'Inspired by Italian design, craftsmanship and attention to detail, we shape events with style, balance and effortless sophistication. This fusion allows us to deliver events that are visually striking, culturally aligned, and flawlessly executed.',
    },
    events: {
      label: 'Events',
      line1: 'Events &',
      line2: 'Elevated Hospitality.',
      tagline: 'A Taste of Beauty',
      intro:
        'S.P.H.E.R.E. offers a suite of services that adapt with grace to the scale and spirit of each occasion. Everything is thoughtfully attuned, quietly powerful and unmistakably yours.',
      cards: [
        {
          title: 'Creative Direction & Event Design',
          body: 'From concept to scenography — we build the visual soul of each occasion with aesthetic precision and narrative purpose.',
        },
        {
          title: 'Production & Logistics Management',
          body: 'Flawless execution behind the scenes. Every technical element, every timeline, every partner — orchestrated invisibly.',
        },
        {
          title: 'F&B Consultancy & Catering',
          body: 'Culinary experiences designed to reflect the spirit of each event — from curated menus to immersive dining concepts with Michelin-starred chefs.',
        },
        {
          title: 'Guest Management & Protocol',
          body: 'Every guest arrives feeling like the only guest. Each touchpoint handled with quiet, unwavering excellence.',
        },
      ],
      quote:
        '"At S.P.H.E.R.E., creative vision is brought to life by a team of international professionals, each bringing expertise and global perspective. From scenography and lighting to music, textures and materials — every detail is carefully curated to reflect the unique soul of each occasion."',
    },
    concierge: {
      label: 'Concierge',
      heading1: 'A Way of Living',
      heading2: 'Into Legacy.',
      quote: '"We are the Quiet Curators\nof your lifestyle."',
      intro:
        'With absolute discretion and refined intuition, we curate access to what is rare, manage the everyday with elegance and make the extraordinary appear effortless. Whether it is a last-minute travel arrangement, a table few can book, or a moment designed for no one else but you — our approach remains the same: invisible orchestration, deeply personal care and a commitment to excellence.',
      cards: [
        {
          title: 'Business Concierge',
          body: 'Corporate hospitality, executive travel, private venue sourcing, protocol management and high-level event facilitation for discerning professionals.',
        },
        {
          title: 'Lifestyle Management',
          body: 'Lifestyle Management is a highly personalized service designed to simplify and enhance every aspect of our members’ lives.',
        },
        {
          title: 'Travel and Bespoke Experience',
          body: 'Bespoke experiences for your most valued relationships from exclusive access and curated journeys to private events that leave a lasting impression.',
        },
      ],
    },
    news: {
      label: 'News',
      line1: 'Stories &',
      line2: 'Perspectives.',
      intro:
        'Moments captured, ideas shared, and insights from the world of luxury hospitality and experiential design.',
      readMore: 'Read More →',
      articles: [
        {
          date: 'January 2026',
          category: 'Press',
          title: "Saudi Arabia Unveils the 'Dream of the Desert' Sleeper Train",
          excerpt:
            'The Kingdom launches its first ultra-luxury sleeper train — carrying 66 guests across 1,300km of desert in a journey devoted to slow travel and immersive cultural heritage.',
        },
        {
          date: 'April 2025',
          category: 'Insight',
          title: 'The Art of Invisible Orchestration',
          excerpt:
            'What makes a truly exceptional event is rarely what guests notice — it is everything they never had to think about. An exploration of our philosophy.',
        },
        {
          date: 'February 2025',
          category: 'Press',
          title: "Sphere Named Among Riyadh's Premier Hospitality Firms",
          excerpt:
            'Recognised for its distinctive approach to luxury events and concierge services, Sphere continues to set a new benchmark for elite hospitality in the Kingdom.',
        },
      ],
    },
    contact: {
      label: 'Contact',
      line1: 'Whispers of',
      line2: 'Excellence.',
      subtitle: "How we challenge conventions and redefine the standards of the world's finest experiences.",
      sentTitle: 'Your request has been received.',
      sentBody: 'A member of our team will be in touch with the discretion and care your enquiry deserves.',
      nameLabel: 'Name',
      namePlaceholder: 'Your full name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us about your enquiry...',
      privacyPrefix: 'I have read and accept the ',
      privacyLink: 'Privacy Policy',
      privacySuffix: ' and consent to the processing of my personal data.',
      sendLabel: 'Send Request',
      sendingLabel: 'Sending…',
      errorMessage: 'Something went wrong. Please try again or email us directly.',
      officeLabel: 'Office',
      officeValue: 'Riyadh, Kingdom of Saudi Arabia',
      emailColLabel: 'Email',
      followLabel: 'Follow',
    },
    stats: {
      label: 'By the Numbers',
      items: [
        'Projects Delivered',
        'Government & Corporate Clients',
        'Industries Served',
        'Guests Welcomed',
        'Countries',
        'Client Retention',
      ],
    },
    cookie: {
      ariaLabel: 'Cookie consent',
      messagePrefix:
        'We use cookies to improve your experience and analyse site traffic. By clicking Accept, you consent to our use of cookies in accordance with our ',
      privacyLink: 'Privacy Policy',
      messageSuffix: '.',
      decline: 'Decline',
      accept: 'Accept',
    },
    scrollTopAriaLabel: 'Back to top',
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: June 2025',
      back: '← Back',
      returnToSphere: '← Return to Sphere',
      s1Title: '1. Data Controller',
      s1Body1:
        'Sphere Event and Hospitality LLC, headquartered in Riyadh, Kingdom of Saudi Arabia («Sphere», «we», «us»), is the data controller of personal data collected through this website.',
      s1Body2: 'For any privacy-related enquiry, please contact us at:',
      s2Title: '2. Data We Collect',
      s2Intro: 'When you submit our contact form, we collect:',
      s2Items: ['Full name', 'Email address', 'Message content'],
      s2Outro: 'We do not collect sensitive personal data (racial origin, political opinions, health data, etc.).',
      s3Title: '3. Purpose and Legal Basis',
      s3PurposeHeader: 'Purpose',
      s3BasisHeader: 'Legal Basis (GDPR Art. 6)',
      s3Rows: [
        ['Responding to enquiries', 'Pre-contractual measures (Art. 6(1)(b))'],
        ['Analytics & site improvement', 'Legitimate interest (Art. 6(1)(f)) — only with cookie consent'],
        ['Legal obligations', 'Legal obligation (Art. 6(1)(c))'],
      ],
      s4Title: '4. Data Retention',
      s4Body:
        'We retain contact form data for a maximum of 24 months from the date of submission, or for as long as necessary to fulfil the purpose for which it was collected. After that period, data is securely deleted.',
      s5Title: '5. Your Rights (GDPR)',
      s5Intro: 'If you are located in the European Economic Area, you have the right to:',
      s5Items: [
        'Access the personal data we hold about you',
        'Request rectification of inaccurate data',
        'Request erasure ("right to be forgotten")',
        'Object to or restrict processing',
        'Data portability',
        'Withdraw consent at any time (where processing is based on consent)',
        'Lodge a complaint with your local supervisory authority',
      ],
      s5Outro: 'To exercise any of these rights, contact us at info@sphere.com.sa. We will respond within 30 days.',
      s6Title: '6. Cookies',
      s6Intro: 'This website may use cookies to improve functionality and analyse traffic. We distinguish between:',
      s6Essential: 'Essential cookies',
      s6EssentialBody: '— required for the site to function correctly. No consent required.',
      s6Analytics: 'Analytics cookies',
      s6AnalyticsBody:
        '— used to understand how visitors interact with the site. Activated only after you provide explicit consent via the cookie banner.',
      s6Outro:
        "You can withdraw your cookie consent at any time by clearing your browser's local storage or cookies for this domain. Your preference will be forgotten and the banner will reappear on your next visit.",
      s7Title: '7. Third Parties',
      s7Body:
        'We do not sell, rent or share your personal data with third parties for marketing purposes. We may engage trusted service providers (e.g. hosting, email delivery) who process data solely on our behalf under strict data processing agreements.',
      s8Title: '8. Changes to this Policy',
      s8Body:
        'We reserve the right to update this Privacy Policy at any time. Material changes will be communicated via a notice on our website. Continued use of the site after changes constitutes acceptance of the revised policy.',
    },
  },
  ar: {
    nav: {
      about: 'من نحن',
      events: 'الفعاليات',
      concierge: 'الكونسيرج',
      news: 'الأخبار',
      contact: 'تواصل',
      enquire: 'استفسار',
      menuAriaLabel: 'القائمة',
    },
    footer: {
      privacy: 'سياسة الخصوصية',
      instagramAriaLabel: 'سفير على إنستغرام',
    },
    switcher: {
      ariaLabel: 'تغيير اللغة',
    },
    hero: {
      line1: 'اسمٌ يعكس',
      line2: 'التزامنا',
      line3: 'بالتميّز.',
      quoteLine1: '"نحن سادة الحياة الراقية',
      quoteLine2: 'وهامسو التميّز."',
    },
    about: {
      label: 'من نحن',
      intro:
        'لا حواف لسفير S.P.H.E.R.E.، ولا نقاط ضعف، ولا تراتبية. إنها تجسّد الاكتمال والتوازن والوحدة: القيم التي تحدد كيفية عملنا وخدمتنا. فكل شيء داخل الكرة متصل، ولكل اتصال قيمته.',
      philosophyLabel: 'فلسفتنا',
      philosophyLine1: 'حيث تلتقي الضيافة',
      philosophyLine2: 'بالتأثير.',
      philosophyBody:
        'ننسّق تجارب استثنائية للأفراد المميزين والعلامات التجارية العالمية والمؤسسات ذات الرؤية. من خلال الجمع بين التميّز التشغيلي والتصميم المدروس، نحوّل كل تفاعل إلى تجربة ذات معنى.',
      heritageLabel: 'الإرث',
      heritageLine1: 'أناقة صُنعت',
      heritageLine2: 'في إيطاليا، ومتجذرة',
      heritageLine3: 'في ثقافة المملكة.',
      heritageBody:
        'يجمع سفير بين الأناقة الخالدة والذوق الرفيع لإيطاليا ولمسة سعودية أصيلة — لخلق تجارب تحمل طابعاً عالمياً وهوية محلية عميقة في آنٍ واحد.',
      kingdomLabel: 'المملكة',
      kingdomQuote:
        '"ما يميّزنا هو فهمنا العميق للثقافة والتقاليد والتطلعات السعودية. نحن لا نعمل في المنطقة فحسب، بل نحن جزء منها."',
      kingdomBody:
        'مستلهمين من التصميم الإيطالي والحرفية والاهتمام بالتفاصيل، نصمّم فعاليات تجمع بين الأناقة والتوازن والرقي البديهي. هذا المزيج يتيح لنا تقديم فعاليات لافتة بصرياً، ومتوافقة ثقافياً، ومُنفّذة بلا تقصير.',
    },
    events: {
      label: 'الفعاليات',
      line1: 'الفعاليات و',
      line2: 'الضيافة الراقية.',
      tagline: 'لمسة من الجمال',
      intro:
        'يقدّم سفير مجموعة من الخدمات التي تتكيّف برشاقة مع حجم كل مناسبة وروحها. كل تفصيل مدروس بعناية، له تأثير هادئ، ويحمل بصمتكم الخاصة بلا شك.',
      cards: [
        {
          title: 'الإخراج الإبداعي وتصميم الفعاليات',
          body: 'من الفكرة إلى السينوغرافيا — نبني الروح البصرية لكل مناسبة بدقة جمالية وهدف سردي.',
        },
        {
          title: 'إدارة الإنتاج واللوجستيات',
          body: 'تنفيذ لا تشوبه شائبة خلف الكواليس. كل عنصر تقني، وكل جدول زمني، وكل شريك — يُنسَّق بسلاسة لا تُرى.',
        },
        {
          title: 'استشارات الأغذية والمشروبات وخدمات الضيافة',
          body: 'تجارب طهي مصممة لتعكس روح كل فعالية — من القوائم المنتقاة بعناية إلى مفاهيم تناول الطعام الغامرة مع طهاة حائزين على نجوم ميشلان.',
        },
        {
          title: 'إدارة الضيوف والبروتوكول',
          body: 'كل ضيف يصل وكأنه الضيف الوحيد. كل لحظة تواصل تُدار بتميّز هادئ لا يتزعزع.',
        },
      ],
      quote:
        '"في سفير، تتجسّد الرؤية الإبداعية على يد فريق من المحترفين الدوليين، يجمع كل منهم بين الخبرة والمنظور العالمي. من السينوغرافيا والإضاءة إلى الموسيقى والملمس والمواد — يُختار كل تفصيل بعناية ليعكس الروح الفريدة لكل مناسبة."',
    },
    concierge: {
      label: 'الكونسيرج',
      heading1: 'أسلوب حياة',
      heading2: 'يتحوّل إلى إرث.',
      quote: '"نحن القيّمون الصامتون\nعلى أسلوب حياتكم."',
      intro:
        'بتكتم مطلق وحدس رفيع، ننسّق الوصول إلى ما هو نادر، وندير التفاصيل اليومية بأناقة، ونجعل الاستثنائي يبدو بلا جهد. سواء كان ترتيب سفر في اللحظة الأخيرة، أو طاولة يصعب حجزها، أو لحظة صُمِّمت لكم وحدكم — نهجنا يبقى واحداً: تنسيق غير مرئي، وعناية شخصية عميقة، والتزام بالتميّز.',
      cards: [
        {
          title: 'كونسيرج الأعمال',
          body: 'ضيافة الشركات، وتنظيم السفر التنفيذي، والبحث عن الأماكن الخاصة، وإدارة البروتوكول، وتيسير الفعاليات رفيعة المستوى للمهنيين المميزين.',
        },
        {
          title: 'إدارة أسلوب الحياة',
          body: 'إدارة أسلوب الحياة هي خدمة شخصية بامتياز، صُمِّمت لتبسيط كل جانب من جوانب حياة أعضائنا والارتقاء به.',
        },
        {
          title: 'السفر والتجارب المصممة خصيصاً',
          body: 'تجارب مصممة خصيصاً لأهم علاقاتكم — من الوصول الحصري والرحلات المنتقاة بعناية إلى الفعاليات الخاصة التي تترك انطباعاً لا يُنسى.',
        },
      ],
    },
    news: {
      label: 'الأخبار',
      line1: 'قصص و',
      line2: 'رؤى.',
      intro: 'لحظات موثقة، وأفكار مشتركة، ورؤى من عالم الضيافة الفاخرة والتصميم التجريبي.',
      readMore: 'اقرأ المزيد ←',
      articles: [
        {
          date: 'يناير 2026',
          category: 'صحافة',
          title: "السعودية تكشف عن قطار النوم 'حلم الصحراء'",
          excerpt:
            'تُطلق المملكة أول قطار نوم فائق الفخامة، ينقل 66 ضيفاً عبر 1300 كيلومتر من الصحراء في رحلة مكرّسة للسفر البطيء والتراث الثقافي الغامر.',
        },
        {
          date: 'أبريل 2025',
          category: 'رؤى',
          title: 'فن التنسيق غير المرئي',
          excerpt:
            'ما يجعل الفعالية استثنائية حقاً نادراً ما يكون ما يلاحظه الضيوف، بل كل ما لم يضطروا للتفكير فيه إطلاقاً. استكشاف لفلسفتنا.',
        },
        {
          date: 'فبراير 2025',
          category: 'صحافة',
          title: "سفير ضمن أبرز شركات الضيافة في الرياض",
          excerpt:
            'تقديراً لنهجها المتميز في الفعاليات الفاخرة وخدمات الكونسيرج، يواصل سفير ترسيخ معيار جديد للضيافة الراقية في المملكة.',
        },
      ],
    },
    contact: {
      label: 'تواصل',
      line1: 'همسات',
      line2: 'التميّز.',
      subtitle: 'كيف نتحدى الأعراف السائدة، ونعيد تعريف معايير أرقى التجارب في العالم.',
      sentTitle: 'تم استلام طلبكم.',
      sentBody: 'سيتواصل معكم أحد أعضاء فريقنا بما يليق باستفساركم من تكتم وعناية.',
      nameLabel: 'الاسم',
      namePlaceholder: 'اسمك الكامل',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'الرسالة',
      messagePlaceholder: 'أخبرونا عن استفساركم...',
      privacyPrefix: 'لقد قرأت ووافقت على ',
      privacyLink: 'سياسة الخصوصية',
      privacySuffix: ' وأوافق على معالجة بياناتي الشخصية.',
      sendLabel: 'إرسال الطلب',
      sendingLabel: 'جارٍ الإرسال…',
      errorMessage: 'حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة عبر البريد الإلكتروني.',
      officeLabel: 'المكتب',
      officeValue: 'الرياض، المملكة العربية السعودية',
      emailColLabel: 'البريد الإلكتروني',
      followLabel: 'تابعونا',
    },
    stats: {
      label: 'بالأرقام',
      items: [
        'مشروع منجز',
        'عملاء حكوميون ومؤسسيون',
        'قطاعات نخدمها',
        'ضيف استقبلناهم',
        'دولة',
        'معدل الاحتفاظ بالعملاء',
      ],
    },
    cookie: {
      ariaLabel: 'إشعار ملفات تعريف الارتباط',
      messagePrefix:
        'نستخدم ملفات تعريف الارتباط (الكوكيز) لتحسين تجربتكم وتحليل حركة الزيارات على الموقع. بالنقر على «قبول»، فإنكم توافقون على استخدامنا لملفات تعريف الارتباط بموجب ',
      privacyLink: 'سياسة الخصوصية',
      messageSuffix: '.',
      decline: 'رفض',
      accept: 'قبول',
    },
    scrollTopAriaLabel: 'العودة إلى الأعلى',
    privacy: {
      title: 'سياسة الخصوصية',
      lastUpdated: 'آخر تحديث: يونيو 2025',
      back: '→ رجوع',
      returnToSphere: '→ العودة إلى سفير',
      s1Title: '1. جهة التحكم بالبيانات',
      s1Body1:
        'شركة سفير لتنظيم الفعاليات والضيافة ذ.م.م، ومقرها الرئيسي في الرياض، المملكة العربية السعودية («سفير»، «نحن»)، هي الجهة المتحكمة بالبيانات الشخصية التي يتم جمعها من خلال هذا الموقع.',
      s1Body2: 'لأي استفسار يتعلق بالخصوصية، يرجى التواصل معنا عبر:',
      s2Title: '2. البيانات التي نجمعها',
      s2Intro: 'عند إرسال نموذج التواصل، نقوم بجمع:',
      s2Items: ['الاسم الكامل', 'البريد الإلكتروني', 'محتوى الرسالة'],
      s2Outro: 'لا نقوم بجمع بيانات شخصية حساسة (كالأصل العرقي، الآراء السياسية، البيانات الصحية، وغيرها).',
      s3Title: '3. الغرض والأساس القانوني',
      s3PurposeHeader: 'الغرض',
      s3BasisHeader: 'الأساس القانوني (المادة 6 من اللائحة العامة لحماية البيانات)',
      s3Rows: [
        ['الرد على الاستفسارات', 'إجراءات ما قبل التعاقد (المادة 6(1)(ب))'],
        ['التحليلات وتحسين الموقع', 'المصلحة المشروعة (المادة 6(1)(و)) — فقط بموافقة على ملفات تعريف الارتباط'],
        ['الالتزامات القانونية', 'التزام قانوني (المادة 6(1)(ج))'],
      ],
      s4Title: '4. الاحتفاظ بالبيانات',
      s4Body:
        'نحتفظ ببيانات نموذج التواصل لمدة أقصاها 24 شهراً من تاريخ الإرسال، أو للمدة اللازمة لتحقيق الغرض الذي جُمعت من أجله. وبعد تلك المدة، يتم حذف البيانات بشكل آمن.',
      s5Title: '5. حقوقكم (اللائحة العامة لحماية البيانات)',
      s5Intro: 'إذا كنتم مقيمين في المنطقة الاقتصادية الأوروبية، يحق لكم:',
      s5Items: [
        'الاطلاع على البيانات الشخصية التي نحتفظ بها عنكم',
        'طلب تصحيح البيانات غير الدقيقة',
        'طلب المحو ("الحق في النسيان")',
        'الاعتراض على المعالجة أو تقييدها',
        'نقل البيانات',
        'سحب الموافقة في أي وقت (عندما تكون المعالجة قائمة على الموافقة)',
        'تقديم شكوى لدى الجهة الرقابية المحلية',
      ],
      s5Outro: 'لممارسة أي من هذه الحقوق، تواصلوا معنا عبر info@sphere.com.sa. سنقوم بالرد خلال 30 يوماً.',
      s6Title: '6. ملفات تعريف الارتباط',
      s6Intro: 'قد يستخدم هذا الموقع ملفات تعريف الارتباط لتحسين الوظائف وتحليل حركة الزيارات. نميّز بين:',
      s6Essential: 'ملفات تعريف الارتباط الأساسية',
      s6EssentialBody: '— ضرورية لعمل الموقع بشكل صحيح. لا تتطلب موافقة.',
      s6Analytics: 'ملفات تعريف الارتباط التحليلية',
      s6AnalyticsBody:
        '— تُستخدم لفهم كيفية تفاعل الزوار مع الموقع. تُفعَّل فقط بعد موافقتكم الصريحة عبر إشعار ملفات تعريف الارتباط.',
      s6Outro:
        'يمكنكم سحب موافقتكم على ملفات تعريف الارتباط في أي وقت عن طريق مسح التخزين المحلي لمتصفحكم أو ملفات تعريف الارتباط الخاصة بهذا النطاق. سيتم نسيان تفضيلكم وسيظهر الإشعار مجدداً عند زيارتكم القادمة.',
      s7Title: '7. الأطراف الثالثة',
      s7Body:
        'لا نقوم ببيع أو تأجير أو مشاركة بياناتكم الشخصية مع أطراف ثالثة لأغراض تسويقية. قد نستعين بمزودي خدمات موثوقين (مثل الاستضافة وتسليم البريد الإلكتروني) يقومون بمعالجة البيانات نيابة عنا فقط بموجب اتفاقيات صارمة لمعالجة البيانات.',
      s8Title: '8. التغييرات على هذه السياسة',
      s8Body:
        'نحتفظ بالحق في تحديث سياسة الخصوصية هذه في أي وقت. سيتم إبلاغكم بأي تغييرات جوهرية عبر إشعار على موقعنا. يُعد استمراركم في استخدام الموقع بعد إجراء التغييرات بمثابة قبول للسياسة المعدّلة.',
    },
  },
}

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'en' || saved === 'ar') setLocaleState(saved)
    } catch {
      // localStorage unavailable (private browsing, SSR)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.classList.toggle('lang-ar', locale === 'ar')
  }, [locale])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // localStorage unavailable (private browsing, SSR)
    }
  }

  const value: LanguageContextValue = {
    locale,
    setLocale,
    t: translations[locale],
    dir: locale === 'ar' ? 'rtl' : 'ltr',
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
