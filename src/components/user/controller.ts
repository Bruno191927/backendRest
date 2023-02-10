import { UserDao } from "./dao";
import { IUser } from './interface/user.interface';
import { Request,Response } from "express";
export class UserController{

    async createUser(request:Request,response:Response){
        const dao = new UserDao();
        try {
            const {user,fullName,password}:any = request.body;
            const existUser = await dao.findUserByUserName(user);
            if(existUser){
                return response.status(303).json("User not found");
            }
            else{
                const userData:IUser = {
                    fullName,
                    password,
                    user
                };
                const newUser = await dao.createUser(userData);
                if(newUser){
                    return response.status(201).send("User create sucessfull");
                }
                else{
                    return response.status(500).send("Internal server error");
                }
            }
        } catch (error:any) {
            console.log(error);
            return response.status(500).send("Internal server error");
        }
    }

    async findUser(request:Request,response:Response){
        const dao = new UserDao();
        try {
            const {user,password}:any = request.body;
            const existUser = await dao.verifyUser(user,password);
            if(existUser){
                return response.status(200).send(existUser.fullName);
            }
            else{
                return response.status(404).send("User not found or email or passwor incorrect");
            }
        } catch (error) {
            console.log(error);
            return response.status(500).send("Internal server error");
        }
    }
}