import { useState } from "react";
import "./App.css";
import { EditIcon, TrashIcon } from "./svg";

function App() {
  // user input data
  const [inputValue, setInputValue] = useState("");

  // to get index for editing data
  const [selected, setSelected] = useState();

  // UI list
  const [showData, setShowData] = useState([]);

  // button name
  const [btnAdd, setBtnAdd] = useState(true);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const getData = () => {
    // console.log(inputValue);
    // console.log(selected);

    // if edit selected, get index and return updated value
    if (selected != undefined) {
      setShowData((prev) => {
        const copy = [...prev];
        copy.splice(selected, 1, inputValue);
        return copy;
      });
    } else {
      // to push new data to the previous value
      setShowData((prev) => [...prev, inputValue]);
    }

    // to reset the input to empty
    setInputValue("");

    // to change button to ADD
    setBtnAdd(true);
  };

  const handleDelete = (index) => {
    setShowData((prev) => {
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });

    // removing the selected index and showing remaining data in new array
    // setShowData((prev) => prev.filter((v, i) => i !== index));
  };

  const handleEdit = (index) => {
    // console.log(showData[index]);

    // to get the clicked indexed data and setting it to input value
    setInputValue(showData[index]);

    // to send the index
    setSelected(index);

    // to change button to UPDATE
    setBtnAdd(false);
  };

  return (
    <div className="p-8 my-10 mx-auto w-2/5 bg-white shadow-md rounded">
      <h1 className="flex justify-center mb-6">TO-DO APP</h1>

      <div className="flex items-end mb-6">
        <div className="flex flex-col w-full">
          <label className="mb-1">Enter To-Do Item</label>
          <input
            type="text"
            name="userInput"
            value={inputValue}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="ml-2 btn" onClick={getData}>
          {btnAdd ? "ADD" : "UPDATE"}
        </button>
      </div>

      <ul>
        {showData.map((data, index) => (
          <li
            key={index}
            className="flex items-center justify-between 
            border-b border-solid border-gray-400 p-2 my-4"
          >
            <div>
              <span className="text-sm">{index + 1}.</span>
              <span className="ml-2 text-xl font-semibold">
                {data}
                {/* ({index}) */}
              </span>
            </div>

            <div className="flex">
              <span
                title="Edit"
                className="action-icon"
                onClick={() => handleEdit(index)}
              >
                <EditIcon />
              </span>
              <span
                title="Remove"
                className="action-icon"
                onClick={() => handleDelete(index)}
              >
                <TrashIcon />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
