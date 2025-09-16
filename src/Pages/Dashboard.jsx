import React from "react";
import { 
  CalendarDays, 
  TrendingUp, 
  Users, 
  FolderOpen,
  Plus,
  ArrowRight
} from "lucide-react";
import DashboardCards from "../Components/DashboardCards";

const upcomingAppointments = [
  {
    client: "John Smith",
    service: "Consultation",
    time: "10:00 AM",
    date: "Today",
    status: "confirmed",
  },
  {
    client: "Acme Corp",
    service: "Project Review",
    time: "2:30 PM",
    date: "Today",
    status: "confirmed",
  },
  {
    client: "Sarah Johnson",
    service: "Strategy Meeting",
    time: "11:00 AM",
    date: "Tomorrow",
    status: "pending",
  },
];

const recentProjects = [
  {
    name: "Website Redesign",
    client: "Acme Corp",
    progress: 85,
    status: "active",
    dueDate: "Dec 15",
  },
  {
    name: "Brand Identity",
    client: "StartupXYZ",
    progress: 60,
    status: "active",
    dueDate: "Dec 20",
  },
  {
    name: "Mobile App",
    client: "Tech Solutions",
    progress: 100,
    status: "completed",
    dueDate: "Completed",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6 p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Welcome back! Here's what's happening with your business.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 cursor-pointer border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-green-400">
            <Users className="h-4 w-4" />
            Add Client
          </button>
          <button className="flex items-center gap-2 cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
            <Plus className="h-4 w-4" />
            New Project
          </button>
        </div>
      </div>

      {/* Stats (placeholder) */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white border border-gray-300 rounded-lg">Stat Card 1</div>
        <div className="p-4 bg-white border border-gray-300 rounded-lg">Stat Card 2</div>
        <div className="p-4 bg-white border border-gray-300 rounded-lg">Stat Card 3</div>
      </div> */}
      <DashboardCards/>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Upcoming Appointments */}
        <div className="border border-gray-300 rounded-lg shadow p-4 bg-white">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-blue-600" />
              Upcoming Appointments
            </h2>
            <button className="text-xs flex items-center text-blue-600 hover:underline">
              View All
              <ArrowRight className="h-3 w-3 ml-1" />
            </button>
          </div>
          <div className="space-y-3">
            {upcomingAppointments.map((a, i) => (
              <div key={i} className="flex justify-between items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <div>
                  <p className="font-medium text-sm">{a.client}</p>
                  <p className="text-xs text-gray-500">{a.service}</p>
                  <p className="text-xs text-gray-500">{a.date} at {a.time}</p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    a.status === "confirmed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {a.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Projects */}
        <div className="border border-gray-300 rounded-lg shadow p-4 bg-white">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold flex items-center gap-2">
              <FolderOpen className="h-5 w-5 text-blue-600" />
              Active Projects
            </h2>
            <button className="text-xs flex items-center text-blue-600 hover:underline">
              View All
              <ArrowRight className="h-3 w-3 ml-1" />
            </button>
          </div>
          <div className="space-y-3">
            {recentProjects.map((p, i) => (
              <div key={i} className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 space-y-2">
                <div className="flex justify-between items-center">
                  <p className="font-medium text-sm">{p.name}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      p.status === "completed"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{p.client}</p>
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-blue-600 h-1.5 rounded-full"
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                    <span className="text-gray-500">{p.progress}%</span>
                  </div>
                  <span className="text-gray-500">{p.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder Recent Activity */}
        <div className="border border-gray-300 rounded-lg shadow p-4 bg-white">
          <h2 className="font-semibold mb-3">Recent Activity</h2>
          <p className="text-sm text-gray-500">No recent activity yet.</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="border border-gray-300 rounded-lg shadow p-4 bg-white">
        <h2 className="font-semibold flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center justify-center cursor-pointer bg-gray-100 border border-gray-300 rounded-lg h-20 hover:bg-green-400 ">
            <Users className="h-6 w-6" />
            <span className="text-xs">Add Client</span>
          </button>
          <button className="flex flex-col items-center justify-center cursor-pointer bg-gray-100 border border-gray-300 rounded-lg h-20 hover:bg-green-400 ">
            <FolderOpen className="h-6 w-6" />
            <span className="text-xs">New Project</span>
          </button>
          <button className="flex flex-col items-center justify-center cursor-pointer bg-gray-100 border border-gray-300 rounded-lg h-20 hover:bg-green-400 ">
            <CalendarDays className="h-6 w-6" />
            <span className="text-xs">Schedule</span>
          </button>
          <button className="flex flex-col items-center justify-center cursor-pointer bg-gray-100 border border-gray-300 rounded-lg h-20 hover:bg-green-400 ">
            <TrendingUp className="h-6 w-6" />
            <span className="text-xs">Send Invoice</span>
          </button>
        </div>
      </div>
    </div>
  );
}
