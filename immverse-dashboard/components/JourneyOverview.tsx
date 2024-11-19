import { PlusCircle } from 'lucide-react'

export default function JourneyOverview() {
  const stats = [
    { title: 'Your target', value: 'A+', color: 'from-yellow-400 to-yellow-600' },
    { title: 'Current grade', value: 'B+', color: 'from-purple-400 to-purple-600' },
    { title: 'Target days remaining', value: '17 days', color: 'from-blue-400 to-blue-600' },
    { title: 'Your category', value: 'AI', color: 'from-pink-400 to-pink-600' },
    { title: 'Current streak', value: '7days', color: 'from-green-400 to-green-600' },
    { title: 'Daily challenge', value: 'Completed', color: 'from-indigo-400 to-indigo-600' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className={`relative bg-gradient-to-br ${stat.color} rounded-lg shadow p-6 text-white`}>
          <div className="text-center">
            <h3 className="text-sm font-medium opacity-80">{stat.title}</h3>
            <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
          </div>
          <div className="absolute bottom-2 right-2">
            <PlusCircle className="w-6 h-6 text-white opacity-80" />
          </div>
        </div>
      ))}
    </div>
  )
}