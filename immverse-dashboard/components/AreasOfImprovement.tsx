export default function AreasOfImprovement() {
  const areas = ['Alexander Grahambell', 'Alexander Grahambell', 'Alexander Grahambell', 'Alexander Grahambell']

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Area's of improvement</h2>
      <div className="grid grid-cols-2 gap-4">
        {areas.map((area, index) => (
          <div key={index} className="bg-gray-100 rounded p-3 flex items-center space-x-2">
            <img src="/placeholder.svg" alt="Area" className="w-10 h-10 rounded" />
            <span className="text-sm text-gray-700">{area}</span>
          </div>
        ))}
      </div>
    </div>
  )
}