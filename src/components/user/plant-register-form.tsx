"use client";

import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";
import { PlantLoginForm } from "@/components/user/plant-login-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Mail, Lock, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { registrarUsuario } from "@/services/api/user";

const formSchema = z.object({
  nametag: z.string().min(2, { message: "Name must be at least 2 characters" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  lastname: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export function PlantRegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [isLogin, setIsLogin] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nametag: "",
      name: "",
      lastname: "",
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  if (isLogin) {
    return <PlantLoginForm />;
  }
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await registrarUsuario(
        values.nametag,
        values.name,
        values.lastname,
        values.email,
        values.password
      );
      console.log(response);
      toast("Registro exitoso");

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      toast("" + error);
    }
  }

  return (
    <div className={cn("w-full h-dvh", className)} {...props}>
      <div className="relative bg-teal-600 px-6 pt-10 pb-32 rounded-b-3xl">
        <div className="absolute right-0 top-0">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 0C80 20 100 30 120 40V0H60Z"
              fill="#4ade80"
              fillOpacity="0.3"
            />
          </svg>
        </div>
        <div className="absolute left-0 bottom-10">
          <svg
            width="80"
            height="160"
            viewBox="0 0 80 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 80C20 60 40 40 40 0V160C40 120 20 100 0 80Z"
              fill="#4ade80"
              fillOpacity="0.3"
            />
          </svg>
        </div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-white">Bienvenido!</h1>
          <p className="text-white/90">Crea tu cuenta en AgriTrack</p>
        </div>
      </div>

      <div className="relative -mt-24 rounded-t-3xl bg-gray-50 px-6 pt-6 pb-8">
        <div className="absolute right-8 -top-16">
          <div className="relative w-20 h-20">
            <div className="absolute bottom-0 w-10 h-10 bg-white rounded-full mx-auto left-0 right-0"></div>
            <div className="absolute bottom-8 w-1 h-16 bg-green-700 mx-auto left-0 right-0"></div>
            <div className="absolute bottom-8 w-8 h-16 bg-green-600 rounded-full mx-auto -left-6 transform -rotate-12"></div>
            <div className="absolute bottom-12 w-6 h-12 bg-green-500 rounded-full mx-auto -right-4 transform rotate-12"></div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-teal-700 mb-6 mt-16">
          Registrarse
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="nametag"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <FormControl>
                      <Input
                        placeholder="NameTag"
                        className="pl-10 bg-white border-gray-200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs mt-1" />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <FormControl>
                      <Input
                        placeholder="Nombres completo"
                        className="pl-10 bg-white border-gray-200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs mt-1" />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <FormControl>
                      <Input
                        placeholder="Apellidos"
                        className="pl-10 bg-white border-gray-200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs mt-1" />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <FormControl>
                      <Input
                        placeholder="Email"
                        className="pl-10 bg-white border-gray-200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs mt-1" />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Contraseña"
                        className="pl-10 bg-white border-gray-200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs mt-1" />
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white"
            >
              Registrarse
            </Button>

            <div className="relative flex justify-center items-center py-2 w-full">
              <Separator className="flex-grow shrink" />
              <span className="mx-6 text-xs text-gray-400 whitespace-nowrap">
                O registrarse con
              </span>
              <Separator className="flex-grow shrink" />
            </div>

            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white w-10 h-10"
                type="button"
              >
                <Facebook className="h-5 w-5 text-blue-600" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white w-10 h-10"
                type="button"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                  />
                  <path
                    fill="#34A853"
                    d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                  />
                  <path
                    fill="#4A90E2"
                    d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5818182 23.1272727,9.90909091 L12,9.90909091 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                  />
                </svg>
                <span className="sr-only">Google</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white w-10 h-10"
                type="button"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM16.934 16.071C16.898 16.124 16.851 16.171 16.796 16.207C16.741 16.243 16.679 16.268 16.614 16.28C16.549 16.292 16.482 16.291 16.417 16.276C16.353 16.261 16.292 16.233 16.239 16.194C14.384 15.017 12.093 14.7 7.913 15.62C7.847 15.638 7.778 15.643 7.711 15.634C7.643 15.625 7.578 15.602 7.52 15.567C7.462 15.532 7.413 15.486 7.375 15.431C7.338 15.376 7.313 15.314 7.303 15.249C7.293 15.183 7.297 15.116 7.316 15.052C7.335 14.988 7.368 14.929 7.412 14.879C7.456 14.829 7.51 14.789 7.571 14.762C7.631 14.735 7.697 14.722 7.763 14.724C12.34 13.724 14.916 14.117 17.051 15.464C17.159 15.532 17.236 15.64 17.265 15.765C17.294 15.89 17.273 16.022 17.206 16.131L16.934 16.071ZM18.071 13.252C18.026 13.318 17.968 13.374 17.9 13.416C17.832 13.458 17.756 13.485 17.677 13.494C17.598 13.504 17.518 13.496 17.443 13.471C17.368 13.447 17.3 13.406 17.243 13.353C15.016 11.867 11.634 11.35 7.948 12.45C7.87 12.473 7.788 12.48 7.707 12.471C7.626 12.462 7.548 12.437 7.479 12.397C7.41 12.357 7.351 12.303 7.306 12.239C7.261 12.175 7.231 12.102 7.218 12.025C7.205 11.948 7.209 11.869 7.23 11.794C7.251 11.719 7.288 11.649 7.339 11.589C7.39 11.529 7.453 11.48 7.524 11.446C7.595 11.412 7.673 11.394 7.751 11.392C11.878 10.178 15.667 10.775 18.229 12.483C18.288 12.527 18.337 12.583 18.373 12.647C18.409 12.711 18.431 12.782 18.438 12.856C18.445 12.93 18.436 13.004 18.413 13.074C18.39 13.144 18.353 13.208 18.304 13.262L18.071 13.252ZM19.5 10.17C19.445 10.249 19.374 10.315 19.291 10.363C19.208 10.411 19.116 10.44 19.021 10.448C18.926 10.456 18.83 10.443 18.741 10.41C18.651 10.377 18.57 10.325 18.503 10.257C15.894 8.456 11.583 8.042 7.554 9.08C7.459 9.105 7.36 9.11 7.263 9.095C7.166 9.08 7.073 9.045 6.992 8.992C6.91 8.94 6.842 8.871 6.791 8.791C6.741 8.71 6.709 8.62 6.699 8.527C6.689 8.433 6.7 8.339 6.732 8.25C6.764 8.162 6.816 8.081 6.883 8.014C6.95 7.947 7.031 7.895 7.12 7.862C11.599 6.701 16.378 7.183 19.371 9.246C19.445 9.3 19.507 9.368 19.553 9.447C19.599 9.525 19.628 9.612 19.638 9.702C19.648 9.792 19.639 9.883 19.611 9.969C19.583 10.055 19.538 10.134 19.478 10.2L19.5 10.17Z"
                  />
                </svg>
                <span className="sr-only">Spotify</span>
              </Button>
            </div>

            <div className="text-center text-sm text-gray-500">
              ¿Ya tienes una cuenta?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="font-medium text-teal-600"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
