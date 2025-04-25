'use client';

import React, { useState } from 'react';
import TopNavbar from '@/components/TopNavbar';
import StatsCards from '@/components/StatsCards';
import StrategyFilters from '@/components/StrategyFilters';

const StrategyDetails: React.FC = () => {
    const [openRowId, setOpenRowId] = useState<string | null>(null);

    const strategies = [
        {
            id: '1',
            name: "DeltaSync Nifty",
            positionalIntraday: "Positional",
            status: "Active",
            pnl: "3,623 (0%)",
            action: "#",
        },
        {
            id: '2',
            name: "Reinventing Delta Neutral",
            positionalIntraday: "Intraday",
            status: "Active",
            pnl: "71 (0%)",
            action: "#",
        },
        {
            id: '3',
            name: "BN Delta Neutral",
            positionalIntraday: "Intraday",
            status: "Closed",
            pnl: "5952 (0%)",
            action: "#",
        },
        {
            id: '4',
            name: "Delta Harvesting (In test Phase)",
            positionalIntraday: "Intraday",
            status: "Running",
            pnl: "18.57k (0%)",
            action: "#",
        },
        {
            id: '5',
            name: "Nifty Delta Neutral Flowrider",
            positionalIntraday: "Positional",
            status: "Active",
            pnl: "4088 (0%)",
            action: "#",
        },
        {
            id: '6',
            name: "Nifty Delta Neutral adjustment based on favourable or non favourable trade (In test dont deploy)",
            positionalIntraday: "Intraday",
            status: "Closed",
            pnl: "1410 (0%)",
            action: "#",
        },
        {
            id: '7',
            name: "Nifty Delta Neutral ATM (Adjustment based on favourable or non favourable side)",
            positionalIntraday: "Positional",
            status: "Paused",
            pnl: "-4901 (0%)",
            action: "#",
        },
        {
            id: '8',
            name: "Bank Nifty Delta Neutral With Hedge",
            positionalIntraday: "Positional",
            status: "Paused",
            pnl: "-3075 (0%)",
            action: "#",
        },
        {
            id: '9',
            name: "Ulta Delta BN Monthly Expiry",
            positionalIntraday: "Positional",
            status: "Active",
            pnl: "-1640 (0%)",
            action: "#",
        },
        {
            id: '10',
            name: "Bank Nifty Delta Neutral With Hedge",
            positionalIntraday: "Intraday",
            status: "Active",
            pnl: "9031 (0%)",
            action: "#",
        },
    ];

    const getStatusClass = (status: string) => {
        switch (status.toLowerCase()) {
            case 'active':
                return 'bg-green-600 text-white';

            case 'paused':
                return 'bg-amber-600 text-white';
            case 'closed':
                return 'bg-gray-600 text-white';
            case 'running':
                return 'bg-blue-600 text-white';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const renderDropdown = (strategyId: string) => {
        if (openRowId !== strategyId) return null;

        const legs = [
            {
                symbol: 'NIFTY2025-04-24-24200PE',
                legId: 1199,
                baseDelta: -0.52,
                baseIV: 14.74,
                liveDelta: -0.48,
                liveIV: 14.78,
                indexEntry: 24178.85,
                indexNow: 24203.45,
                ltp: 106.4,
                quantity: 0,
                entryPrice: 118.2,
                entryTime: '22-04-2025 10:02:53',
                exitPrice: 0,
                exitTime: '22-04-2025 10:24:47',
                pnl: '2.65K',
                pnlColor: 'text-green-600',
            },
            {
                symbol: 'NIFTY2025-04-24-24250PE',
                legId: 1200,
                baseDelta: -0.50,
                baseIV: 14.60,
                liveDelta: -0.47,
                liveIV: 14.65,
                indexEntry: 24200.85,
                indexNow: 24210.45,
                ltp: 107.3,
                quantity: 0,
                entryPrice: 119.5,
                entryTime: '22-04-2025 10:05:20',
                exitPrice: 0,
                exitTime: '22-04-2025 10:26:30',
                pnl: '2.75K',
                pnlColor: 'text-green-600',
            },
            {
                symbol: 'NIFTY2025-04-24-24300PE',
                legId: 1201,
                baseDelta: -0.47,
                baseIV: 14.40,
                liveDelta: -0.45,
                liveIV: 14.50,
                indexEntry: 24223.65,
                indexNow: 24235.50,
                ltp: 108.1,
                quantity: 0,
                entryPrice: 120.0,
                entryTime: '22-04-2025 10:07:50',
                exitPrice: 0,
                exitTime: '22-04-2025 10:28:10',
                pnl: '2.85K',
                pnlColor: 'text-green-600',
            },
            {
                symbol: 'NIFTY2025-04-24-24350PE',
                legId: 1202,
                baseDelta: -0.45,
                baseIV: 14.10,
                liveDelta: -0.42,
                liveIV: 14.20,
                indexEntry: 24250.45,
                indexNow: 24265.20,
                ltp: 109.6,
                quantity: 0,
                entryPrice: 121.5,
                entryTime: '22-04-2025 10:10:15',
                exitPrice: 0,
                exitTime: '22-04-2025 10:30:00',
                pnl: '3.05K',
                pnlColor: 'text-green-600',
            },
        ];

        return (
            <tr>
                <td colSpan={7} className="bg-[#F5F7FA] px-6 pt-0 pb-4">
                    <div className="border border-gray-200 bg-white rounded-md shadow-sm">
                        <div className="flex justify-end p-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2">
                                Download
                            </button>
                            <button
                                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                                onClick={() => setOpenRowId(null)}
                            >
                                Close
                            </button>
                        </div>

                        <table className="min-w-full text-sm text-gray-800">
                            <thead className="bg-gray-100 text-xs font-medium text-gray-600">
                                <tr>
                                    <th className="px-4 py-2 text-left border-b border-gray-300">Symbol</th>
                                    <th className="py-2 border-b border-gray-300">LTP</th>
                                    <th className="py-2 border-b border-gray-300">Quantity</th>
                                    <th className="py-2 border-b border-gray-300">Entry Price</th>
                                    <th className="py-2 border-b border-gray-300">Entry Time</th>
                                    <th className="py-2 border-b border-gray-300">Exit Price</th>
                                    <th className="py-2 border-b border-gray-300">Exit Time</th>
                                    <th className="py-2 border-b border-gray-300">P&L</th>
                                </tr>
                            </thead>
                            <tbody>
                                {legs.map((leg, index) => (
                                    <tr key={index} className="border-t border-gray-100 align-top">
                                        <td className="px-2 py-2 border-b border-gray-300">
                                            <div className="text-sm font-semibold">
                                                {leg.symbol} <span className="text-xs text-gray-500">(Leg Id: {leg.legId})</span>
                                            </div>
                                            <div className="flex text-xs mt-1 divide-x divide-gray-300 text-center mb-4">
                                                <div className="flex-1 px-px">
                                                    <div className="text-gray-500 font-medium leading-tight">BaseΔ</div>
                                                    <div className="text-gray-800 font-semibold leading-tight">{leg.baseDelta}</div>
                                                </div>
                                                <div className="flex-1 px-px">
                                                    <div className="text-gray-500 font-medium leading-tight">BaseIV</div>
                                                    <div className="text-gray-800 font-semibold leading-tight">{leg.baseIV}</div>
                                                </div>
                                                <div className="flex-1 px-px">
                                                    <div className="text-gray-500 font-medium leading-tight">LiveΔ</div>
                                                    <div className="text-gray-800 font-semibold leading-tight">{leg.liveDelta}</div>
                                                </div>
                                                <div className="flex-1 px-px">
                                                    <div className="text-gray-500 font-medium leading-tight">LiveIV</div>
                                                    <div className="text-gray-800 font-semibold leading-tight">{leg.liveIV}</div>
                                                </div>
                                                <div className="flex-1 px-px">
                                                    <div className="text-gray-500 font-medium leading-tight">Index@Entry</div>
                                                    <div className="text-gray-800 font-semibold leading-tight">{leg.indexEntry}</div>
                                                </div>
                                                <div className="flex-1 px-px">
                                                    <div className="text-gray-500 font-medium leading-tight">Index Now</div>
                                                    <div className="text-gray-800 font-semibold leading-tight">{leg.indexNow}</div>
                                                </div>
                                            </div>
                                        </td>


                                        <td className="text-center border-b border-gray-300 pt-8 pl-4">{leg.ltp}</td>
                                        <td className="text-center border-b border-gray-300 pt-8 pl-6">{leg.quantity}</td>
                                        <td className="text-center border-b border-gray-300 pt-8 pl-6">{leg.entryPrice}</td>
                                        <td className="text-center border-b border-gray-300 pt-8 pl-6">{leg.entryTime}</td>
                                        <td className="text-center border-b border-gray-300 pt-8 pl-6">{leg.exitPrice}</td>
                                        <td className="text-center border-b border-gray-300 pt-8 pl-6">{leg.exitTime}</td>
                                        <td className={`text-center font-semibold ${leg.pnlColor} border-b border-gray-300 pt-8 pl-6`}>{leg.pnl}</td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>
                </td>
            </tr>
        );
    };


    return (
        <div className="min-h-screen bg-[#F5F7FA]">
            <TopNavbar />
            <StatsCards />
            <StrategyFilters />

            <div className="p-6">
                <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 text-sm font-medium text-gray-600">
                        <tr>
                            <th className="px-4 py-3 text-left">S.No</th>
                            <th className="px-4 py-3 text-left">Strategy Name</th>
                            <th className="px-4 py-3 text-center">Positional/Intraday</th>
                            <th className="px-4 py-3 text-center">Status</th>
                            <th className="px-4 py-3 text-center">P&L</th>
                            <th className="px-4 py-3 text-center">Details</th>
                            <th className="px-4 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                        {strategies.map((strategy) => (
                            <React.Fragment key={strategy.id}>
                                <tr className="border-t border-gray-200">
                                    <td className="px-4 py-3">{strategy.id}</td>
                                    <td className="px-4 py-3 whitespace-normal break-words max-w-xs">
                                        {strategy.name}
                                    </td>

                                    <td className="px-4 py-3 text-center">
                                        <span className="inline-flex items-center justify-center w-32 h-8 rounded-full bg-[#E8F0FE] text-[#1A73E8] text-sm font-medium text-center">
                                            {strategy.positionalIntraday}
                                        </span>

                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusClass(strategy.status)}`}>
                                            {strategy.status}
                                        </span>
                                    </td>
                                    <td
  className={`px-4 py-3 text-center ${
    parseFloat(strategy.pnl) >= 0 ? 'text-green-500' : 'text-red-600'
  }`}
>
  {strategy.pnl}
</td>
                                    <td className="px-4 py-3 text-center">

                                        <td className="relative px-4 py-0.5 text-right">
                                            <div className="flex justify-between items-center">
                                                {/* <span className="text-sm text-[#333333]">Details</span> */}
                                                <button
                                                    className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F0FE] hover:bg-[#d0e3fd] transition"
                                                    onClick={() =>
                                                        setOpenRowId(strategy.id === openRowId ? null : strategy.id)
                                                    }
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className={`h-4 w-4 text-[#1A73E8] transform transition-transform duration-200 ${openRowId === strategy.id ? 'rotate-180' : 'rotate-0'
                                                            }`}
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>

                                    </td>
                                    <td className="px-4 py-3 text-center relative">
                                        <div className="inline-block text-left">
                                            <div>
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                                                    id={`menu-button-${strategy.id}`}
                                                    aria-expanded="true"
                                                    aria-haspopup="true"
                                                    onClick={() =>
                                                        setOpenRowId(openRowId === `action-${strategy.id}` ? null : `action-${strategy.id}`)
                                                    }
                                                >
                                                    Action
                                                    <svg
                                                        className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${openRowId === `action-${strategy.id}` ? 'rotate-180' : 'rotate-0'
                                                            }`}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>

                                            {openRowId === `action-${strategy.id}` && (
                                                <div
                                                    className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                                                    role="menu"
                                                    aria-orientation="vertical"
                                                    aria-labelledby={`menu-button-${strategy.id}`}
                                                >
                                                    <div className="py-1 font-inter" text-bold role="none">
  <button className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
    Statistics
  </button>
  <button className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
    Edit Strategy
  </button>
  <button className="text-red-600 block w-full text-left px-4 py-2 text-sm hover:bg-red-50" role="menuitem">
    Pause
  </button>
  <button className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
    Unsuscribe
  </button>
  <button className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
    Exit Strategy
  </button>
  <button className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
    Logs
  </button>
</div>

                                                </div>
                                            )}
                                        </div>
                                    </td>

                                </tr>
                                {renderDropdown(strategy.id)}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StrategyDetails;
