import React from 'react';
import { Award, Trophy, Trash2, X, Medal } from 'lucide-react';
import { clearLeaderboard } from '../utils/storage';

export default function LeaderboardModal({
  isOpen,
  onClose,
  records,
  onRefresh,
  t,
  lang
}) {
  if (!isOpen) return null;

  const handleClear = () => {
    if (window.confirm(lang === 'ms' ? 'Padam semua rekod papan pendahulu?' : 'Clear all leaderboard records?')) {
      clearLeaderboard();
      onRefresh();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 max-h-[85vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900">
                {t.leaderboardTitle}
              </h3>
              <span className="text-xs text-slate-500 font-medium">
                PPR Pantai Ria Blok C • SULAM Bootcamp
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-2">
          {records.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-xs">
              {t.noRecords}
            </div>
          ) : (
            records.map((entry, idx) => {
              const isTop1 = idx === 0;
              const isTop2 = idx === 1;
              const isTop3 = idx === 2;

              let rankBadge = (
                <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center">
                  {idx + 1}
                </span>
              );

              if (isTop1) {
                rankBadge = (
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                    🥇
                  </span>
                );
              } else if (isTop2) {
                rankBadge = (
                  <span className="w-6 h-6 rounded-full bg-slate-300 text-slate-800 font-bold text-xs flex items-center justify-center shadow-sm">
                    🥈
                  </span>
                );
              } else if (isTop3) {
                rankBadge = (
                  <span className="w-6 h-6 rounded-full bg-amber-700 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                    🥉
                  </span>
                );
              }

              return (
                <div
                  key={entry.id || idx}
                  className={`p-3 rounded-2xl border flex items-center justify-between gap-3 text-xs ${
                    isTop1
                      ? 'bg-amber-50/70 border-amber-300'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {rankBadge}
                    <div className="truncate">
                      <div className="font-extrabold text-slate-900 truncate">
                        {entry.name}
                      </div>
                      <div className="text-xs text-slate-500">
                        {entry.date}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-extrabold text-amber-600 text-sm">
                      {entry.score} / {entry.total}
                    </span>
                    <span className="text-xs text-slate-600 block">
                      {entry.timeSec != null
                        ? `${Math.floor(entry.timeSec / 60)}:${String(entry.timeSec % 60).padStart(2, '0')}`
                        : `${entry.percentage}%`}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          {records.length > 0 && (
            <button
              onClick={handleClear}
              className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1 font-semibold"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>{t.clearRecords}</span>
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-auto px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
          >
            {t.closeLeaderboard}
          </button>
        </div>
      </div>
    </div>
  );
}
