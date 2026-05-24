import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, VectorSquare, SolarPanel, GraduationCap, ImageOff } from 'lucide-react';
import logo from "../logo/SQUARCELL.png";
import qs from "../logo/qskill_logo_trans.png";
import infra from "../logo/inf-t.png";
import sri from "../logo/sri.png";

const SquarcellLanding = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse tracking for the subtle radial glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const ventures = [
  {
    id: 'SQU',
    name: 'Squarcell Resource India',
    label: 'Human Resource',
    color: 'from-cyan-400 to-teal-500',
    glow: 'rgba(6, 182, 212, 0.3)',
    desc: 'Reliable global outsourcing and operations management for scalable business success.',
    icon: <VectorSquare className="w-6 h-6" />,
    logo: sri,
    logoSize: "w-28 h-28 sm:w-30 sm:h-30 lg:w-34 lg:h-34 bottom-5",
    link: "https://www.srindia.co/",
    // heroTitle: <>Global <span className="text-cyan-400">excellence</span> in every operation.</>
    heroTitle: <>Empowering the <span className="text-cyan-400">next-gen</span> workforce.</>
  },

  {
    id: 'ARC',
    name: 'Squarcell Infra',
    label: 'Infrastructure',
    color: 'from-orange-500 to-amber-600',
    glow: 'rgba(245, 158, 11, 0.3)',
    desc: 'Scalable engineering solutions driving modern development and sustainable growth.',
    icon: <SolarPanel className="w-6 h-6" />,
    logo: infra,
    logoSize: "w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20",
    link: "https://infra.squarcell.com/",
    heroTitle: <>Building the <span className="text-orange-500">foundation</span> of tomorrow.</>
  },

  {
    id: 'ELL',
    name: 'QSkill',
    label: 'Education Tech', // Updated
    color: 'from-blue-600 to-purple-600',
    glow: 'rgba(147, 51, 234, 0.3)',
    desc: 'Bridging academics and industry through practical learning and real-world engineering.',
    icon: <GraduationCap className="w-6 h-6" />,
    logo: qs, // Add your logo path here
    logoSize: "w-18 h-18 sm:w-20 sm:h-20 lg:w-24 lg:h-24",
    link: "https://www.qskill.in/",
    heroTitle: <>Transforming <span className="text-purple-500">Learners</span> into Professionals</>
  }
];

  return (
    <div className="relative min-h-screen bg-[#06080D] text-white overflow-hidden selection:bg-purple-500/30">
      
      {/* 🌌 PREMIUM BACKGROUND SYSTEM */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] z-50" />
        <div 
          className="absolute inset-0 transition-colors duration-1000"
          style={{ 
            background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, ${hoveredCard ? ventures.find(v => v.id === hoveredCard).glow : 'rgba(29, 78, 216, 0.1)'}, transparent 80%)` 
          }} 
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* 🧭 NAVBAR */}
      <nav className="fixed top-0 w-full z-[100] px-4 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="flex items-center group cursor-pointer">
  <div className="w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center">
    
    <img 
  src={logo}
  alt="Squarcell"
  className="absolute object-contain scale-[0.55] sm:scale-[0.28] lg:scale-[0.3] left-[-65px] sm:left-[-65px] lg:left-[-350px] will-change-transform"
  draggable="false"
/>

  </div>
</div>
        <div className="hidden md:flex gap-10 text-sm font-medium text-gray-400 tracking-widest uppercase">
          {['About', 'Ventures', 'Vision', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
            </a>
          ))}
        </div>
      </nav>

      {/* 🖥 HERO SECTION */}
      <main className="relative z-10 pt-24 sm:pt-28 lg:pt-30 px-5 sm:px-8 md:px-20 min-h-screen flex flex-col lg:flex-row gap-10 lg:gap-16">
        
  {/* LEFT SECTION */}
  <div className="w-full lg:w-[45%] space-y-6 lg:space-y-8">
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase"
    >
      <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
      Future-Driven Ecosystem
    </motion.div>

    {/* Dynamic Text */}
    <div className="min-h-[220px] sm:min-h-[240px] lg:h-[200px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={hoveredCard || 'default'}
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1] lg:leading-[0.95] mb-5 lg:mb-6">
            {hoveredCard 
              ? ventures.find(v => v.id === hoveredCard).heroTitle 
              : <>Creating possibilities for a <span className="text-gray-500">smater tomorrow</span></>
            }
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-full lg:max-w-md">
            {hoveredCard 
              ? ventures.find(v => v.id === hoveredCard).desc 
              : "Squarcell Group empowers industries through technology, talent development, and scalable business solutions."
            }
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  </div>

  {/* RIGHT SECTION */}
  <div className="w-full lg:w-[55%] flex flex-col lg:flex-row gap-4 h-auto lg:h-[550px]">

    {ventures.map((v) => (
      <motion.div
        key={v.id}
  onHoverStart={() => window.innerWidth >= 1024 && setHoveredCard(v.id)}
  onHoverEnd={() => window.innerWidth >= 1024 && setHoveredCard(null)}
  onClick={() =>
    window.innerWidth < 1024 &&
    setHoveredCard(hoveredCard === v.id ? null : v.id)
  }
        className="relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden cursor-pointer bg-[#0D111A] border border-white/10 group min-h-[80px] sm:min-h-[100px]"
        animate={{ 
  flex: hoveredCard === v.id ? 5 : (hoveredCard === null ? 2 : 1),
  height: typeof window !== 'undefined' && window.innerWidth < 1024
    ? (hoveredCard === v.id ? 320 : 72)
    : 'auto',
}}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >

        {/* Glow */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br ${v.color}`} />

        {/* Top Border */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Huge Background Number */}
        <div
  className={`absolute top-6 ${
    v.id === 'ELL' ? 'left-2' : 'right-2'
  } text-[4rem] sm:text-[5rem] lg:text-[15rem] font-black tracking-[-0.05em] text-white/[0.04] group-hover:text-white/[0.07] transition-all duration-500 pointer-events-none select-none`}
>
  {v.id}
</div>

        {/* Card Content */}
        <div className="absolute inset-0 p-5 sm:p-7 lg:p-10 flex flex-col justify-between overflow-hidden">

          {/* Mobile Label */}
          <div className="lg:hidden">
            <span className="uppercase tracking-[0.3em] text-sm text-white/40">
              {v.label}
            </span>
          </div>

          {/* Desktop Vertical Label */}
          <div className="hidden lg:block absolute right-8 bottom-4 group-hover:opacity-0 transition-all duration-500 ease-in-out">
            <span 
              className="uppercase tracking-[0.5em] text-3xl font-light text-white/30 whitespace-nowrap"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              {v.label}
            </span>
          </div>

          {/* Hover Content */}
          <AnimatePresence mode="wait">
            {hoveredCard === v.id && (
              <motion.div 
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="h-full flex flex-col justify-between relative z-10"
              >

                {/* Top */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 }}}
                  transition={{ delay: 0.1 }}
                  className="flex justify-between items-start"
                >
                  <div className={`${v.logoSize} relative`}>
                    <img 
                      src={v.logo} 
                      alt={v.name} 
                      className="w-full h-full object-contain filter brightness-0 invert opacity-80" 
                    />
                  </div>

                  <div className="p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    {v.icon}
                  </div>
                </motion.div>

                {/* Bottom */}
                <div className="flex flex-col gap-3">
                  
                  <motion.h3 
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 }}}
                    className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white italic"
                  >
                    {v.name}
                  </motion.h3>

                  <motion.p 
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 }}}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-sm leading-relaxed max-w-full lg:max-w-[280px] font-medium"
                  >
                    {v.desc}
                  </motion.p>

                  <motion.a
  href={v.link}
  target="_blank"
  rel="noopener noreferrer"
  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 }}}
  transition={{ delay: 0.3 }}
  className="mt-4 lg:mt-6 w-fit group/btn flex items-center gap-3 bg-white text-black px-6 py-3 lg:px-8 lg:py-4 rounded-sm font-black text-[10px] uppercase tracking-[0.2em] hover:bg-transparent hover:text-white border border-white transition-all duration-300"
>
  Explore Venture

  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
</motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Blur Circle */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-white/10 transition-colors" />
        </div>
      </motion.div>
    ))}
  </div>
</main>

      {/* 🌍 VISION SECTION (Centered, Emotional, Premium) */}
      

    </div>
  );
};

export default SquarcellLanding;