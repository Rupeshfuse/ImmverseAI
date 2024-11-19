"use client"

import Link from 'next/link'
import { Bell, Sun, ChevronDown, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-3">
        <div className="flex justify-between items-center">
          <button 
            className="lg:hidden text-gray-600 hover:text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <nav className="hidden lg:block">
            <ul className="flex space-x-4 lg:space-x-10">
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Home</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Dashboard</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Category</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Validate Certificate</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4 lg:space-x-10">
            <button className="text-gray-600 hover:text-gray-800">
              <Sun className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <Bell className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              <img src="/placeholder.svg" alt="Avatar" className="h-8 w-8 rounded-full" />
              <span className="text-gray-700 hidden sm:inline">Rupesh</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 lg:hidden">
            <ul className="flex flex-col space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-800 block py-2">Home</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800 block py-2">Dashboard</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800 block py-2">Category</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800 block py-2">Validate Certificate</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}