'use client';

import { motion } from 'framer-motion';
import { Stethoscope, Trophy } from 'lucide-react';

interface ThemeToggleProps {
    isFanMode: boolean;
    toggle: () => void;
}

export default function ThemeToggle({ isFanMode, toggle }: ThemeToggleProps) {
    return (
        <div
            className={`relative flex w-24 h-12 rounded-full p-1 cursor-pointer transition-colors duration-500 ${isFanMode ? 'bg-gray-900 border border-sky-500' : 'bg-gray-200 border border-blue-200'}`}
            onClick={toggle}
        >
            <motion.div
                className="absolute w-10 h-10 rounded-full flex items-center justify-center shadow-md bg-white z-10"
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                style={{
                    left: isFanMode ? 'calc(100% - 2.75rem)' : '0.25rem' // Manual positioning logic fallback or just let layout handle it if we use justify-start/end but absolute is precise here
                }}
            >
                {isFanMode ? (
                    <Trophy className="w-6 h-6 text-sky-500" />
                ) : (
                    <Stethoscope className="w-6 h-6 text-blue-600" />
                )}
            </motion.div>

            {/* Background Icons/Text for context (Optional, simple indicators) */}
            <div className="flex w-full justify-between items-center px-2 text-xs font-bold">
                <span className={`transition-opacity duration-300 ${isFanMode ? 'opacity-50 text-gray-400' : 'opacity-100 text-blue-800'}`}>Dr.</span>
                <span className={`transition-opacity duration-300 ${isFanMode ? 'opacity-100 text-sky-500' : 'opacity-50 text-gray-400'}`}>Fan</span>
            </div>
        </div>
    );
}





