import { NextApiRequest, NextApiResponse } from "next"

type Data = {
  name: string
  author: string
  id: number
  text: string
}


// Base de Datos hardcodeada
const posts: Data[] = [
  {
    name: "Capitan America",
    author: "Steve Rogers",
    id: 1,
    text: "This is a post"
  },
  {
    name: "Spiderman",
    author: "Peter Parker",
    id: 2,
    text: "This is a post"
  },
  {
    name: "Ironman",
    author: "Tony Stark",
    id: 3,
    text: "This is a post"
  }
]


type DataResponse = {message: string} | Data


export default function handler(req: NextApiRequest, res: NextApiResponse<DataResponse>) {
  const { id } = req.query
  
  // res.end(`Post: ${id}`);

  // Buscamos el post en la base de datos
  const post: Data | undefined = posts.find((post) => post.id === Number(id))
  
  if(post) {
    res.status(200).json(post)
  } else {
    res.status(404).json({ message: `Post with id: ${id} not found` })
  }
}