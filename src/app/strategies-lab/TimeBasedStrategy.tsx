'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { ChevronDown } from 'lucide-react';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

function StrategyRow({ id }: { id: number }) {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[#F9F9FC] border-b">
      <div className="flex items-center gap-3 flex-wrap">
        <input type="checkbox" className="w-4 h-4" />

        <Button variant="outline" className="rounded-full text-sm px-8 py-5 border">
          RUN
        </Button>

        <span className="text-lg">=</span>

        <div className="inline-flex">
          <span className="bg-[#5A6E8C] text-white text-sm rounded-l-full px-6 py-3 font-medium border-r border-white">
            #S-{id}
          </span>
          <span className="border text-sm px-6 py-3 rounded-r-full">ATM 1</span>
        </div>

        <span className="border text-sm px-7 py-3 rounded-full">INTRA</span>
        <span className="border text-sm px-7 py-3 rounded-full">BN</span>

        <div className="inline-flex items-center border rounded-full overflow-hidden">
          <input type="number" value={1} className="w-12 text-center text-sm px-2 py-3 border-0 rounded-none focus:outline-none" />
          <span className="bg-gray-400 text-white text-xs px-4 py-3">Multiplier</span>
        </div>

        <div className="inline-flex items-center border rounded-full overflow-hidden">
          <span className="bg-[#5A6E8C] text-white px-4 py-3 text-xs">Slip Pages %</span>
          <input type="number" value={0} className="w-12 text-sm text-center px-1 py-3 border-0 rounded-none focus:outline-none" />
        </div>

        <div className="flex items-center gap-1 border rounded-full px-3 py-3 text-sm">
          Day <ChevronDown size={16} />
        </div>
      </div>

      <div className="flex gap-1">
        {days.map((day) => (
          <Toggle
            key={day}
            pressed={selectedDays.includes(day)}
            onPressedChange={() => toggleDay(day)}
            className="rounded-full px-8 py-3 text-sm border"
          >
            {day}
          </Toggle>
        ))}
      </div>
    </div>
  );
}

export default function TimeBasedStrategy() {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
      {/* Header Toolbar */}
      <div className="px-6 py-3 bg-[#EAF1FF] border-b rounded-t-lg flex justify-between items-center relative">
        <div className="flex items-center gap-2 bg-[#EAF1FF] px-4 py-2 rounded-full">
          <span className="text-sm text-gray-700">All (5)</span>
          <ChevronDown size={16} />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span className="text-sm text-gray-600">Select All</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 transition-all duration-300"></div>
            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-full"></div>
          </label>
        </div>

        <div className="flex gap-4">
          {days.map((_, i) => (
            <div key={i} className="px-2 py-1 rounded-full border text-sm text-gray-800">✓</div>
          ))}
        </div>
      </div>

      {/* Strategy Rows */}
      {[1, 2, 3, 4, 5].map((id) => (
        <StrategyRow key={id} id={id} />
      ))}
    </div>
  );
}
