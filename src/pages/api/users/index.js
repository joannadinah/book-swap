import dbConnect from "../../../../utils/dbConnect"
import User from "../../../../models/UserModel"

export default async function handler(req, res) {
    await dbConnect();

    if(req.method === "GET") {
        const users = await User.find();
        res.status(200).json(users);
    }
    if(req.method === "POST"){
        try{
            const userData = req.body;
            const newUser = new User(userData);
            await newUser.save();
            res.status(201).json({status: "book posted"})
        } catch (error) {
            console.log(error);
            res.status(400).json({error: error.message})
        }
    }
}