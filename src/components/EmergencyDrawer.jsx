import React from 'react';
import { 
  PhoneCall, 
  ShieldAlert, 
  X, 
  AlertTriangle, 
  Camera, 
  Building2, 
  Smartphone,
  ExternalLink
} from 'lucide-react';

export default function EmergencyDrawer({ isOpen, onClose, t, lang }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0">
              <PhoneCall className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 leading-tight">
                {t.emergencyDrawerTitle}
              </h2>
              <span className="text-xs text-red-600 font-bold tracking-wider">
                Bukan 999 atau 994 — Dail 997 Segera!
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Call Button */}
        <a
          href="tel:997"
          className="w-full py-4 px-6 bg-red-600 hover:bg-red-700 text-white font-black text-center text-lg rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 mb-5"
        >
          <PhoneCall className="w-6 h-6" />
          <span>DAIL TALIAN NSRC: 997</span>
        </a>

        <p className="text-xs text-slate-600 font-medium mb-4">
          {t.emergencyDrawerSubtitle}
        </p>

        {/* 3 Step Protocol Cards */}
        <div className="space-y-3 mb-5">
          <div className="bg-red-50 rounded-2xl p-3.5 border border-red-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              1
            </span>
            <div>
              <h4 className="text-xs font-extrabold text-red-950 mb-0.5">{t.step1Title}</h4>
              <p className="text-xs text-red-800 leading-relaxed">{t.step1Desc}</p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-2xl p-3.5 border border-amber-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <div>
              <h4 className="text-xs font-extrabold text-amber-950 mb-0.5">{t.step2Title}</h4>
              <p className="text-xs text-amber-800 leading-relaxed">{t.step2Desc}</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-3.5 border border-blue-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              3
            </span>
            <div>
              <h4 className="text-xs font-extrabold text-blue-950 mb-0.5">{t.step3Title}</h4>
              <p className="text-xs text-blue-800 leading-relaxed">{t.step3Desc}</p>
            </div>
          </div>
        </div>

        {/* Special Telegram Compromised Emergency Box */}
        <div className="bg-slate-900 text-white rounded-2xl p-4 border border-slate-800 mb-5 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-amber-400 mb-1">
            <Smartphone className="w-4 h-4 text-amber-400" />
            <span>Kecemasan: Tertekan Pautan STR / Telegram Terhijack?</span>
          </div>
          <p className="text-slate-300 leading-relaxed mb-2">
            Buka aplikasi Telegram serta-merta:
          </p>
          <div className="p-2.5 bg-slate-800 rounded-xl font-mono text-xs text-amber-300 border border-slate-700">
            Settings &gt; Devices &gt; Terminate All Other Sessions
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors cursor-pointer"
        >
          {t.emergencyClose}
        </button>
      </div>
    </div>
  );
}
