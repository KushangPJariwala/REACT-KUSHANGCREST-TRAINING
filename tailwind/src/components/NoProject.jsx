import React from "react";
import p from "../assets/p.png";

export default function NoProject({ changeProjectState }) {
  return (
    <>
      <div className="flex flex-col border items-center justify-center p-10 w-full m-1 ">
        <img src={p} alt="" className="object-contain h-20" />

        <p className="mt-3 font-bold text-2xl">No Project Added</p>
        <p className="mt-3 text-lg">
          Select a Project or get started with a new one
        </p>
        <button
          className="bg-stone-600 font-semibold text-slate-100 mt-5 px-4 py-2 rounded hover:bg-stone-800"
          onClick={changeProjectState}
        >
          Create new project
        </button>
      </div>
    </>
  );
}
