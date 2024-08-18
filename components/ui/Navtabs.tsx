'use client'

import * as React from 'react'
import { useState } from 'react'

export default function Navtabs() {
  const [activeTab, setActiveTab] = useState('guide1')

  const renderContent = () => {
    switch (activeTab) {
      case 'guide1':
        return <p>This is the content for Guide 1.</p>
      case 'guide2':
        return <p>This is the content for Guide 2.</p>
      case 'guide3':
        return <p>This is the content for Guide 3.</p>
      default:
        return null
    }
  }

  return (
    <>
      <div className="flex justify-end p-4 h-screen ">
        <div className="bg-[#313131] outline-none rounded-lg w-[775px] h-[865px] flex flex-col">
          <div className="flex space-x-2 p-4 pb-0 justify-end">
            <button
              onClick={() => setActiveTab('guide1')}
              className={`p-2 px-4 rounded  ${
                activeTab === 'guide1'
                  ? 'bg-blue text-white'
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              Step 1
            </button>
            <button
              onClick={() => setActiveTab('guide2')}
              className={`p-2 px-4 rounded ${
                activeTab === 'guide2'
                  ? 'bg-blue text-white'
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              Step 2
            </button>
            <button
              onClick={() => setActiveTab('guide3')}
              className={`p-2 px-4 rounded ${
                activeTab === 'guide3'
                  ? 'bg-blue text-white'
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              Step 3
            </button>
          </div>
          <div className="bg-white my-3 p-4 outline-none rounded-lg w-[750px] mx-auto grow">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  )
}
