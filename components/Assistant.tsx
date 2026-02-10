
import React, { useState } from 'react';
import { askF1Assistant } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    setLoading(true);
    const result = await askF1Assistant(question);
    setAnswer(result);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-10 left-10 z-[60]">
      {isOpen ? (
        <div className="glass-card w-80 md:w-96 p-6 rounded-sm shadow-2xl border-l-4 border-l-[#ff1801]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-title text-sm font-bold tracking-widest text-[#ff1801]">APEX TELEMETRY AI</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="max-h-60 overflow-y-auto mb-6 pr-2 custom-scrollbar">
            {answer ? (
              <div className="text-xs leading-relaxed text-gray-300 italic whitespace-pre-wrap">
                "{answer}"
              </div>
            ) : (
              <p className="text-xs text-gray-500">How can I assist you with the race weekend, technical data, or history today?</p>
            )}
            {loading && <div className="mt-2 h-0.5 w-full bg-zinc-800 overflow-hidden"><div className="h-full bg-[#ff1801] animate-[loading_1.5s_infinite]"></div></div>}
          </div>

          <form onSubmit={handleAsk} className="flex space-x-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask anything F1..."
              className="flex-1 bg-white/5 border border-white/10 px-4 py-2 text-xs focus:outline-none focus:border-[#ff1801]/50"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-[#ff1801] text-xs font-bold transform -skew-x-12 disabled:opacity-50"
            >
              SEND
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-black border border-[#ff1801]/30 flex items-center justify-center group transform -skew-x-12 hover:scale-110 transition-all duration-300"
        >
          <div className="w-8 h-8 bg-[#ff1801] rounded-sm flex items-center justify-center transform skew-x-12 group-hover:animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
        </button>
      )}

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Assistant;
