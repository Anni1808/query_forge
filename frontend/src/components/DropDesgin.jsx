// import React, { useState } from 'react';

// const DropDesign = () => {
//   const [showLogicOperator, setShowLogicOperator] = useState(false);
//   const [elements, setElements] = useState([]);

//   const handlePlusClick = () => {
//     setShowLogicOperator(true);
//   };

//   const handleLogicOperatorChange = (e) => {
//     const selectedOption = e.target.value;
//     console.log('Selected option:', selectedOption);
//     setShowLogicOperator(false); // Reset showLogicOperator state
//     if (selectedOption === "and") {
//       setElements([...elements, "Row"]);
//     } else if (selectedOption === "or") {
//       setElements([...elements, "Column"]);
//     }
//     setShowLogicOperator(true); // Set it back to true after adding elements
//   };
  
  

//   const renderElement = (element) => {
//     switch (element) {
//       case "Row":
//         return (
//           <div className="flex items-center space-x-2 mt-3">
//             <label>AND</label>
//             <p className="text-gray-600">Where</p>
//             <select className="border border-gray-300 rounded-md px-2 py-1">
//               <option value="">Select Table Column Name</option>
//               <option value="id">id</option>
//               <option value="username">username</option> 
//               <option value="email">email</option>
//             </select>
//             <p>is</p>
//             <select className="border border-gray-300 rounded-md px-2 py-1">
//               <option value="">Select Sign</option>
//               <option value="<">Less than</option>
//               <option value=">">Greater than</option> 
//               <option value="=">Equal</option>
//             </select>
//             <input type="text" placeholder="Enter your value" className="border border-gray-300 rounded-md px-2 py-1" />
//           </div>
//         );
//       case "Column":
//         return (
//           <div className="flex items-center space-x-2 mt-3">
//                 <label>OR</label>
//             <p className="text-gray-600">Where</p>
//             <select className="border border-gray-300 rounded-md px-2 py-1">
//               <option value="">Select Table Column Name</option>
//               <option value="id">id</option>
//               <option value="username">username</option> 
//               <option value="email">email</option>
//             </select>
//             <p>is</p>
//             <select className="border border-gray-300 rounded-md px-2 py-1">
//               <option value="">Select Sign</option>
//               <option value="<">Less than</option>
//               <option value=">">Greater than</option> 
//               <option value="=">Equal</option>
//             </select>
//             <input type="text" placeholder="Enter your value" className="border border-gray-300 rounded-md px-2 py-1" />
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className=" bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manually Generate SQL Queries</h2>
//         <div className="space-y-4">
//           <div className="flex items-center space-x-2">
//             <p className="text-gray-600">List of</p>
//             <select className="border border-gray-300 rounded-md px-2 py-1">
//               <option value="">Select User Table Name</option>
//               <option value="Account">Account</option>
//               <option value="Friends">Friends</option>
//               <option value="Payment">Payment</option>
//             </select>
//           </div>
//           <div className="flex items-center space-x-2">
//             <p className="text-gray-600">Where</p>
//             <select className="border border-gray-300 rounded-md px-2 py-1">
//               <option value="">Select Table Column Name</option>
//               <option value="id">id</option>
//               <option value="username">username</option> 
//               <option value="email">email</option>
//             </select>
//             <p>is</p>
//             <select className="border border-gray-300 rounded-md px-2 py-1">
//               <option value="">Select Sign</option>
//               <option value="<">Less than</option>
//               <option value=">">Greater than</option> 
//               <option value="=">Equal</option>
//             </select>
//             <input type="text" placeholder="Enter your value" className="border border-gray-300 rounded-md px-2 py-1" />
//             <button onClick={handlePlusClick} className="border border-gray-300 rounded-md px-2 py-1 bg-blue-500 text-white">+</button>
//             {showLogicOperator && (
//               <select className="border border-gray-300 rounded-md px-2 py-1" onChange={handleLogicOperatorChange}>
//                 <option value="">Select Sign</option>
//                 <option value="and">AND</option>
//                 <option value="or">OR</option>
//               </select>
//             )}
//           </div>
//         </div>
        
//         <div>
//           {elements.map((element, index) => (
//             <div key={index}>
//               {renderElement(element)}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DropDesign;

