import Image from "next/image"
import { cn } from "@/lib/utils"

interface Plant {
  id: number
  name: string
  type: string
  image: string
  color: string
}

interface PlantCardProps {
  plant: Plant
  className?: string
}

export function PlantaCard({ plant, className }: PlantCardProps) {
  return (
    <div
      className={cn("relative flex flex-col items-center rounded-2xl p-3 text-white shadow-sm", plant.color, className)}
    >
      <div className="relative z-10 h-16 w-16 mb-1">
        <Image src={plant.image || "/placeholder.svg"} alt={plant.name} fill className="object-contain" />
      </div>
      <span className="text-sm font-medium">{plant.name}</span>
      <span className="text-xs opacity-80">{plant.type}</span>
    </div>
  )
}
