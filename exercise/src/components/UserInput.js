import { useState } from 'react';

const UserInput = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [course, setCourse] = useState('');

  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name:</label><br/>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label><br/>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="course">Course:</label><br/>
        <input
          type="text"
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{course}</p>
    </form>
  );
}

export default UserInput;
