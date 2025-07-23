
"use server";
import { python,Python } from "pythonia";
//import { spawn } from "child_process";

const {spawn}=require("child_process")


export async function FormSubmission(data:any) {
 //Add client input is different because the function paramaters are fundamentally different

      //const pyFunct= await python("D:\myapps\myform\myform\src\app\msg.py")
      //const  sendEmail=await pyFunct.sendMsg()
       
        
      const  name=data.get("Name")
      const email=data.get("Email")
      const date=data.get("Date")
      //const msg="Name: "+name+"\n Email: "+email+"\n Date: "+date+"."
      const msg:string=`name: ${name}`
      const mdg2= `  surname: ${email}`
      const msg3=` date: ${date}`
         const l=`name ${name} ${date} ${email}`
    const childPython=spawn('python',['msg3.py',l])
childPython.stdout.on('data',(data:any)=>{
    console.log(`stdout: ${data}`)
})
childPython.stderr.on('data',(data:any)=>{
    console.error(`stdout: ${data}`)
})
childPython.on('close',(code:any)=>{
    console.log(`exited with code ${code}`)
})
    
    
   
}