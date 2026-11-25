import React, { useState } from 'react';
import { User, Users, ArrowRight, PhoneCall, Award } from 'lucide-react';

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

  const teamPlaceholder = lang === 'ms' ? 'Cth: Kumpulan 3' : 'E.g.: Group 3';

  const steps = [
    { n: 1, label: lang === 'ms' ? 'Berhenti' : 'Stop', tone: 'bg-red-600' },
    { n: 2, label: lang === 'ms' ? 'Semak' : 'Check', tone: 'bg-amber-500 text-slate-950' },
    { n: 3, label: lang === 'ms' ? 'Lapor 997' : 'Report 997', tone: 'bg-blue-800' }
  ];

  return (
    <div className="max-w-xl mx-auto px-4 py-6 sm:py-10 w-full">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-3">
        {t.welcomeHeading}
      </h1>
      <p className="text-lg text-slate-700 leading-relaxed mb-6">
        {t.welcomeDescription}
      </p>

      {/* The one formula the whole programme teaches */}
      <div className="grid grid-cols-3 gap-2 mb-6" aria-label="Berhenti, Semak, Lapor">
        {steps.map((s) => (
          <div
            key={s.n}
            className={`${s.tone} ${s.n === 2 ? '' : 'text-white'} rounded-2xl py-3 px-2 text-center font-extrabold text-lg leading-tight`}
          >
            <span className="block text-sm font-bold opacity-90">{s.n}</span>
            {s.label}
          </div>
        ))}
      </div>

      <form onSubmit={handleStart} className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-slate-200 shadow-md space-y-5">
        <fieldset>
          <legend className="text-lg font-bold text-slate-900 mb-2">
            {lang === 'ms' ? 'Anda main sebagai?' : 'You are playing as'}
          </legend>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              aria-pressed={playMode === 'individual'}
              onClick={() => setPlayMode('individual')}
              className={`min-h-[3.5rem] px-3 rounded-2xl border-2 text-lg font-bold flex items-center justify-center gap-2 transition-colors ${
                playMode === 'individual'
                  ? 'bg-amber-500 text-slate-950 border-amber-600'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              <User className="w-6 h-6" />
              {lang === 'ms' ? 'Individu' : 'Solo'}
            </button>
            <button
              type="button"
              aria-pressed={playMode === 'team'}
              onClick={() => setPlayMode('team')}
              className={`min-h-[3.5rem] px-3 rounded-2xl border-2 text-lg font-bold flex items-center justify-center gap-2 transition-colors ${
                playMode === 'team'
                  ? 'bg-amber-500 text-slate-950 border-amber-600'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Users className="w-6 h-6" />
              {lang === 'ms' ? 'Kumpulan' : 'Group'}
            </button>
          </div>
        </fieldset>

        <div>
          <label htmlFor="player-name" className="block text-lg font-bold text-slate-900 mb-2">
            {playMode === 'team'
              ? (lang === 'ms' ? 'Nama kumpulan' : 'Group name')
              : (lang === 'ms' ? 'Nama anda' : 'Your name')}
          </label>
          <input
            id="player-name"
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder={playMode === 'team' ? teamPlaceholder : t.namePlaceholder}
            className="w-full min-h-[3.5rem] px-4 text-lg rounded-2xl border-2 border-slate-300 focus:border-blue-800 bg-white"
            maxLength={40}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          className="w-full min-h-[4rem] px-6 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xl rounded-2xl shadow-md transition-colors flex items-center justify-center gap-3 cursor-pointer"
        >
          <span>{t.startQuizBtn}</span>
          <ArrowRight className="w-6 h-6" />
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <button
          type="button"
          onClick={onOpenLeaderboard}
          className="min-h-[3.5rem] px-4 rounded-2xl border-2 border-slate-300 bg-white text-slate-900 font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-50"
        >
          <Award className="w-6 h-6 text-amber-600" />
          <span>{t.viewLeaderboardBtn}</span>
        </button>
        <button
          type="button"
          onClick={onOpenEmergency}
          className="min-h-[3.5rem] px-4 rounded-2xl border-2 border-red-300 bg-red-50 text-red-800 font-bold text-lg flex items-center justify-center gap-2 hover:bg-red-100"
        >
          <PhoneCall className="w-6 h-6" />
          <span>{t.emergencyGuideBtn}</span>
        </button>
      </div>
    </div>
  );
}
