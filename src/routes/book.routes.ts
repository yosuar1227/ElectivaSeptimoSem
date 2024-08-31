import { Router, Request, Response } from 'express';
import { getAllBooks, findById, createBook, updateBook, deleteBook } from '../controllers/bookController';
import { bookSchema, validateBookMiddleware } from '../middlewares/validator';

const router = Router();

//listar todos
router.get('/', async (req: Request, res: Response) => {
    try {
        const books = await getAllBooks();
        res.status(200).send({
            msg: "Listados exitosamente",
            data: books
        });
    } catch (error) {
        const err = error as Error;
        const errorMsg = err?.message;
        res.status(400).send({
            msg: errorMsg || "Error en la base de datos"
        });
    }
});

//listar por id
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const response = await findById(id);
        res.status(200).send({
            msg: "Listado exitosamente",
            data: response
        });
    } catch (error) {
        const err = error as Error;
        const errorMsg = err?.message;
        res.status(400).send({
            msg: errorMsg || "Error en la base de datos"
        });
    }
});

//crear
router.post('/', validateBookMiddleware(bookSchema), async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const response = await createBook(body);
        res.status(201).send({
            msg: "Creado exitosamente",
            data: response
        });
    } catch (error) {
        const err = error as Error;
        const errorMsg = err?.message;
        res.status(400).send({
            msg: errorMsg || "Error en la base de datos"
        });
    }
});

//actualizar
router.patch('/:id', validateBookMiddleware(bookSchema), async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const params = req.params.id;
        const response = await updateBook(params, body);
        res.status(200).send({
            msg: "Actualizado exitosamente",
            data: response
        })
    } catch (error) {
        const err = error as Error;
        const errorMsg = err?.message;
        res.status(400).send({
            msg: errorMsg || "Error en la base de datos"
        });
    }
});

//eliminar por id
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const response = await deleteBook(id);
        res.status(200).send({
            msg: "Eliminado exitosamente",
            data: response
        });
    } catch (error) {
        const err = error as Error;
        const errorMsg = err?.message;
        res.status(400).send({
            msg: errorMsg || "Error en la base de datos"
        });
    }
});

export default router;