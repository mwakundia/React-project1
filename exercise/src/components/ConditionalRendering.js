import { useState } from "react";

const ConditionalRendering =()=>{
    const [display, setDisplay] = useState(true);
    let output;
    if  (display) {
        return(
            <div>
              <h1>Display is true hence this line is displayed</h1>  
            </div>
        )    
    }else{
        return(
            <div>
                <h1>Display is false:</h1>
            </div>
        )
    }
}
// Ternary Conditional
return display ?
( <div>
    <h2>When Display is True hence this line is displaced</h2>
</div>
):(
    <div>
        <h1>Display is false</h1>
    </div>
);

// conditional rendering using elements
if (display) {
     outpi
} else {
    
}





export default ConditionalRendering;