import { deleteUser, getAllUser, getUserID, updateUser } from '../controllers/user';
import express,{Router} from 'express';
import { isAuthentication } from '../minddleware';

export default (route:Router)=>{
    route.get("/users",isAuthentication,getAllUser)
    route.get("/users/:id",isAuthentication,getUserID)
    route.patch("/users/:id",isAuthentication,updateUser)
    route.delete("/users/:id",isAuthentication,deleteUser)
}