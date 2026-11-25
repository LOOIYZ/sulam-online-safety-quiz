import React from 'react';
import { Shield, Volume2, VolumeX, PhoneCall, Award } from 'lucide-react';

export default function Header({
  lang,
  onToggleLang,
  soundEnabled,
  onToggleSound,
  onOpenEmergency,
  onOpenLeaderboard,
  t
}) {
  const iconBtn =
    'min-w-[2.75rem] min-h-[2.75rem] flex items-center justify-center text-slate-100 hover:text-amber-300 hover:bg-slate-800 rounded-xl transition-colors';

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-40 border-b border-slate-800 shadow-md">
      <div className="max-w-5xl mx-auto px-3 py-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <span className="font-bold text-base truncate hidden sm:inline">PPR Pantai Ria</span>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={onOpenEmergency}
            className="min-h-[2.75rem] flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-base px-3 rounded-xl"
            aria-label="Talian Kecemasan Scam 997"
          >
            <PhoneCall className="w-5 h-5" />
            <span>997</span>
          </button>

          <button onClick={onOpenLeaderboard} className={iconBtn} aria-label={t.viewLeaderboardBtn}>
            <Award className="w-6 h-6" />
          </button>

          <button
            onClick={onToggleSound}
            className={iconBtn}
            aria-label={soundEnabled ? 'Matikan Bunyi' : 'Hidupkan Bunyi'}
          >
            {soundEnabled ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6 text-slate-400" />}
          </button>

          <button
            onClick={onToggleLang}
            className="min-h-[2.75rem] min-w-[2.75rem] font-extrabold text-base bg-slate-800 hover:bg-slate-700 text-white px-2 rounded-xl border border-slate-600"
            aria-label="Tukar Bahasa / Switch Language"
          >
            {lang === 'ms' ? 'EN' : 'BM'}
          </button>
        </div>
      </div>
    </header>
  );
}
