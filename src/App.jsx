import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';
import QuizCard from './components/QuizCard';
import ExplanationModal from './components/ExplanationModal';
import ResultsScreen from './components/ResultsScreen';
import Certificate from './components/Certificate';
import EmergencyDrawer from './components/EmergencyDrawer';
import LeaderboardModal from './components/LeaderboardModal';

import { quizQuestions } from './data/quizQuestions';
import { translations } from './data/translations';
import { sound } from './utils/sound';
import { 
  getLeaderboard, 
  saveScoreToLeaderboard, 
  getSavedPreferences, 
  savePreferences 
} from './utils/storage';

export default function App() {
  const initialPrefs = getSavedPreferences();

  // App UI State
  const [lang, setLang] = useState(initialPrefs.lang || 'ms');
  const [soundEnabled, setSoundEnabled] = useState(initialPrefs.soundEnabled !== false);
  const [playerName, setPlayerName] = useState(initialPrefs.lastPlayerName || '');
  const [playMode, setPlayMode] = useState('individual');

  // Screen routing: 'welcome' | 'quiz' | 'results'
  const [currentScreen, setCurrentScreen] = useState('welcome');

  // Quiz Engine State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [answersLog, setAnswersLog] = useState({});
  const [pendingAnswer, setPendingAnswer] = useState(null);

  // Modals
  const [isExplanationOpen, setIsExplanationOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [leaderboardRecords, setLeaderboardRecords] = useState([]);

  // Load translations based on lang
  const t = translations[lang] || translations.ms;

  useEffect(() => {
    sound.setMuted(!soundEnabled);
    savePreferences({ lang, soundEnabled, lastPlayerName: playerName });
  }, [lang, soundEnabled, playerName]);

  useEffect(() => {
    setLeaderboardRecords(getLeaderboard());
  }, []);

  const handleToggleLang = () => {
    const nextLang = lang === 'ms' ? 'en' : 'ms';
    setLang(nextLang);
  };

  const handleToggleSound = () => {
    const nextSound = !soundEnabled;
    setSoundEnabled(nextSound);
    sound.setMuted(!nextSound);
  };

  const handleStartQuiz = (name, mode) => {
    setPlayerName(name);
    setPlayMode(mode);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setAnswersLog({});
    setPendingAnswer(null);
    setCurrentScreen('quiz');
    sound.playClick();
  };

  const handleConfirmAnswer = (selectedOptionId) => {
    const currentQ = quizQuestions[currentIndex];
    const chosenOpt = currentQ.options.find(opt => opt.id === selectedOptionId);
    const isCorrect = chosenOpt ? chosenOpt.isCorrect : false;

    if (isCorrect) {
      sound.playCorrect();
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      sound.playWrong();
      setStreak(0);
    }

    setAnswersLog(prev => ({
      ...prev,
      [currentQ.id]: {
        selectedOptionId,
        isCorrect
      }
    }));

    setPendingAnswer({
      question: currentQ,
      selectedOptionId,
      isCorrect
    });
    setIsExplanationOpen(true);
  };

  const handleContinueNext = () => {
    setIsExplanationOpen(false);
    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Finished all questions!
      const finalScore = score + (pendingAnswer?.isCorrect ? 0 : 0);
      saveScoreToLeaderboard({
        name: playerName,
        score: finalScore,
        total: quizQuestions.length
      });
      setLeaderboardRecords(getLeaderboard());
      setCurrentScreen('results');
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setAnswersLog({});
    setPendingAnswer(null);
    setCurrentScreen('quiz');
    sound.playClick();
  };

  return (
    <div className="min-h-screen flex flex-col hero-pattern text-slate-800">
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
        t={t}
      />

      <main className="flex-1 flex flex-col justify-center">
        {currentScreen === 'welcome' && (
          <WelcomeScreen
            onStart={handleStartQuiz}
            playerName={playerName}
            setPlayerName={setPlayerName}
            t={t}
            lang={lang}
            onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
            onOpenEmergency={() => setIsEmergencyOpen(true)}
          />
        )}

        {currentScreen === 'quiz' && (
          <QuizCard
            question={quizQuestions[currentIndex]}
            currentIndex={currentIndex}
            totalQuestions={quizQuestions.length}
            currentScore={score}
            streak={streak}
            onConfirmAnswer={handleConfirmAnswer}
            t={t}
            lang={lang}
            onOptionClickSound={() => sound.playClick()}
          />
        )}

        {currentScreen === 'results' && (
          <ResultsScreen
            score={score}
            total={quizQuestions.length}
            answersLog={answersLog}
            questions={quizQuestions}
            playerName={playerName}
            playMode={playMode}
            onRetake={handleRetakeQuiz}
            onOpenCertificate={() => setIsCertificateOpen(true)}
            onOpenEmergency={() => setIsEmergencyOpen(true)}
            t={t}
            lang={lang}
            sound={sound}
          />
        )}
      </main>

      {/* Explanation Modal */}
      <ExplanationModal
        isOpen={isExplanationOpen}
        isCorrect={pendingAnswer?.isCorrect}
        question={pendingAnswer?.question}
        selectedOptionId={pendingAnswer?.selectedOptionId}
        onContinue={handleContinueNext}
        isLastQuestion={currentIndex === quizQuestions.length - 1}
        t={t}
        lang={lang}
      />

      {/* Certificate Modal */}
      <Certificate
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        playerName={playerName}
        playMode={playMode}
        score={score}
        total={quizQuestions.length}
        t={t}
        lang={lang}
      />

      {/* Emergency Drawer */}
      <EmergencyDrawer
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
        t={t}
        lang={lang}
      />

      {/* Leaderboard Modal */}
      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
        records={leaderboardRecords}
        onRefresh={() => setLeaderboardRecords(getLeaderboard())}
        t={t}
        lang={lang}
      />

      {/* Minimal Footer */}
      <footer className="py-3 text-center text-[11px] text-slate-500 border-t border-slate-200/60 bg-white/70 print:hidden">
        <span>KRT PPR Pantai Ria Blok C &bull; Universiti Malaya WIX2001 &bull; </span>
        <strong className="text-slate-700">Berhenti, Semak, Lapor (NSRC 997)</strong>
      </footer>
    </div>
  );
}
