import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    
    <div className="relative flex flex-col justify-center items-center h-screen">
      <span className="animate-bounce text-5xl font-semibold  text-[#262626] max-sm:text-white">
      ¡Bienvenido/a!
    </span>
    <div className="transition duration-500 hover:scale-125 mt-3">
    <Link  href='/name'>
      <span className="text-2xl font-semibold text-[#262626]">PLAY</span>
      </Link>
    </div>
      
    </div>
    
  )
}
