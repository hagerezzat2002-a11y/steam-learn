import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Cpu, 
  Lightbulb, 
  Trophy, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Circle,
  Globe,
  LayoutDashboard,
  Rocket
} from 'lucide-react';
import { Language, UserProgress, Level, SteamProject } from './types';
import { LEVELS, STEAM_PROJECTS } from './constants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [view, setView] = useState<'home' | 'level' | 'projects' | 'quiz'>('home');
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [selectedProject, setSelectedProject] = useState<SteamProject | null>(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('hero_academy_progress');
    return saved ? JSON.parse(saved) : { completedLevels: [], currentLevelId: 'arduino-1', points: 0 };
  });

  useEffect(() => {
    localStorage.setItem('hero_academy_progress', JSON.stringify(progress));
  }, [progress]);

  const t = (en: string, ar: string) => (lang === 'en' ? en : ar);

  const handleCompleteLevel = (levelId: string) => {
    if (!progress.completedLevels.includes(levelId)) {
      setProgress(prev => ({
        ...prev,
        completedLevels: [...prev.completedLevels, levelId],
        points: prev.points + 100
      }));
    }
    setView('home');
  };

  const renderHome = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
          {t('Hero Academy', 'أكاديمية الأبطال')}
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {t('Learn electronics and programming step by step through fun levels and projects!', 'تعلم الإلكترونيات والبرمجة خطوة بخطوة من خلال مستويات ومشروعات ممتعة!')}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Cpu className="text-indigo-600" />
            {t('Arduino Path', 'مسار الأردوينو')}
          </h2>
          <div className="space-y-4">
            {LEVELS.filter(l => l.type === 'arduino').map((level) => (
              <LevelCard 
                key={level.id} 
                level={level} 
                lang={lang} 
                isCompleted={progress.completedLevels.includes(level.id)}
                onClick={() => {
                  setSelectedLevel(level);
                  setCurrentLessonIndex(0);
                  setView('level');
                }}
              />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Lightbulb className="text-amber-500" />
            {t('Circuit Path', 'مسار الدوائر')}
          </h2>
          <div className="space-y-4">
            {LEVELS.filter(l => l.type === 'circuit').map((level) => (
              <LevelCard 
                key={level.id} 
                level={level} 
                lang={lang} 
                isCompleted={progress.completedLevels.includes(level.id)}
                onClick={() => {
                  setSelectedLevel(level);
                  setCurrentLessonIndex(0);
                  setView('level');
                }}
              />
            ))}
          </div>
        </section>
      </div>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Rocket className="text-emerald-500" />
            {t('STEAM Projects', 'مشروعات ستيم')}
          </h2>
          <button 
            onClick={() => setView('projects')}
            className="text-indigo-600 hover:underline font-medium"
          >
            {t('View All', 'عرض الكل')}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STEAM_PROJECTS.slice(0, 3).map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              lang={lang} 
              onClick={() => {
                setSelectedProject(project);
                setView('projects');
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );

  const renderLevel = () => {
    if (!selectedLevel) return null;
    const lesson = selectedLevel.lessons[currentLessonIndex];

    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <button 
          onClick={() => setView('home')}
          className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
        >
          {lang === 'en' ? <ChevronLeft /> : <ChevronRight />}
          {t('Back to Home', 'العودة للرئيسية')}
        </button>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="h-64 overflow-hidden">
            <img 
              src={lesson.imageUrl} 
              alt={lesson.title[lang]} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-8 space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
                {t(`Lesson ${currentLessonIndex + 1} of ${selectedLevel.lessons.length}`, `الدرس ${currentLessonIndex + 1} من ${selectedLevel.lessons.length}`)}
              </span>
              <div className="flex gap-1">
                {selectedLevel.lessons.map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "h-1.5 w-8 rounded-full transition-colors",
                      i === currentLessonIndex ? "bg-indigo-600" : "bg-slate-200"
                    )}
                  />
                ))}
              </div>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">{lesson.title[lang]}</h2>
            <div className="prose prose-slate max-w-none text-lg text-slate-700 leading-relaxed whitespace-pre-wrap">
              {lesson.content[lang]}
            </div>

            <div className="flex justify-between pt-8 border-t border-slate-100">
              <button
                disabled={currentLessonIndex === 0}
                onClick={() => setCurrentLessonIndex(prev => prev - 1)}
                className="px-6 py-3 rounded-xl font-semibold disabled:opacity-30 flex items-center gap-2"
              >
                {lang === 'en' ? <ChevronLeft /> : <ChevronRight />}
                {t('Previous', 'السابق')}
              </button>
              
              {currentLessonIndex < selectedLevel.lessons.length - 1 ? (
                <button
                  onClick={() => setCurrentLessonIndex(prev => prev + 1)}
                  className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-lg shadow-indigo-200"
                >
                  {t('Next', 'التالي')}
                  {lang === 'en' ? <ChevronRight /> : <ChevronLeft />}
                </button>
              ) : (
                <button
                  onClick={() => setView('quiz')}
                  className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-2 shadow-lg shadow-emerald-200"
                >
                  {t('Start Quiz', 'ابدأ الاختبار')}
                  <Trophy className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderQuiz = () => {
    if (!selectedLevel) return null;
    return (
      <QuizComponent 
        level={selectedLevel} 
        lang={lang} 
        onComplete={() => handleCompleteLevel(selectedLevel.id)}
        onCancel={() => setView('level')}
      />
    );
  };

  const renderProjects = () => {
    if (selectedProject) {
      return (
        <div className="max-w-4xl mx-auto space-y-8">
          <button 
            onClick={() => setSelectedProject(null)}
            className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
          >
            {lang === 'en' ? <ChevronLeft /> : <ChevronRight />}
            {t('Back to Projects', 'العودة للمشروعات')}
          </button>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title[lang]} 
                className="rounded-2xl w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">{selectedProject.title[lang]}</h2>
                <p className="text-slate-600">{selectedProject.description[lang]}</p>
                <div className="flex gap-2">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-bold uppercase",
                    selectedProject.difficulty === 'easy' ? "bg-emerald-100 text-emerald-700" :
                    selectedProject.difficulty === 'medium' ? "bg-amber-100 text-amber-700" :
                    "bg-rose-100 text-rose-700"
                  )}>
                    {t(selectedProject.difficulty, selectedProject.difficulty === 'easy' ? 'سهل' : selectedProject.difficulty === 'medium' ? 'متوسط' : 'صعب')}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <LayoutDashboard className="w-5 h-5 text-indigo-600" />
                  {t('Materials', 'المكونات')}
                </h3>
                <ul className="space-y-2">
                  {selectedProject.materials[lang].map((m, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                  {t('Steps', 'الخطوات')}
                </h3>
                <ol className="space-y-4">
                  {selectedProject.steps[lang].map((s, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <p className="text-slate-700 pt-1">{s}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setView('home')}
            className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
          >
            {lang === 'en' ? <ChevronLeft /> : <ChevronRight />}
            {t('Back to Home', 'العودة للرئيسية')}
          </button>
          <h2 className="text-3xl font-bold">{t('STEAM Projects', 'مشروعات ستيم')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEAM_PROJECTS.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              lang={lang} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={cn(
      "min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900",
      lang === 'ar' ? "rtl" : "ltr"
    )}>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('home')}>
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">Hero Academy</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span className="font-bold text-sm">{progress.points}</span>
            </div>
            <button 
              onClick={() => setLang(l => l === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-slate-100 transition-colors text-sm font-medium"
            >
              <Globe className="w-4 h-4" />
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={view + (selectedProject?.id || '')}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {view === 'home' && renderHome()}
            {view === 'level' && renderLevel()}
            {view === 'quiz' && renderQuiz()}
            {view === 'projects' && renderProjects()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-slate-100 py-12 mt-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Hero Academy. {t('Made for future engineers.', 'صنع لمهندسي المستقبل.')}
          </p>
        </div>
      </footer>
    </div>
  );
}

function LevelCard({ level, lang, isCompleted, onClick }: { 
  level: Level; 
  lang: Language; 
  isCompleted: boolean;
  onClick: () => void;
}) {
  return (
    <button 
      onClick={onClick}
      className="w-full group text-start bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300 relative overflow-hidden"
    >
      <div className="flex items-center gap-4">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
          isCompleted ? "bg-emerald-100 text-emerald-600" : "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
        )}>
          {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
        </div>
        <div>
          <h3 className="font-bold text-lg">{level.name[lang]}</h3>
          <p className="text-slate-500 text-sm">{level.description[lang]}</p>
        </div>
      </div>
      <div className={cn(
        "absolute top-0 bottom-0 w-1 transition-all duration-300",
        lang === 'en' ? "right-0" : "left-0",
        isCompleted ? "bg-emerald-500" : "bg-indigo-500 opacity-0 group-hover:opacity-100"
      )} />
    </button>
  );
}

function ProjectCard({ project, lang, onClick }: { project: SteamProject; lang: Language; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden text-start"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title[lang]} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-5 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500">
            {project.difficulty}
          </span>
        </div>
        <h3 className="font-bold text-lg leading-tight">{project.title[lang]}</h3>
        <p className="text-slate-500 text-sm line-clamp-2">{project.description[lang]}</p>
      </div>
    </button>
  );
}

function QuizComponent({ level, lang, onComplete, onCancel }: { 
  level: Level; 
  lang: Language; 
  onComplete: () => void;
  onCancel: () => void;
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = level.quiz[currentQuestionIndex];
  const t = (en: string, ar: string) => (lang === 'en' ? en : ar);

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    const correct = index === question.correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < level.quiz.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    const passed = score / level.quiz.length >= 0.7;
    return (
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8 text-center space-y-6 border border-slate-100">
        <div className={cn(
          "w-20 h-20 mx-auto rounded-full flex items-center justify-center",
          passed ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"
        )}>
          {passed ? <Trophy className="w-10 h-10" /> : <Circle className="w-10 h-10" />}
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">
            {passed ? t('Great Job!', 'عمل رائع!') : t('Try Again', 'حاول مرة أخرى')}
          </h2>
          <p className="text-slate-500">
            {t(`You scored ${score} out of ${level.quiz.length}`, `لقد حصلت على ${score} من ${level.quiz.length}`)}
          </p>
        </div>
        {passed ? (
          <button
            onClick={onComplete}
            className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            {t('Finish Level', 'إنهاء المستوى')}
          </button>
        ) : (
          <button
            onClick={onCancel}
            className="w-full py-4 bg-slate-100 text-slate-900 rounded-2xl font-bold hover:bg-slate-200 transition-colors"
          >
            {t('Review Lessons', 'مراجعة الدروس')}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-8 border border-slate-100">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
          {t(`Question ${currentQuestionIndex + 1} of ${level.quiz.length}`, `السؤال ${currentQuestionIndex + 1} من ${level.quiz.length}`)}
        </span>
        <button onClick={onCancel} className="text-slate-400 hover:text-slate-600">
          {t('Cancel', 'إلغاء')}
        </button>
      </div>

      <h2 className="text-2xl font-bold text-slate-900">{question.question[lang]}</h2>

      <div className="space-y-3">
        {question.options[lang].map((option, i) => (
          <button
            key={i}
            disabled={selectedAnswer !== null}
            onClick={() => handleAnswer(i)}
            className={cn(
              "w-full p-5 rounded-2xl text-start font-medium border-2 transition-all duration-200",
              selectedAnswer === null ? "border-slate-100 hover:border-indigo-200 hover:bg-indigo-50" :
              i === question.correctAnswer ? "border-emerald-500 bg-emerald-50 text-emerald-700" :
              selectedAnswer === i ? "border-rose-500 bg-rose-50 text-rose-700" : "border-slate-100 opacity-50"
            )}
          >
            {option}
          </button>
        ))}
      </div>

      {selectedAnswer !== null && (
        <button
          onClick={nextQuestion}
          className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
        >
          {t('Continue', 'استمرار')}
          {lang === 'en' ? <ChevronRight /> : <ChevronLeft />}
        </button>
      )}
    </div>
  );
}
