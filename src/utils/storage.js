const LEADERBOARD_KEY = 'sulam_quiz_leaderboard';
const PREFS_KEY = 'sulam_quiz_prefs';

export function getLeaderboard() {
  try {
    const raw = localStorage.getItem(LEADERBOARD_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveScoreToLeaderboard(entry) {
  try {
    const records = getLeaderboard();
    const newEntry = {
      id: Date.now().toString(),
      name: entry.name || 'Wira PPR',
      score: entry.score || 0,
      total: entry.total || 18,
      timeSec: entry.timeSec || null,
      percentage: Math.round(((entry.score || 0) / (entry.total || 18)) * 100),
      date: new Date().toLocaleDateString('ms-MY', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    records.push(newEntry);
    // Highest score first; when scores tie, the faster finish ranks higher
    records.sort((a, b) => b.score - a.score || (a.timeSec ?? Infinity) - (b.timeSec ?? Infinity));
    const topRecords = records.slice(0, 50);
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(topRecords));
    return topRecords;
  } catch {
    return [];
  }
}

export function clearLeaderboard() {
  try {
    localStorage.removeItem(LEADERBOARD_KEY);
  } catch {
    // Ignore
  }
}

export function getSavedPreferences() {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    return raw ? JSON.parse(raw) : { lang: 'ms', soundEnabled: true, lastPlayerName: '' };
  } catch {
    return { lang: 'ms', soundEnabled: true, lastPlayerName: '' };
  }
}

export function savePreferences(prefs) {
  try {
    const existing = getSavedPreferences();
    localStorage.setItem(PREFS_KEY, JSON.stringify({ ...existing, ...prefs }));
  } catch {
    // Ignore
  }
}
