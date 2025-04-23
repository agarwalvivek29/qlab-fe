'use client';

import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import TopNavbar from '@/components/TopNavbar';

export default function StrategyLabInnerPage() {
  const { strategyId } = useParams();

  return (
    <div className="relative bg-[#F5F7FA] min-h-screen">
      <TopNavbar />

      <div className="flex">
        {/* Sidebar
        <div
          className="bg-white border-r border-gray-200 shadow-md p-3 mt-[10px] ml-[10px]"
          style={{
            width: '220px',
            height: '1000px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {[
            'NFBN', 'Signature', 'HNI 40 Lakhs', 'NFBN', 'Signature', 'HNI 40 Lakhs',
            'NFBN', 'Signature', 'HNI 40 Lakhs', 'NFBN', 'Signature', 'HNI 40 Lakhs',
            'NFBN', 'Signature', 'NFBN', 'HNI 40 Lakhs', 'Signature', 'NFBN',
            'HNI 40 Lakhs', 'NFBN', 'Signature',
          ].map((label, idx) => (
            <button
              key={idx}
              className="text-left text-[15px] font-medium text-[#333] hover:text-[#1A73E8] transition"
            >
              {label}
            </button>
          ))}
        </div> */}

        {/* Main Content */}
        <div className="flex-1 mt-[10px] ml-[20px] mr-[30px]">
  {/* Header Row with title, center buttons, and square off */}
  <div className="relative w-full h-[60px] mb-6 -translate-y-[10px]">
    {/* Left-aligned title */}
    <h1 className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[22px] font-semibold text-[#333]">
      Strategies Lab
    </h1>
    {/* ...rest of the content */}
  


            {/* Centered Forward Test & Live
            <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 flex gap-0">
              <button
                type="button"
                role="radio"
                aria-checked="true"
                className="inline-flex items-center justify-center gap-2 text-sm transition-colors bg-[#1a73e8] text-white font-semibold px-2 w-[199px] h-[50px] rounded-[100px_0px_0px_100px]"
              >
                <img className="w-[22px] h-[22px] mr-2" alt="Forward Test" src="/noun-1453492-1.svg" />
                FORWARD TEST
              </button>
              <button
                type="button"
                role="radio"
                aria-checked="false"
                className="inline-flex items-center justify-center gap-2 text-sm transition-colors bg-[#e0e0e0] text-[#333333] font-semibold px-2 w-[167px] h-[50px] rounded-[0px_100px_100px_0px]"
              >
                <img className="w-8 h-8 mr-2" alt="Live" src="/noun-4187091-1.svg" />
                LIVE
              </button>
            </div> */}

            {/* Right-aligned Square Off All button */}
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
          <div className="bg-white rounded-full p-3 flex justify-center gap-4 shadow-sm border border-gray-300 -translate-y-[15px]">
  {[
    'Easy Strategy Template',
    'Time Based Strategy',
    'Classic Strategy',
    'Greeks based Strategy',
    'Indicator based Strategy',
    'Hybrid Strategy',
    'My Saved Strategy',
  ].map((label, index) => (
    <button
      key={index}
      className="px-6 py-2 rounded-full bg-white text-[#333] font-medium text-sm transition-all duration-200 hover:bg-[#1A73E8] hover:text-white"
    >
      {label}
    </button>
  ))}
</div>

        </div>
      </div>
    </div>
  );
}
