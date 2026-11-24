import React from 'react';
import { Shield, Volume2, VolumeX, Globe, PhoneCall, Award } from 'lucide-react';

export default function Header({ 
  lang, 
  onToggleLang, 
  soundEnabled, 
  onToggleSound, 
  onOpenEmergency,
  onOpenLeaderboard,
  t 
}) {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-40 border-b border-slate-800 shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between gap-2">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-extrabold shadow-sm shrink-0">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-slate-950" />
          </div>
          <div className="truncate">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-bold text-xs sm:text-sm tracking-wide text-white truncate">
                PPR PANTAI RIA BLOK C
              </span>
              <span className="text-[10px] sm:text-xs bg-blue-600/80 text-blue-100 font-semibold px-1.5 py-0.5 rounded">
                UM WIX2001
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-amber-400 font-medium truncate hidden xs:block">
              Berhenti, Semak, Lapor • NSRC 997
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Emergency Hotline Button */}
          <button
            onClick={onOpenEmergency}
            className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-2.5 py-1.5 rounded-lg transition-colors shadow-sm animate-pulse-subtle"
            title="Talian Kecemasan Scam 997"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="tracking-wider">997</span>
          </button>

          {/* Leaderboard Button */}
          <button
            onClick={onOpenLeaderboard}
            className="p-1.5 text-slate-300 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-colors"
            title={t.viewLeaderboardBtn}
          >
            <Award className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            title={soundEnabled ? 'Matikan Bunyi' : 'Hidupkan Bunyi'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            ) : (
              <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
            )}
          </button>

          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 px-2 py-1.5 rounded-lg transition-colors border border-slate-700"
            title="Tukar Bahasa / Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
