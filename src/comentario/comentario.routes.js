import { Router } from 'express'
import { 
    getAllComments,
    createComment,
    getCommentById,
    deleteComment,
    updateComment
} from './comentario.controller.js'
import { validateJwt } from '../../middlewares/validate.jwt.js'

const api = Router()

api.get('/',  getAllComments)
api.post('/',  createComment)
api.get('/:id',  getCommentById)
api.delete('/:id', [validateJwt], deleteComment)
api.put('/:id', [validateJwt], updateComment)

export default api
