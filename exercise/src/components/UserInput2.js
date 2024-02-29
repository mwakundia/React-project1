import { useState } from 'react';

const UserInput2 = () => {
    
    const [data, SetData] = useState({
        firstName: " ",
        lastName: " ",
        course: " "
    });

    // Function to handle the form submission.
    const handleInput = (e) => {
        const {name, value} = e.target;
        SetData((prev) => {
            return {...prev, [name] :value }
        })
    };

    const handleSubmit = (e) => {
        //code handle submit
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>FirstName</label><br></br>
                <input type="text" name="firstName"
                onChange = {handleInput}
                placeholder='Enter your first name'></input>

                <label>LastName</label><br></br>
                <input type="text" name="lastName"
                onChange = {handleInput}
                placeholder='Enter your last name'></input>

                <label>Course</label><br></br>
                <input type = "text" name = "course"
                onChange = {handleInput}
                placeholder = 'Enter the Course you are taking'></input> 

                <button type = "submit" >Save Details</button>
                <p>{data.firstName}</p>
                <p>{data.lastName}</p>
                <p>{data.course}</p>
            </form>

        </div>
    )
};

export default UserInput2;
