# Kuiz Keselamatan Dalam Talian & Kesedaran AI Deepfake
### WIX2001 SULAM BOOTCAMP | PPR PANTAI RIA BLOK C x UNIVERSITI MALAYA

Aplikasi web kuiz interaktif, responsif mudah alih (mobile-first), dan dwibahasa (Bahasa Melayu & English) yang dibangunkan khusus untuk aktiviti komuniti **SULAM Bootcamp** di **PPR Pantai Ria Blok C**.

---

## 🌟 Ciri-ciri Utama

1. **Kandungan Berasaskan Slaid Pembentangan SULAM**:
   - 12 senario soalan komprehensif merangkumi panggilan palsu berkuasa (PDRM/LHDN), penipuan bungkusan & fail `.apk` berbahaya, pautan phishing bantuan kerajaan vs `.xyz`/`.top`, iklan palsu STR di media sosial, rampasan akaun Telegram, klon suara AI 10-saat, pengesanan deepfake video, formula **"Berhenti, Semak, Lapor"**, dan talian kecemasan **NSRC 997**.
2. **Simulasi Visual Interaktif (In-Quiz Scam Inspectors)**:
   - Paparan simulasi panggilan masuk mengugut waran tangkap.
   - Simulasi mesej SMS/WhatsApp dengan fail `.apk` berniat jahat.
   - Pemeriksa URL interaktif membandingkan domain rasmi `.gov.my` vs pautan phishing.
   - Peringatan kecemasan rampasan Telegram (*Settings > Devices > Terminate All Other Sessions*).
3. **Dwibahasa (Bilingual MS / EN)**:
   - Penukaran satu klik antara Bahasa Melayu dan Bahasa Inggeris pada bila-bila masa.
4. **Gamifikasi & Mod Pasukan (Activity 04: Team Quiz)**:
   - Mod Individu dan Mod Pasukan / Komuniti (contoh: "Keluarga Pak Abu", "Blok C-10").
   - Papan Pendahulu (Leaderboard) tempatan berasaskan `localStorage`.
   - Kesan bunyi sintesis Web Audio API (mesra peranti mudah alih tanpa muat turun fail berat).
   - Kesan konfeti keraian apabila mencapai skor tinggi.
5. **Sijil Digital "Wira Keselamatan Siber"**:
   - Menjana sijil pengiktirafan rasmi dengan nama peserta/pasukan, skor, tarikh, dan lencana akreditasi SULAM. Boleh dicetak terus atau disimpan sebagai PDF.
6. **Laci Talian Kecemasan NSRC 997**:
   - Butang kecemasan pantas merah di header untuk mendail 997 serta-merta dan membaca 3 langkah kecemasan.

---

## 🚀 Cara Menjalankan Aplikasi

Pastikan Node.js telah dipasang pada komputer anda.

### 1. Mod Pembangunan (Development)
```bash
npm run dev
```
Buka pelayar web di `http://localhost:3000` atau alamat yang dipaparkan di terminal.

### 2. Membina untuk Pengeluaran (Production Build)
```bash
npm run build
```
Fail statik yang siap sedia untuk dihoskan akan dijana di dalam folder `dist/`.

### 3. Pratonton Hasil Binaan
```bash
npm run preview
```

---

## 📂 Struktur Projek

```
SULAM_Web_Quiz/
├── dist/                      # Hasil binaan pengeluaran sedia untuk dihoskan
├── src/
│   ├── components/
│   │   ├── Certificate.jsx       # Sijil penghargaan rasmi boleh cetak
│   │   ├── EmergencyDrawer.jsx   # Panduan kecemasan 997 & Telegram
│   │   ├── ExplanationModal.jsx  # Modal penerangan jawapan & tip emas
│   │   ├── Header.jsx            # Bar navigasi, pertukaran bahasa & audio
│   │   ├── LeaderboardModal.jsx  # Papan pendahulu komuniti PPR
│   │   ├── QuizCard.jsx          # Kad soalan, progress bar & pilihan jawapan
│   │   ├── ResultsScreen.jsx     # Paparan skor, tier wira & semakan jawapan
│   │   ├── ScamInspector.jsx     # Komponen simulasi SMS, URL & panggilan
│   │   └── WelcomeScreen.jsx     # Laman utama & statistik realiti Malaysia
│   ├── data/
│   │   ├── quizQuestions.js      # 12 soalan dwibahasa & penerangan
│   │   └── translations.js       # Teks UI Bahasa Melayu & English
│   ├── utils/
│   │   ├── sound.js              # Sintesis audio Web Audio API
│   │   └── storage.js            # Pengurusan storan tempatan leaderboard
│   ├── App.jsx                   # Pengendali utama aliran aplikasi
│   ├── index.css                 # Gaya Tailwind & reka letak cetakan
│   └── main.jsx                  # Titik permulaan React
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🛡️ Talian Kecemasan Penting
- **Pusat Respons Scam Kebangsaan (NSRC)**: Dail **997**
- **Formula Keselamatan**: **Berhenti, Semak, Lapor (Stop, Check, Report)**
