import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Sidebar from "./Components/Sidebar";

// Pages
import Dashboard from "./Pages/Dashboard";
import Clients from "./Pages/Clients";
import Projects from "./Pages/Projects";
import { Bell, User2 } from "lucide-react";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50 text-gray-900">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Topbar */}
          <header className="h-14 border-b border-gray-300 flex items-center justify-between px-4 bg-white">
            {/* Search */}
            <div className="flex items-center gap-2 w-full max-w-md">
              <input
                type="text"
                placeholder="Search clients, projects..."
                className="w-full px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              {/* Notification Icon */}
              <button className="p-2 rounded-lg hover:bg-green-400 group">
                <Bell className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </button>

              {/* Profile Icon */}
              <button className="p-2 rounded-lg hover:bg-green-400 group">
                <User2 className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </button>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/projects" element={<Projects />} />
              {/* add more pages later */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
