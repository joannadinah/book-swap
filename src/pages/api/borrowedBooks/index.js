import User from "../../../../models/UserModel";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import dbConnect from "../../../../utils/dbConnect";

export default async function handler(request, response) {
    await dbConnect();

    const session = await getServerSession(request, response, authOptions);

  
    if (request.method === "POST") {
      try {
        const bookData = request.body; 
        console.log(bookData)
        await User.updateOne(
            { _id:session.user._id },
            { $addToSet: { borrowed: bookData }}
        )
        // const product = await Product.create(productData);
  
        return response.status(201).json({status: "Book lend."});
      } catch (error) {
  
        return response.status(500).json({error: error.message});
      }
    }
    if (request.method === "PATCH") {
        try {
          const bookData = request.body; 
          console.log(bookData)
          await User.updateOne(
              { _id:session.user._id },
              { $pull: { borrowed: bookData }}
          )
    
          return response.status(201).json({status: "Book available."});
        } catch (error) {
    
          return response.status(500).json({error: error.message});
        }
      }
    }