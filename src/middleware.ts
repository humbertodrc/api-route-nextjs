import {NextRequest, NextResponse} from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
	// Cada vez que se quiere acceder a una ruta, se ejecuta este middleware

	// Buscamos la cookie de acceso
	const cookies = req.cookies.get("access");
	const url = req.nextUrl.pathname;

	// Validamos si la url incluye el path que tenemos definido
	if (url.includes("/admin")) {
		// Si la cookie no existe, redireccionamos al login
		if (!cookies) {
			return NextResponse.redirect("http://localhost:3000/login");
		}
	}
}
