import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import ScamInspector from './ScamInspector';

export default function QuizCard({
  question,
  currentIndex,
  totalQuestions,
  currentScore,
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

  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 sm:py-8 w-full">
      {/* Progress */}
      <div className="mb-4">
        <div className="flex items-baseline justify-between text-lg font-bold text-slate-900 mb-2">
          <span>
            {t.questionOf} {currentIndex + 1} <span className="text-slate-500 font-semibold">/ {totalQuestions}</span>
          </span>
          <span>
            {t.scoreLabel} <span className="text-amber-700">{currentScore}</span>
          </span>
        </div>
        <div
          className="w-full bg-slate-200 h-3 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={totalQuestions}
          aria-valuenow={currentIndex + 1}
        >
          <div
            className="bg-amber-500 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-slate-200 shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-4">
          {question.question[lang] || question.question.ms}
        </h2>

        {question.scenarioType && (
          <ScamInspector
            scenarioType={question.scenarioType}
            scenarioData={question.scenarioData}
            lang={lang}
          />
        )}

        <div className="space-y-3 mt-5" role="radiogroup">
          {question.options.map((opt, idx) => {
            const isSelected = selectedOptionId === opt.id;
            const letter = String.fromCharCode(65 + idx);

            return (
              <button
                key={opt.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => handleSelect(opt.id)}
                className={`w-full text-left p-4 min-h-[4rem] rounded-2xl border-2 transition-colors flex items-center gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-50 border-amber-600 text-slate-950'
                    : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-900'
                }`}
              >
                <span
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-lg shrink-0 ${
                    isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {isSelected ? <Check className="w-6 h-6" /> : letter}
                </span>
                <span className="text-lg font-semibold leading-snug">
                  {opt.text[lang] || opt.text.ms}
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          disabled={!selectedOptionId}
          onClick={handleConfirm}
          className={`mt-6 w-full min-h-[4rem] px-6 rounded-2xl font-extrabold text-xl flex items-center justify-center gap-3 transition-colors ${
            selectedOptionId
              ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-md cursor-pointer'
              : 'bg-slate-200 text-slate-500 cursor-not-allowed'
          }`}
        >
          <span>{selectedOptionId ? t.confirmSelection : t.selectOptionPrompt}</span>
          {selectedOptionId && <ArrowRight className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}
