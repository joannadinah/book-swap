import mongoose from "mongoose";
import "./User";

const { Schema } = mongoose;

const bookSchema = new Schema( {
    title: String,
    author: String,
    image: String,
    description: String,
    borrowed: Boolean,
    userId: String 

});

const Book = 
mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;