// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sleep } from "@/utility";

const handler = async (req, res) => {
    // wait two second for loading implementation
    await sleep(2000);

    return res.status(200).json({
        result: [
            "David",
            "John",
            "Mary",
            "Paul",
            "Peter",
            "Cherry",
            "James",
            "William",
            "Thomas",
            "Oliver",
            "Daniel",
            "Michael",
            "Alexander",
            "Jack",
        ],
    });
};

export default handler;
