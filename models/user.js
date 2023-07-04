import mongoose from 'mongoose'
import "./Book"


const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    image: String,
    books: { type: [Schema.Types.ObjectId], ref: "Book" },
    borrowed: [{ type: String}]
});

// ENCRYPTION 
const User = 
mongoose.models.User || mongoose.model("User", userSchema);

export default User;