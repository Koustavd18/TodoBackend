import { RequestHandler } from "express";
import { Todo } from '../models/todo';


const TODOS : Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
const text  = (req.body  as {text:string}).text;
const newTodo = new Todo(Math.random().toString(), text);

TODOS.push(newTodo);

res.status(201).json( {message:"Todo Created", createdTodo: newTodo});
};

export const getTodos:RequestHandler = (req,res,next) => {
    res.status(201).json({ message:"Here is the list of todos", TODOS})
};