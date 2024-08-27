import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [showData, setShowData] = useState([]);

  const [btnAdd, setBtnAdd] = useState(true);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const getData = () => {
    console.log(inputValue);

    // to push new data to the previous value
    setShowData((prev) => [...prev, inputValue]);

    // to reset the input to empty
    setInputValue("");

    // to change button to ADD
    setBtnAdd(true);
  };

  const handleDelete = (index) => {
    // const newData = [...showData];
    // newData.splice(index, 1);
    // setShowData(newData);

    // removing the selected index and showing remaining data in new array
    setShowData((prev) => prev.filter((v, i) => i !== index));
  };

  const handleEdit = (index) => {
    // console.log(showData[index]);

    // to get the clicked indexed data and setting it to input value
    setInputValue(showData[index]);

    // to change button to UPDATE
    setBtnAdd(false);
  };

  return (
    <div className="m-10">
      <input
        type="text"
        name="userInput"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" className="ml-2 btn" onClick={getData}>
        {btnAdd ? "ADD" : "UPDATE"}
      </button>

      <ul className="text-2xl font-bold m-6 w-1/4">
        {showData.map((data, index) => (
          <li key={index} className="flex items-center">
            <div className="bg-red-500 p-2 m-2 min-w-40">
              {data}({index})
            </div>
            <span
              className="p-2 bg-gray-300 hover:bg-gray-400 cursor-pointer rounded"
              onClick={() => handleEdit(index)}
            >
              E
            </span>
            <span
              className="p-2 bg-gray-300 hover:bg-gray-400 cursor-pointer rounded ml-2"
              onClick={() => handleDelete(index)}
            >
              D
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
