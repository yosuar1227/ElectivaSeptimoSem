import { Book } from '../models/book.model';
import { IBook } from '../interfaces/book.interface';

export const getAllBooks = async () => {
  try {
    return await Book.find();
  } catch (error) {
    throw new Error("No se pudo listar en la base de datos");
  }
};

export const findById = async (id: string) => {
  try {
    return await Book.findById(id);
  } catch (error) {
    throw new Error("No se pudo listar por id en la base de datos");
  }
};

export const createBook = async (book: IBook) => {
  try {
    const newBook = new Book(book);
    return await newBook.save();
  } catch (error) {
    throw new Error("No se pudo guardar en la base de datos");
  }
}

export const updateBook = async (id: string, book: IBook) => {
  try {
    return await Book.findByIdAndUpdate(id, book);
  } catch (error) {
    throw new Error("No se pudo actualizar en la base de datos");
  }
};

export const deleteBook = async (id: string) => {
  try {
    return await Book.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("No se pudo eliminar en la base de datos");
  }
};