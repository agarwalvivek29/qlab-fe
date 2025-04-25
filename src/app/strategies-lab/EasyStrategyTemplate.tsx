import React from 'react';
import { Button } from '@/components/ui/button';

const EasyStrategyTemplate: React.FC = () => {
  return (
    <div className="mt-6 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      {/* Strategy Templates */}
      <div className="flex gap-4 mb-6">
        <Button className="bg-blue-500 text-white hover:bg-blue-600">EASY STRATEGY TEMPLATES</Button>
        <Button variant="outline" className="border-gray-300 text-gray-700">
          CREATE OWN STRATEGY
        </Button>
        <Button variant="outline" className="border-gray-300 text-gray-700">
          MY SAVED STRATEGIES
        </Button>
      </div>

      {/* Template Buttons */}
      <div className="flex justify-between mb-6 w-full">
        <Button
          variant="outline"
          className="flex items-center gap-2 flex-1 mx-1 bg-blue-50 border-2 border-blue-500 text-blue-500"
        >
          <span>📈</span> PROTECTIVE PUT
        </Button>
        <Button variant="outline" className="flex items-center gap-2 flex-1 mx-1 bg-blue-50 border-gray-300">
          <span>📈</span> BULL CALL
        </Button>
        <Button variant="outline" className="flex items-center gap-2 flex-1 mx-1 bg-blue-50 border-gray-300">
          <span>📈</span> COVERED PUT
        </Button>
        <Button variant="outline" className="flex items-center gap-2 flex-1 mx-1 bg-blue-50 border-gray-300">
          <span>📈</span> LONG STRADDLE
        </Button>
        <Button variant="outline" className="flex items-center gap-2 flex-1 mx-1 bg-blue-50 border-gray-300">
          <span>📈</span> LONG PUT LADDER
        </Button>
        <Button variant="outline" className="flex-1 mx-1 bg-blue-50 border-gray-300">
          Strap
        </Button>
      </div>

      {/* Step 1 and Step 2 Side by Side */}
      <div className="flex gap-6 mb-6">
        {/* Step 1: Set Strategy (Left Side) */}
        <div className="w-1/2 bg-blue-50 p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4">STEP 1: SET STRATEGY</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">STRATEGY NAME *</label>
              <input
                type="text"
                value="PROTECTIVE PUT"
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">INDEX *</label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white">
                <option>NIFTY</option>
              </select>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">CAPITAL *</label>
              <input
                type="number"
                value="6000000"
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">EXECUTION TYPE *</label>
              <div className="flex gap-2 mt-1">
                <Button className="bg-blue-500 text-white hover:bg-blue-600">LIVE TRADING</Button>
                <Button variant="outline" className="border-gray-300 text-gray-700">
                  FORWARD TEST
                </Button>
              </div>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
          </div>
        </div>

        {/* Step 2: Entry Settings (Right Side) */}
        <div className="w-1/2 bg-blue-50 p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4">STEP 2: ENTRY SETTINGS</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">STRATEGY TYPE *</label>
              <div className="flex gap-2 mt-1">
                <Button className="bg-blue-500 text-white hover:bg-blue-600">INTRADAY</Button>
                <Button variant="outline" className="border-gray-300 text-gray-700">
                  POSITIONAL
                </Button>
              </div>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">ENTRY TIME (HH:MM) *</label>
              <input
                type="time"
                value="09:45"
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">⏰</span>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Enter on Days</label>
              <div className="flex gap-2 mt-1">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-1" /> Mon
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-1" /> Tue
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-1" /> Wed
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-1" /> Thu
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-1" /> Fri
                </label>
              </div>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: Exit Settings */}
      <div className="mb-6 bg-blue-50 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-4">STEP 3: EXIT SETTINGS</h2>
        <div className="grid grid-cols-5 gap-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">EXIT TIME (HH:MM) *</label>
            <input
              type="time"
              value="14:55"
              readOnly
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">⏰</span>
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">EXIT ON EXPIRY</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white">
              <option>Select</option>
            </select>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">EXIT AFTER ENTRY + DAYS</label>
            <input
              type="number"
              value="4"
              readOnly
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
          </div>
          <div className="relative flex items-center gap-2">
            <label className="block text-sm font-medium text-gray-700">PROFIT % TM</label>
            <input type="checkbox" />
            <input
              type="number"
              value="50"
              readOnly
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
              placeholder="% of Capital"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
          </div>
          <div className="relative flex items-center gap-2">
            <label className="block text-sm font-medium text-gray-700">STOP % TM</label>
            <input type="checkbox" />
            <input
              type="number"
              value="50"
              readOnly
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
              placeholder="% of Capital"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
          </div>
        </div>
      </div>

      {/* Step 4: Strategy Legs */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">STEP 4: STRATEGY LEGS</h2>
        {/* Leg #1 */}
        <div className="mb-4 bg-blue-50 p-4 rounded-md">
          <h3 className="text-md font-semibold mb-2 text-blue-600">Leg #1</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">SEGMENT *</label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white">
                <option>FUTURES</option>
                <option>OPTIONS</option>
              </select>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">POSITION *</label>
              <div className="flex gap-2 mt-1">
                <Button className="bg-green-600 text-white hover:bg-green-700">BUY</Button>
                <Button variant="outline" className="border-gray-300 text-gray-700">
                  SELL
                </Button>
              </div>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">EXPIRY *</label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white">
                <option>Current Month</option>
              </select>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">LOTS *</label>
              <input
                type="number"
                value="1"
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-700">TARGET</label>
              <input type="checkbox" />
              <input
                type="number"
                value="250"
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-700">STOP LOSS</label>
              <input type="checkbox" />
              <input
                type="number"
                value="15"
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-700">TSL</label>
              <input type="checkbox" />
              <input
                type="number"
                value="0"
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">TRAILING DISTANCE</label>
              <input
                type="number"
                value="0"
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
          </div>
        </div>

        {/* Leg #2 */}
        <div className="bg-blue-50 p-4 rounded-md">
          <h3 className="text-md font-semibold mb-2 text-blue-600">Leg #2</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">SEGMENT *</label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white">
                <option>OPTIONS</option>
                <option>FUTURES</option>
              </select>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">POSITION *</label>
              <div className="flex gap-2 mt-1">
                <Button className="bg-green-600 text-white hover:bg-green-700">BUY</Button>
                <Button variant="outline" className="border-gray-300 text-gray-700">
                  SELL
                </Button>
              </div>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">OPTION TYPE *</label>
              <div className="flex gap-2 mt-1">
                <Button variant="outline" className="border-gray-300 text-gray-700">
                  CALL
                </Button>
                <Button className="bg-blue-500 text-white hover:bg-blue-600">PUT</Button>
              </div>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">LOTS *</label>
              <input
                type="number"
                value="1"
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">EXPIRY *</label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white">
                <option>Next Week</option>
              </select>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">STRIKE SELECTION *</label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white">
                <option>Select</option>
              </select>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">STRIKE TYPE *</label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white">
                <option>ATM</option>
              </select>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-700">TARGET</label>
              <input type="checkbox" />
              <input
                type="number"
                value="1200"
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-700">STOP LOSS</label>
              <input type="checkbox" />
              <input
                type="number"
                value="10"
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-700">TSL</label>
              <input type="checkbox" />
              <input
                type="number"
                value="0"
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">TRAILING DISTANCE</label>
              <input
                type="number"
                value="0"
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">ℹ️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Save Strategy Button */}
      <div className="flex justify-end">
        <Button className="bg-blue-500 text-white hover:bg-blue-600">SAVE STRATEGY</Button>
      </div>
    </div>
  );
};

export default EasyStrategyTemplate;