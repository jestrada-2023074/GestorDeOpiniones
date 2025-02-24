'use strict'

import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cors from 'cors'
import categoriaRoutes from '../src/categorías/categoria.routes.js' 
import CommentRoutes from '../src/comentario/comentario.routes.js'
import publicRoutes from '../src/publicación/publicacion.routes.js'
import userRoutes from '../src/usuarios/usuarios.routes.js'
import Usuario from '../src/usuarios/usuarios.model.js'
import { hash } from "argon2"

const configs = (app)=>{ 
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(cors())
    app.use(morgan('dev'))

}

const routes = (app)=>{
    app.use('/public', publicRoutes)
    app.use('/user', userRoutes)
    app.use('/comment', CommentRoutes)
    app.use('/category', categoriaRoutes)
    
}

export const initServer = ()=>{
    const app = express()
    try{
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running in port ${process.env.PORT}`)
    }catch(err){
        console.error('Server init failed', err)
    }
}
export const createAdminUser = async () => {
    try {
        const hashedPassword = await hash("Admin123") 
        const adminUser = new Usuario({
            name: "Admin",
            surname: "System",
            username: "Eladmin",
            email: "admin@kinal.edu.gt",
            password: hashedPassword,
            phone: "32913102", 
            role: "ADMIN"
        })
        await adminUser.save();
        console.log("Administrador creado exitosamente")
    } catch (error) {
        console.error("Error al crear el administrador:", error)
    }
}