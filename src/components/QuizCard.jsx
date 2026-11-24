import React, { useState } from 'react';
import { 
  CheckCircle, 
  HelpCircle, 
  Flame, 
  ArrowRight, 
  BookOpen, 
  ShieldQuestion 
} from 'lucide-react';
import ScamInspector from './ScamInspector';

export default function QuizCard({
  question,
  currentIndex,
  totalQuestions,
  currentScore,
  streak,
  onConfirmAnswer,
  t,
  lang,
  onOptionClickSound
}) {
  const [selectedOptionId, setSelectedOptionId] = useState(null);

  const handleSelect = (id) => {
    setSelectedOptionId(id);
    if (onOptionClickSound) onOptionClickSound();
  };

  const handleConfirm = () => {
    if (!selectedOptionId) return;
    onConfirmAnswer(selectedOptionId);
    setSelectedOptionId(null);
  };

  const progressPercent = Math.round(((currentIndex) / totalQuestions) * 100);

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 sm:py-8">
      {/* Top Progress and Status Bar */}
      <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200 shadow-sm mb-4">
        <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-700 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="text-amber-600 font-extrabold">
              {t.questionOf} {currentIndex + 1}
            </span>
            <span className="text-slate-400">/ {totalQuestions}</span>
          </div>

          <div className="flex items-center gap-3">
            {streak >= 2 && (
              <span className="inline-flex items-center gap-1 text-xs font-extrabold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full animate-bounce-short">
                <Flame className="w-3.5 h-3.5 text-amber-600" />
                <span>{streak}x Streak!</span>
              </span>
            )}
            <div className="text-slate-900 font-extrabold">
              {t.scoreLabel} <span className="text-amber-600">{currentScore}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div 
            className="bg-amber-500 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-md">
        {/* Category & Slide Reference Pill */}
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200 flex items-center gap-1">
            <ShieldQuestion className="w-3.5 h-3.5 text-amber-600" />
            {question.categoryLabel[lang] || question.categoryLabel.ms}
          </span>
          <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1 bg-amber-50 text-amber-900 px-2.5 py-0.5 rounded-md border border-amber-200">
            <BookOpen className="w-3 h-3 text-amber-600" />
            {question.slideRef}
          </span>
        </div>

        {/* Question Text */}
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-snug mb-4">
          {question.question[lang] || question.question.ms}
        </h2>

        {/* In-question Interactive Scenario Simulation */}
        {question.scenarioType && (
          <ScamInspector 
            scenarioType={question.scenarioType} 
            scenarioData={question.scenarioData}
            lang={lang}
          />
        )}

        {/* Options List */}
        <div className="space-y-2.5 mt-5">
          {question.options.map((opt, idx) => {
            const isSelected = selectedOptionId === opt.id;
            const letter = String.fromCharCode(65 + idx); // A, B, C, D

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelect(opt.id)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-start gap-3 group cursor-pointer ${
                  isSelected
                    ? 'bg-amber-50 border-amber-500 text-slate-950 shadow-sm ring-2 ring-amber-400'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 font-extrabold'
                    : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                }`}>
                  {letter}
                </span>
                <span className="text-xs sm:text-sm font-semibold pt-0.5 leading-relaxed">
                  {opt.text[lang] || opt.text.ms}
                </span>
              </button>
            );
          })}
        </div>

        {/* Submit Answer CTA */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end">
          <button
            type="button"
            disabled={!selectedOptionId}
            onClick={handleConfirm}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              selectedOptionId
                ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-md'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            <span>{t.confirmSelection}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
