import fs from 'fs';
import path from "path";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const file = path.join(__dirname, '/files/fileToRead.txt');
    const rs = fs.createReadStream(file);
    rs.pipe(process.stdout)
};

await read();