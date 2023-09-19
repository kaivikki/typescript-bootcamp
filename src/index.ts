import express, { Request, Response, NextFunction } from 'express';
import { router } from './routes/loginRoute';
import bodyParser, { json } from 'body-parser';
import cookieSession from 'cookie-session';
import todoRoutes from './routes/todos';

const app = express();

// Register Middlewares
app.use(json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['laskdjf'] }));

//Regiter Route
app.use('/todos', todoRoutes);
app.use(router);

//Error Handling Middleware
app.use((err:Error,req:Request,res:Response, next:NextFunction):void=>{
  console.log("Uncaught Error Occurred.");
});

//Start the server.
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
