const {spawn}=require("child_process")
const words="dont you notice how, i get quiet when there no one else around. Me an dyou and awkward silence "

const childPython=spawn('python',['msg3.py',words])
childPython.stdout.on('data',(data)=>{
    console.log(`stdout: ${data}`)
})
childPython.stderr.on('data',(data)=>{
    console.error(`stdout: ${data}`)
})
childPython.on('close',(code)=>{
    console.log(`exited with code ${code}`)
})