import React, { useState } from 'react';

const DropDesign = () => {
  const [clickCountAND, setClickCountAND] = useState(0);
  const [clickCountOR, setClickCountOR] = useState(0);
  const [rowCountAND, setRowCountAND] = useState(0);
  const [rowCountOR, setRowCountOR] = useState(0);

  const handlePlusClickAND = () => {
    setClickCountAND(clickCountAND + 1);
    if (clickCountAND > 0) {
      setRowCountAND(rowCountAND + 1);
    }
  };

  const handlePlusClickOR = () => {
    setClickCountOR(clickCountOR + 1);
    if (clickCountOR > 0) {
      setRowCountOR(rowCountOR + 1);
    }
  };

  const renderRowAND = () => {
    const rows = [];
    for (let i = 0; i < rowCountAND; i++) {
      rows.push(
        <div className="flex items-center space-x-2" key={i}>
             <label>AND</label>
          <p className="text-gray-600">Where</p>
          <select className="border border-gray-300 rounded-md px-2 py-1">
            <option value="">Select Table Column Name</option>
            <option value="id">id</option>
            <option value="username">username</option> 
            <option value="email">email</option>
          </select>
          <p>is</p>
          <select className="border border-gray-300 rounded-md px-2 py-1">
            <option value="">Select Sign</option>
            <option value="<">Less than</option>
            <option value=">">Greater than</option> 
            <option value="=">Equal</option>
          </select>
          <input type="text" placeholder="Enter your value" className="border border-gray-300 rounded-md px-2 py-1" />
          <button onClick={handlePlusClickAND} className="border border-gray-300 rounded-md px-2 py-1 bg-blue-500 text-white">AND</button>
         
        </div>
      );
    }
    return rows;
  };

  const renderRowOR = () => {
    const rows = [];
    for (let i = 0; i < rowCountOR; i++) {
      rows.push(
        <div className="flex items-center space-x-2" key={i}>
            <label>OR</label>
          <p className="text-gray-600">Where</p>
          <select className="border border-gray-300 rounded-md px-2 py-1">
            <option value="">Select Table Column Name</option>
            <option value="id">id</option>
            <option value="username">username</option> 
            <option value="email">email</option>
          </select>
          <p>is</p>
          <select className="border border-gray-300 rounded-md px-2 py-1">
            <option value="">Select Sign</option>
            <option value="<">Less than</option>
            <option value=">">Greater than</option> 
            <option value="=">Equal</option>
          </select>
          <input type="text" placeholder="Enter your value" className="border border-gray-300 rounded-md px-2 py-1" />
        </div>
      );
    }
    return rows;
  };

  return (
    <div className=" bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manually Generate SQL Queries</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-5">
            <p className="text-gray-600 font-extrabold">List of</p>
            <select className="border border-gray-300 rounded-md px-2 py-1">
              <option value="">Select User Table Name</option>
              <option value="Account">Account</option>
              <option value="Friends">Friends</option>
              <option value="Payment">Payment</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-gray-600">Where</p>
            <select className="border border-gray-300 rounded-md px-2 py-1">
              <option value="">Select Table Column Name</option>
              <option value="id">id</option>
              <option value="username">username</option> 
              <option value="email">email</option>
            </select>
            <p>is</p>
            <select className="border border-gray-300 rounded-md px-2 py-1">
              <option value="" selected disabled >Select Sign</option>
              <option value="<">Less than</option>
              <option value=">">Greater than</option> 
              <option value="=">Equal</option>
            </select>
            <input type="text" placeholder="Enter your value" className="border border-gray-300 rounded-md px-2 py-1" />
            <button onClick={handlePlusClickAND} className="border border-gray-300 rounded-md px-2 py-1 bg-blue-500 text-white">AND</button>
            <button onClick={handlePlusClickOR} className="border border-gray-300 rounded-md px-2 py-1 bg-blue-500 text-white">OR</button>
          </div>
        </div>
        {clickCountAND > 0 && (
          <div id="AND">
            {renderRowAND()}
          </div>
        )}
        {clickCountOR > 0 && (
          <div id="OR">
            {renderRowOR()}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDesign;

