import { Badge } from "@/components/ui/badge";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const sampleData = [
  { name: "1", value: 400 },
  { name: "2", value: 420 },
  { name: "3", value: 460 },
  { name: "4", value: 480 },
];

interface StrategyCardProps {
  title: string;
  subtitle: string;
  status: "Running" | "Completed" | "Stopped";
  pnl: string;
  pnlPercent: string;
  chartColor?: string;
}

const statusBadgeClasses: Record<StrategyCardProps["status"], string> = {
  Running: "bg-green-500",
  Completed: "bg-blue-500",
  Stopped: "bg-red-500",
};

const StrategyCard = ({
  title,
  subtitle,
  status,
  pnl,
  pnlPercent,
  chartColor = "#4F46E5", // Indigo default
}: StrategyCardProps) => {
  const isNegative = pnlPercent.startsWith("-");

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm w-full max-w-6xl mx-auto grid grid-cols-6 gap-2 items-center">
      {/* Left: S.NO & STRATEGY NAME */}
      <div className="col-span-2">
        <h2 className="text-base font-semibold text-gray-900">{title}</h2>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>

      {/* Center Section: Shifted Left by reducing pl and gap */}
      <div className="col-span-4 flex pl-2 space-x-4 items-center">
        {/* POSITIONAL / INTRADAY */}
        <div className="w-1/5 text-left">
          <span className="text-sm text-gray-500">Positional</span>
        </div>

        {/* STATUS */}
        <div className="w-1/5 text-left">
          <Badge
            className={`text-white text-xs px-2 py-1 rounded-full ${statusBadgeClasses[status]}`}
          >
            {status}
          </Badge>
        </div>

        {/* PNL */}
        <div className="w-1/5 text-left">
          <div className="text-sm font-medium text-gray-800">
            {pnl}{" "}
            <span className={`text-xs ${isNegative ? "text-red-600" : "text-green-600"}`}>
              ({pnlPercent})
            </span>
          </div>
        </div>

        {/* DETAILS */}
        <div className="w-1/5 text-left">
          <span className="text-sm text-deep-blue cursor-pointer underline">Details</span>
        </div>

        {/* ACTION */}
        <div className="w-1/5 text-left">
          <button className="text-sm text-white bg-deep-blue px-3 py-1 rounded-lg">
            Action
          </button>
        </div>
      </div>
    </div>
  );
};

export { StrategyCard };
