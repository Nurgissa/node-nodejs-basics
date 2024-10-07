
import { stat, writeFile } from 'fs/promises';

const fileName = 'files/fresh.txt';

const hasFile = (path) => stat(path).then(() => true).catch(() => false);

const create = async () => {
    // Write your code here
    if (await hasFile(fileName)) throw Error("FS operation failed");

    try {
        await writeFile(fileName, "I am fresh and young");
    } catch (error) {
        throw Error("FS operation failed");
    }
};

await create();