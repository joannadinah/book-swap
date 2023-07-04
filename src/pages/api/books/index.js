import dbConnect from "../../../../utils/dbConnect";
import Book from "../../../../models/Book";
import { books } from "../../../../lib/books"

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const books = await Book.find();
    return response.status(200).json(books);
  }


  if (request.method === "POST") {
    try {
      const bookData = request.body; 
      console.log(bookData)
      const book = new Book(bookData);
      await book.save();
      // const product = await Product.create(productData);

      return response.status(201).json({status: "Book posted."});
    } catch (error) {

      return response.status(500).json({error: error.message});
    }
  }
}