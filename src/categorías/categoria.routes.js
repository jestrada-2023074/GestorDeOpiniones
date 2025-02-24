import { Router } from 'express'
import { 
    getAllCategorias,
    createCategoria,
    getCategoriaById,
    deleteCategoria,
    updateCategoria
} from './categoria.controller.js'
import { validateJwt, isAdmin } from '../../middlewares/validate.jwt.js'


const api = Router()


api.get('/',[validateJwt, isAdmin], getAllCategorias)
api.post('/',[validateJwt, isAdmin], createCategoria)
api.get('/:id',[validateJwt, isAdmin], getCategoriaById)
api.delete('/:id',[validateJwt, isAdmin], deleteCategoria)
api.put('/:id',[validateJwt, isAdmin], updateCategoria)


export default api