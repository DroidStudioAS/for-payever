// user.model.ts
import { Schema, model, Document } from 'mongoose';

// Define interface for user document
interface UserDocument extends Document {
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

// Define schema for user document
const userSchema = new Schema<UserDocument>({
    email: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    avatar: { type: String, required: true }
});

// Custom method to generate auto-incremented ID
userSchema.statics.generateId = async function() {
    // Find the highest existing ID
    const highestUser = await this.findOne().sort({ id: -1 });
    const newId = highestUser ? highestUser.id + 1 : 1;
    return newId;
};

// Create and export User model
const User = model<UserDocument>('User', userSchema);

export default User;
export { UserDocument };

