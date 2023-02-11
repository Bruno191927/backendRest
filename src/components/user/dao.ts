import { IUser } from "./interface/user.interface";
import { User } from "./model";
import * as bcrypt from 'bcrypt';
export class UserDao {
    constructor(){
    }

    async createUser(user:IUser){
        try {
            const userModel = new User()
            userModel.fullname = user.fullname;
            userModel.username = user.username;
            userModel.password = bcrypt.hashSync(user.password, 12);
            return await userModel.save();
        } catch (error) {
            return null;
        }
    }

    async findUserByUserName(username:string){
        try {
            const existUser = await User.findOneBy({username:username});
            return existUser;
        } catch (error) {
            return null;
        }
    }

    async verifyUser(user:string,password:string){
        try {
            const existUser = await this.findUserByUserName(user);
            if(existUser){
                const validPassword = bcrypt.compareSync(password,existUser.password)
                if(existUser.username === user && validPassword){
                    return existUser;
                }
                return null;
            }
            else{
                return null;
            }
        } catch (error) {
            return null;
        }
    }
}