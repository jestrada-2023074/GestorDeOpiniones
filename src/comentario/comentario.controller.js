import Comment from "./comentario.model.js"

// Obtener todos los comentarios
export const getAllComments = async (req, res) => {
    try {
        const { limit = 20, skip = 0 } = req.query
        const comments = await Comment.find()
            .skip(Number(skip))
            .limit(Number(limit))

        if (comments.length === 0) {
            return res.status(404).send({
                success: false,
                message: "No comments found"
            })
        }
        return res.send({
            success: true,
            message: "Comments found:",
            comments
        })
    } catch (err) {
        console.error("General error", err)
        return res.status(500).send({
            success: false,
            message: "General error",
            err
        })
    }
}

// Obtener un comentario por ID
export const getCommentById = async (req, res) => {
    try {
        const { id } = req.params
        const comment = await Comment.findById(id)

        if (!comment) {
            return res.status(404).send({
                success: false,
                message: "Comment not found"
            })
        }
        return res.send({
            success: true,
            message: "Comment found:",
            comment
        })
    } catch (err) {
        console.error("General error", err)
        return res.status(500).send({
            success: false,
            message: "General error",
            err
        })
    }
}

// Crear un nuevo comentario
export const createComment = async (req, res) => {
    try {
        const data = req.body
        const comment = new Comment(data)
        await comment.save()
        return res.send({
            success: true,
            message: "Comment created:",
            comment
        })
    } catch (err) {
        console.error("General error", err)
        return res.status(500).send({
            success: false,
            message: "General error",
            err
        })
    }
}

// Actualizar un comentario
export const updateComment = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        const updatedComment = await Comment.findByIdAndUpdate(
            id,
            data,
            { new: true }
        )

        if (!updatedComment) {
            return res.status(404).send({
                success: false,
                message: "Comment not found and not updated"
            })
        }
        return res.send({
            success: true,
            message: "Comment updated:",
            comment: updatedComment
        })
    } catch (err) {
        console.error("General error", err)
        return res.status(500).send({
            success: false,
            message: "General error",
            err
        })
    }
}

// Eliminar un comentario
export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params
        const deletedComment = await Comment.findByIdAndDelete(id)

        if (!deletedComment) {
            return res.status(404).send({
                success: false,
                message: "Comment not found"
            })
        }
        return res.send({
            success: true,
            message: "Comment removed successfully"
        })
    } catch (err) {
        console.error("General error", err)
        return res.status(500).send({
            success: false,
            message: "General error",
            err
        })
    }
}
