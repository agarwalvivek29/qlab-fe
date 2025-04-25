'use client';

import { useState } from 'react';
import { IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';

export default function StatsCards() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPnL = 2812000; // ₹ 28.12L
  const formattedPnL = `₹ ${Math.abs(totalPnL / 1000).toFixed(2)} k`;
  const isProfit = totalPnL >= 0;

  return (
    <div className="flex flex-wrap items-start justify-between px-6 py-4 bg-[var(--color-background)] gap-4">
      {/* Top Row: Title and Buttons */}
      <div className="flex justify-between items-center w-full mb-4">
        <h2 className="font-semibold text-2xl text-[#6b6b6b] font-['Inter',Helvetica]">
          Deployed Strategy
        </h2>

        {/* Forward Test / Live Buttons */}
        <div className="flex justify-center items-center space-x-0">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 text-sm transition-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-[#1a73e8] text-white font-semibold px-2 min-w-9 w-[199px] h-[50px] rounded-[100px_0px_0px_100px]"
          >
            <img className="w-[22px] h-[22px] mr-2" alt="Forward Test" src="/noun-1453492-1.svg" />
            FORWARD TEST
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 text-sm transition-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-[#e0e0e0] text-[#333333] font-semibold px-2 min-w-9 w-[167px] h-[50px] rounded-[0px_100px_100px_0px]"
          >
            <img className="w-8 h-8 mr-2" alt="Live" src="/noun-4187091-1.svg" />
            LIVE
          </button>
        </div>


        {/* Placeholder for right space */}
        <div className="w-[199px]" />
      </div>

      {/* Stat Cards */}
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Card 1 */}
        <div className="flex items-center bg-white p-6 rounded-xl shadow-md border min-w-[400px] h-32">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#F1F3F4]">
            <IndianRupee className="text-[#1A73E8]" size={40} />
          </div>
          <div className="w-px h-full bg-[#D3D3D3] mx-4" />
          <div className="flex flex-col justify-center items-start">
            <p className="text-sm text-[var(--color-medium-gray)] font-medium">DEPLOYED CAPITAL</p>
            <p className="text-[var(--color-forest-green)] font-bold text-2xl">93.15 L</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center bg-white p-6 rounded-xl shadow-md border min-w-[400px] h-32">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#F1F3F4]">
            <IndianRupee className="text-[#1A73E8]" size={40} />
          </div>
          <div className="w-px h-full bg-[#D3D3D3] mx-4" />
          <div className="flex flex-col justify-center items-start">
            <p className="text-sm text-[var(--color-medium-gray)] font-medium">INTRADAY P&L</p>
            <p className="text-black font-bold text-2xl">₹ 29.26 L</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center bg-white p-6 rounded-xl shadow-md border min-w-[400px] h-32">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#F1F3F4]">
            <IndianRupee className="text-[#1A73E8]" size={40} />
          </div>
          <div className="w-px h-full bg-[#D3D3D3] mx-4" />
          <div className="flex flex-col justify-center items-start">
            <p className="text-sm text-[var(--color-medium-gray)] font-medium">POSITIONAL P&L</p>
            <p className="text-[var(--color-error-red)] font-bold text-2xl">₹ -1.14 L (0)</p>
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex flex-col space-y-4 mt-0">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="destructive"
                className="text-red-500 bg-red-100 hover:bg-red-200 text-lg font-semibold px-8 py-7 w-48"
              >
                Square off All
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-white p-4 border border-gray-300 shadow-md rounded-md max-w-xs text-sm text-gray-800">
              <div className="text-red-600 font-semibold mb-1">Square off All</div>
              <div>Close all open positions and cancel all pending orders</div>
            </TooltipContent>
          </Tooltip>




          {/* Total P&L Modal Button */}
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[var(--color-slate-600)] text-white hover:bg-[var(--color-slate-700)] font-semibold px-8 py-7 w-48 rounded-md">
                Total P&L
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white shadow-lg rounded-lg p-6 w-[300px]">
              <DialogHeader>
                <DialogTitle className="text-lg font-bold mb-4">Total P&L Summary</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-3 text-center">
                <p className="text-gray-600 font-medium">Total P&L</p>
                <p className={`text-2xl font-bold ${isProfit ? 'text-green-600' : 'text-red-500'}`}>
                  {formattedPnL}
                </p>
                <p className="text-sm text-gray-500 font-semibold">
                  {isProfit ? 'Profit' : 'Loss'}
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </TooltipProvider>
      </div>
    </div>
  );
}
