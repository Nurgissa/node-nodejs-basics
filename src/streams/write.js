import path from "path";
import {fileURLToPath} from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
    const file = path.join(__dirname, '/files/fileToWrite.txt');
    const ws = fs.createWriteStream(file);
    const rs = process.stdin.pipe(ws);
};

await write();