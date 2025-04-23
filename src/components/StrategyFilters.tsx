'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function StrategyFilters() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-off-white rounded-lg shadow-md">
      <div className="flex flex-wrap items-center gap-4">
        {/* Filter by: Positional */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-medium-gray">Filter by:</span>
          <Select>
            <SelectTrigger className="w-90 border rounded-md bg-white text-deep-blue">
              <SelectValue placeholder="Positional" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="positional">Positional</SelectItem>
              <SelectItem value="intraday">Intraday</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Exchange Filter */}
        <Select>
          <SelectTrigger className="w-90 border rounded-md bg-white text-deep-blue">
            <SelectValue placeholder="Exchanges" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nse">NSE</SelectItem>
            <SelectItem value="bse">BSE</SelectItem>
            <SelectItem value="mcx">MCX</SelectItem>
          </SelectContent>
        </Select>

        {/* Status Filter */}
        <Select>
          <SelectTrigger className="w-90 border rounded-md bg-white text-deep-blue">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="running">Running</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
            <SelectItem value="paused">Paused</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Button */}
        <Button
          variant="outline"
          className="bg-light-blue text-deep-blue border-deep-blue hover:bg-deep-blue hover:text-white font-semibold px-10 py-3 rounded-md"
        >
          <span className="font-bold">Search</span>
        </Button>

        {/* Clear Button */}
        <Button
          variant="outline"
          className="bg-off-white text-black border-gray-400 hover:bg-gray-100 font-semibold px-10 py-3 rounded-md"
        >
          <span className="font-bold">Clear</span>
        </Button>
      </div>
    </div>
  );
}
