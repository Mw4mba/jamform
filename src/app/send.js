import { python } from "pythonia";

const rand = await python("./msg.py");
await rand.sendMsg();
python.exit();