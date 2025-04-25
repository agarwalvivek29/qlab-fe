'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Switch } from '@/components/ui/switch';

const navItems = [
  { label: 'Deployed Strategy', href: '/deployed-strategies' },
  { label: 'Strategies', href: '/strategies' },
  { label: 'Risk Management', href: '/risk-management' },
  { label: 'Strategies Lab', href: '/strategies-lab' },
  { label: 'Order Page', href: '/order-page' },
  { label: 'Backtesting', href: '/backtesting' },
  { label: 'Miscellaneous', href: '/miscellaneous' },
];

export default function TopNavbar() {
  const [isStarted, setIsStarted] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full max-w-[1920px] h-16 bg-white border-b shadow-sm flex items-center justify-between px-6 mx-auto font-inter fixed top-0 z-50">
      {/* Left: Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={150} height={20} />
      </Link>

      {/* Center: Navigation Buttons */}
      <nav className="flex gap-4 flex-wrap justify-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <button
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 py-2 h-12 px-4 rounded-[100px] border font-medium text-base
                ${
                  isActive
                    ? 'bg-[#deecff] text-[#1a73e8] border-[#deecff]'
                    : 'bg-white text-medium-gray border-gray-300 hover:bg-[#deecff] hover:text-[#1a73e8] hover:border-[#deecff]'
                }`}
              >
                {item.label}
              </button>
            </Link>
          );
        })}
      </nav>

      {/* Right: Algo Start Toggle */}
      <div className="flex items-center justify-end pr-6 space-x-2">
        <span className="text-sm font-medium text-foreground">Algo Start</span>
        <Switch
          id="algo-start"
          checked={isStarted}
          onCheckedChange={setIsStarted}
          className={`
            transition-colors
            data-[state=checked]:bg-[#34C759] 
            data-[state=unchecked]:bg-[#FF3B30]
          `}
        />
      </div>
    </header>
  );
}
