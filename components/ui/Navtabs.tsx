'use client'

import * as React from 'react'
import { useState } from 'react'

export default function Navtabs() {
  const [activeTab, setActiveTab] = useState('guide1')

  const renderContent = () => {
    return (
      <div
        key={activeTab}
        className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-md h-full"
      >
        {activeTab === 'guide1' && (
          <>
            <h1 className="text-2xl font-bold mb-4 text-gray-800 animate-fadeInTop">
              Step 1: Self-Assessment
            </h1>
            <h2 className="mb-4 text-gray-700 animate-fadeInTop">
              <strong>Purpose:</strong> Discover what you love, what you’re good
              at, and what’s important to you.
            </h2>
            <ul className="list-disc list-inside pl-6 text-gray-600 mb-4">
              <li className="animate-fadeInTop">
                Find What Excites You: What subjects or activities make you feel
                energized and interested? Write down your favorite activities
                and subjects.
              </li>
              <li className="animate-fadeInTop">
                Recognize Your Strengths: What are you naturally good at? Are
                you a problem-solver, a creative thinker, or a great
                communicator? Acknowledge your skills and talents.
              </li>
              <li className="animate-fadeInTop">
                Understand Your Values: What’s important to you in a job? Do you
                value job security, creativity, or helping others? Knowing your
                values helps align with careers that fit your beliefs.
              </li>
              <li className="animate-fadeInTop">
                Assess Your Personality Traits: How does your personality affect
                your work preferences? Are you an extrovert who enjoys teamwork
                or an introvert who prefers working alone?
              </li>
              <li className="animate-fadeInTop">
                Set Career Goals: Where do you want to be in 5-10 years? Do you
                envision a leadership role, working in a creative field, or
                starting your own business?
              </li>
            </ul>
            <div className="absolute bottom-0 left-0 w-full p-4 animate-fadeInTop">
              <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 shadow-lg w-full animate-fadeInTop">
                <h3 className="text-gray-700 animate-fadeInTop">
                  <strong>Action:</strong> Compile all your reflections into a
                  comprehensive list. This will be a foundation for exploring
                  career options that align with your personal profile.
                </h3>
              </div>
            </div>
          </>
        )}
        {activeTab === 'guide2' && (
          <>
            <h1 className="text-2xl font-bold mb-4 text-gray-800 animate-fadeInTop">
              Step 2: Research and Exploration
            </h1>
            <h2 className="mb-4 text-gray-700 animate-fadeInTop">
              <strong>Purpose:</strong> Learn about different industries and
              career options.
            </h2>
            <ul className="list-disc list-inside pl-6 text-gray-600 mb-4">
              <li className="animate-fadeInTop">
                Explore Different Careers: Research various fields and roles
                that align with your interests and strengths. For example,
                technology roles if you’re interested in tech.
              </li>
              <li className="animate-fadeInTop">
                Learn About Job Duties: Investigate daily tasks and
                responsibilities. What does a typical day look like for a nurse,
                graphic designer, or IT specialist?
              </li>
              <li className="animate-fadeInTop">
                Know the Requirements: What qualifications or skills are needed?
                Some jobs may require specific degrees or certifications, while
                others value experience.
              </li>
              <li className="animate-fadeInTop">
                Evaluate Job Market Trends: What is the current demand for these
                professions? Check job outlook and growth opportunities to
                choose a path with a promising future.
              </li>
              <li className="animate-fadeInTop">
                Consider Work-Life Balance: How might different careers affect
                your work-life balance? Look into flexible hours, remote work
                options, and workload management.
              </li>
            </ul>
            <div className="absolute bottom-0 left-0 w-full p-4 animate-fadeInTop">
              <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 shadow-lg w-full animate-fadeInTop">
                <h3 className="text-gray-700 animate-fadeInTop">
                  <strong>Action:</strong> Use online resources, read job
                  descriptions, and talk to professionals. Gather a
                  comprehensive view to help make an informed decision.
                </h3>
              </div>
            </div>
          </>
        )}
        {activeTab === 'guide3' && (
          <>
            <h1 className="text-2xl font-bold mb-4 text-gray-800 animate-fadeInTop">
              Step 3: Consult and Refine
            </h1>
            <h2 className="mb-4 text-gray-700 animate-fadeInTop">
              <strong>Purpose:</strong> Seek advice and narrow down options.
            </h2>
            <ul className="list-disc list-inside pl-6 text-gray-600 mb-4">
              <li className="animate-fadeInTop">
                Review Your Options: Evaluate which careers align best with your
                interests, strengths, and values. Reflect on why these options
                are appealing.
              </li>
              <li className="animate-fadeInTop">
                Prepare Your Questions: Develop specific questions about the
                careers you’re interested in, such as job responsibilities,
                career progression, and industry trends.
              </li>
              <li className="animate-fadeInTop">
                Seek Advice: Consult with a career advisor, mentor, or
                professionals in the fields you’re considering. Share your
                research and ask for their insights.
              </li>
              <li className="animate-fadeInTop">
                Explore Internships or Volunteer Opportunities: Gain practical
                experience through internships, part-time jobs, or volunteering
                to confirm if the career is a good fit.
              </li>
              <li className="animate-fadeInTop">
                Reflect on Feedback: After consulting with others and gaining
                experience, reflect on the feedback and adjust your career
                options based on this new information.
              </li>
            </ul>
            <div className="absolute bottom-0 left-0 w-full p-4 animate-fadeInTop">
              <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 shadow-lg w-full animate-fadeInTop">
                <h3 className="text-gray-700 animate-fadeInTop">
                  <strong>Action:</strong> Use the advice and feedback you
                  receive to refine your career choices. This will help you make
                  a decision that aligns with both your personal interests and
                  practical considerations.
                </h3>
              </div>
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <>
      <div className="flex justify-end p-4 h-screen">
        <div className="bg-[#313131] outline-none rounded-lg w-[775px] h-[830px] flex flex-col">
          <div className="flex space-x-2 p-4 pb-0 justify-end">
            <button
              onClick={() => setActiveTab('guide1')}
              className={`p-2 px-8 h-16 rounded ${
                activeTab === 'guide1'
                  ? 'bg-blue text-white'
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              Step 1
            </button>
            <button
              onClick={() => setActiveTab('guide2')}
              className={`p-2 px-8 h-16 rounded ${
                activeTab === 'guide2'
                  ? 'bg-blue text-white'
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              Step 2
            </button>
            <button
              onClick={() => setActiveTab('guide3')}
              className={`p-2 px-8 h-16 rounded ${
                activeTab === 'guide3'
                  ? 'bg-blue text-white'
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              Step 3
            </button>
          </div>
          <div className="mb-3 outline-none rounded-lg w-[750px] mx-auto grow relative">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  )
}
