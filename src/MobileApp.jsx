import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  VectorSquare,
  SolarPanel,
  GraduationCap,
} from "lucide-react";

const MobileApp = () => {
  const [activeCard, setActiveCard] = useState(null);

  const ventures = [
    {
      id: "SQU",
      name: "QSkill",
      label: "Education Tech",
      color: "from-blue-600 to-purple-600",
      desc: "Bridging academics and industry through practical learning and real-world engineering.",
      icon: <GraduationCap className="w-5 h-5" />,
      logo: "/logo/qskill_logo_trans.png",
      link: "https://www.qskill.in/",
      heroTitle: (
        <>
          Empowering the{" "}
          <span className="text-purple-500">next-gen</span> workforce.
        </>
      ),
    },
    {
      id: "ARC",
      name: "Squarcell Infra",
      label: "Infrastructure",
      color: "from-orange-500 to-amber-600",
      desc: "Scalable engineering solutions driving modern development and sustainable growth.",
      icon: <SolarPanel className="w-5 h-5" />,
      logo: "/logo/inf-t.png",
      link: "https://infra.squarcell.com/",
      heroTitle: (
        <>
          Building the{" "}
          <span className="text-orange-500">foundation</span> of tomorrow.
        </>
      ),
    },
    {
      id: "ELL",
      name: "Squarcell Resource India",
      label: "Outsourcing",
      color: "from-cyan-400 to-teal-500",
      desc: "Reliable global outsourcing and operations management for scalable business success.",
      icon: <VectorSquare className="w-5 h-5" />,
      logo: "/logo/sri.png",
      link: "https://www.srindia.co/",
      heroTitle: (
        <>
          Empowering the{" "}
          <span className="text-cyan-400">next-gen</span> workforce.
        </>
      ),
    },
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
            src="/logo/SQUARCELL.png"
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
                      Creating innovation across{" "}
                      <span className="text-gray-500">
                        education & infra.
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