export default function LearningLevels() {
  return (
    <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold text-white mb-4">Learning Levels</h2>
      <div className="flex items-center space-x-4">
        <div className="bg-pink-300 rounded-full p-4">
          <span className="text-2xl">🧠</span>
        </div>
        <div className="text-white">
          <p className="font-semibold">Level - 2</p>
          <p>Chapter - 1</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        {[1, 2, 3, 4, 5, 6, 7].map((level) => (
          <div key={level} className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${level <= 2 ? 'bg-white text-purple-500' : 'bg-purple-300 text-white'}`}>
              {level}
            </div>
            {level < 7 && <div className="h-1 w-12 bg-white mt-2"></div>}
          </div>
        ))}
      </div>
    </div>
  )
}