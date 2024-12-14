'use client'

import Editor from "@monaco-editor/react"
import { useState } from 'react'

const defaultResumeTemplate = `{
  "personalInfo": {
    "name": "John Doe",
    "title": "Senior Software Engineer",
    "email": "john@example.com",
    "phone": "(555) 123-4567",
    "location": "San Francisco, CA"
  },
  "summary": "Experienced software engineer with a passion for building scalable applications...",
  "experience": [
    {
      "company": "Tech Corp",
      "position": "Senior Software Engineer",
      "startDate": "2020-01",
      "endDate": "Present",
      "description": "Led development of cloud-native applications..."
    }
  ],
  "education": [
    {
      "school": "University of Technology",
      "degree": "Bachelor of Science in Computer Science",
      "graduationYear": "2019"
    }
  ],
  "skills": [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "AWS"
  ]
}`

export default function ResumeEditor() {
  const [resumeData, setResumeData] = useState(defaultResumeTemplate)

  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Resume Editor</h2>
          </div>
          <div className="h-[600px] border border-gray-200 rounded-lg">
            <Editor
              height="100%"
              defaultLanguage="json"
              value={resumeData}
              theme="vs-light"
              onChange={(value) => value && setResumeData(value)}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: 'on',
              }}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          <div className="prose max-w-none">
            <PreviewSection data={resumeData} />
          </div>
        </div>
      </div>
    </div>
  )
}

function PreviewSection({ data }: { data: string }) {
  try {
    const parsedData = JSON.parse(data)
    return (
      <div className="space-y-6">
        <div className="border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-900">{parsedData.personalInfo.name}</h1>
          <p className="text-xl text-gray-600">{parsedData.personalInfo.title}</p>
          <div className="mt-2 text-sm text-gray-500 space-y-1">
            <p>{parsedData.personalInfo.email}</p>
            <p>{parsedData.personalInfo.phone}</p>
            <p>{parsedData.personalInfo.location}</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <p className="text-gray-700">{parsedData.summary}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          {parsedData.experience.map((exp: any, i: number) => (
            <div key={i} className="mb-4">
              <h3 className="font-semibold">{exp.position}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.startDate} - {exp.endDate}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          {parsedData.education.map((edu: any, i: number) => (
            <div key={i} className="mb-4">
              <h3 className="font-semibold">{edu.school}</h3>
              <p className="text-gray-600">{edu.degree}</p>
              <p className="text-sm text-gray-500">Graduated: {edu.graduationYear}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {parsedData.skills.map((skill: string, i: number) => (
              <span 
                key={i}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    return <div className="text-red-500">Invalid JSON format</div>
  }
}
