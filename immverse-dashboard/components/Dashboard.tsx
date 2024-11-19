"use client"

import { useState } from 'react'
import Image from 'next/image'
import Sidebar from './Sidebar'
import Header from './Header'
import JourneyOverview from './JourneyOverview'
import LearningLevels from './LearningLevels'
import LearningPath from './LearningPath'
import LastQuiz from './LastQuiz'
import AreasOfImprovement from './AreasOfImprovement'
import Note from './Note'

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-white">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="md:hidden">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-4 text-gray-500 focus:outline-none focus:bg-gray-100"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">My Journey</h1>
            <div className="w-full h-48 relative mb-8 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=192&width=1024"
                alt="Journey Banner"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-75"></div>
              <div className="absolute inset-0 flex items-center justify-between p-6">
                <div className="text-white">
                  <h2 className="text-2xl font-bold">Rupesh Fuse</h2>
                  <p className="text-lg">Student</p>
                </div>
                <div className="flex space-x-2">
                  {['Passed', 'Passed', 'Passed'].map((status, index) => (
                    <div key={index} className="bg-white rounded-full p-2">
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <JourneyOverview />
            <LearningLevels />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <LearningPath />
              <div>
                <LastQuiz />
                <AreasOfImprovement />
              </div>
            </div>
            <Note />
          </div>
        </main>
      </div>
    </div>
  )
}