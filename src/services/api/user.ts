import { User } from "../interfaces/user";

const API_URL = process.env.API_URL || "http://192.168.0.5:4000";

export const registrarUsuario = async (
  usuario_username: string,
  usuario_nombres: string,
  usuario_apellidos: string,
  usuario_email: string,
  usuario_password: string
) => {
  try {
    const response = await fetch(API_URL + "/api/usuario/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        usuario_username,
        usuario_nombres,
        usuario_apellidos,
        usuario_email,
        usuario_password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error desconocido");
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message || "Error de red o del servidor");
  }
};

export const loginUsuario = async (
  usuario_email: string,
  usuario_password: string
) => {
  try {
    const response = await fetch(API_URL + "/api/usuario/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ usuario_email, usuario_password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error desconocido");
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message || "Error de red o del servidor");
  }
};
