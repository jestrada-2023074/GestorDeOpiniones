import Publication from "./publicacion.model.js"

// Obtener todas las publicaciones
export const getAllPublications = async (req, res) => {
    try {
        const { limit = 20, skip = 0 } = req.query
        const publications = await Publication.find()
            .skip(Number(skip))
            .limit(Number(limit))

        if (publications.length === 0) {
            return res.status(404).send({
                success: false,
                message: "No publications found"
            })
        }
        return res.send({
            success: true,
            message: "Publications found:",
            publications
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

// Obtener una publicación por ID
export const getPublicationById = async (req, res) => {
    try {
        const { id } = req.params
        const publication = await Publication.findById(id)

        if (!publication) {
            return res.status(404).send({
                success: false,
                message: "Publication not found"
            })
        }
        return res.send({
            success: true,
            message: "Publication found:",
            publication
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

// Crear una nueva publicación
export const createPublication = async (req, res) => {
    try {
        const data = req.body
        const publication = new Publication(data)
        await publication.save()
        return res.send({
            success: true,
            message: "Publication created:",
            publication
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

// Actualizar una publicación
export const updatePublication = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        const updatedPublication = await Publication.findByIdAndUpdate(
            id,
            data,
            { new: true }
        )

        if (!updatedPublication) {
            return res.status(404).send({
                success: false,
                message: "Publication not found and not updated"
            })
        }
        return res.send({
            success: true,
            message: "Publication updated:",
            publication: updatedPublication
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

// Eliminar una publicación
export const deletePublication = async (req, res) => {
    try {
        const { id } = req.params
        const deletedPublication = await Publication.findByIdAndDelete(id)

        if (!deletedPublication) {
            return res.status(404).send({
                success: false,
                message: "Publication not found"
            })
        }
        return res.send({
            success: true,
            message: "Publication removed successfully"
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
