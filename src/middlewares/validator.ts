import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validateBookMiddleware = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;
      const validated = schema.validate(body);
      if(validated.error) {
        res.status(400).send({
          msg: "All the parameters must be set"
        });
      } else {
        next();
      }
    } catch (error) {
      res.status(500).send({
        msg: "internal server error"
      });
    }
  };
};

export const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  publicationDate: Joi.date().required(),
  isbn: Joi.string().required(),
  genre: Joi.string().required()
});