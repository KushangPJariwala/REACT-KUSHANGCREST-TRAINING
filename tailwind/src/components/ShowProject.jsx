import React from "react";

export default function ShowProject({ showProject, deleteProject }) {
  console.log("showProject", showProject);
  return (
    <div className="flex flex-col border p-10 w-full m-2 bg-gray-50">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Project Details</h1>
        <button
          className="bg-red-500 font-semibold text-slate-100 px-4 py-1 rounded hover:bg-red-600"
          onClick={deleteProject}
        >
          Delete Project
        </button>
      </div>
      <hr className="mt-5" />
      <div class="container mx-auto">
        <div class="bg-white rounded-lg shadow-md p-6 w-full mt-20">
          <div class="mb-4 text-sm text-gray-600">
            ID: <span class="font-medium text-gray-800">{showProject.id}</span>
          </div>

          <h3 class="text-2xl font-semibold mb-2 text-gray-800 mt-6">
            {showProject.title}
          </h3>

          <p class="text-sm text-gray-700 mt-5 mb-8 ">{showProject.desc}</p>

          <div class="flex items-center text-sm text-gray-600">
            <svg
              class="w-4 h-4 mr-1 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            Due Date:{" "}
            <span class="font-medium text-gray-800 text-red-600 ml-3 ">
              {showProject.due}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
