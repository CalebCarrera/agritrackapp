import { PlantLoginForm } from "@/components/user/plant-login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md px-4">
        <PlantLoginForm />
      </div>
    </div>
  )
}