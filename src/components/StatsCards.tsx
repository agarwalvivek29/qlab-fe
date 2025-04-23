'use client';

import { IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function StatsCards() {
  return (
    <div className="flex flex-wrap items-start justify-between px-6 py-4 bg-[var(--color-background)] gap-4">
      {/* Top Row: Title and Buttons side-by-side */}
      <div className="flex justify-between items-center w-full mb-4">
        {/* Left: Title */}
        <h2 className="font-semibold text-2xl text-[#6b6b6b] font-['Inter',Helvetica]">
          Deployed Strategy
        </h2>

        {/* Centered Buttons */}
        <div className="flex justify-center items-center space-x-0">
          <button
            type="button"
            role="radio"
            aria-checked="true"
            className="inline-flex items-center justify-center gap-2 text-sm transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-[#1a73e8] text-white font-semibold px-2 min-w-9 w-[199px] h-[50px] rounded-[100px_0px_0px_100px]"
          >
            <img className="w-[22px] h-[22px] mr-2" alt="Forward Test" src="/noun-1453492-1.svg" />
            FORWARD TEST
          </button>
          <button
            type="button"
            role="radio"
            aria-checked="false"
            className="inline-flex items-center justify-center gap-2 text-sm transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-[#e0e0e0] text-[#333333] font-semibold px-2 min-w-9 w-[167px] h-[50px] rounded-[0px_100px_100px_0px]"
          >
            <img className="w-8 h-8 mr-2" alt="Live" src="/noun-4187091-1.svg" />
            LIVE
          </button>
        </div>

        {/* Placeholder to balance layout (optional) */}
        <div className="w-[199px]" />
      </div>

      {/* Stat Cards Section */}
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Card: Deployed Capital */}
        <div className="flex items-center bg-white p-6 rounded-xl shadow-md border min-w-[400px] h-32">
          {/* Icon */}
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#F1F3F4]">
            <IndianRupee className="text-[#1A73E8]" size={40} />
          </div>

          {/* Vertical Divider */}
          <div className="w-px h-full bg-[#D3D3D3] mx-4" />

          {/* Text */}
          <div className="flex flex-col justify-center items-start">
            <p className="text-sm text-[var(--color-medium-gray)] font-medium">DEPLOYED CAPITAL</p>
            <p className="text-[var(--color-forest-green)] font-bold text-2xl">93.15 L</p>
          </div>
        </div>

        {/* Card: Intraday P&L */}
        <div className="flex items-center bg-white p-6 rounded-xl shadow-md border min-w-[400px] h-32">
          {/* Icon */}
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#F1F3F4]">
            <IndianRupee className="text-[#1A73E8]" size={40} />
          </div>

          {/* Vertical Divider */}
          <div className="w-px h-full bg-[#D3D3D3] mx-4" />

          {/* Text */}
          <div className="flex flex-col justify-center items-start">
            <p className="text-sm text-[var(--color-medium-gray)] font-medium">INTRADAY P&L</p>
            <p className="text-black font-bold text-2xl">₹ 29.26 k</p>
          </div>
        </div>

        {/* Card: Positional P&L */}
        <div className="flex items-center bg-white p-6 rounded-xl shadow-md border min-w-[400px] h-32">
          {/* Icon */}
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#F1F3F4]">
            <IndianRupee className="text-[#1A73E8]" size={40} />
          </div>

          {/* Vertical Divider */}
          <div className="w-px h-full bg-[#D3D3D3] mx-4" />

          {/* Text */}
          <div className="flex flex-col justify-center items-start">
            <p className="text-sm text-[var(--color-medium-gray)] font-medium">POSITIONAL P&L</p>
            <p className="text-[var(--color-error-red)] font-bold text-2xl">₹ -1.14 L (0)</p>
          </div>
        </div>
      </div>
      {/* Right: Action Buttons */}
      <div className="flex flex-col space-y-4 mt-0">
        <TooltipProvider>
          {/* Square off All */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="destructive"
                className="text-red-500 bg-red-100 hover:bg-red-200 text-lg font-semibold px-8 py-7 w-48"
              >
                Square off All
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Close all open positions and cancel all pending orders</p>
            </TooltipContent>
          </Tooltip>

          {/* Sum Total */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="bg-[var(--color-slate-600)] text-white hover:bg-[var(--color-slate-700)] font-semibold px-8 py-7 w-48 rounded-md">
                Sum Total
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-[var(--color-slate-700)] text-white border-none shadow-lg rounded-md px-4 py-2">
              <p className="font-semibold">₹ -84.74 k</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>



    </div>
  );
}
