import { Injectable } from '@nestjs/common';
import User, { UserDocument } from './user.model';

@Injectable()
export class UserService {

    async createUser(email: string, first_name: string, last_name: string, avatar: string): Promise <UserDocument | null> {
        try {
            const newUser = await User.create({ email, first_name, last_name, avatar });
            return newUser;
        } catch (error) {
            console.log(error)
        }
    }

}
