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
            positionalIntraday: "0 | 2 | 1x",
            status: "Active",
            pnl: "₹3,623 (0%)",
            action: "#",
        },
        {
            id: '2',
            name: "Reinventing Delta Neutral",
            positionalIntraday: "0 | 2 | 1x",
            status: "Active",
            pnl: "₹71 (0%)",
            action: "#",
        },
        {
            id: '3',
            name: "BN Delta Neutral",
            positionalIntraday: "0 | 4 | 1x",
            status: "Closed",
            pnl: "₹5,952 (0%)",
            action: "#",
        },
        {
            id: '4',
            name: "Delta Harvesting (In test Phase)",
            positionalIntraday: "1 | 7 | 1x",
            status: "Running",
            pnl: "₹18.57k (0%)",
            action: "#",
        },
        {
            id: '5',
            name: "Nifty Delta Neutral Flowrider",
            positionalIntraday: "0 | 10 | 1x",
            status: "Active",
            pnl: "₹4,088 (0%)",
            action: "#",
        },
        {
            id: '6',
            name: "Nifty Delta Neutral adjustment based on favourable or non favourable trade (In test dont deploy)",
            positionalIntraday: "0 | 2 | 1x",
            status: "Closed",
            pnl: "₹1,410 (0%)",
            action: "#",
        },
        {
            id: '7',
            name: "Nifty Delta Neutral ATM (Adjustment based on favourable or non favourable side)",
            positionalIntraday: "0 | 6 | 1x",
            status: "Paused",
            pnl: "₹-4,901 (0%)",
            action: "#",
        },
        {
            id: '8',
            name: "Bank Nifty Delta Neutral With Hedge",
            positionalIntraday: "0 | 2 | 1x",
            status: "Paused",
            pnl: "₹-3,075 (0%)",
            action: "#",
        },
        {
            id: '9',
            name: "Ulta Delta BN Monthly Expiry",
            positionalIntraday: "0 | 31 | 1x",
            status: "Active",
            pnl: "₹-1,640 (0%)",
            action: "#",
        },
        {
            id: '10',
            name: "Bank Nifty Delta Neutral With Hedge",
            positionalIntraday: "0 | 12 | 1x",
            status: "Active",
            pnl: "₹9,031 (0%)",
            action: "#",
        },
    ];

    const getStatusClass = (status: string) => {
        switch (status.toLowerCase()) {
            case 'active':
                return 'bg-green-100 text-green-800';
            case 'paused':
                return 'bg-amber-100 text-amber-800';
            case 'closed':
                return 'bg-gray-200 text-gray-800';
            case 'running':
                return 'bg-blue-100 text-blue-800';
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
                                        <td className="px-4 py-2 border-b border-gray-300">
                                            <div className="text-sm font-semibold">
                                                {leg.symbol} <span className="text-xs text-gray-500">(Leg Id: {leg.legId})</span>
                                            </div>
                                            <div className="mt-1 text-xs font-medium text-gray-500 space-x-4">
                                                <span>BaseΔ</span>
                                                <span>BaseIV</span>
                                                <span>LiveΔ</span>
                                                <span>LiveIV</span>
                                                <span>Index@Entry</span>
                                                <span>Index Now</span>
                                            </div>
                                            <div className="text-xs text-gray-800 font-medium space-x-8 mt-0.5">
                                                <span>{leg.baseDelta}</span>
                                                <span>{leg.baseIV}</span>
                                                <span>{leg.liveDelta}</span>
                                                <span>{leg.liveIV}</span>
                                                <span>{leg.indexEntry}</span>
                                                <span>{leg.indexNow}</span>
                                            </div>
                                        </td>
                                        <td className="text-center border-b border-gray-300">{leg.ltp}</td>
                                        <td className="text-center border-b border-gray-300">{leg.quantity}</td>
                                        <td className="text-center border-b border-gray-300">{leg.entryPrice}</td>
                                        <td className="text-center border-b border-gray-300">{leg.entryTime}</td>
                                        <td className="text-center border-b border-gray-300">{leg.exitPrice}</td>
                                        <td className="text-center border-b border-gray-300">{leg.exitTime}</td>
                                        <td className={`text-center font-semibold ${leg.pnlColor} border-b border-gray-300`}>{leg.pnl}</td>
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
                                    <td className="px-4 py-3">{strategy.name}</td>
                                    <td className="px-4 py-3 text-center">{strategy.positionalIntraday}</td>
                                    <td className="px-4 py-3 text-center">
                                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusClass(strategy.status)}`}>
                                            {strategy.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-center">{strategy.pnl}</td>
                                    <td className="px-4 py-3 text-center">
                                        <button
                                            className="text-blue-500 hover:text-blue-600"
                                            onClick={() => setOpenRowId(strategy.id === openRowId ? null : strategy.id)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </button>
                                    </td>
                                    <td className="px-4 py-3 text-center">{strategy.action}</td>
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
