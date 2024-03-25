// user.model.ts
import { Schema, model, Document } from 'mongoose';

// Define interface for user document
interface UserDocument extends Document {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

// Define schema for user document
const userSchema = new Schema<UserDocument>({
    id: { type: Number, required: true },
    email: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    avatar: { type: String, required: true }
});

// Create and export User model
const User = model<UserDocument>('User', userSchema);
export default User;
