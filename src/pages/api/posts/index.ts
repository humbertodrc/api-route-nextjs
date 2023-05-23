import { data } from 'autoprefixer'
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


type DataResponse =  Data


export default function handler(req: NextApiRequest, res: NextApiResponse<DataResponse[]>) {

  res.status(200).json(posts)
}