// import { useState } from "react";

// const Sample = () => {
//     const  [name, setName] = useState('John Doe')

//     const changeName =()=>{
//         setName("Jane Smith")
//     }
        
//     return (
//         <div>
//             <h1>My name is {name}</h1>
//             <button onClick={changeName}>Change Name</button>

//             <h1>The value is 1</h1>
//         </div>
//     )
// }
// export default Sample;

// import { useState } from "react";

// const Sample = () => {

//         const [num1, setName] = useState(1)

//         const increment = () => { 

//             const add = num1 + 1

//             setName(add)
            
//         }

//         const decrement = () => {

//             const sub  = num1 - 1

//             setName(sub)
//         }

//     return (
//         <div>
//             <h2> The value is {num1}</h2>
//             <button onClick={increment}>Increment</button>
            
//             <button onClick={decrement}>Decrement</button>
            

//         </div>
//     );
// }
import { useState } from "react";

function Sample() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <div className="button-container">
        <button className="increment-btn" onClick={handleIncrement}>
          Increment
        </button>
        <button className="decrement-btn" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Sample;