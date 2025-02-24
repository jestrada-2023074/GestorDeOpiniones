'use strict'

import {Schema, model} from 'mongoose'

const publicationSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',  // Este es el nombre correcto que debe coincidir con el modelo
        required: true
    },
    mainText:{
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
})

export default model('publication', publicationSchema) 
