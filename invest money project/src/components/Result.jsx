import React, { useContext,useEffect } from "react";
import { Context } from "../App";

export default function Result() {
  const { calculateInterest,answer } = useContext(Context);


 
  return (
    <>
    <div >
    <table className="table" border='1'>
        <thead>
        <tr>
            <th>annualInvestment</th>
            <th>interest</th>
            <th>valueEndOfYear</th>
            <th>year</th>
        </tr>
        </thead>
        <tbody>
        {
            answer?.map((e)=>{
                return(
                    <>
                    <tr>
                        <td>{e.annualInvestment}</td>
                        <td>{e.interest}</td>
                        <td>{e.valueEndOfYear}</td>
                        <td>{e.year}</td>
                    </tr>
                    </>
                )
            })
        }
        </tbody>
    </table>
    </div>
    </>
  );
}
