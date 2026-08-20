import React from 'react';
import { motion } from 'motion/react';
import { Users, UserCheck, Sprout, HeartHandshake } from 'lucide-react';
import StatsCounter from '../ui/StatsCounter';

const IMPACT_STATS = [
  {
    id: '1',
    value: 200,
    suffix: '+',
    label: 'Active Volunteers',
    icon: Users,
  },
  {
    id: '2',
    value: 28,
    suffix: '',
    label: 'Dedicated Teams',
    icon: UserCheck,
  },
  {
    id: '3',
    value: 20000,
    suffix: '+',
    label: 'Trees Planted',
    icon: Sprout,
  },
  {
    id: '4',
    value: 50000,
    suffix: '+',
    label: 'People Helped',
    icon: HeartHandshake,
  },
];

export default function ImpactStats() {
  return (
    <section className="py-14 sm:py-18 bg-[#006c49] text-white font-['Manrope'] shadow-inner">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-column desktop, 2x2 mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {IMPACT_STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center space-y-2 group"
              >
                <div className="w-12 h-12 rounded-[8px] bg-white/10 flex items-center justify-center mb-1 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                  <Icon className="w-6 h-6 text-white stroke-[1.75]" />
                </div>

                {/* Animated Spring Counter */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  <StatsCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={1.8}
                  />
                </div>

                <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.05em] text-white/90">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
