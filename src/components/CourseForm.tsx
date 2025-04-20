"use client";

import { useState } from 'react';
import { Course } from '@/utils/calculateGPA';

interface CourseFormProps {
  onAddCourse: (course: Course) => void;
  onResetAll: () => void;
}

// Define grade options with both display text and actual values
const GRADE_OPTIONS = [
  { value: '4.0', text: 'A+ (4.0)', label: 'A+' },
  { value: '4.0', text: 'A (4.0)', label: 'A' },
  { value: '3.7', text: 'A- (3.7)', label: 'A-' },
  { value: '3.3', text: 'B+ (3.3)', label: 'B+' },
  { value: '3.0', text: 'B (3.0)', label: 'B' },
  { value: '2.7', text: 'B- (2.7)', label: 'B-' },
  { value: '2.3', text: 'C+ (2.3)', label: 'C+' },
  { value: '2.0', text: 'C (2.0)', label: 'C' },
  { value: '1.7', text: 'C- (1.7)', label: 'C-' },
  { value: '1.3', text: 'D+ (1.3)', label: 'D+' },
  { value: '1.0', text: 'D (1.0)', label: 'D' },
  { value: '0.0', text: 'F (0.0)', label: 'F' },
];

export default function CourseForm({ onAddCourse, onResetAll }: CourseFormProps) {
  const [courseName, setCourseName] = useState('');
  const [credits, setCredits] = useState('');
  const [grade, setGrade] = useState(GRADE_OPTIONS[0].value);
  const [gradeLabel, setGradeLabel] = useState(GRADE_OPTIONS[0].label);

  const handleGradeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = GRADE_OPTIONS.find(opt => opt.value === e.target.value && opt.text === e.target.options[e.target.selectedIndex].text);
    if (selectedOption) {
      setGrade(e.target.value);
      setGradeLabel(selectedOption.label);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const creditsNum = parseFloat(credits);
    const gradeNum = parseFloat(grade);

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
      gradeText: gradeLabel, // Now properly stores "A+" or "A"
      gradePoints: creditsNum * gradeNum
    };

    onAddCourse(newCourse);
    setCourseName('');
    setCredits('');
    setGrade(GRADE_OPTIONS[0].value);
    setGradeLabel(GRADE_OPTIONS[0].label);
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
              onChange={handleGradeChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {GRADE_OPTIONS.map((option) => (
                <option key={option.text} value={option.value}>
                  {option.text}
                </option>
              ))}
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