import { NextFunction, Request, Response, Router } from 'express';

import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todos';

const router = Router();

const validator = ({name}:{name:string}) =>(req:Request, res:Response, next:NextFunction) =>{
  let requestPath = req.originalUrl;
  let headers = req.headers;
  console.log(`Validaing Request at ${requestPath}, ${headers} ${name}`);
  next();
}

router.post('/',validator({name:'Vikram Arora'}),createTodo);

router.get('/', getTodos);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router;