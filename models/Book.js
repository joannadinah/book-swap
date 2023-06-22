import mongoose from "mongoose";

const { Schema } = mongoose;

const bookSchema = new Schema( {
    name: String,
    imageName: String,

});

const Book = 
mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;