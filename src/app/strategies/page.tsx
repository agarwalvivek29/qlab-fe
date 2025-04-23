'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TopNavbar from '@/components/TopNavbar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const strategies = [
  {
    name: 'DeltaSync Nifty',
    type: 'In-House Strategy',
    capital: '₹ 7,00,000',
    drawdown: '1.24%',
    trades: '7000',
  },
  {
    name: 'Reinventing Delta Neutral',
    type: 'RA Blackbox Strategies',
    capital: '₹ 7,00,000',
    drawdown: '1.24%',
    trades: '7000',
  },
  {
    name: 'BN Delta Neutral',
    type: 'In-House Strategy',
    capital: '₹ 7,00,000',
    drawdown: '1.24%',
    trades: '7000',
  },
];

export default function StrategiesPage() {
  const [filter, setFilter] = useState('All');

  const filteredStrategies =
    filter === 'All'
      ? strategies
      : strategies.filter((s) => s.type === filter);

  return (
    <div className="p-6 space-y-6">
      <TopNavbar />

      {/* Title and Square off */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Strategies</h1>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="destructive"
                className="border border-red-500 text-red-500 bg-red-100 hover:bg-red-200"
              >
                Square off All
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Close all open positions and cancel all pending orders</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Filter Buttons */}
      <div className="w-full mt-4">
        <div className="flex justify-between items-center w-full p-1 border border-gray-300 rounded-full overflow-hidden">
          {[
            'All',
            'In-House Strategy',
            'RA Blackbox Strategies',
            'Time Based Strategy',
            'Classic Strategy',
            'Hybrid Strategy',
            'Greeks based Strategy',
            'My Saved Strategy',
          ].map((label) => (
            <button
              key={label}
              onClick={() => setFilter(label)}
              className={`flex-1 text-sm text-center transition duration-200 font-bold
                ${filter === label
                  ? 'text-black'
                  : label === 'All'
                  ? 'bg-white text-gray-800'
                  : 'bg-white text-gray-800 hover:bg-blue-200 hover:text-blue-600 rounded-full'} 
                ${label === 'All' ? 'w-[1cm] px-0 py-1' : 'px-1 py-3'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Search + Clear */}
      <div className="flex justify-between items-center mt-4">
        <div className="w-1/2">
          <Input placeholder="Search" className="rounded-full w-full" />
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="border border-red-500 text-red-500 bg-white hover:bg-red-50 hover:text-red-600 text-sm px-9 py-4.5 rounded-lg"
              >
                X Clear
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Clear all search filters</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Strategy Cards Section - ORIGINAL */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredStrategies.map((strategy, idx) => (
          <Dialog key={`strategy-${idx}`}>
            <Card className="p-4 space-y-4">
              <CardContent className="space-y-2">
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-semibold">{strategy.name}</h2>
                  <span className="text-sm font-medium px-2 py-1 rounded bg-green-100 text-green-700">
                    {strategy.type}
                  </span>
                </div>

                <div className="grid grid-cols-3 text-sm border border-gray-200 rounded p-2">
                  <div>
                    <p className="text-muted-foreground">Capital</p>
                    <p className="text-red-600 font-semibold">{strategy.capital}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Max. Drawdown</p>
                    <p className="text-blue-600 font-semibold">{strategy.drawdown}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">No. of Trades</p>
                    <p>{strategy.trades}</p>
                  </div>
                </div>

                <div className="text-sm text-blue-600 font-medium cursor-pointer text-right">
                  Strategy Activity
                </div>

                <div className="flex gap-2 mt-2">
                  <Button className="flex-1 text-xs py-1.5 h-auto" variant="outline">
                    Customize and Deploy
                  </Button>
                  <Button className="flex-1 text-xs py-1.5 h-auto bg-green-600 hover:bg-green-700 text-white">
                    One Click Deploy
                  </Button>
                  <DialogTrigger asChild>
                    <Button className="flex-1 text-xs py-1.5 h-auto bg-gray-400 hover:bg-gray-500 text-white">
                      View Detail
                    </Button>
                  </DialogTrigger>
                </div>
              </CardContent>
            </Card>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>{strategy.name}</DialogTitle>
              </DialogHeader>
              <p className="text-sm text-muted-foreground mt-2">
                In this strategy we sell nifty strangle but the quantity is matched on delta level.
              </p>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {/* Strategy Cards Section - DUPLICATE */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredStrategies.map((strategy, idx) => (
          <Dialog key={`strategy-duplicate-${idx}`}>
            <Card className="p-4 space-y-4">
              <CardContent className="space-y-2">
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-semibold">{strategy.name}</h2>
                  <span className="text-sm font-medium px-2 py-1 rounded bg-green-100 text-green-700">
                    {strategy.type}
                  </span>
                </div>

                <div className="grid grid-cols-3 text-sm border border-gray-200 rounded p-2">
                  <div>
                    <p className="text-muted-foreground">Capital</p>
                    <p className="text-red-600 font-semibold">{strategy.capital}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Max. Drawdown</p>
                    <p className="text-blue-600 font-semibold">{strategy.drawdown}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">No. of Trades</p>
                    <p>{strategy.trades}</p>
                  </div>
                </div>

                <div className="text-sm text-blue-600 font-medium cursor-pointer text-right">
                  Strategy Activity
                </div>

                <div className="flex gap-2 mt-2">
                  <Button className="flex-1 text-xs py-1.5 h-auto" variant="outline">
                    Customize and Deploy
                  </Button>
                  <Button className="flex-1 text-xs py-1.5 h-auto bg-green-600 hover:bg-green-700 text-white">
                    One Click Deploy
                  </Button>
                  <DialogTrigger asChild>
                    <Button className="flex-1 text-xs py-1.5 h-auto bg-gray-400 hover:bg-gray-500 text-white">
                      View Detail
                    </Button>
                  </DialogTrigger>
                </div>
              </CardContent>
            </Card>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>{strategy.name}</DialogTitle>
              </DialogHeader>
              <p className="text-sm text-muted-foreground mt-2">
                In this strategy we sell nifty strangle but the quantity is matched on delta level.
              </p>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
