import React from "react";
import ProjectsList from "./ProjectsList";

export default function Sidebar({ changeProjectState ,projectsState,setshowProject,showProject}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-slate-900 text-stone-50 rounded-r-xl md:w-75">
      <h2 className="font-bold uppercase mb-5 md:text-xl">Your projects</h2>
      <div>
        <button
          className="flex md:text-base p-3 w-full text-xs bg-slate-700 hover:bg-slate-600 rounded"
          onClick={changeProjectState}
        >
          + Add Project
        </button>
      </div>

      <ProjectsList projectsState={projectsState} setshowProject={setshowProject} showProject={showProject}/>
    </aside>
    // <div>Sidebar</div>
  );
}

