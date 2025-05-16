import { AlignLeft, Plus, ChartNoAxesColumn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlantaCard } from "@/components/galery/plantaCarta";

export function PlantDashboard() {
  const myPlants = [
    {
      id: 1,
      name: "Monstera",
      type: "Indoor",
      image: "/placeholder.svg?height=80&width=80",
      color: "bg-green-600",
    },
    {
      id: 2,
      name: "Cactus",
      type: "Indoor",
      image: "/placeholder.svg?height=80&width=80",
      color: "bg-green-600",
    },
    {
      id: 3,
      name: "Howea",
      type: "Indoor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeII8cDI9Zh-OQgT-PqoJa3J4CKvhFm15nfg&s",
      color: "bg-green-600",
    },
  ];

  const explorePlants = [
    {
      id: 4,
      name: "Girasol",
      type: "Indoor",
      image: "/placeholder.svg?height=80&width=80",
      color: "bg-green-500",
    },
    {
      id: 5,
      name: "Bamboo",
      type: "Indoor",
      image: "/placeholder.svg?height=80&width=80",
      color: "bg-green-500",
    },
    {
      id: 6,
      name: "Schefflera",
      type: "Outdoor",
      image: "/placeholder.svg?height=80&width=80",
      color: "bg-green-500",
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto h-screen flex flex-col bg-green-50 text-green-950 p-4">
      <header className="flex justify-between items-center py-4">
        <AlignLeft className="h-6 w-6" />
        <div className="w-8 h-8">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-700"
          >
            <path
              d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z"
              fill="currentColor"
              fillOpacity="0.2"
            />
            <path
              d="M12 6C12 6 14 8 14 12C14 16 12 18 12 18C12 18 10 16 10 12C10 8 12 6 12 6Z"
              fill="currentColor"
            />
            <path
              d="M6 12C6 12 8 10 12 10C16 10 18 12 18 12C18 12 16 14 12 14C8 14 6 12 6 12Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <ChartNoAxesColumn className="h-6 w-6" />
      </header>

      <h1 className="text-2xl text-center font-bold mt-4 mb-6">My plants</h1>

      <div className="grid grid-cols-3 gap-3 mb-8">
        {myPlants.map((plant) => (
          <PlantaCard key={plant.id} plant={plant} />
        ))}
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Explore</h2>
        <div className="flex space-x-1">
          <div className="w-5 h-1 bg-green-800 rounded-full"></div>
          <div className="w-1 h-1 bg-green-300 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        {explorePlants.map((plant) => (
          <PlantaCard key={plant.id} plant={plant} />
        ))}
      </div>

      <div className="flex justify-between items-center mt-auto mb-4">
        <p className="text-sm text-green-700">Discover something of plants</p>
        <Button
          size="icon"
          className="rounded-full bg-green-600 hover:bg-green-700 h-10 w-10"
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
