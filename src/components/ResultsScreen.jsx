import React, { useEffect, useState } from 'react';
import { 
  Trophy, 
  Award, 
  RotateCcw, 
  Share2, 
  CheckCircle2, 
  XCircle, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResultsScreen({
  score,
  total,
  answersLog,
  questions,
  playerName,
  playMode,
  onRetake,
  onOpenCertificate,
  onOpenEmergency,
  t,
  lang,
  sound
}) {
  const [showReview, setShowReview] = useState(false);
  const percentage = Math.round((score / total) * 100);

  useEffect(() => {
    if (percentage >= 70) {
      sound.playFanfare();
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Ignore
      }
    }
  }, [percentage]);

  // Determine performance badge
  let tierTitle = t.tierNovice;
  let tierDesc = t.tierNoviceDesc;
  let tierColor = 'text-amber-700 bg-amber-50 border-amber-200';

  if (percentage >= 85) {
    tierTitle = t.tierMaster;
    tierDesc = t.tierMasterDesc;
    tierColor = 'text-emerald-800 bg-emerald-50 border-emerald-300';
  } else if (percentage >= 60) {
    tierTitle = t.tierProficient;
    tierDesc = t.tierProficientDesc;
    tierColor = 'text-blue-800 bg-blue-50 border-blue-200';
  }

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Saya (${playerName}) telah menyertai Kuiz Keselamatan Dalam Talian & AI Deepfake (WIX2001 SULAM PPR Pantai Ria x Universiti Malaya) dan mendapat skor ${score}/${total} (${percentage}%)! 🛡️\n\nIngat: Berhenti, Semak, Lapor & Dail NSRC 997 jika disyaki scam!`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-10">
      {/* Top Results Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl text-center relative overflow-hidden mb-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-600 mb-4 shadow-sm">
          <Trophy className="w-9 h-9 sm:w-11 sm:h-11" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
          {t.resultsHeading}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mb-6">
          {playerName} • {playMode === 'team' ? t.modeTeam : t.modeSolo}
        </p>

        {/* Score Circles Grid */}
        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mb-6">
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <span className="text-[11px] font-bold text-slate-500 block mb-1">{t.finalScoreLabel}</span>
            <span className="text-xl sm:text-2xl font-black text-amber-600">{score} / {total}</span>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <span className="text-[11px] font-bold text-slate-500 block mb-1">{t.accuracyLabel}</span>
            <span className="text-xl sm:text-2xl font-black text-slate-800">{percentage}%</span>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <span className="text-[11px] font-bold text-slate-500 block mb-1">{t.correctAnswersCount}</span>
            <span className="text-xl sm:text-2xl font-black text-emerald-600">{score}</span>
          </div>
        </div>

        {/* Achievement Badge Banner */}
        <div className={`p-4 rounded-2xl border max-w-lg mx-auto text-left mb-6 ${tierColor}`}>
          <div className="text-base font-extrabold mb-1">{tierTitle}</div>
          <p className="text-xs leading-relaxed opacity-90">{tierDesc}</p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
          <button
            type="button"
            onClick={onOpenCertificate}
            className="w-full sm:w-auto flex-1 py-3.5 px-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Award className="w-4 h-4" />
            <span>{t.claimCertificateBtn}</span>
          </button>

          <button
            type="button"
            onClick={handleShareWhatsApp}
            className="w-full sm:w-auto py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>{t.shareWhatsAppBtn}</span>
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={onRetake}
            className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-colors cursor-pointer py-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.retakeQuizBtn}</span>
          </button>
        </div>
      </div>

      {/* Emergency Quick Reminder Box */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-md flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0">
            <PhoneCall className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-red-400">INGAT NOMBOR INI</div>
            <div className="text-sm sm:text-base font-extrabold">National Scam Response Centre (NSRC) 997</div>
          </div>
        </div>
        <button
          onClick={onOpenEmergency}
          className="shrink-0 text-xs font-bold text-amber-400 hover:underline"
        >
          {t.emergencyGuideBtn}
        </button>
      </div>

      {/* Expandable Answers Review Section */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm">
        <button
          type="button"
          onClick={() => setShowReview(!showReview)}
          className="w-full flex items-center justify-between font-extrabold text-sm text-slate-800 hover:text-slate-950 transition-colors"
        >
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            {t.reviewAnswersBtn} ({score}/{total} Betul)
          </span>
          {showReview ? (
            <ChevronUp className="w-4 h-4 text-slate-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-500" />
          )}
        </button>

        {showReview && (
          <div className="mt-4 space-y-3 pt-4 border-t border-slate-100">
            {questions.map((q, idx) => {
              const userAns = answersLog[q.id];
              const isCorrect = userAns && userAns.isCorrect;
              const correctOpt = q.options.find(o => o.isCorrect);

              return (
                <div 
                  key={q.id}
                  className={`p-3.5 rounded-2xl border text-xs ${
                    isCorrect
                      ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                      : 'bg-red-50/60 border-red-200 text-red-950'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-extrabold">
                      Soalan {idx + 1}: {q.categoryLabel[lang] || q.categoryLabel.ms}
                    </span>
                    <span className="shrink-0 flex items-center gap-1 font-bold">
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-700">Tepat</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-red-600" />
                          <span className="text-red-700">Salah</span>
                        </>
                      )}
                    </span>
                  </div>
                  <p className="font-medium text-slate-700 mb-1.5">
                    {q.question[lang] || q.question.ms}
                  </p>
                  <div className="text-[11px] text-slate-600 pt-1 border-t border-slate-200/60">
                    <strong>Jawapan Tepat:</strong> {correctOpt?.text[lang] || correctOpt?.text.ms}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
