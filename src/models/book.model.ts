import {Schema, model} from 'mongoose';
import { IBook } from '../interfaces/book.interface';

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publicationDate: {
    type: Date,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  }
});

export const Book = model('Libro', bookSchema);