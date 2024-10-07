import {readFile} from 'fs/promises';
import path from "path";
import {fileURLToPath} from "url";

const {
    createHash
} = await import('crypto');

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    const hash = createHash('sha256');
    const file = path.join(__dirname, '/files/fileToCalculateHashFor.txt');

    try {
        const content = await readFile(file, { encoding: "utf-8" });
        hash.update(content);
        console.log(hash.copy().digest('hex'));
    } catch (err) {
        console.error(err.message);
    }

};

await calculateHash();