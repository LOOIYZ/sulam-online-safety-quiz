import React from 'react';
import { 
  PhoneCall, 
  FileDown, 
  Globe, 
  AlertOctagon, 
  Mic, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Lock, 
  ExternalLink,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

export default function ScamInspector({ scenarioType, scenarioData, lang }) {
  if (!scenarioType) return null;

  // 1. Fake Authority Call Mockup (Slide 3)
  if (scenarioType === 'call_mockup') {
    return (
      <div className="my-4 bg-slate-900 text-white rounded-2xl p-4 sm:p-5 border border-red-500/30 shadow-lg relative overflow-hidden">
        <div className="absolute top-2 right-2 bg-red-600/90 text-white text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
          <AlertOctagon className="w-3 h-3" />
          <span>SIMULASI PANGGILAN PALSU</span>
        </div>

        <div className="flex items-start gap-3 mt-3">
          <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0">
            <PhoneCall className="w-5 h-5 text-red-400 animate-pulse" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs text-red-400 font-bold uppercase tracking-wider">
              {lang === 'ms' ? 'Pemanggil Tidak Dikenali' : 'Incoming Caller'}
            </div>
            <div className="text-sm font-extrabold text-white truncate">
              {scenarioData.callerName}
            </div>
            <div className="text-xs text-slate-300 mt-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700 italic">
              "{scenarioData.dialogue}"
            </div>
            <div className="mt-2.5 flex items-center gap-2 text-[11px] text-amber-300 font-semibold">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{scenarioData.urgency}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Fake Parcel APK Mockup (Slide 4)
  if (scenarioType === 'sms_apk_mockup') {
    return (
      <div className="my-4 bg-slate-100 rounded-2xl p-4 border border-slate-300 shadow-inner">
        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            Mesej WhatsApp / SMS Diterima
          </span>
          <span className="text-red-600 font-extrabold bg-red-100 px-1.5 py-0.5 rounded text-[10px]">
            AWAS! SCAM APK
          </span>
        </div>

        <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200">
          <p className="text-xs text-slate-800 font-medium mb-3">
            {scenarioData.message}
          </p>

          {/* Dangerous APK download card */}
          <div className="bg-red-50 rounded-xl p-3 border border-red-200 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                <FileDown className="w-5 h-5" />
              </div>
              <div className="truncate">
                <div className="text-xs font-extrabold text-red-900 truncate">
                  {scenarioData.filename}
                </div>
                <div className="text-[10px] text-red-700">
                  {scenarioData.filesize} • Pakej Pemasangan Luar
                </div>
              </div>
            </div>
            <span className="text-[10px] font-extrabold bg-red-600 text-white px-2.5 py-1 rounded-md shrink-0">
              JANGAN PASANG
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 3. Phishing URL Inspector (Slide 5)
  if (scenarioType === 'url_inspector') {
    return (
      <div className="my-4 bg-slate-900 text-white rounded-2xl p-4 border border-slate-700 shadow-lg">
        <div className="text-xs font-bold text-amber-400 mb-2 flex items-center gap-1.5">
          <Globe className="w-4 h-4 text-amber-400" />
          <span>{lang === 'ms' ? 'Pemeriksa Pautan (URL Inspector)' : 'URL Inspector Tool'}</span>
        </div>
        <p className="text-xs text-slate-300 mb-3">
          {lang === 'ms' 
            ? 'Bandingkan struktur domain laman web di bawah. Cari domain rasmi kerajaan:'
            : 'Compare the domain structures below. Identify the legitimate government domain:'}
        </p>
        <div className="space-y-2">
          {scenarioData.links.map((item, idx) => (
            <div 
              key={idx}
              className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-mono ${
                item.status === 'real'
                  ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                  : 'bg-slate-800/60 border-slate-700 text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <Lock className={`w-3.5 h-3.5 ${item.status === 'real' ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span className="truncate">{item.url}</span>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded font-sans font-bold uppercase shrink-0 ${
                item.status === 'real' ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300'
              }`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 4. Telegram Phish Mockup (Slide 6 & 7)
  if (scenarioType === 'telegram_phish_mockup') {
    return (
      <div className="my-4 bg-blue-50 rounded-2xl p-4 border border-blue-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wide">
            {scenarioData.headline}
          </span>
          <span className="text-[10px] font-extrabold bg-red-600 text-white px-2 py-0.5 rounded">
            PERANGKAP HIJACK
          </span>
        </div>
        <div className="bg-white rounded-xl p-3 border border-blue-100 text-xs text-slate-700 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-500 pb-1 border-b">
            <span>Poster tulis: <strong className="text-slate-800">{scenarioData.posterDomain}</strong></span>
            <span>Pautan sebenar: <strong className="text-red-600 font-mono">{scenarioData.actualLink}</strong></span>
          </div>
          <div className="p-2 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-xs font-medium">
            ⚠️ {scenarioData.telegramTrap}
          </div>
        </div>
      </div>
    );
  }

  // 5. Deepfake AI Visual Inspection (Slide 8)
  if (scenarioType === 'video_call_simulation') {
    return (
      <div className="my-4 bg-slate-900 rounded-2xl p-4 border border-purple-500/40 text-white">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-purple-300">
            <Mic className="w-4 h-4 text-purple-400" />
            <span>{scenarioData.scenarioTitle}</span>
          </div>
          <span className="text-[10px] font-extrabold bg-purple-600 text-white px-2 py-0.5 rounded">
            AI CLONING
          </span>
        </div>
        <div className="bg-slate-800/80 rounded-xl p-3 text-xs space-y-1.5 border border-slate-700">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Tanda-tanda Amaran (Red Flags):
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-200">
            {scenarioData.redFlags.map((flag, idx) => (
              <li key={idx} className="text-xs">{flag}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // 6. Hotline 997 Highlight (Slide 10)
  if (scenarioType === 'hotline_dialer') {
    return (
      <div className="my-4 bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-2xl p-4 text-center shadow-md">
        <div className="text-xs font-extrabold tracking-widest uppercase text-red-200 mb-1">
          {scenarioData.agency}
        </div>
        <div className="text-4xl font-black tracking-widest my-1 text-white">
          {scenarioData.highlightNumber}
        </div>
        <div className="text-xs font-semibold text-red-100">
          {scenarioData.tagline}
        </div>
      </div>
    );
  }

  return null;
}
