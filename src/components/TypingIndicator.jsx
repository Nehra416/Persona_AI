import React from 'react'

const TypingIndicator = ({ theme }) => {
  return (
      <div
          className={`max-w-[75%] px-4 py-2 rounded-xl shadow-md ${theme === 'dark'
                  ? 'bg-gray-800 text-gray-300'
                  : 'bg-gray-200 text-gray-600'
              } animate-pulse`}
      >
          <div className="flex space-x-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
          </div>
      </div>
  )
}

export default TypingIndicator
