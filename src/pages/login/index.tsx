import { useRouter } from 'next/router';
import { useState } from 'react';

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })


    // Validamos si la respuesta es correcta
    if (response.status == 200) {
      router.push('/')
      // console.log('Iniciaste sesión correctamente');
    } else {
      console.log('Error al iniciar sesión')
    }

  }

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" value={user.email} onChange={handleChange} />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" value={user.password} onChange={handleChange} />

				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
