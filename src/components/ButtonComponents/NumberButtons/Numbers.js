import React from "react";
import { numbers } from "../../../data";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [number, setnumber]= React.useState(numbers)
  return (
    <div>
     {number.map(num =>{ return <button>{num}</button>})}
    </div>
  );
};
export{Numbers};