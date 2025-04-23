
# 📚 GPA Calculator 🧮

#### A responsive web application for calculating Grade Point Average (GPA) built with Next.js, TypeScript, and Tailwind CSS.

## Features

### Core Functionality
- 📊 Add multiple courses with names, credit hours, and grades
- 🧮 Automatic GPA calculation with weighted average
- 🗑️ Delete individual courses or reset all data
- 🖨️ Print/export results to PDF
- 📱 Fully responsive design for all device sizes

### Grade Support
- Supports all standard grade points:
  - A+ (4.0), A (4.0), A- (3.7)
  - B+ (3.3), B (3.0), B- (2.7)
  - C+ (2.3), C (2.0), C- (1.7)
  - D+ (1.3), D (1.0), F (0.0)

### UI/UX Features
- ✨ Clean, modern interface with background image
- 📝 Form validation for course inputs
- 📊 Real-time GPA updates
- 🎨 Custom styling with CSS and Tailwind
- 🖥️ Print-optimized layout

## Technologies Used

### Frontend
  - Next.js 
  - React 
  - TypeScript
  - Tailwind CSS
    
### Deployment & CI/CD
  - 🚀 Continuous Integration and Deployment via Netlify
  - 🔄 Automatic deployment on Git commits
  - 🌐 Hosted on Netlify with custom domain

### Live Demo
  - Visit the live application : https://my-gpa-calculator-web-app.netlify.app/

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/repository-name

2. Navigate to the project directory:
   ```bash
   cd gpa-calculator

3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm run dev

5. Open http://localhost:3000 in your browser

## Deployment

### This project is automatically deployed to Netlify:

1) Every commit to the main branch triggers a new build and deployment
2) Preview deployments are generated for pull requests
3) Environment variables are managed through the Netlify dashboard

### To set up your own deployment:

1) Fork this repository
2) Connect your GitHub account to Netlify
3) Select this repository for deployment
4) Configure build settings:
    + Build command: npm run build
    + Publish directory: .next

## Usage

### Add Courses
   - Enter course name
   - Input credit hours (1-6)
   - Select grade from dropdown
   - Click "Add Course"

### Manage Data 
   - Delete individual courses with the Delete button
   - Reset all courses with "Reset All" button

### View Results
   - Current GPA is displayed automatically
   - Full course list with grade points shown in table

### Export
   - Click "Print to PDF" to generate a printer-friendly version

## Future Developments

### Planned Features

- 🔄 Save/Load functionality (local storage)

- 📅 Semester/year tracking

- 📈 GPA trend visualization (charts)

- 🔢 Cumulative GPA calculation across multiple semesters

- 👤 User accounts and cloud sync

- 🌐 Multi-language support

### Technical Improvements
- 🧪 Add comprehensive unit tests

- 🚀 Optimize bundle size

- 🔄 Implement state management 

- ✅ CI/CD pipeline with Netlify (Completed)

- 📱 Progressive Web App (PWA) support


