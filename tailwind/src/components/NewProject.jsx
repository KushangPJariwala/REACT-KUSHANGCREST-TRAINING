import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ addProjectDetails,addProject,cancel}) {

  
  return (
    <>
    
    <div className="p-10 border border-slate-300 w-full m-1 rounded-lg bg-slate-50 flex justify-center ">
      <div className="w-1/2 mt-20">
        <menu className="flex gap-3 items-center justify-end">
          <button
            className="bg-green-600 font-semibold text-slate-100 px-4 py-1 rounded"
            onClick={addProject}
          >
            Save
          </button>
          <button className="bg-red-600 font-semibold text-slate-100 px-4 py-1 rounded"
          onClick={cancel}>
            Cancel
          </button>
        </menu>
        <div className="flex flex-col mt-5 items-center justify-center gap-10">
          <Input
            label="Title"
            onChange={(e) => {
              addProjectDetails("title", e.target.value);
            }}
          />
          <Input
            label="Description"
            onChange={(e) => {
              addProjectDetails("desc", e.target.value);
            }}
          />
          <Input
            label="Due date"
            onChange={(e) => {
              addProjectDetails("due", e.target.value);
            }}
          />
        </div>
      </div>
    </div>
    </>
  );
}
