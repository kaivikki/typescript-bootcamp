import { Router, RequestHandler } from 'express';
import axios ,{ AxiosResponse } from 'axios';
const router = Router();

interface User{
  userId:number; 
  id:number; 
  title:string; 
  completed:boolean;
}

const makeApicall: RequestHandler = async (req, res, next) => {
  let url = 'https://jsonplaceholder.typicode.com/todo/1';
  let toDo = await getData(url);
  res.status(201).json(toDo);
};

const getData = async(url:string): Promise<User|string> =>{
    try{
      const userDetail:AxiosResponse<User> = await axios.get(url);
      return userDetail.data;
    }catch(err:unknown){
      if (err instanceof Error) {
        return `Error Occured while getting user: ${err.message}`
      }
      return 'Unkown Error';
    }
}

router.get('/makeApiCall', makeApicall);
export default router;