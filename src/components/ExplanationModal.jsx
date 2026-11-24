import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  ShieldCheck, 
  ArrowRight, 
  BookOpen 
} from 'lucide-react';

export default function ExplanationModal({
  isOpen,
  isCorrect,
  question,
  selectedOptionId,
  onContinue,
  isLastQuestion,
  t,
  lang
}) {
  if (!isOpen || !question) return null;

  const correctOption = question.options.find(opt => opt.isCorrect);
  const selectedOption = question.options.find(opt => opt.id === selectedOptionId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Result Badge */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
            isCorrect 
              ? 'bg-emerald-100 text-emerald-600 border border-emerald-300' 
              : 'bg-red-100 text-red-600 border border-red-300'
          }`}>
            {isCorrect ? (
              <CheckCircle2 className="w-7 h-7" />
            ) : (
              <XCircle className="w-7 h-7" />
            )}
          </div>
          <div>
            <h3 className={`text-base sm:text-lg font-extrabold ${
              isCorrect ? 'text-emerald-700' : 'text-red-700'
            }`}>
              {isCorrect ? t.correctTitle : t.incorrectTitle}
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              {question.slideRef}
            </span>
          </div>
        </div>

        {/* If wrong, display correct answer */}
        {!isCorrect && correctOption && (
          <div className="bg-emerald-50 rounded-2xl p-3.5 border border-emerald-200 mb-4">
            <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide mb-1 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              {t.correctAnswerWas}
            </div>
            <p className="text-xs sm:text-sm font-semibold text-emerald-950 leading-relaxed">
              {correctOption.text[lang] || correctOption.text.ms}
            </p>
          </div>
        )}

        {/* Why this matters (Pedagogical Explanation) */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-4">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            {t.whyItMatters}
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {question.explanation[lang] || question.explanation.ms}
          </p>
        </div>

        {/* Golden Safety Tip from Presentation */}
        <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 mb-6">
          <div className="text-xs font-bold text-amber-900 uppercase tracking-wide mb-1 flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            {t.goldenTip}
          </div>
          <p className="text-xs sm:text-sm font-bold text-amber-950 leading-relaxed">
            {question.keyTip[lang] || question.keyTip.ms}
          </p>
        </div>

        {/* Continue CTA */}
        <button
          type="button"
          onClick={onContinue}
          className="w-full py-3.5 px-6 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>{isLastQuestion ? t.viewResults : t.continueBtn}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
