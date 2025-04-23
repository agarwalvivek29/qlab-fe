'use client';
import './globals.css';

import TopNavbar from '@/components/TopNavbar';
import StatsCards from '@/components/StatsCards';
import StrategyFilters from '@/components/StrategyFilters';
import StrategyTable from '@/components/StrategyTable'; // ← Import it

export default function DeployedStrategiesPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopNavbar />
      <StatsCards />
      <StrategyFilters />
      <StrategyTable /> {/* ← Plug it in right here */}
    </div>
  );
}
