import { Schema, model } from 'mongoose'

const commentSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: [true, 'Post is required']
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Author is required']
    },
    content: {
        type: String,
        required: [true, 'Content is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default model('Comment', commentSchema)
