import React from 'react';
import { Shield, Printer, X, Award, CheckCircle } from 'lucide-react';

export default function Certificate({
  isOpen,
  onClose,
  playerName,
  playMode,
  score,
  total,
  t,
  lang
}) {
  if (!isOpen) return null;

  const percentage = Math.round((score / total) * 100);
  const currentDate = new Date().toLocaleDateString(lang === 'ms' ? 'ms-MY' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-4 sm:p-6 shadow-2xl border border-slate-200 relative my-6">
        {/* Modal Controls (Not visible during print) */}
        <div className="flex items-center justify-between mb-3 print:hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Sijil Digital SULAM</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.certPrintBtn}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Printable Area */}
        <div 
          id="certificate-print-area" 
          className="bg-[#FCFBF8] border-8 border-double border-amber-600/40 p-6 sm:p-10 rounded-2xl relative text-center text-slate-900 shadow-inner"
        >
          {/* Subtle watermark / background accent */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <Shield className="w-80 h-80 text-amber-900" />
          </div>

          {/* Organizer Header */}
          <div className="mb-4">
            <div className="text-xs sm:text-xs font-extrabold tracking-widest text-slate-500 mb-1">
              WIX2001 SULAM BOOTCAMP • UNIVERSITI MALAYA
            </div>
            <div className="text-xs sm:text-sm font-bold text-amber-700">
              KOMUNITI RUKUN TETANGGA (KRT) PPR PANTAI RIA BLOK C
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-2 mb-2 font-serif">
            {t.certTitle}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>

          {/* Presented To */}
          <p className="text-xs text-slate-600 italic mb-2">
            {t.certPresentedTo}
          </p>
          <div className="text-xl sm:text-3xl font-black text-amber-800 underline decoration-amber-400/50 decoration-2 underline-offset-8 mb-4 tracking-wide">
            {playerName || 'Wira Keselamatan Siber'}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-700 max-w-lg mx-auto leading-relaxed mb-6">
            {t.certReason}
          </p>

          {/* Achievement Seal & Stats */}
          <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
            <div className="bg-white/80 px-4 py-2 rounded-xl border border-amber-200 shadow-sm">
              <span className="text-xs font-bold text-slate-400 block">Skor Dicapai</span>
              <span className="text-base font-extrabold text-amber-600">{score} / {total} ({percentage}%)</span>
            </div>

            <div className="bg-white/80 px-4 py-2 rounded-xl border border-emerald-200 shadow-sm flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-extrabold text-emerald-800">Lulus Ujian Amali</span>
            </div>
          </div>

          {/* Footer Motto & Signature Area */}
          <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-left text-xs">
            <div>
              <div className="font-extrabold text-slate-900 tracking-wider">
                BERHENTI, SEMAK, LAPOR
              </div>
              <div className="text-xs text-red-600 font-bold">
                Talian Kecemasan NSRC 997
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs text-slate-500 font-medium">
                {t.certDate} <strong className="text-slate-800">{currentDate}</strong>
              </div>
              <div className="text-xs text-slate-400">
                PPR Pantai Ria Blok C, Kuala Lumpur
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
