import { Router } from "express";
import { ctrlDeletePost, ctrlGetPost, ctrlCreatePost, ctrlUpdatePost } from "../controllers/foro.controllers.js";
import { createPostschema, editorPostschema } from "../models/schemas/foro.schema.js";
import { validator } from "../middlewares/validator.js";
const taskrouter=Router();



//trae las tareas
taskrouter.get('/api/foro',ctrlGetPost)
//crea tarea
taskrouter.post('/api/foro', createPostschema, validator , ctrlCreatePost,)
//modifica tarea
taskrouter.put('/api/foro/:id' , editorPostschema , validator , ctrlUpdatePost)
//elimina
taskrouter.delete('/api/foro/:id',ctrlDeletePost)

export { taskrouter }