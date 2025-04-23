'use client';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ChevronDown, MoreVertical } from 'lucide-react';
import classNames from 'classnames';

const strategies = [
  {
    id: 1,
    name: 'DeltaSync Nifty',
    type: 'positional',
    status: 'Active',
    pnl: '▲ 3,623 (0%)',
    pnlColor: 'text-green-600',
  },
  {
    id: 2,
    name: 'Reinventing Delta Neutral',
    type: 'intraday',
    status: 'Active',
    pnl: '▲ 71 (0%)',
    pnlColor: 'text-green-600',
  },
  {
    id: 3,
    name: 'BN Delta Neutral',
    type: 'intraday',
    status: 'Closed',
    pnl: '▲ 5,952 (0%)',
    pnlColor: 'text-green-600',
  },
  {
    id: 4,
    name: 'Delta Harvesting (In test Phase)',
    type: 'positional',
    status: 'Running',
    pnl: '▲ 18.57 k (0%)',
    pnlColor: 'text-green-600',
  },
  {
    id: 5,
    name: 'Nifty Delta Neutral Flowrider',
    type: 'positional',
    status: 'Active',
    pnl: '▲ 4,088 (0%)',
    pnlColor: 'text-green-600',
  },
  {
    id: 6,
    name: 'Nifty Delta Neutral adjustment based on favourable or non favourable trade ( In test dont deploy)',
    type: 'positional',
    status: 'Closed',
    pnl: '▲ 1,410 (0%)',
    pnlColor: 'text-green-600',
  },
  {
    id: 7,
    name: 'Nifty Delta Neutral ATM (Adjustment based on favourable or non favourable side)',
    type: 'intraday',
    status: 'Paused',
    pnl: '▼ -4,901 (0%)',
    pnlColor: 'text-red-500',
  },
  {
    id: 8,
    name: 'Bank Nifty Delta Neutral With Hedge',
    type: 'positional',
    status: 'Paused',
    pnl: '▼ -3,075 (0%)',
    pnlColor: 'text-red-500',
  },
  {
    id: 9,
    name: 'Ulta Delta BN Monthly Expiry',
    type: 'positional',
    status: 'Active',
    pnl: '▼ -1,640 (0%)',
    pnlColor: 'text-red-500',
  },
  {
    id: 10,
    name: 'Bank Nifty Delta Neutral With Hedge',
    type: 'intraday',
    status: 'Active',
    pnl: '▲ 9,031 (0%)',
    pnlColor: 'text-green-600',
  },
];

export default function StrategyTable() {
  return (
    <div className="p-6 overflow-x-auto">
      <table className="min-w-full text-sm bg-white rounded-xl overflow-hidden border shadow-sm">
        <thead className="bg-gray-100 text-gray-600 text-left">
          <tr>
            <th className="px-4 py-3">S.NO</th>
            <th className="px-4 py-3">STRATEGY NAME</th>
            <th className="px-4 py-3">POSITIONAL / INTRADAY</th>
            <th className="px-4 py-3">STATUS</th>
            <th className="px-4 py-3">P&L</th>
            <th className="px-4 py-3">DETAILS</th>
            <th className="px-4 py-3">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {strategies.map((strategy, index) => (
            <tr
              key={strategy.id}
              className={classNames('border-t hover:bg-gray-50', {
                'bg-blue-50': index === 1,
              })}
            >
              <td className="px-4 py-3">{strategy.id}</td>
              <td className="px-4 py-3">{strategy.name}</td>
              <td className="px-4 py-3">
                <Select defaultValue={strategy.type}>
                 <SelectTrigger className="w-[140px] border-gray-300 shadow-sm text-center justify-center">
                   <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectItem
                      value="positional"
                       className="text-center"
                         >
                         Positional
                    </SelectItem>
                  <SelectItem
                    value="intraday"
                      className="text-center"
                      >
                       Intraday
                   </SelectItem>
                  </SelectContent>
                </Select>
              </td>
              <td className="px-4 py-3">
                <span
                  className={classNames(
                    'inline-block px-2 py-1 text-xs font-semibold rounded-full',
                    {
                      'bg-green-100 text-green-800': strategy.status === 'Active',
                      'bg-blue-100 text-blue-800': strategy.status === 'Running',
                      'bg-orange-100 text-orange-800': strategy.status === 'Paused',
                      'bg-gray-200 text-gray-600': strategy.status === 'Closed',
                    }
                  )}
                >
                  {strategy.status}
                </span>
              </td>
              <td className={`px-4 py-3 font-medium ${strategy.pnlColor}`}>{strategy.pnl}</td>
              <td className="px-4 py-3">
                <ChevronDown className="h-4 w-4 text-gray-600 cursor-pointer" />
              </td>
              <td className="px-4 py-3">
                <MoreVertical className="h-4 w-4 text-gray-600 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
