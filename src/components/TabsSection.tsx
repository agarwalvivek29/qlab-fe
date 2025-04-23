'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StrategyCard } from './StrategyCard';

export const TabsSection = () => {
  return (
    <Tabs defaultValue="running" className="w-full font-inter">
      <TabsList className="mb-4 bg-light-blue rounded-xl p-1">
        <TabsTrigger
          value="running"
          className="text-filter-label text-medium-gray data-[state=active]:bg-deep-blue data-[state=active]:text-white px-4 py-1 rounded-lg transition"
        >
          Running
        </TabsTrigger>
        <TabsTrigger
          value="completed"
          className="text-filter-label text-medium-gray data-[state=active]:bg-deep-blue data-[state=active]:text-white px-4 py-1 rounded-lg transition"
        >
          Completed
        </TabsTrigger>
        <TabsTrigger
          value="stopped"
          className="text-filter-label text-medium-gray data-[state=active]:bg-deep-blue data-[state=active]:text-white px-4 py-1 rounded-lg transition"
        >
          Stopped
        </TabsTrigger>
      </TabsList>

      <TabsContent value="running" className="flex flex-wrap gap-4">
        <StrategyCard
          title="Bank Nifty Breakout"
          subtitle="Intraday Strategy"
          status="Running"
          pnl="+₹1,250"
          pnlPercent="+2.8%"
        />
        <StrategyCard
          title="Option Scalper"
          subtitle="High-Frequency"
          status="Running"
          pnl="+₹620"
          pnlPercent="+1.1%"
        />
      </TabsContent>

      <TabsContent value="completed" className="flex flex-wrap gap-4">
        <StrategyCard
          title="Gap Up Reversal"
          subtitle="Swing Trade"
          status="Completed"
          pnl="+₹980"
          pnlPercent="+2.0%"
        />
      </TabsContent>

      <TabsContent value="stopped" className="flex flex-wrap gap-4">
        <StrategyCard
          title="Index Hedge"
          subtitle="Hedging"
          status="Stopped"
          pnl="-₹150"
          pnlPercent="-0.3%"
        />
      </TabsContent>
    </Tabs>
  );
};
