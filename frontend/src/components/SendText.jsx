import axios from "axios";
import React, { useState } from "react";

const SendText = () => {
  const [data,setData] = useState({
    prompt :"",
    sql_type:""
  })
  const OnChangeHandler = (e)=>{
    setData({
      ...data,
      prompt:e.target.value
    })
  }
  const OnClickHandler = async ()=>{
    var response = await axios.post(
      "http://localhost:3000/generate_mind_query",
      data,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    // console.log(response);
    // setQuery(`${response.data.query}`);
    alert(response.data.query)
  
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
      }} className="flex items-center justify-between p-8 px-16 bg-black">
        <textarea
        onChange={OnChangeHandler}
          id="chat"
          rows="2"
          className="flex-1 p-3 text-sm text-gray-800 placeholder-gray-500 border border-transparent rounded-lg focus:outline-none focus:ring focus:ring-gray-500"
          placeholder="Your message..."
        ></textarea>
        <button
          onClick={OnClickHandler}
          className="flex items-center justify-center w-10 h-10 ml-4 text-white bg-gray-500 rounded-full hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          <svg
            className="w-6 h-6 transform rotate-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SendText;
