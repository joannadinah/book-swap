import dbConnect from "../../../../utils/dbConnect"
// import User from "../../../../models/User"



export default async function handler(req, res) {
    await dbConnect();
    const {id} = req.body;

    if (req.method === "PATCH") {
        const userToUpdate = await User.findByIdAndUpdate(id, {
            $set: req.body,
        });
        return res.status(200).json(userToUpdate);
    }
    if(req.method === "GET") {
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({ status: "Not Found" });
        }
        return res.status(200).json(user);
    }
    // if (req.method === "POST"){
    //     try {
    //         const {}
    //     }
    // }
}