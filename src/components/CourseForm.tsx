"use client";

import { useState } from 'react';
import { Course } from '@/utils/calculateGPA';

interface CourseFormProps {
  onAddCourse: (course: Course) => void;
  onResetAll: () => void;
}

export default function CourseForm({ onAddCourse, onResetAll }: CourseFormProps) {
  const [courseName, setCourseName] = useState('');
  const [credits, setCredits] = useState('');
  const [grade, setGrade] = useState('4.0');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const creditsNum = parseFloat(credits);
    const gradeNum = parseFloat(grade);
    const gradeText = grade === '4.0' ? 'A' : 
                     grade === '3.7' ? 'A-' :
                     grade === '3.3' ? 'B+' :
                     grade === '3.0' ? 'B' :
                     grade === '2.7' ? 'B-' :
                     grade === '2.3' ? 'C+' :
                     grade === '2.0' ? 'C' :
                     grade === '1.7' ? 'C-' :
                     grade === '1.3' ? 'D+' :
                     grade === '1.0' ? 'D' : 'F';

    if (!courseName.trim()) {
      alert('Please enter a course name');
      return;
    }
    
    if (isNaN(creditsNum) || creditsNum <= 0) {
      alert('Please enter a valid number of credits');
      return;
    }

    const newCourse: Course = {
      id: Date.now(),
      name: courseName,
      credits: creditsNum,
      grade: gradeNum,
      gradeText: gradeText,
      gradePoints: creditsNum * gradeNum
    };

    onAddCourse(newCourse);
    setCourseName('');
    setCredits('');
    setGrade('4.0');
  };

  return (
    <div className="form-container mb-5">
      <form onSubmit={handleSubmit}>
        <div className="form-row flex gap-3 mb-3">
          <div className="form-group flex-1">
            <label className="block mb-1 text-gray-600 font-medium">Course Name</label>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter course name"
            />
          </div>
          <div className="form-group flex-1">
            <label className="block mb-1 text-gray-600 font-medium">Credits</label>
            <input
              type="number"
              value={credits}
              onChange={(e) => setCredits(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter credits"
              min="1"
              max="6"
            />
          </div>
          <div className="form-group flex-1">
            <label className="block mb-1 text-gray-600 font-medium">Grade</label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="4.0">A+ (4.0)</option>
              <option value="4.0">A (4.0)</option>
              <option value="3.7">A- (3.7)</option>
              <option value="3.3">B+ (3.3)</option>
              <option value="3.0">B (3.0)</option>
              <option value="2.7">B- (2.7)</option>
              <option value="2.3">C+ (2.3)</option>
              <option value="2.0">C (2.0)</option>
              <option value="1.7">C- (1.7)</option>
              <option value="1.3">D+ (1.3)</option>
              <option value="1.0">D (1.0)</option>
              <option value="0.0">F (0.0)</option>
            </select>
          </div>
        </div>
        
        <div className="buttons">
          <button
            type="submit"
            className="btn btn-primary"
          >
            Add Course
          </button>
          <button
            type="button"
            onClick={onResetAll}
            className="btn btn-danger"
          >
            Reset All
          </button>
        </div>
      </form>
    </div>
  );
}