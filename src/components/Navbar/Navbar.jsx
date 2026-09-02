import { Search, Bell } from "lucide-react"

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray px-8 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold mb-2 text-[#0F172A]">Welcome back!</h1>
        <p className="text-sm text-grayText">Here&apos;s what&apos;s happening with your platform today.</p>
      </div>

      <div className="flex items-center gap-6">
        
      </div>
    </nav>
  )
}

export default Navbar
