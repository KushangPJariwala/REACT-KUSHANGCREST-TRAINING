import React from "react";

export default function ProjectsList({
  projectsState,
  setshowProject,
  showProject,
}) {
  const projects = projectsState.projects;
  return (
    <>
      <div className="mt-10">
        {projects.map((p, key) => {
          return (
            <p
              className="flex md:text-base p-3 w-full text-xs bg-slate-700 hover:bg-slate-400 border-b border-slate-500 focus:bg-slate-600"
              style={{backgroundColor:p?.id===showProject?.id?'#94A3B8':undefined}}
              onClick={() => setshowProject(p)}
            >
              {p.title}
            </p>
          );
        })}
      </div>
    </>
  );
}
