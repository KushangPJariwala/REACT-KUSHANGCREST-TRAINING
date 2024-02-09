import React from "react";

export default function Input({ label, ...props}) {

    const inpStyle='border-b border-stone-700 focus:outline-none bg-slate-50'
  return (
    <>
      <p className="flex flex-col w-full gap-3 ">
        <label className="font-semibold">{label}</label>
         <input type="text"  className={inpStyle} {...props}/>
      </p>
    </>
  );
}
