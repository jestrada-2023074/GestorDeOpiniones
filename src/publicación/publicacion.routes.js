import { Router } from 'express'
import { 
    getAllPublications,
    createPublication,
    getPublicationById,
    deletePublication,
    updatePublication
} from './publicacion.controller.js'
import { validateJwt } from '../../middlewares/validate.jwt.js'

const api = Router()

api.get('/', getAllPublications)
api.post('/' ,  createPublication)
api.get('/:id',  getPublicationById)
api.delete('/:id', [validateJwt], deletePublication)
api.put('/:id', [validateJwt], updatePublication)

export default api
