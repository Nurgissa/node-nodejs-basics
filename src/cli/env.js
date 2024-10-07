const parseEnv = () => {

    const suitableEnvs = Object.entries(process.env).filter(([k, v]) => k.toUpperCase().startsWith("RSS_"));

    const envs = []
    for (const [key, value] of suitableEnvs) {
        envs.push(`${key}=${value}`);
    }
    console.log(envs.join("; "));
};



parseEnv();