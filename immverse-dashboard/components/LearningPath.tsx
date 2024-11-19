export default function LearningPath() {
  const courses = [
    { title: 'AI Course 1', time: '10:00 AM' },
    { title: 'AI Course 2', time: '12:00 PM' },
    { title: 'AI Course 3', time: '3:00 PM' },
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-left">My learning path</h2>
      <div className="border-2 border-pink-100 rounded-lg p-4">
        <h3 className="text-lg font-medium text-gray-700 mb-4 text-center">Artificial Intelligence</h3>
        {courses.map((course, index) => (
          <div key={index} className="flex flex-col items-center mb-4 last:mb-0">
            <div className="flex items-center justify-between w-full mb-2">
              <div className="flex items-center">
                <div className="bg-pink-100 rounded p-2 mr-3">
                  <span className="text-pink-500">AI</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{course.title}</p>
                  <p className="text-sm text-gray-500">{course.time}</p>
                </div>
              </div>
              <button className="bg-pink-500 text-white px-4 py-1 rounded hover:bg-pink-600 transition-colors">
                Start
              </button>
            </div>
            {index < courses.length - 1 && (
              <div className="w-px h-4 bg-pink-200 my-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}