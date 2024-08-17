'use client'

import * as React from 'react'
import { useState } from 'react'

import NavTabs from './Navtabs';


export default function NavtabsContent() {
  const [activeTab, setActiveTab] = useState('guide1');

  const renderContent = () => {
    switch (activeTab) {
      case 'guide1':
        return <p>This is the content for Guide 1.</p>;
      case 'guide2':
        return <p>This is the content for Guide 2.</p>;
      case 'guide3':
        return <p>This is the content for Guide 3.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-4 p-4 border border-gray-300 rounded-lg">
        {renderContent()}
      </div>
    </div>
  );
}
