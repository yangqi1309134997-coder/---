
import React, { useState, useMemo, useEffect } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Terminal, 
  Users, 
  BookOpen, 
  Search, 
  ChevronRight, 
  BrainCircuit, 
  AlertTriangle,
  FileText,
  Gavel,
  Database
} from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { CURRICULUM, ALL_LESSONS } from './constants';
import { Lesson, Category, Difficulty, Module } from './types';

const App: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [aiAnalysis, setAiAnalysis] = useState<string>('');
  const [isAnalysing, setIsAnalysing] = useState(false);

  // Filter lessons
  const filteredLessons = useMemo(() => {
    return ALL_LESSONS.filter(lesson => {
      const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          lesson.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || lesson.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleAiAnalysis = async (lesson: Lesson) => {
    setIsAnalysing(true);
    setAiAnalysis('');
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `
        你是一位顶级网络安全专家，来自新疆幻城网安科技。
        针对课程标题为 "${lesson.title}" 的内容，请提供：
        1. 该技术点的一个极具冲击力的最新实战案例。
        2. 给普通人的3条防御建议。
        3. 针对专业人员的一个技术难点提示。
        请用专业、权威且通俗易懂的口吻回答。
      `;
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: prompt,
      });
      setAiAnalysis(response.text || '分析失败，请稍后重试。');
    } catch (error) {
      console.error(error);
      setAiAnalysis('无法连接到幻城安全AI大脑，请检查网络。');
    } finally {
      setIsAnalysing(false);
    }
  };

  useEffect(() => {
    if (selectedLesson) {
      handleAiAnalysis(selectedLesson);
    }
  }, [selectedLesson]);

  return (
    <div className="min-h-screen cyber-gradient flex flex-col">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-50 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-500/20">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">幻城网安 · 通识教育</h1>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Digital Fortress 180 Curriculum</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text"
              placeholder="搜索课程、技术点..."
              className="bg-slate-800/50 border border-slate-700 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all">
            开始学习
          </button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Sidebar - Categories & Modules */}
        <aside className="w-80 border-r border-slate-800 bg-slate-900/50 overflow-y-auto hidden lg:block p-6">
          <div className="space-y-8">
            <section>
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center">
                <BookOpen className="w-4 h-4 mr-2" /> 课程体系
              </h2>
              <div className="space-y-2">
                {CURRICULUM.map(module => (
                  <button 
                    key={module.id}
                    className="w-full text-left p-3 rounded-xl hover:bg-slate-800/80 transition-all group"
                  >
                    <div className="text-xs text-blue-400 font-bold mb-1">MODULE {module.id}</div>
                    <div className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                      {module.name.split('：')[1] || module.name}
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center">
                <Users className="w-4 h-4 mr-2" /> 分类过滤
              </h2>
              <div className="flex flex-wrap gap-2">
                {(['All', ...Object.values(Category)] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      selectedCategory === cat 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </section>
          </div>
        </aside>

        {/* Lesson Feed */}
        <section className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">180课网络安全通识教育</h2>
                <p className="text-slate-400">从小白到专家的阶梯式进化路径。深度思考，结合实战。</p>
              </div>
              <div className="flex space-x-4 text-sm">
                <div className="flex items-center text-slate-400"><span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span> 基础篇</div>
                <div className="flex items-center text-slate-400"><span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span> 进阶篇</div>
                <div className="flex items-center text-slate-400"><span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span> 专业篇</div>
              </div>
            </div>

            <div className="grid gap-4">
              {filteredLessons.map((lesson) => (
                <div 
                  key={lesson.id}
                  onClick={() => setSelectedLesson(lesson)}
                  className={`group relative p-5 rounded-2xl border transition-all cursor-pointer ${
                    selectedLesson?.id === lesson.id 
                    ? 'bg-blue-600/10 border-blue-500/50 ring-1 ring-blue-500/50' 
                    : 'bg-slate-800/40 border-slate-700/50 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold shadow-inner ${
                        lesson.difficulty === Difficulty.BEGINNER ? 'bg-green-500/10 text-green-500' :
                        lesson.difficulty === Difficulty.INTERMEDIATE ? 'bg-yellow-500/10 text-yellow-500' :
                        'bg-red-500/10 text-red-500'
                      }`}>
                        {lesson.id}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">{lesson.category}</span>
                          <span className="text-[10px] text-slate-500 px-1 border border-slate-700 rounded uppercase font-bold">{lesson.difficulty}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                          {lesson.title}
                        </h3>
                        <p className="text-sm text-slate-400 line-clamp-2 mt-1 max-w-2xl">
                          {lesson.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-slate-600 group-hover:text-blue-400 transition-transform ${selectedLesson?.id === lesson.id ? 'rotate-90' : ''}`} />
                  </div>

                  {selectedLesson?.id === lesson.id && (
                    <div className="mt-6 pt-6 border-t border-slate-700/50 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">关键技术要点</h4>
                          <ul className="space-y-2">
                            {lesson.points.map((p, i) => (
                              <li key={i} className="flex items-start text-sm text-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-3 shrink-0"></span>
                                {p}
                              </li>
                            ))}
                          </ul>
                          {lesson.caseStudy && (
                            <div className="mt-6 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                              <h5 className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2 flex items-center">
                                <AlertTriangle className="w-3 h-3 mr-1" /> 典型案例
                              </h5>
                              <p className="text-sm text-slate-300 italic">“{lesson.caseStudy}”</p>
                            </div>
                          )}
                        </div>
                        
                        <div className="bg-slate-900/80 rounded-2xl p-6 border border-slate-700/50">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center">
                              <BrainCircuit className="w-4 h-4 mr-2" /> 幻城 AI 深度解析
                            </h4>
                            {isAnalysing && <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>}
                          </div>
                          <div className="text-sm text-slate-400 leading-relaxed whitespace-pre-wrap">
                            {isAnalysing ? '正在调取全球威胁情报库分析中...' : aiAnalysis}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {filteredLessons.length === 0 && (
                <div className="text-center py-20 bg-slate-800/20 rounded-3xl border border-dashed border-slate-700">
                  <div className="text-slate-500 mb-2">未找到匹配课程</div>
                  <button 
                    onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                    className="text-blue-400 text-sm hover:underline"
                  >
                    重置所有过滤器
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-white font-bold text-lg mb-1">新疆幻城网安科技有限责任公司</div>
            <p className="text-slate-500 text-sm">专业·深度·守护数字新疆。致力于提升全民网络安全素养。</p>
          </div>
          <div className="flex space-x-8 text-sm text-slate-400">
            <a href="#" className="hover:text-blue-400 transition-colors">课程合作</a>
            <a href="#" className="hover:text-blue-400 transition-colors">技术咨询</a>
            <a href="#" className="hover:text-blue-400 transition-colors">人才招聘</a>
          </div>
          <div className="text-slate-500 text-xs">
            © 2024 Huancheng CyberSec. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
