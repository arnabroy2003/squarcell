import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, HardHat, GraduationCap } from 'lucide-react';

const SquarcellLanding = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const ventures = [
    {
      id: '01',
      name: 'QSkill',
      label: 'Education Tech',
      color: 'from-blue-500 to-indigo-600',
      glow: 'rgba(59, 130, 246, 0.15)',
      desc: 'Bridging academics and industry through practical learning and real-world engineering.',
      icon: <GraduationCap className="w-6 h-6" />,
      logo: "/logo/qskill_logo_trans.png",
      heroTitle: <>Empowering the <span className="text-blue-600">next-gen</span> workforce.</>
    },
    {
      id: '02',
      name: 'SquarcellInfra',
      label: 'Infrastructure',
      color: 'from-orange-400 to-red-500',
      glow: 'rgba(249, 115, 22, 0.15)',
      desc: 'Scalable engineering solutions driving modern development and sustainable growth.',
      icon: <HardHat className="w-6 h-6" />,
      logo: "/logo/inf.png",
      heroTitle: <>Building the <span className="text-orange-500">foundation</span> of tomorrow.</>
    },
    {
      id: '03',
      name: 'SR INDIA',
      label: 'Workforce Delivery',
      color: 'from-emerald-400 to-teal-600',
      glow: 'rgba(16, 185, 129, 0.15)',
      desc: 'Reliable global outsourcing and operations management for scalable business success.',
      icon: <Globe className="w-6 h-6" />,
      logo: "/logo/sri.png",
      heroTitle: <>Global <span className="text-emerald-600">excellence</span> in every operation.</>
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-900 overflow-hidden selection:bg-blue-100">
      
      {/* 🖼 PREMIUM BACKGROUND SYSTEM */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Subtle Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Dynamic Glow */}
        <div 
          className="absolute inset-0 transition-colors duration-1000"
          style={{ 
            background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, ${hoveredCard ? ventures.find(v => v.id === hoveredCard).glow : 'rgba(203, 213, 225, 0.3)'}, transparent 80%)` 
          }} 
        />
        
        {/* Light Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* 🧭 NAVBAR */}
      <nav className="fixed top-0 w-full z-[100] px-6 md:px-20 py-6 flex justify-between items-center backdrop-blur-xl border-b border-black/[0.03] bg-white/70">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-slate-200 overflow-hidden">
            <img 
              src="/logo/sr.png" 
              alt="Logo"
              className="w-full h-full object-contain p-1.5 brightness-0 invert" 
            />
          </div>
          <span className="text-lg font-bold tracking-tighter uppercase text-slate-900">Squarcell Group</span>
        </div>
        <div className="hidden md:flex gap-10 text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase">
          {['About', 'Ventures', 'Vision', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-black transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-slate-900 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>
      </nav>

      {/* 🖥 HERO SECTION */}
      <main className="relative z-10 pt-32 md:pt-40 px-6 md:px-20 min-h-screen flex flex-col lg:flex-row gap-16">
        
        {/* LEFT SECTION */}
        <div className="w-full lg:w-[40%] space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/[0.05] bg-white shadow-sm text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Multi-Disciplinary Group
          </motion.div>

          <div className="min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredCard || 'default'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[0.9] mb-8">
                  {hoveredCard 
                    ? ventures.find(v => v.id === hoveredCard).heroTitle 
                    : <>Innovating at the <span className="text-slate-400">intersection</span> of industry.</>
                  }
                </h1>
                <p className="text-slate-500 text-lg leading-relaxed max-w-md font-medium">
                  {hoveredCard 
                    ? ventures.find(v => v.id === hoveredCard).desc 
                    : "A premier conglomerate driving advancement in education, infrastructure, and global workforce solutions."
                  }
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT SECTION - THE CARDS */}
        <div className="w-full lg:w-[60%] flex flex-col lg:flex-row gap-4 h-[550px] mb-20">
          {ventures.map((v) => (
            <motion.div
              key={v.id}
              onHoverStart={() => setHoveredCard(v.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative rounded-[2.5rem] overflow-hidden cursor-pointer bg-white border border-black/[0.05] shadow-2xl shadow-slate-200/50 group"
              animate={{ 
                flex: hoveredCard === v.id ? 4 : (hoveredCard === null ? 2 : 1.2),
              }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 bg-gradient-to-br ${v.color}`} />
              
              {/* Index Number */}
              <div className="absolute -top-10 -right-4 text-[12rem] font-black text-slate-100 group-hover:text-slate-200/50 transition-colors pointer-events-none">
                {v.id}
              </div>

              <div className="absolute inset-0 p-10 flex flex-col justify-between">
                {/* Vertical Label (Hidden on hover) */}
                <div className="absolute right-10 bottom-10 group-hover:opacity-0 transition-opacity duration-300">
                  <span 
                    className="uppercase tracking-[0.6em] text-2xl font-black text-slate-200 whitespace-nowrap"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    {v.label}
                  </span>
                </div>

                <AnimatePresence>
                  {hoveredCard === v.id ? (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full flex flex-col justify-between relative z-10"
                    >
                      <div className="flex justify-between items-start">
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl p-3 shadow-inner">
                          <img src={v.logo} alt={v.name} className="w-full h-full object-contain grayscale" />
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 text-white shadow-lg">
                          {v.icon}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-4xl font-bold text-slate-900 tracking-tighter">
                          {v.name}
                        </h3>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[280px]">
                          {v.desc}
                        </p>
                        <button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-transform active:scale-95">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="flex flex-col h-full justify-end">
                       <div className="p-3 w-fit rounded-xl bg-slate-50 text-slate-400 border border-black/[0.03]">
                          {v.icon}
                        </div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SquarcellLanding;