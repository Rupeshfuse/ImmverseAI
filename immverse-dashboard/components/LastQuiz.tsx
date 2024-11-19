export default function LastQuiz() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Last quiz</h2>
      <div className="flex items-start">
        <div className="flex items-center mr-8">
          <div className="bg-green-100 rounded-full p-2 mr-4">
            <span className="text-green-500 text-2xl">✓</span>
          </div>
          <div>
            <p className="font-medium text-gray-800">Passed</p>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-gray-600">Correct answer - 8</p>
          <p className="text-gray-600">Incorrect answer - 2</p>
          <p className="text-gray-600">Skipped - 0</p>
        </div>
      </div>
    </div>
  )
}