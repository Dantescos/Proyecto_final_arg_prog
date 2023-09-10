import { postModels } from "../models/postModel.js";

export const ctrlGetPost = async (req, res) => {
  try {
    const posts = await postModels.findAll();
    if (!posts) return res.status(404);
    return res.status(200).json(posts);
  } catch (error) {

    console.error(error);
    return res.status(500).json({
      mesasage: "error server",
    })
  }
}
export const ctrlCreatePost = async (req, res) => {
  try {
    const newPost = await postModels.create(req.body)
    return res.status(201).json(newPost)
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      mesasage: "error server"
    })
  }
}

export const ctrlUpdatePost = (req, res) => {

}

export const ctrlDeletePost = async (req, res) => {
  const {id}=req.params
  try{
const PostDeleted= await postModels.destroy({
  where:{
    id:id
  }
})
if (!PostDeleted)
return res.status(404).json
mesasage:'tarea eliminada'

  }catch(error){
    console.error(error);
    return res.status(500).json({
      mesasage: "error server",
    })
  }
  }

