import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Users, 
  User, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  PhoneCall, 
  Award,
  Sparkles,
  Info
} from 'lucide-react';

export default function WelcomeScreen({ 
  onStart, 
  playerName, 
  setPlayerName, 
  t, 
  lang,
  onOpenLeaderboard,
  onOpenEmergency
}) {
  const [playMode, setPlayMode] = useState('individual'); // 'individual' or 'team'
  const [nameInput, setNameInput] = useState(playerName || '');

  const handleStart = (e) => {
    e.preventDefault();
    const finalName = nameInput.trim() || (playMode === 'team' ? 'Pasukan Blok C' : 'Wira Siber PPR');
    setPlayerName(finalName);
    onStart(finalName, playMode);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10">
      {/* Top Banner Tag */}
      <div className="text-center mb-4 sm:mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          {t.welcomeBadge}
        </span>
      </div>

      {/* Hero Headline */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
          {t.welcomeHeading}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {t.welcomeDescription}
        </p>
      </div>

      {/* Core Statistics Grid (Directly from Slide 2) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-red-500"></div>
          <p className="text-xs text-slate-500 font-semibold mb-1">{t.statLossLabel}</p>
          <p className="text-xl sm:text-2xl font-extrabold text-red-600">{t.statLossValue}</p>
          <span className="text-[11px] text-slate-400 mt-1 block">+RM830M awal 2026</span>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500"></div>
          <p className="text-xs text-slate-500 font-semibold mb-1">{t.statCasesLabel}</p>
          <p className="text-xl sm:text-2xl font-extrabold text-slate-800">{t.statCasesValue}</p>
          <span className="text-[11px] text-slate-400 mt-1 block">12/13 terima panggilan scam</span>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500"></div>
          <p className="text-xs text-slate-500 font-semibold mb-1">{t.statUnconfidentLabel}</p>
          <p className="text-xl sm:text-2xl font-extrabold text-purple-600">{t.statUnconfidentValue}</p>
          <span className="text-[11px] text-slate-400 mt-1 block">Sifar yakin kesan deepfake</span>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500"></div>
          <p className="text-xs text-slate-500 font-semibold mb-1">{t.statHotlineLabel}</p>
          <p className="text-xl sm:text-2xl font-extrabold text-blue-600">NSRC 997</p>
          <span className="text-[11px] text-slate-400 mt-1 block">6/13 tidak tahu nombor ini!</span>
        </div>
      </div>

      {/* Motto Highlight Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-4 sm:p-5 mb-8 border border-slate-700 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
            <ShieldAlert className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {lang === 'ms' ? 'Pelan Tindakan Utama' : 'Core Action Plan'}
            </div>
            <div className="text-base sm:text-lg font-bold text-white">
              01 BERHENTI ➔ 02 SEMAK ➔ 03 LAPOR (997)
            </div>
          </div>
        </div>
        <button
          onClick={onOpenEmergency}
          className="shrink-0 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors flex items-center gap-2 shadow"
        >
          <PhoneCall className="w-4 h-4" />
          <span>{t.emergencyGuideBtn}</span>
        </button>
      </div>

      {/* Interactive Play Mode & Name Entry Box */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg max-w-xl mx-auto">
        <form onSubmit={handleStart} className="space-y-5">
          {/* Mode Switcher */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              {lang === 'ms' ? 'Pilih Mod Permainan' : 'Select Play Mode'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPlayMode('individual')}
                className={`py-3 px-4 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  playMode === 'individual'
                    ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <User className="w-4 h-4" />
                {t.modeSolo}
              </button>
              <button
                type="button"
                onClick={() => setPlayMode('team')}
                className={`py-3 px-4 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  playMode === 'team'
                    ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Users className="w-4 h-4" />
                {t.modeTeam}
              </button>
            </div>
          </div>

          {/* Name / Team Input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              {t.enterNamePrompt}
            </label>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder={playMode === 'team' ? 'Cth: Kumpulan Blok C-12' : t.namePlaceholder}
              className="w-full px-4 py-3 text-base rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-slate-50/50"
              maxLength={40}
            />
          </div>

          {/* Start CTA Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-base rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>{t.startQuizBtn}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Actions */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenLeaderboard}
              className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-colors"
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span>{t.viewLeaderboardBtn}</span>
            </button>
          </div>
        </form>
      </div>

      {/* SULAM Attribution Footer */}
      <div className="mt-8 text-center text-xs text-slate-500 max-w-lg mx-auto">
        <p className="font-semibold text-slate-700">WIX2001 SULAM BOOTCAMP</p>
        <p>Inisiatif Pembelajaran Berkhidmat Universiti Malaya (FSKTM) bersama Komuniti KRT PPR Pantai Ria Blok C</p>
      </div>
    </div>
  );
}
