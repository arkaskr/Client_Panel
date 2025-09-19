import React, { useState } from "react";

// Sample data
const initialProjects = [
  {
    id: 1,
    title: "Hospital Management System",
    client: "ABC Healthcare",
    description:
      "A system to manage appointments, billing, and medical records.",
    status: "Ongoing",
    progress: 60,
    startDate: "2025-01-15",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    client: "XYZ Retail",
    description:
      "Full-stack e-commerce website with payment gateway integration.",
    status: "Completed",
    progress: 100,
    startDate: "2024-11-01",
  },
  {
    id: 3,
    title: "Smart Plant Monitor",
    client: "GreenTech",
    description:
      "IoT system to monitor plant health with sensors and dashboard.",
    status: "Pending",
    progress: 20,
    startDate: "2025-03-01",
  },
];

const ProjectSection = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newProject, setNewProject] = useState({
    id: null,
    title: "",
    client: "",
    description: "",
    status: "Ongoing",
    progress: 0,
    startDate: "",
  });

  // Filtering + Searching + Sorting
  const filteredProjects = projects
    .filter(
      (project) =>
        (statusFilter === "All" || project.status === statusFilter) &&
        (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.client.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(a.startDate) - new Date(b.startDate);
      } else if (sortBy === "progress") {
        return b.progress - a.progress;
      }
      return 0;
    });

  // Handle Add/Update Project
  const handleSaveProject = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update existing project
      setProjects(
        projects.map((p) => (p.id === newProject.id ? { ...newProject } : p))
      );
      setIsEditing(false);
    } else {
      // Add new project
      const project = {
        id: projects.length + 1,
        ...newProject,
      };
      setProjects([...projects, project]);
    }

    setShowForm(false);
    setNewProject({
      id: null,
      title: "",
      client: "",
      description: "",
      status: "Ongoing",
      progress: 0,
      startDate: "",
    });
  };

  // Handle Delete
  const handleDelete = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
    setSelectedProject(null);
  };

  // Handle Edit (open form with pre-filled values)
  const handleEdit = (project) => {
    setNewProject(project);
    setIsEditing(true);
    setShowForm(true);
    setSelectedProject(null); // Close detail modal
  };

  return (
    <section className="py-12 px-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-left mb-8 text-gray-900">
        📂 Projects
      </h2>

      {/* Controls */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-6">
        {/* Left side: Search + Filters */}
        <div className="flex flex-col gap-3 w-full md:w-auto">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="🔍 Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-80 px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200"
          />

          {/* Status Filter Buttons */}
          <div className="flex flex-wrap gap-2 mt-2">
            {["All", "Ongoing", "Completed", "Pending"].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 
            ${
              statusFilter === status
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
            }`}
              >
                {status === "All" ? "All Projects" : status}
              </button>
            ))}
          </div>
        </div>

        {/* Right side: Sort + Add Project */}
        <div className="flex items-center gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg shadow-sm hover:bg-gray-100"
          >
            <option value="date">Sort by Date</option>
            <option value="progress">Sort by Progress</option>
          </select>

          <button
            onClick={() => {
              setShowForm(true);
              setIsEditing(false);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            + Add Project
          </button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="shadow-lg rounded-2xl border transition-all duration-300 p-6 bg-white 
                 hover:bg-blue-50 hover:shadow-2xl hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              Client: <span className="font-medium">{project.client}</span>
            </p>
            <p className="text-gray-700 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="mb-3">
              <p className="text-sm text-gray-600 mb-1">
                Status:{" "}
                <span
                  className={`font-medium ${
                    project.status === "Completed"
                      ? "text-green-600"
                      : project.status === "Ongoing"
                      ? "text-blue-600"
                      : "text-yellow-600"
                  }`}
                >
                  {project.status}
                </span>
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
            <button
              onClick={() => setSelectedProject(project)}
              className="w-full mt-3 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 cursor-pointer"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-11/12 md:w-2/3 lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {selectedProject.title}
            </h3>
            <p className="text-gray-600 mb-2">
              Client: {selectedProject.client}
            </p>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <p className="text-sm text-gray-500 mb-2">
              Start Date: {selectedProject.startDate}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Submit Date: {selectedProject.submitDate}
            </p>
            <p className="text-sm mb-4">
              Status:{" "}
              <span className="font-medium text-blue-600">
                {selectedProject.status}
              </span>
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${selectedProject.progress}%` }}
              ></div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 border rounded-lg cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => handleEdit(selectedProject)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-yellow-600 cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(selectedProject.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Project Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <form
            onSubmit={handleSaveProject}
            className="bg-white rounded-2xl shadow-2xl p-8 w-11/12 md:w-2/3 lg:w-1/2 space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {isEditing ? "Edit Project" : "Add New Project"}
            </h3>
            <input
              type="text"
              placeholder="Project Title"
              value={newProject.title}
              onChange={(e) =>
                setNewProject({ ...newProject, title: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Client Name"
              value={newProject.client}
              onChange={(e) =>
                setNewProject({ ...newProject, client: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <textarea
              placeholder="Project Description"
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg"
              required
            ></textarea>
            <input
              type="date"
              value={newProject.startDate}
              onChange={(e) =>
                setNewProject({ ...newProject, startDate: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <input
              type="date"
              value={newProject.startDate}
              onChange={(e) =>
                setNewProject({ ...newProject, submitDate: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <select
              value={newProject.status}
              onChange={(e) =>
                setNewProject({ ...newProject, status: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
            <input
              type="number"
              placeholder="Progress %"
              value={newProject.progress}
              onChange={(e) =>
                setNewProject({ ...newProject, progress: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg"
              min="0"
              max="100"
              required
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setIsEditing(false);
                }}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {isEditing ? "Update Project" : "Save Project"}
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
