"use client";

interface PrintButtonProps {
  courses: any[];
}

export default function PrintButton({ courses }: PrintButtonProps) {
  const handlePrint = () => {
    if (courses.length === 0) {
      alert('Please add at least one course before printing.');
      return;
    }
    
    const now = new Date();
    const dateStr = now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString();
    
    let dateElement = document.getElementById('printDate');
    if (!dateElement) {
      dateElement = document.createElement('div');
      dateElement.id = 'printDate';
      dateElement.className = 'text-center my-5 text-gray-600 italic';
      const resultDiv = document.getElementById('result');
      if (resultDiv && resultDiv.parentNode) {
        resultDiv.parentNode.insertBefore(dateElement, resultDiv.nextSibling);
      }
    }
    
    dateElement.textContent = `Generated on: ${dateStr} at ${timeStr}`;
    
    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <div className="print-section">
      <button
        onClick={handlePrint}
        className="btn btn-secondary"
      >
        Print to PDF
      </button>
    </div>
  );
}