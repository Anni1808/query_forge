import React, { useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function DropDown() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({
    table: "user",
    fields: [],
    conditions: [
      {
        id: 1,
        condition: [
          {
            field: "salary",
            sign: "=",
            value: "devam",
          },
          {
            field: "department",
            sign: "<",
            value: 25,
          },
        ],
      },
      {
        id: 2,
        condition: [
          {
            field: "salary",
            sign: "=",
            value: "prashant",
          },
          {
            field: "department",
            sign: ">",
            value: 18,
          },
        ],
      },
    ],
  });

  const AddOR = () => {
    var newData = data;
    newData.conditions.push({
      id: newData.conditions[newData?.conditions?.length - 1]?.id + 1 || 1,
      condition: [
        {
          field: "",
          sign: "",
          value: "",
        },
      ],
    });
    setData({ ...newData });
  };

  const AddAnd = (id) => {
    var newData = data;
    newData.conditions.map((element) => {
      if (element.id == id) {
        element.condition.push({ field: "", sign: "", value: "" });
      }
      return element;
    });
    setData({ ...newData });
  };

  function isNumeric(str) {
    if (typeof str != "string") return false; // we only process strings!
    return (
      !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      !isNaN(parseFloat(str))
    ); // ...and ensure strings of whitespace fail
  }
  const DeleteAdd = (id, index) => {
    var newData = data;
    newData.conditions.map((element) => {
      if (element.id == id) {
        element.condition.splice(index, 1);
      }
      return element;
    });
    setData({ ...newData });
  };

  const DeleteOR = (index) => {
    var newData = data;
    newData.conditions.splice(index, 1);
    setData({ ...newData });
  };

  const HandleWhereClause = (e, id, key) => {
    var newData = data;
    newData.conditions.map((element, index) => {
      if (element.id == id) {
        element.condition[key][e.target.name] = isNumeric(e.target.value)
          ? Number(e.target.value)
          : e.target.value;
      }
      return element;
    });
    setData({ ...newData });
  };

  const SubmitHandler = async () => {
    var response = await axios.post(
      "http://localhost:3000/generate_query",
      data,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    console.log(response);
    setQuery(`${response.data.query}`);
  };
  return (
    <>
      {/* main outer loop for OR */}
      <div className="mx-12 mt-16">
        <label className="lowercase text-xl me-4">List of</label>
        <div className="relative inline-block w-64 mt-2">
          <select
            required
            value={data.table}
            onChange={(e) => setData({ ...data, table: e.target.value })}
            className="border-b-2 border-gray-300 rounded-md px-4 py-2 pr-8 appearance-none focus:outline-none bg-white hover:bg-gray-100 transition-all duration-300"
          >
            <option value="" selected disabled>
              select
            </option>
            <option value="user">User</option>
            <option value="Course">Courses</option>
          </select>
        </div>
        <div className="lowercase text-xl mt-8">WHOSE</div>
      </div>
      <div className="flex flex-col flex-1 mx-12">
        {data?.conditions?.map((item, key) => {
          return (
            <>
              {/* inner loop of AND */}
              <div></div>
              {item?.condition?.map((element, index) => {
                return (
                  <>
                    {/* Function that outer puts data  */}
                    <div className="flex justify-start items-center">
                      <DisplayAndArray
                        table={data.table}
                        id={item.id}
                        data={element}
                        changehandler={HandleWhereClause}
                        index={index}
                      />
                      {/* can't delete last AND in OR */}
                      {item.condition.length > 1 ? (
                        // removes Current row of ADD
                        <button
                          onClick={() => DeleteAdd(item.id, index)}
                          className="flex items-center justify-center w-16 h-10 ms-12 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                        >
                          <FaTrash />
                        </button>
                      ) : (
                        <button className="px-3 py-2 w-52 h-10 bg-gray-300 ms-12 text-gray-600 rounded-md cursor-not-allowed hover:bg-gray-400 transition duration-300 ease-in-out transform hover:scale-105">
                          Minimum 1 needed
                        </button>
                      )}
                    </div>
                    {item.condition.length - 1 > index ? (
                      <label className="ms-60 my-2 text-xl">AND</label>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
              {/* Add new row of ADD */}
              <div className="flex mt-6">
                <button
                  onClick={() => AddAnd(item.id)}
                  className="flex items-center justify-center me-5 px-4 py-2 w-20 rounded-lg bg-green-500 text-white  shadow-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  <AiOutlinePlus className="text-xl mr-2" /> AND
                </button>{" "}
                {/* Removes whole OR */}
                <button
                  onClick={() => DeleteOR(key)}
                  className="flex items-center justify-center px-4 py-2 bg-red-500 text-white w-20 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  <AiOutlineMinus className="text-xl mr-2" /> OR
                </button>
              </div>
              {/* Condition for OR display */}
              {data?.conditions?.length - 1 > key ? (
                <>
                  <label className=" text-center my-6 text-xl me-4 mt-4">
                    OR
                  </label>
                </>
              ) : (
                ""
              )}
            </>
          );
        })}
        {/* Add new Row of OR */}
        <div className="flex items-center space-x-4 mt-8 border-t border-black pt-5">
          <button
            onClick={AddOR}
            className="px-2 py-1 w-20 h-10 bg-blue-500 text-white rounded-md"
          >
            + OR{" "}
          </button>
          <button
            onClick={SubmitHandler}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Submit
          </button>
        </div>
       </div>
       <div className="mt-4 bg-yellow-100 p-10 rounded-lg border-black border mb-20 font-bold text-lg">{query}</div>
    </>
  );
}

function DisplayAndArray({ table, id, data, changehandler, index }) {
  return (
    <div className="flex items-center space-x-5 my-3">
      {/* Field Dropdown */}
      <select
        name="field"
        value={data.field}
        onChange={(e) => changehandler(e, id, index)}
        className="border-b-2 border-gray-500 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 bg-white hover:bg-gray-100 transition duration-300 shadow-md"
      >
        <option value="" disabled hidden>
          Select Field
        </option>
        {table === "user" ? (
          <>
            <option value="salary">Salary</option>
            <option value="department">Department</option>
          </>
        ) : (
          <>
            <option value="title">Title</option>
            <option value="price">Price</option>
          </>
        )}
      </select>

      {/* Operation Dropdown */}
      <select
        name="sign"
        value={data.sign}
        onChange={(e) => changehandler(e, id, index)}
        className="border-b-2 border-gray-500 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 bg-white hover:bg-gray-100 transition duration-300 shadow-md"
      >
        <option value="" disabled hidden>
          Select Operation
        </option>
        <option value="=">Equal</option>
        <option value="<">Less than</option>
        <option value=">">Greater than</option>
        <option value="<=">Less than or equal to</option>
        <option value=">=">Greater than or equal to</option>
        <option value="!=">Not equal to</option>
      </select>

      {/* Value Input */}
      <input
        name="value"
        value={data.value}
        onChange={(e) => changehandler(e, id, index)}
        className="border-r-2 border-b-2 border-gray-500 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 bg-white hover:bg-gray-100 transition duration-300 shadow-md"
        placeholder="Enter Value"
      />
    </div>
  );
}
