import mongoose from 'mongoose'
import "./Book"


const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    image: String,
    
});

// ENCRYPTION 
const User = 
mongoose.models.User || mongoose.model("User", userSchema);

export default User;

// books: { type: [Schema.Types.ObjectId], ref: "Book" },