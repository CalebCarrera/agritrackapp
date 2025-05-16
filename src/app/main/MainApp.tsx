"use client";

import Image from "next/image";
import Link from "next/link";


export default function MainApp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black p-6">
      <Image
        src="/Logo.png"
        alt="logo"
        width={150}
        height={150}
        className="mb-6 dark:invert"
        priority
      />

      <h1 className="text-2xl font-semibold text-center mb-8 dark:text-white">
        ¡Bienvenido a AgriTrack!
      </h1>
        <p className="text-lg text-center mb-8 dark:text-gray-300">
            La aplicación que te ayuda a llevar un control de tus cultivos y
            actividades agrícolas.
        </p>

      <div className="w-full flex flex-col gap-4 max-w-xs">
        <Link href="/login">
          <button className="w-full bg-blue-600 text-white py-3 rounded-2xl text-lg font-medium hover:bg-blue-700 transition">
            Iniciar sesión
          </button>
        </Link>

        <Link href="/registro">
          <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-2xl text-lg font-medium hover:bg-gray-300 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
            Registrarse
          </button>
        </Link>
      </div>
    </div>
  );
}
