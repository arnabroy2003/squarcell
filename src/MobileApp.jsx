import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  VectorSquare,
  SolarPanel,
  GraduationCap,
} from "lucide-react";
import logo from "../logo/SQUARCELL.png";
import qs from "../logo/qskill_logo_trans.png";
import infra from "../logo/inf-t.png";
import sri from "../logo/sri.png";

const MobileApp = () => {
  const [activeCard, setActiveCard] = useState(null);

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
    <div className="relative min-h-screen bg-[#06080D] text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:30px_30px]" />

        <div className="absolute top-[-150px] left-[-100px] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-150px] right-[-100px] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 backdrop-blur-xl border-b border-white/5 bg-black/20">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Squarcell"
            className="w-40 object-contain"
            draggable="false"
          />
        </div>
      </nav>

      {/* Main */}
      <main className="relative z-10 pt-28 px-4 pb-10 flex flex-col gap-8">

        {/* Hero */}
        <div className="space-y-5">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Future-Driven Ecosystem
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard || "default"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >

              <h1 className="text-4xl font-bold leading-tight tracking-tight mb-4">
                {activeCard
                  ? ventures.find((v) => v.id === activeCard).heroTitle
                  : (
                    <>
                      Creating possibilities for a{" "}
                      <span className="text-gray-500">
                        smater tomorrow
                      </span>
                    </>
                  )}
              </h1>

              <p className="text-gray-400 text-[15px] leading-relaxed">
                {activeCard
                  ? ventures.find((v) => v.id === activeCard).desc
                  : "Squarcell Group empowers industries through technology, talent development, and scalable business solutions."}
              </p>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">

          {ventures.map((v) => {

            const isOpen = activeCard === v.id;

            return (
              <motion.div
                key={v.id}
                onClick={() =>
                  setActiveCard(isOpen ? null : v.id)
                }
                animate={{
                  height: isOpen ? 360 : 90,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0D111A] cursor-pointer"
              >

                {/* Gradient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-[0.12]`}
                />

                {/* Background Text */}
                <div className="absolute top-2 right-3 text-[4rem] font-black text-white/[0.04] tracking-[-0.08em] select-none">
                  {v.id}
                </div>

                {/* Content */}
                <div className="relative h-full p-5 flex flex-col justify-between">

                  {/* Top */}
                  <div className="flex justify-between items-start">

                    <div>
                      <p className="uppercase tracking-[0.25em] text-[10px] text-white/40 mb-2">
                        {v.label}
                      </p>

                      <h2 className="text-xl font-bold">
                        {v.name}
                      </h2>
                    </div>

                    <div className="p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                      {v.icon}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>

                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.25 }}
                        className="mt-6 flex flex-col gap-5"
                      >

                        {/* Logo */}
                        <div className="w-24 h-24 relative">
                          <img
                            src={v.logo}
                            alt={v.name}
                            className="w-full h-full object-contain brightness-0 invert opacity-80"
                          />
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-[13px] leading-relaxed">
                          {v.desc}
                        </p>

                        {/* Button */}
                        <a
                          href={v.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 w-fit flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-bold text-[11px] uppercase tracking-[0.15em] active:scale-95 transition-all"
                        >
                          Explore Venture

                          <ArrowRight className="w-4 h-4" />
                        </a>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </div>

              </motion.div>
            );
          })}

        </div>
      </main>
    </div>
  );
};

export default MobileApp;