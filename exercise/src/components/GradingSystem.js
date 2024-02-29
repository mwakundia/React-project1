import { useState } from 'react';

const GradingSystem = () => {
  const [score, setScore] = useState('');
  const [grade, setGrade] = useState('');

  const handleScoreChange = (event) => {
    const newScore = parseInt(event.target.value);
    setScore(newScore);
// handleScoreChange function is an event handler that is called when the user changes the value of the score input field. It converts the input value to an integer
    if (newScore < 40) {
      setGrade('Fail');
    } else if (newScore >= 40 && newScore < 50) {
      setGrade('D');
    } else if (newScore >= 50 && newScore < 60) {
      setGrade('C');
    } else if (newScore >= 60 && newScore < 69) {
      setGrade('B');
    } else if (newScore >= 70 && newScore <= 100) {
      setGrade('A');
    } else {
      setGrade('Invalid');
    }
  };
  // If the score is outside the valid range of 0 to 100, the grade is set to an empty string.
      // if statements are used to render content based on condition
  return (
    <div>
      <h2>Grading System</h2>
      <label htmlFor="score">Enter Score:</label>
      <input 
        type="number" 
        id="score" 
        value={score} 
        onChange={handleScoreChange} 
        min="0" 
        max="100" 
        required 
      />
      <p>Grade: {grade}</p>
    </div>
  );
}

export default GradingSystem;
