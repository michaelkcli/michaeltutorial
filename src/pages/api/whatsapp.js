// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sleep } from "@/utility";

const handler = async (req, res) => {
    await sleep(2000);

    res.status(200).json({
        result: [
            {
                name: "Kunal",
                createdAt: "05/03/2018",
                description:
                    "This is a very long long very long long very long long very long long very long long text",
                unread: 2,
            },
            {
                name: "Jane",
                createdAt: "08/03/2019",
                description: "Hey There! Are you using Whatsapp?",
                unread: 2,
            },
            {
                name: "Mark",
                createdAt: "03/10/2019",
                description: "Hey There! Are you using Whatsapp?",
                unread: 2,
            },
            {
                name: "Rahul",
                createdAt: "03/03/2018",
                description: "When are the elections?",
                unread: 0,
            },
            {
                name: "Nikita",
                createdAt: "27/02/2018",
                description: "Yo wassup!",
                unread: 0,
            },
            {
                name: "Vacation Trip",
                createdAt: "26/02/2018",
                description: "Photo",
                unread: 0,
            },
        ],
    });
};

export default handler;
