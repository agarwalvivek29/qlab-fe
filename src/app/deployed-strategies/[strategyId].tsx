import React from "react";

const StrategyDetails: React.FC = () => {
  // Updated entries for the inner page
  const strategies = [
    {
      id: '1',
      name: "DeltaSync Nifty",
      positionalIntraday: "0 | 2 | 1x",
      status: "Active",
      pnl: "₹3,623 (0%)",
      details: "Symbol: OPTIDX NIFTY 27FEB2025 CE 22650, QTY: 0, LTP ₹0.00, P&L ₹2,685, Val ₹0",
      action: "#",
    },
    {
      id: '2',
      name: "Reinventing Delta Neutral",
      positionalIntraday: "0 | 2 | 1x",
      status: "Active",
      pnl: "₹71 (0%)",
      details: "Symbol: OPTIDX NIFTY 27FEB2025 CE 22650, QTY: 0, LTP ₹0.00, P&L ₹938, Val ₹0",
      action: "#",
    },
    {
      id: '3',
      name: "BN Delta Neutral",
      positionalIntraday: "IV: 0 | Delta: 0 | Gamma: 0 | Theta: 0 | Vega: 0",
      status: "Closed",
      pnl: "₹5,952 (0%)",
      details: "Symbol: OPTIDX NIFTY 27FEB2025 CE 22650, QTY: 0, LTP ₹0.00, P&L ₹938, Val ₹0",
      action: "#",
    },
    {
      id: '4',
      name: "Delta Harvesting (In test Phase)",
      positionalIntraday: "IV: 0 | Delta: 0 | Gamma: 0 | Theta: 0 | Vega: 0",
      status: "Running",
      pnl: "₹18.57k (0%)",
      details: "",
      action: "#",
    },
    {
      id: '5',
      name: "Nifty Delta Neutral Flowrider",
      positionalIntraday: "0 | 10 | 1x",
      status: "Active",
      pnl: "₹4,088 (0%)",
      details: "",
      action: "#",
    },
    {
      id: '6',
      name: "Nifty Delta Neutral adjustment based on favourable or non favourable trade (In test dont deploy)",
      positionalIntraday: "0 | 2 | 1x",
      status: "Closed",
      pnl: "₹1,410 (0%)",
      details: "",
      action: "#",
    },
    {
      id: '7',
      name: "Nifty Delta Neutral ATM (Adjustment based on favourable or non favourable side)",
      positionalIntraday: "0 | 6 | 1x",
      status: "Paused",
      pnl: "₹-4,901 (0%)",
      details: "",
      action: "#",
    },
    {
      id: '8',
      name: "Bank Nifty Delta Neutral With Hedge",
      positionalIntraday: "0 | 2 | 1x",
      status: "Paused",
      pnl: "₹-3,075 (0%)",
      details: "",
      action: "#",
    },
    {
      id: '9',
      name: "Ulta Delta BN Monthly Expiry",
      positionalIntraday: "0 | 31 | 1x",
      status: "Active",
      pnl: "₹-1,640 (0%)",
      details: "",
      action: "#",
    },
    {
      id: '10',
      name: "Bank Nifty Delta Neutral With Hedge",
      positionalIntraday: "0 | 12 | 1x",
      status: "Active",
      pnl: "₹9,031 (0%)",
      details: "",
      action: "#",
    },
  ];

  return (
    <div>
      <h1>Deployed Strategy Details</h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">S.No</th>
            <th className="px-4 py-2">Strategy Name</th>
            <th className="px-4 py-2">Positional/Intraday</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">P&L</th>
            <th className="px-4 py-2">Details</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {strategies.map((strategy) => (
            <tr key={strategy.id}>
              <td className="px-4 py-2">{strategy.id}</td>
              <td className="px-4 py-2">{strategy.name}</td>
              <td className="px-4 py-2">{strategy.positionalIntraday}</td>
              <td className="px-4 py-2">{strategy.status}</td>
              <td className="px-4 py-2">{strategy.pnl}</td>
              <td className="px-4 py-2">{strategy.details}</td>
              <td className="px-4 py-2">
                <a href={strategy.action}>{strategy.action}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StrategyDetails;
