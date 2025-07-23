'use client'

import { useState } from "react";
import Form from 'next/form'
import runPy from "./sendr";

import { FormSubmission } from "../actions";


const onSubmit=FormSubmission

function Searchbox(text:string){
  const [name,setName]=useState("")

  return(
      <>
      
      <div className="relative text-black">
          <input 
          type="text"
          value={name}
         onChange={e=>setName(e.target.value)}
          className='border-[0.5] border-[#0e1618]  w-80 h-10'
          placeholder={`${"  "+text}`}
          name={text}
         
          />
         
      </div><br></br>
     
      
      </>
      
  );
}
export default function(){
    return(
            <>
            <div className="w-100 h-150 bg-white rounded-2xl 
            items-center">
        <Form action={FormSubmission}>
            <div>{Searchbox("Name")}</div>
            <div>{Searchbox("Email")}</div>
            <div>{Searchbox("Date")}</div>
                       <div className='flex flex-row items-center justify-center'>
          <button type="submit" 
          className='border-2 border-[#0e1618] text-white font-bold bg-[#1a120d] hover:bg-white hover:text-[#1a120d]
                    focus:bg-white focus:text-[#1a120d]
                    relative bottom-0
                    rounded-lg
                
                    lg:w-100 md:w-45 sm:w-60 max-sm:w-45
                    lg:h-20 md:h-15 sm:h-20 max-sm:h-15'
>Submit</button></div> 
        </Form>
        </div>
    </>
    );
}