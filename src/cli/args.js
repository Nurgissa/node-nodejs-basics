const parseArgs = () => {
    let result = [];
    const args = process.argv;

    for (let i = 2; i < args.length; i += 2 ) {
        const key = args[i].replace(/--/g, '');
        const value = args[i+1];

        result.push(`${key} is ${value}`);
    }
    console.log(result.join(', '));
};

parseArgs();
