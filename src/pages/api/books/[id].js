import dbConnect from "../../../../utils/dbConnect";
import { books } from "../../../../lib/books"
import Book from "../../../../models/Book";

export default async function handler(request, response) {
    await dbConnect();
    const  { id } = request.query;

    if (request.method === "GET") {
        const book = await Book.find({userId: id});

        if (!book) {
            return response.status(404).json({ status: "Not Found" });
        }
        response.status(200).json(book);
    }
}

