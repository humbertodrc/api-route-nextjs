import { USERS } from '@/database'
import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  // Primero del reques extraemos del body los datos email y password
  const { email, password } = req.body
  
  // Buscamos en nuestra base de datos harcodeada el usuario con el email y password
  const user = USERS.find(user => user.email === email && user.password === password)

  // Si el usuario no existe, devolvemos un error
  if (!user) {
    res.status(401).send({ message: 'User not found' })
  }

  // Si el usuario existe, seteamos una cookie como true que si existe significa que el usuario lo vamos a loguear
  res.setHeader('set-cookie', 'access=true; path=/; semesite=lax; httponly')

  // Devolvemos una respuesta de que el usuario se logueo correctamente
  res.status(200).send({ message: 'User logged' })

}           