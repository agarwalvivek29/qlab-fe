'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import TopNavbar from '@/components/TopNavbar';
import { Pencil } from 'lucide-react';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';

export default function RiskManagementPage() {
    const strategies = [
        'DeltaSync Nifty',
        'Reinventing Delta Neutral',
        'BN Delta Neutral',
        'Delta Harvesting (In test Phase)',
        'Nifty Delta Neutral Flowrider',
        'Nifty Delta Neutral adjustment based on favourable or non favourable trade (In test dont deploy)',
        'Nifty Delta Neutral ATM (Adjustment based on favourable or non favourable side)',
        'Bank Nifty Delta Neutral With Hedge',
        'Ulta Delta BN Monthly Expiry',
        'Bank Nifty Delta Neutral With Hedge',
    ];

    const [openDialog, setOpenDialog] = useState(false);

    return (
        <div className="p-6 space-y-6">
            <TopNavbar />

            {/* Header Section */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-[#6C6C6C]">Risk Management</h1>
                <Button
                    variant="destructive"
                    className="text-red-500 bg-red-100 hover:bg-red-200"
                >
                    Square off All
                </Button>
            </div>

            {/* Grouped Buttons in Curved Rectangle */}
            <div className="mt-6 p-4 rounded-xl border border-[#E0E0E0] bg-white shadow-sm overflow-x-auto">
                <div className="flex gap-x-6 whitespace-nowrap">
                    {[
                        'Overall Max Loss Cap',
                        'Overall Max Profit Exit',
                        'Overall TSL Activate',
                        'Overall When Profit Increases By',
                        'Overall Increase TSL By',
                    ].map((label, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <span className="text-[#333] text-sm text-center">{label}</span>
                            <div className="bg-[#F5F7FA] text-[#333] text-sm rounded-full font-semibold text-center px-6 py-1 w-full min-w-[220px]">
                                0
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Strategy Table */}
            <div className="overflow-x-auto mt-6 rounded-lg border border-[#E0E0E0]">
                <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                    <thead className="bg-[#F5F7FA] text-[#333333] font-semibold text-xs uppercase">
                        <tr>
                            <th className="px-4 py-3">S.NO</th>
                            <th className="px-4 py-3">STRATEGY NAME</th>
                            <th className="px-4 py-3 text-center">
                                MAX LOSSCAP<br />(Per Strategy)
                            </th>
                            <th className="px-4 py-3 text-center">
                                MAX PROFIT EXIT<br />(Per Strategy)
                            </th>
                            <th className="px-4 py-3 text-center">
                                TSL ACTIVATE<br />(Per Strategy)
                            </th>
                            <th className="px-4 py-3 text-center">
                                WHEN PROFIT<br />INCREASES BY<br />(Per Strategy)
                            </th>
                            <th className="px-4 py-3 text-center">
                                INCREASE TSL BY<br />(Per Strategy)
                            </th>
                            <th className="px-4 py-3 text-center">EDIT</th>
                        </tr>

                    </thead>
                    <tbody className="divide-y divide-gray-100 text-[#333333] bg-white">
                        {strategies.map((strategy, index) => (
                            <tr key={index} className={index % 2 !== 0 ? 'bg-[#F9FAFB]' : ''}>
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3">{strategy}</td>
                                <td className="px-4 py-3 text-center">
                                    <div className="bg-[#F5F7FA] inline-block px-10 py-1 rounded-full font-semibold">0</div>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <div className="bg-[#F5F7FA] inline-block px-10 py-1 rounded-full font-semibold">0</div>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <div className="bg-[#F5F7FA] inline-block px-10 py-1 rounded-full font-semibold">0</div>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <div className="bg-[#F5F7FA] inline-block px-10 py-1 rounded-full font-semibold">0</div>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <div className="bg-[#F5F7FA] inline-block px-10 py-1 rounded-full font-semibold">0</div>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                                        <DialogTrigger asChild>
                                            <div className="flex justify-center">
                                                <Pencil className="h-4 w-4 text-[#333333] cursor-pointer" />
                                            </div>
                                        </DialogTrigger>

                                        <DialogContent className="w-[700px]">
                                            <div className="p-6">
                                                <DialogHeader>
                                                    <DialogTitle className="text-2xl font-bold">DeltaSync Nifty</DialogTitle>
                                                </DialogHeader>

                                                {/* Dialog Form */}
                                                <div className="flex flex-col gap-6 mt-6 text-sm text-[#333]">
                                                    {/* Row 1 */}
                                                    <div className="grid grid-cols-2 gap-6">
                                                        {['Max Loss Cap', 'Book Profit'].map((label, idx) => (
                                                            <div key={idx} className="flex flex-col items-center w-full">
                                                                <span
                                                                    className={`mb-1 font-medium text-center ${label === 'Max Loss Cap' ? 'text-red-500' : ''}`}
                                                                >
                                                                    {label}
                                                                </span>
                                                                <div className="bg-[#F5F7FA] rounded-full py-1 text-center font-semibold w-full">
                                                                    0
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>


                                                    {/* Row 2 (Center Row) */}
                                                    <div className="flex justify-center">
                                                        <div className="flex flex-col items-center w-[60%]">
                                                            <span className="mb-1 font-medium text-center">TSL Activate On</span>
                                                            <div className="bg-[#F5F7FA] rounded-full py-1 text-center font-semibold w-full">
                                                                0
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Row 3 */}
                                                    <div className="grid grid-cols-2 gap-6">
                                                        {['When Profit Increased By', 'Increase TSL By'].map((label, idx) => (
                                                            <div key={idx} className="flex flex-col items-center w-full">
                                                                <span className="mb-1 font-medium text-center">{label}</span>
                                                                <div className="bg-[#F5F7FA] rounded-full py-1 text-center font-semibold w-full">
                                                                    0
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>


                                                {/* Footer */}
                                                <DialogFooter className="flex justify-end gap-4 mt-6">
                                                    <Button
                                                        variant="outline"
                                                        onClick={() => setOpenDialog(false)}
                                                        className="w-[120px]"
                                                    >
                                                        Close
                                                    </Button>
                                                    <Button
                                                        className="w-[120px] bg-blue-700 text-white hover:bg-blue-800"
                                                        onClick={() => setOpenDialog(false)}
                                                    >
                                                        Save Changes
                                                    </Button>
                                                </DialogFooter>

                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
