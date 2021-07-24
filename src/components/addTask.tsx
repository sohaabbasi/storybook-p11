import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../lib/redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddTask = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string | undefined>();

  const handleSubmit = () => {
    if (title !== "") {
      dispatch(addTask({ title }));
      setTitle("");
    } else {
      setError("Title is required");
    }
  };

  return (
    <div>
      <div style={{backgroundColor: 'Linen' ,boxShadow:"10px 20px 30px 30px #888888"}} className="max-w-xl mx-auto bg-600 p-4 my-6 rounded-md ">
        <div className="flex flex-col justify-center items-center ">
        <h1 style={{ color:"black",fontFamily:"openSans" , fontStyle:"italic"}} className="text-center text-5xl mt-5">
          Add Task
        </h1>
        <br/>
          <div>
            <TextField
              className="max-w-lg w-64 p-3 bg-white rounded focus:outline-none block"
              id="filled-basic" label="Add Task" variant="filled"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setError("");
              }}
            />
            {error && <p className="text-red-700 -my-1 text-sm">{error}</p>}
              <br/>
            <Button
            variant="contained" color="primary"
              style={{marginTop:"15px"}}
            onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;









