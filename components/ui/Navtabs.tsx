'use client'

import * as React from 'react'
import { useState } from 'react'

export function Navtabs() {
  const [activeTab, setActiveTab] = useState('guide1')

  return (
    <>
      <div className="flex justify-end p-4">
        <div className="border border-gray-300 rounded-lg w-[775px]">
          <div className="flex space-x-4 p-2 justify-end">
            <button
              onClick={() => setActiveTab('guide1')}
              className={`pb-2 px-4 rounded  ${
                activeTab === 'guide1'
                  ? 'bg-blue text-white'
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              Step 1
            </button>
            <button
              onClick={() => setActiveTab('guide2')}
              className={`pb-2 px-4 rounded ${
                activeTab === 'guide2'
                  ? 'bg-blue text-white'
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              Step 2
            </button>
            <button
              onClick={() => setActiveTab('guide3')}
              className={`pb-2 px-4 rounded ${
                activeTab === 'guide3'
                  ? 'bg-blue text-white'
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              Step 3
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
