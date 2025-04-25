'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import TopNavbar from '@/components/TopNavbar';
import TimeBasedStrategy from './TimeBasedStrategy';
import ClassicStrategy from './ClassicStrategy';
import EasyStrategyTemplate from './EasyStrategyTemplate'; // Import the new component

export default function StrategyLabInnerPage() {
  const [activeStrategy, setActiveStrategy] = useState<string | null>(null);

  const strategyButtons = [
    'Easy Strategy Template',
    'Time Based Strategy',
    'Classic Strategy',
    'Greeks based Strategy',
    'Indicator based Strategy',
    'Hybrid Strategy',
    'My Saved Strategy',
  ];

  return (
    <div className="relative bg-[#F5F7FA] min-h-screen">
      <TopNavbar />

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 mt-[10px] ml-[20px] mr-[30px]">
          {/* Header Row */}
          <div className="relative w-full h-[60px] mb-6 -translate-y-[10px]">
            <h1 className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[22px] font-semibold text-[#333]">
              Strategies Lab
            </h1>

            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <Button
                variant="destructive"
                className="text-red-500 bg-red-100 hover:bg-red-200"
              >
                Square off All
              </Button>
            </div>
          </div>

          {/* Strategy Type Buttons Row */}
          <div className="bg-white rounded-full p-3 flex justify-center gap-4 shadow-sm border border-gray-300 -translate-y-[15px] mb-6">
            {strategyButtons.map((label, index) => (
              <button
                key={index}
                onClick={() => setActiveStrategy(label)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                  activeStrategy === label
                    ? 'bg-[#1A73E8] text-white'
                    : 'bg-white text-[#333] hover:bg-[#1A73E8] hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Conditional Components */}
          {activeStrategy === 'Easy Strategy Template' && (
            <div className="mt-6">
              <EasyStrategyTemplate />
            </div>
          )}

          {activeStrategy === 'Time Based Strategy' && (
            <div className="mt-6">
              <TimeBasedStrategy />
            </div>
          )}

          {activeStrategy === 'Classic Strategy' && (
            <div className="mt-6">
              <ClassicStrategy />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}