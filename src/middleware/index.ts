import createErrors from 'http-errors'
import {Request,Response,NextFunction} from 'express';

export const error404Handler = ( request:Request, response:Response, next:NextFunction ) => {
    next(createErrors(404))
}

export const errorHandler = ( err:any,request:Request, response:Response, next:NextFunction ) => {
    console.log('Error handler');
    response.locals.message = err.message;
    response.locals.error = request.app.get('env') === 'development' ? err : {};
    response.status(err.status || 500);
    response.send({ message: err.message });
}