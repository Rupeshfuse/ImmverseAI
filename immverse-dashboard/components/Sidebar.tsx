"use client"

import Link from 'next/link'
import { LayoutDashboard, User, BookOpen, Award, Settings, LogOut, BarChart2, Wrench } from 'lucide-react'
import { useState } from 'react'

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <aside className={`bg-white h-screen flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'fixed inset-y-0 left-0 z-50 w-64' : 'w-0'} md:relative md:w-64 ${isCollapsed ? 'md:w-20' : 'md:w-64'}`}>
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={onClose} className="mr-2 md:hidden text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className={`text-2xl font-bold text-pink-500 ${isCollapsed ? 'md:hidden' : ''}`}>ImmverseAI</h1>
        </div>
        <button onClick={toggleCollapse} className="hidden md:block text-gray-500 hover:text-gray-700">
          {isCollapsed ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          )}
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <Link href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100">
          <LayoutDashboard className="h-5 w-5 mr-2" />
          {!isCollapsed && <span>Dashboard</span>}
        </Link>
        <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <User className="h-5 w-5 mr-2" />
          {!isCollapsed && <span>My Journey</span>}
        </Link>
        <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <BookOpen className="h-5 w-5 mr-2" />
          {!isCollapsed && <span>My Courses</span>}
        </Link>
        <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <BarChart2 className="h-5 w-5 mr-2" />
          {!isCollapsed && <span>Progress</span>}
        </Link>
        <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <Wrench className="h-5 w-5 mr-2" />
          {!isCollapsed && <span>DIY</span>}
        </Link>
        <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <Award className="h-5 w-5 mr-2" />
          {!isCollapsed && <span>Certificates</span>}
        </Link>
        <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <Settings className="h-5 w-5 mr-2" />
          {!isCollapsed && <span>Settings</span>}
        </Link>
        <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <LogOut className="h-5 w-5 mr-2" />
          {!isCollapsed && <span>Logout</span>}
        </Link>
        <div className="p-4">
          <button className={`w-full bg-pink-500 text-white py-2 px-4 rounded ${isCollapsed ? 'md:hidden' : ''}`}>
            {isCollapsed ? 'App' : 'Download ImmverseAI mobile app'}
          </button>
        </div>
      </nav>
    </aside>
  )
}