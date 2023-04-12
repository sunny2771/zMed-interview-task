import { useState } from "react";
import "./App.css";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import { pdata } from "./data";

function App() {
  // SECOND_QUESTION LINE GRAPH SOLUTION :-
  const [totalData, setTotalData] = useState(pdata);
  const [data, setData] = useState("");

  const handleClick = () => {
    let removeSpace;

    if (data.includes("\n") && data.slice(-1) == ",") {
      removeSpace = data.replace(/\n/g, ",").slice(0, -1);
    } else if (data.includes("\n")) {
      removeSpace = data.replace(/\n/g, ",") || data.replace("/,+/g", ",");
    } else if (data.slice(-1) == ",") {
      removeSpace = data.slice(0, -1);
    } else {
      removeSpace = data;
    }

    let arr = removeSpace.toString().split(",");

    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].trim() === "") {
        if (arr[i].trim() !== "") {
          newArr.push(arr[i].trim());
          break;
        }
      } else {
        newArr.push(arr[i]);
      }
    }

    let result = [];
    for (let i = 0; i < newArr.length; i += 2) {
      const obj = {
        student: +newArr[i],
        fees: +newArr[i + 1],
      };

      result.push(obj);
    }

    setTotalData([...totalData, ...result]);
  };

  console.log(totalData)

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h4>Enter Values :- </h4>
        <textarea
          type="text"
          onChange={(e) => setData(e.target.value)}
          value={data}
        />
        <button
          onClick={handleClick}
          style={{
            padding: "10px 20px",
            fontSize: "17px",
            borderRadius: "5px",
            color: "#fff",
            background: "blue",
          }}
        >
          Submit
        </button>
      </div>
      <br />
      <br />

      <div
        style={{
          marginLeft: "50px",
        }}
      >
        <h1 className="text-heading">Line Graph </h1>
        <br />
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={totalData} margin={{ right: 300 }}>
            <CartesianGrid />
            <XAxis dataKey="student" interval={"preserveStartEnd"} />
            <YAxis dataKey="fees" interval={"preserveStartEnd"} />
            <Legend />
            <Tooltip />
            <Line dataKey="student" stroke="black" activeDot={{ r: 8 }} />
            <Line dataKey="fees" stroke="red" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default App;

// FIRST_QUESTION SIMPLE CALCULATOR SOLUTION:-

// const [num1, setNum1] = useState(0);
// const [num2, setNum2] = useState(0);
// const [operator, setOparator] = useState("+");
// const [output, setOutput] = useState("");

// useEffect(() => {
//   setOutput(calculateVal());
// }, [operator, num1, num2]);

// const handleChange1 = (e) => {
//   setNum1(+e.target.value);
// };

// const handleChange2 = (e) => {
//   setNum2(+e.target.value);
// };

// const calculation = (e) => {
//   setOparator(e.target.value);
// };

// const calculateVal = () => {
//   switch (operator) {
//     case "+":
//       return num1 + num2;

//     case "-":
//       return num1 - num2;

//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;

//     default:
//       return 0;
//       break;
//   }
// };

// return (
//   <div className="App" style={{ marginTop: "10%" }}>
//     <label htmlFor="num1">Number 1:- </label>
//     <input type="number" id="num1" onChange={handleChange1} value={num1} />
//     <br />
//     <br />
//     <br />
//     <label htmlFor="num2">Number 2:- </label>
//     <input type="number" id="num2" onChange={handleChange2} value={num2} />
//     <br />
//     <br />
//     <br />
//     <label htmlFor="dropdown">Operation:- </label>

//     <select
//       id="dropdown"
//       style={{ width: "200px", padding: "10px" }}
//       onChange={(e) => calculation(e)}
//       value={operator}
//     >
//       <option value="+">+</option>
//       <option value="-">-</option>
//       <option value="*">*</option>
//       <option value="/">/</option>
//     </select>

//     <br />
//     <br />
//     <br />
//     <label htmlFor="result">Results:- </label>
//     <input type="text" disabled value={output} />
//   </div>
// );
