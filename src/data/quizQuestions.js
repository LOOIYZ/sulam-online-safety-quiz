/**
 * Bilingual quiz questions based directly on the WIX2001 SULAM BOOTCAMP / PPR PANTAI RIA BLOK C presentation:
 * "Online Safety & AI Deepfake Awareness (Keselamatan Dalam Talian & Kesedaran Deepfake AI)"
 * Motto: "Berhenti, Semak, Lapor — Stop, Check, Report | NSRC 997"
 */

export const quizQuestions = [
  {
    id: 1,
    category: "statistics",
    categoryLabel: {
      ms: "Statistik & Realiti",
      en: "Statistics & Reality"
    },
    slideRef: "Slide 2: Scams Hit Close to Home",
    scenarioType: "stat_card",
    question: {
      ms: "Berdasarkan statistik rasmi jenayah penipuan di Malaysia, berapakah jumlah kerugian akibat scam yang direkodkan pada tahun 2025 sahaja?",
      en: "Based on official scam statistics in Malaysia, what was the total financial loss recorded due to scams in 2025 alone?"
    },
    options: [
      { id: "a", text: { ms: "RM 50 Juta", en: "RM 50 Million" }, isCorrect: false },
      { id: "b", text: { ms: "RM 500 Juta", en: "RM 500 Million" }, isCorrect: false },
      { id: "c", text: { ms: "RM 2.97 Bilion", en: "RM 2.97 Billion" }, isCorrect: true },
      { id: "d", text: { ms: "RM 10.9 Bilion", en: "RM 10.9 Billion" }, isCorrect: false }
    ],
    explanation: {
      ms: "Tepat sekali! Pada tahun 2025 sahaja, rakyat Malaysia kehilangan RM2.97 Bilion dalam lebih 66,000 kes. Hanya RM10.9 Juta yang berjaya dipulihkan melalui mahkamah. Ini membuktikan pencegahan adalah pertahanan terbaik!",
      en: "Correct! In 2025 alone, Malaysians lost RM2.97 Billion across 66,000+ online fraud cases. Only RM10.9M was recovered via courts. This proves that prevention is always better than recovery!"
    },
    keyTip: {
      ms: "Pencegahan adalah pertahanan terbaik — Prevention beats recovery.",
      en: "Prevention beats recovery — Stop, Check, Report before taking any financial action."
    }
  },
  {
    id: 2,
    category: "fake_authority",
    categoryLabel: {
      ms: "Panggilan Palsu",
      en: "Fake Authority Calls"
    },
    slideRef: "Slide 3: Panggilan Palsu / Fake Authority Calls",
    scenarioType: "call_mockup",
    scenarioData: {
      callerName: "Inspektor Daniel - Ibu Pejabat Polis Bukit Aman",
      dialogue: "Akaun Encik terlibat kes penggubahan wang haram! Waran tangkap telah dikeluarkan. Pindahkan RM3,500 ke akaun audit sementara sekarang dan berikan nombor OTP untuk semakan!",
      urgency: "Mendesak / 10 Minit Sahaja"
    },
    question: {
      ms: "Anda menerima panggilan yang mendakwa dari PDRM atau LHDN, mengugut waran tangkap dan meminta pindahan wang segera serta kod TAC/OTP. Apakah tindakan yang wajar?",
      en: "You receive a call claiming to be from PDRM or LHDN, threatening an arrest warrant and demanding an immediate money transfer along with your TAC/OTP. What should you do?"
    },
    options: [
      { id: "a", text: { ms: "Pindahkan separuh wang dahulu dan berikan OTP", en: "Transfer half the amount first and share the OTP" }, isCorrect: false },
      { id: "b", text: { ms: "Letak telefon serta-merta! Polis & bank sebenar TIDAK PERNAH meminta OTP atau pindahan wang melalui telefon", en: "Hang up immediately! Real police & banks NEVER ask for OTP or money transfers over the phone" }, isCorrect: true },
      { id: "c", text: { ms: "Minta diskaun wang jaminan daripada pemanggil", en: "Ask the caller for a discount on the bail amount" }, isCorrect: false },
      { id: "d", text: { ms: "Ikut semua arahan kerana takut akaun dibekukan", en: "Follow all instructions out of fear of account freezing" }, isCorrect: false }
    ],
    explanation: {
      ms: "PDRM, LHDN, JPJ, atau Mahkamah TIDAK PERNAH membuat panggilan untuk meminta pindahan wang ke akaun peribadi/audit atau meminta kod OTP. Taktik takut dan desakan masa adalah ciri utama scammer!",
      en: "PDRM, LHDN, JPJ, and Courts NEVER call citizens to demand fund transfers to third-party accounts or request OTP codes. Fear tactics and false urgency are classic scam hallmarks!"
    },
    keyTip: {
      ms: "Ingat: Polis & bank sebenar TIDAK pernah meminta OTP atau pindahan wang melalui telefon.",
      en: "Remember: Real police & banks NEVER ask for OTP or money transfers over the phone."
    }
  },
  {
    id: 3,
    category: "apk_scam",
    categoryLabel: {
      ms: "Bungkusan Palsu & APK",
      en: "Fake Parcel & APK Scam"
    },
    slideRef: "Slide 4: Bungkusan Palsu / Fake Parcel APK",
    scenarioType: "sms_apk_mockup",
    scenarioData: {
      sender: "+91 99498 56841 / PosLaju Notice",
      filename: "PosLaju_Tracking.apk",
      filesize: "4.7 MB",
      message: "Bungkusan anda tersangkut di cawangan. Sila muat turun dan pasang aplikasi PosLaju_Tracking.apk untuk semak status dan bayar caj pelepasan RM2.50."
    },
    question: {
      ms: "Anda menerima mesej WhatsApp/SMS mengenai bungkusan atau bil elektrik tertunggak dengan fail lampiran bernama 'PosLaju_Tracking.apk' atau 'Electricity_bill_update.apk'. Mengapakah fail APK ini sangat BERBAHAYA?",
      en: "You get a WhatsApp/SMS regarding a parcel or overdue electric bill with an attached file named 'PosLaju_Tracking.apk' or 'Electricity_bill_update.apk'. Why is this APK file extremely DANGEROUS?"
    },
    options: [
      { id: "a", text: { ms: "Ia hanya memakan ruang memori telefon pintar anda", en: "It simply takes up storage space on your smartphone" }, isCorrect: false },
      { id: "b", text: { ms: "Fail APK ini mencuri mesej SMS, butiran log masuk perbankan & kod OTP anda", en: "This APK file steals your SMS messages, banking login credentials & OTP codes" }, isCorrect: true },
      { id: "c", text: { ms: "Ia menukar nada dering telefon anda tanpa kebenaran", en: "It changes your phone ringtone without permission" }, isCorrect: false },
      { id: "d", text: { ms: "Tiada bahaya kerana ia dihantar menggunakan logo rasmi", en: "There is no danger because it carries an official logo" }, isCorrect: false }
    ],
    explanation: {
      ms: "APK adalah aplikasi Android yang tidak disahkan dari Google Play Store. Apabila dipasang, malware ini akan membaca SMS anda (termasuk TAC/OTP bank) dan menghantar kata laluan anda terus kepada scammer!",
      en: "APK files from outside Google Play Store are untrusted. Once installed, this spyware reads your SMS messages (intercepting bank OTPs/TACs) and forwards your credentials directly to fraudsters!"
    },
    keyTip: {
      ms: "JANGAN MUAT TURUN / NEVER INSTALL fail .apk dari SMS atau WhatsApp. Padam mesej serta-merta!",
      en: "NEVER INSTALL .apk files from SMS or WhatsApp. Delete the message immediately!"
    }
  },
  {
    id: 4,
    category: "phone_clinic",
    categoryLabel: {
      ms: "Klinik Telefon Pintar",
      en: "Phone Clinic Settings"
    },
    slideRef: "Slide 4 & 12: Phone Clinic - Block Unknown Apps",
    scenarioType: "settings_toggle",
    question: {
      ms: "Di bawah program 'Klinik Telefon' SULAM, apakah langkah perlindungan teknikal yang disarankan untuk disekat (block) pada setiap telefon Android penduduk?",
      en: "Under the SULAM 'Phone Clinic' program, what critical protection setting should be blocked/disabled on every resident's Android smartphone?"
    },
    options: [
      { id: "a", text: { ms: "Sekat tetapan 'Install Unknown Apps' (Pasang Apl Tidak Diketahui)", en: "Block/disable 'Install Unknown Apps' setting" }, isCorrect: true },
      { id: "b", text: { ms: "Matikan sambungan Wi-Fi dan Bluetooth setiap hari", en: "Turn off Wi-Fi and Bluetooth connections permanently" }, isCorrect: false },
      { id: "c", text: { ms: "Nyahpasang (uninstall) aplikasi WhatsApp", en: "Uninstall the WhatsApp application completely" }, isCorrect: false },
      { id: "d", text: { ms: "Padam semua nombor telefon keluarga dalam senarai kenalan", en: "Delete all family contact numbers" }, isCorrect: false }
    ],
    explanation: {
      ms: "Dengan mematikan kebenaran 'Install Unknown Apps', telefon Android anda tidak akan membenarkan fail APK berbahaya dipasang dari WhatsApp, Telegram atau pelayar web secara sengaja atau tidak sengaja.",
      en: "By disabling 'Install Unknown Apps', your Android device refuses to install harmful APKs downloaded via WhatsApp, Telegram, or browsers, preventing malware infections."
    },
    keyTip: {
      ms: "Pergi ke Tetapan > Keselamatan > Sekat 'Install Unknown Apps' dan aktifkan WhatsApp 2-Factor Authentication (2FA).",
      en: "Go to Settings > Security > Block 'Install Unknown Apps' and turn on WhatsApp 2-Factor Authentication (2FA)."
    }
  },
  {
    id: 5,
    category: "phishing",
    categoryLabel: {
      ms: "Semak Pautan (Phishing)",
      en: "Check Links First (Phishing)"
    },
    slideRef: "Slide 5: Semak Pautan / Check Links First",
    scenarioType: "url_inspector",
    scenarioData: {
      target: "Portal Bantuan Kerajaan",
      links: [
        { url: "https://www.ekasih.gov.my", label: "Pilihan A", status: "real" },
        { url: "https://bantuan-tunai-gov.xyz/login", label: "Pilihan B", status: "fake" },
        { url: "https://maybank2u-verify.top/login", label: "Pilihan C", status: "fake" },
        { url: "https://bantu4n-may-terkin1-c75rcvg.vercel.app", label: "Pilihan D", status: "fake" }
      ]
    },
    question: {
      ms: "Antara pautan (URL) berikut, manakah pautan yang SAH dan RASMI untuk portal bantuan kerajaan Malaysia?",
      en: "Among the following links (URLs), which one is LEGITIMATE and OFFICIAL for a Malaysian government aid portal?"
    },
    options: [
      { id: "a", text: { ms: "bantuan-tunai-gov.xyz/login", en: "bantuan-tunai-gov.xyz/login" }, isCorrect: false },
      { id: "b", text: { ms: "https://www.ekasih.gov.my", en: "https://www.ekasih.gov.my" }, isCorrect: true },
      { id: "c", text: { ms: "maybank2u-verify.top/login", en: "maybank2u-verify.top/login" }, isCorrect: false },
      { id: "d", text: { ms: "bantu4n-may-terkin1-c75rcvg.vercel.app/2", en: "bantu4n-may-terkin1-c75rcvg.vercel.app/2" }, isCorrect: false }
    ],
    explanation: {
      ms: "Portal rasmi agensi kerajaan Malaysia sentiasa menggunakan akhiran domain '.gov.my' (seperti www.ekasih.gov.my atau bantuantunai.hasil.gov.my). Domain pelik seperti .xyz, .top, .online, atau vercel.app adalah laman penipuan!",
      en: "Official Malaysian government portals ALWAYS end with '.gov.my' (such as www.ekasih.gov.my or bantuantunai.hasil.gov.my). Suspicious suffixes like .xyz, .top, .online, or vercel.app are phishing traps!"
    },
    keyTip: {
      ms: "Sentiasa semak akhiran rasmi .gov.my atau .com.my sebelum memasukkan sebarang maklumat peribadi.",
      en: "Always check the official .gov.my or .com.my domain suffix before entering sensitive credentials."
    }
  },
  {
    id: 6,
    category: "fake_str",
    categoryLabel: {
      ms: "Kes Sebenar: Pautan STR Palsu",
      en: "Real Case: Fake STR Phishing"
    },
    slideRef: "Slide 6 & 7: AWAS! Pautan STR Palsu & Facebook Ads",
    scenarioType: "telegram_phish_mockup",
    scenarioData: {
      headline: "SEMAKAN STATUS KELAYAKAN PENERIMA STR FASA 1 2026",
      posterDomain: "bantuanonline.my",
      actualLink: "https://register.ntfy-my.online/str",
      telegramTrap: "Sila masukkan nombor telefon dan kod pengesahan login Telegram 5-digit anda untuk semak kelayakan."
    },
    question: {
      ms: "Anda terjumpa iklan tajaan (Sponsored) di media sosial mengenai 'Semak Bantuan RM1200 Penerima STR'. Apabila diklik, laman tersebut meminta anda memasukkan kod SMS 5-digit Telegram. Apakah yang sebenarnya cuba dilakukan oleh scammer?",
      en: "You encounter a Sponsored post on social media regarding 'Check RM1200 STR Cash Aid'. Clicking it opens a webpage asking for your 5-digit Telegram login SMS code. What are the scammers actually trying to do?"
    },
    options: [
      { id: "a", text: { ms: "Mengesahkan kelayakan akaun Telegram anda untuk menerima wang bantuan", en: "Verifying your Telegram account eligibility to receive cash aid" }, isCorrect: false },
      { id: "b", text: { ms: "Merampas akaun Telegram anda untuk menipu kenalan dan keluarga anda meminta pinjaman wang", en: "Hijacking your Telegram account to impersonate you and scam your friends/family for money" }, isCorrect: true },
      { id: "c", text: { ms: "Menghantar mesej tahniah secara automatik melalui Telegram", en: "Automatically sending congratulations messages through Telegram" }, isCorrect: false },
      { id: "d", text: { ms: "Mendaftar anda ke dalam kumpulan kebajikan penduduk PPR", en: "Registering you into a PPR residents community welfare group" }, isCorrect: false }
    ],
    explanation: {
      ms: "Ini adalah taktik 'Telegram Hijack'. Kod 5-digit yang dihantar melalui SMS adalah kod log masuk rasmi akaun Telegram anda. Jika anda memasukkannya ke laman web scammer, mereka akan mengambil alih akaun anda dan menipu semua kenalan anda!",
      en: "This is a notorious 'Telegram Hijack' trap. The 5-digit code is your official Telegram login session code. Entering it gives the scammer full remote control of your Telegram account to impersonate you and solicit money from loved ones!"
    },
    keyTip: {
      ms: "Perangkap Kod OTP: Jangan sesekali masukkan kod login Telegram pada mana-mana laman web luaran!",
      en: "OTP Trap: Never enter your Telegram or banking login OTP codes on external websites!"
    }
  },
  {
    id: 7,
    category: "telegram_recovery",
    categoryLabel: {
      ms: "Tindakan Pantas Telegram",
      en: "Emergency Telegram Action"
    },
    slideRef: "Slide 6: Berhenti, Semak, Lapor - Telegram Compromised",
    scenarioType: "instruction_steps",
    question: {
      ms: "Jika seorang jiran atau ahli keluarga secara tidak sengaja telah menekan pautan STR palsu dan memasukkan kod Telegram mereka, apakah langkah kecemasan segera yang PERLU diambil di aplikasi Telegram?",
      en: "If a neighbour or family member accidentally tapped a fake STR link and submitted their Telegram code, what immediate emergency action MUST be performed inside Telegram?"
    },
    options: [
      { id: "a", text: { ms: "Padam aplikasi Telegram daripada telefon dan beli telefon baru", en: "Delete Telegram from the phone and purchase a new device" }, isCorrect: false },
      { id: "b", text: { ms: "Buka Telegram > Settings > Devices > Tekan 'Terminate All Other Sessions' dan hubungi NSRC 997", en: "Open Telegram > Settings > Devices > Tap 'Terminate All Other Sessions' and call NSRC 997" }, isCorrect: true },
      { id: "c", text: { ms: "Tunggu 3 hari untuk akaun dibersihkan secara automatik", en: "Wait 3 days for the account to automatically cleanse itself" }, isCorrect: false },
      { id: "d", text: { ms: "Hantar mesej ke semua grup meminta jangan balas mesej", en: "Spam all chat groups asking everyone not to reply" }, isCorrect: false }
    ],
    explanation: {
      ms: "Menekan 'Terminate All Other Sessions' dalam tetapan Devices akan menendang keluar semua peranti scammer yang sedang mengintip atau mengawal akaun anda secara serta-merta!",
      en: "Tapping 'Terminate All Other Sessions' under Devices instantly kicks out any unauthorized scammer sessions logged into your account, stopping the hijack in its tracks!"
    },
    keyTip: {
      ms: "Laluan Kecemasan: Telegram > Settings > Devices > Terminate All Other Sessions & dail NSRC 997.",
      en: "Emergency Path: Telegram > Settings > Devices > Terminate All Other Sessions & dial NSRC 997."
    }
  },
  {
    id: 8,
    category: "deepfake_ai",
    categoryLabel: {
      ms: "Ancaman Baru: Deepfake AI",
      en: "New Threat: Deepfake AI"
    },
    slideRef: "Slide 8: Deepfake AI / Suara & Wajah Palsu",
    scenarioType: "audio_clone_slider",
    scenarioData: {
      durationSeconds: 10,
      source: "Klip video TikTok / Instagram Reels awam"
    },
    question: {
      ms: "Berapa lamakah rakaman audio suara seseorang di media sosial (seperti video TikTok, Reels, atau status suara) yang diperlukan oleh teknologi AI masa kini untuk mengklon suara mereka?",
      en: "How many seconds of someone's social media voice recording (such as a TikTok, Reel, or voice status) is required by modern AI tools to clone their voice?"
    },
    options: [
      { id: "a", text: { ms: "Sekurang-kurangnya 24 jam rakaman audio studio", en: "At least 24 hours of high-quality studio audio" }, isCorrect: false },
      { id: "b", text: { ms: "Kira-kira 2 hingga 3 minggu analisis suara", en: "Approximately 2 to 3 weeks of voice sample training" }, isCorrect: false },
      { id: "c", text: { ms: "Hanya 10 saat sahaja sudah mencukupi!", en: "As little as 10 seconds is already enough!" }, isCorrect: true },
      { id: "d", text: { ms: "Teknologi AI belum boleh meniru suara manusia", en: "AI technology cannot clone human voices yet" }, isCorrect: false }
    ],
    explanation: {
      ms: "Mengejutkan tetapi benar! Dengan kemajuan AI terkini, audio pendek selama 10 saat dari video TikTok atau Instagram sudah memadai untuk menjana klon suara tiruan yang amat meyakinkan.",
      en: "Shocking but real! With modern generative voice cloning, a mere 10-second audio clip scraped from social media is sufficient to clone a loved one's voice convincingly."
    },
    keyTip: {
      ms: "10 Saat / 10 Seconds: Klip audio pendek di media sosial sudah cukup untuk mengklon suara.",
      en: "10 Seconds: Short social media audio clips are already enough to clone a human voice."
    }
  },
  {
    id: 9,
    category: "deepfake_signs",
    categoryLabel: {
      ms: "Mengenal Pasti Deepfake",
      en: "Spotting Deepfake Calls"
    },
    slideRef: "Slide 8: Kecemasan Palsu & Tanda Video",
    scenarioType: "video_call_simulation",
    scenarioData: {
      scenarioTitle: "Panggilan Video Cemas daripada Rakan / Anak",
      redFlags: [
        "Slight lip lag (pergerakan bibir tidak selaras dengan suara)",
        "Cerita kecemasan: Kemalangan, ditahan polis, atau dompet hilang",
        "Meminta pindahan ke akaun bank pihak ketiga yang tidak dikenali"
      ]
    },
    question: {
      ms: "Anda menerima panggilan video atau suara daripada 'ahli keluarga' dalam keadaan cemas menangis meminta pindahan wang RM1,500 ke nombor akaun bank asing. Apakah 'tanda amaran' (red flag) dan tindakan terbaik anda?",
      en: "You receive a video or voice call from a 'family member' crying urgently for an RM1,500 transfer to an unfamiliar bank account. What is the key red flag and your best response?"
    },
    options: [
      { id: "a", text: { ms: "Tanda merah: Lip-sync bibir tak seimbang & akaun pihak ketiga. Tindakan: Letak telefon dan dail nombor biasa mereka untuk pengesahan", en: "Red flag: Lip lag & unfamiliar bank account. Action: Hang up and call their usual phone number to verify" }, isCorrect: true },
      { id: "b", text: { ms: "Pindahkan wang dengan segera kerana tidak sanggup melihat mereka menangis", en: "Transfer immediately because you cannot bear to hear them crying" }, isCorrect: false },
      { id: "c", text: { ms: "Minta mereka hantar swafoto (selfie) memegang kad pengenalan", en: "Ask them to send a selfie holding their identity card" }, isCorrect: false },
      { id: "d", text: { ms: "Abaikan sahaja dan sekat nombor telefon anak tersebut selamanya", en: "Ignore and permanently block your child's phone number" }, isCorrect: false }
    ],
    explanation: {
      ms: "Tanda amaran video AI: pergerakan bibir sedikit lambat (lip lag) dan kelipan mata janggal. Scammer sentiasa meminta wang dihantar ke akaun keldai (mule account) asing. Sahkan selalu dengan mendail nombor biasa mereka!",
      en: "Visual AI red flags include subtle lip-sync delays and unnatural facial edges. Scammers will always ask for funds to an unfamiliar mule account. Always verify by ringing their usual phone number directly!"
    },
    keyTip: {
      ms: "Verify any urgent call by ringing their usual number — Sahkan sebarang panggilan cemas dengan mendail nombor asal mereka.",
      en: "Verify any urgent call by ringing their usual number directly."
    }
  },
  {
    id: 10,
    category: "action_plan",
    categoryLabel: {
      ms: "Pelan Tindakan Utama",
      en: "Core Action Plan"
    },
    slideRef: "Slide 9: Berhenti, Semak, Lapor",
    scenarioType: "flowchart_steps",
    question: {
      ms: "Apakah 3 formula tindakan utama yang ditekankan sepanjang bengkel SULAM ini untuk melindungi diri daripada sebarang cubaan penipuan dalam talian?",
      en: "What are the 3 core action steps emphasized throughout this SULAM bootcamp to protect yourself against online scam attempts?"
    },
    options: [
      { id: "a", text: { ms: "1. Percaya, 2. Bayar, 3. Kongsi", en: "1. Believe, 2. Pay, 3. Share" }, isCorrect: false },
      { id: "b", text: { ms: "1. Berhenti (Stop), 2. Semak (Check), 3. Lapor (Report)", en: "1. Stop (Berhenti), 2. Check (Semak), 3. Report (Lapor)" }, isCorrect: true },
      { id: "c", text: { ms: "1. Muat Turun, 2. Buka, 3. Terima", en: "1. Download, 2. Open, 3. Accept" }, isCorrect: false },
      { id: "d", text: { ms: "1. Lari, 2. Sembunyi, 3. Diam", en: "1. Run, 2. Hide, 3. Keep Silent" }, isCorrect: false }
    ],
    explanation: {
      ms: "Formula emas: 01 STOP (Berhenti & bertenang sebelum panik), 02 CHECK (Semak nombor telefon & domain .gov.my), 03 REPORT (Lapor segera ke talian 997 jika terjerumus).",
      en: "The golden formula: 01 STOP (Pause before reacting to urgency), 02 CHECK (Call back via verified number & check domains), 03 REPORT (Dial 997 immediately if scammed)."
    },
    keyTip: {
      ms: "Berhenti, Semak, Lapor — Tiga langkah mudah yang menyelamatkan wang simpanan keluarga anda.",
      en: "Stop, Check, Report — Three simple steps that save your family's hard-earned savings."
    }
  },
  {
    id: 11,
    category: "nsrc_hotline",
    categoryLabel: {
      ms: "Talian Kecemasan Scam",
      en: "National Scam Hotline"
    },
    slideRef: "Slide 10 & 11: Ingat Satu Nombor / Remember 997 (NSRC)",
    scenarioType: "hotline_dialer",
    scenarioData: {
      highlightNumber: "997",
      agency: "National Scam Response Centre (NSRC)",
      tagline: "Bukan 999 atau 994 — Hubungi 997 Segera!"
    },
    question: {
      ms: "Apakah nombor talian kecemasan Pusat Respons Scam Kebangsaan (NSRC) yang boleh dihubungi serta-merta untuk membekukan transaksi pindahan wang scam sebelum lesap?",
      en: "What is the emergency hotline number for the National Scam Response Centre (NSRC) that you must dial immediately to freeze fraudulent bank transfers before funds disappear?"
    },
    options: [
      { id: "a", text: { ms: "999 (Kecemasan Polis/Ambulans)", en: "999 (Police/Ambulance)" }, isCorrect: false },
      { id: "b", text: { ms: "994 (Bomba dan Penyelamat)", en: "994 (Fire & Rescue)" }, isCorrect: false },
      { id: "c", text: { ms: "997 (National Scam Response Centre - NSRC)", en: "997 (National Scam Response Centre - NSRC)" }, isCorrect: true },
      { id: "d", text: { ms: "112 (Talian Am Antarabangsa)", en: "112 (International SOS)" }, isCorrect: false }
    ],
    explanation: {
      ms: "Tepat sekali! Ingat nombor 997! NSRC adalah pusat operasi bersepadu Bank Negara, Polis (PDRM), MCMC, dan bank-bank komersial. Bertindak pantas mendail 997 dalam beberapa jam pertama boleh membantu membekukan akaun keldai penerima!",
      en: "Spot on! Remember 997! The NSRC coordinates Bank Negara Malaysia, PDRM, MCMC, and financial institutions to intercept and freeze stolen transfers before the syndicate withdraws the money."
    },
    keyTip: {
      ms: "INGAT 997: Bukan 999 atau 994 — Hubungi 997 serta-merta sekiranya wang telah dipindahkan!",
      en: "REMEMBER 997: Not 999 or 994 — Dial 997 immediately if money has been transferred!"
    }
  },
  {
    id: 12,
    category: "evidence_action",
    categoryLabel: {
      ms: "Langkah Susulan & Bukti",
      en: "Follow-up & Evidence"
    },
    slideRef: "Slide 10: 1. Hubungi 997, 2. Simpan Bukti, 3. Laporan Polis",
    scenarioType: "checklist_mockup",
    question: {
      ms: "Selepas mendail talian 997, apakah 2 langkah kritikal seterusnya yang mesti dilakukan oleh mangsa penipuan?",
      en: "After dialing the 997 hotline, what are the next 2 critical steps every scam victim must take?"
    },
    options: [
      { id: "a", text: { ms: "Simpan bukti (tangkapan layar chat, nombor telefon & resit bank) dan buat laporan polis di balai berhampiran", en: "Save evidence (screenshot chats, numbers & bank slips) and file a police report at the nearest police station" }, isCorrect: true },
      { id: "b", text: { ms: "Format telefon pintar kepada tetapan kilang dan buang kad SIM", en: "Factory reset the smartphone and discard the SIM card" }, isCorrect: false },
      { id: "c", text: { ms: "Tunggu 6 bulan sebelum memberitahu ahli keluarga", en: "Wait 6 months before telling any family member" }, isCorrect: false },
      { id: "d", text: { ms: "Balas mesej scammer dengan memarahi mereka di media sosial", en: "Reply to the scammer angrily on social media" }, isCorrect: false }
    ],
    explanation: {
      ms: "Tiga langkah lengkap: 1. Hubungi 997 Segera (bekukan transaksi), 2. Simpan Bukti (screenshot perbualan, slip transaksi, nombor akaun scammer), 3. Laporan Polis rasmi di balai polis terdekat untuk tindakan undang-undang.",
      en: "The full three-step response: 1. Call 997 immediately (freeze funds), 2. Save Evidence (screenshots of messages, transaction receipts, scammer accounts), 3. File a formal Police Report at the nearest balai polis."
    },
    keyTip: {
      ms: "Simpan kad poket 'Stop, Check, Report' di dalam dompet anda sebagai rujukan pantas seisi keluarga!",
      en: "Keep the 'Stop, Check, Report' pocket card in your wallet as a handy family reference!"
    }
  }
];
