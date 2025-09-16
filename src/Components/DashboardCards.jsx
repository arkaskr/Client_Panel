import { Users, FolderOpen, CreditCard, Calendar } from "lucide-react";

const stats = [
  {
    title: "Total Clients",
    value: "48",
    change: "+12%",
    changeType: "positive",
    icon: Users,
    description: "Active clients",
  },
  {
    title: "Active Projects",
    value: "23",
    change: "+8%",
    changeType: "positive",
    icon: FolderOpen,
    description: "In progress",
  },
  {
    title: "Pending Invoices",
    value: "$12,450",
    change: "-5%",
    changeType: "negative",
    icon: CreditCard,
    description: "Awaiting payment",
  },
  {
    title: "This Week's Appointments",
    value: "16",
    change: "+3",
    changeType: "positive",
    icon: Calendar,
    description: "Scheduled meetings",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="border  border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
            <stat.icon className="h-5 w-5 text-gray-400" />
          </div>

          {/* Value */}
          <div className="mt-2 text-2xl font-bold text-gray-900">
            {stat.value}
          </div>

          {/* Change Info */}
          <div className="flex items-center space-x-2 text-xs mt-1">
            <span
              className={`font-medium ${
                stat.changeType === "positive"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {stat.change}
            </span>
            <span className="text-gray-500">from last month</span>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-400 mt-1">{stat.description}</p>
        </div>
      ))}
    </div>
  );
}
