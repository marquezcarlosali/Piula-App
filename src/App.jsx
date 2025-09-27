import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <motion.img 
        src="/logo.png" 
        alt="Logo Piula" 
        className="w-32 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Bienvenido a Piula App</h1>
      <p className="text-gray-600 mb-6 text-center">
        Aquí podrás gestionar inventarios, compras y producciones de forma más ágil.
      </p>
      <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-2xl shadow-md hover:bg-red-700">
        <ShoppingCart size={20}/> Ir a Inventario
      </button>
    </div>
  )
}