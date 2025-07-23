
import { python } from "pythonia";


export default async function runPy(){
const rand = await python("./app/randomchoices.py");
console.log(await rand.get_random_word());
python.exit();
}