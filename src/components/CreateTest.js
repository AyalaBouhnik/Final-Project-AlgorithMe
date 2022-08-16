import axios from "axios";
import React, { useState } from "react";
import { UserAuth } from "../context/authContext";

const CreateTest = () => {
  const [input, setInput] = useState("Question 1");
  const [input2, setInput2] = useState("Question 2");
  const [input3, setInput3] = useState("Question 3");
  const [algo,setAlgo] = useState("BFS");
  const [algo2, setAlgo2] = useState("BFS");
  const [algo3, setAlgo3] = useState("BFS");

//Input Question 
  const onInputChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const onInputChangeHandler2 = (e) => {
    setInput2(e.target.value);
  };
  const onInputChangeHandler3 = (e) => {
    setInput3(e.target.value);
  };
  const onClickQuest1 = (e) => {
    e.preventDefault();
     axios
       .post("http://localhost:4000/app/maketest", [algo, input])
       .then((res) => {
         this.state.arrBol[2] = false;
         console.log(res.data);
         const data = res.data;
         if (data.err) {
           // Error in user code
           this.setState({
             result3: data.error,
           });
         } else {
           this.setState({
             result3: data.output,
           });
         }
       })
       .catch((err) => {
         console.log(err);
       });

  };

  const onClickQuest2 = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/app/maketest", [algo2, input2])
      .then((res) => {
        this.state.arrBol[2] = false;
        console.log(res.data);
        const data = res.data;
        if (data.err) {
          // Error in user code
          this.setState({
            result3: data.error,
          });
        } else {
          this.setState({
            result3: data.output,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const onClickQuest3 = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/app/maketest", [algo3, input3])
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

// Select Algo
  const onAlgoSelectHandler = (e) => {
     const algo = e.target.value;
     setAlgo(algo);
   };
  const onAlgoSelectHandler2 = (e) => {
     const algo = e.target.value;
     setAlgo2(algo);
   };

  const  onAlgoSelectHandler3 = (e) => {
     const algo = e.target.value;
     setAlgo3(algo);
   };


  return (
    <div>
      <div className="test-admin">
        <h1>Question 1</h1>
        <select id="lang1" onChange={onAlgoSelectHandler}>
          <option value="BFS">BFS</option>
          <option value="DFS">DFS</option>
          <option value="LCS">LCS</option>
          <option value="LIS">LIS</option>
          <option value="BubbleSort">BubbleSort</option>
          <option value="CountingSort">CountingSortthon</option>
        </select>
        <div className="text-area-admin">
          <textarea
            rows="25"
            cols="100"
            type="text"
            id="input"
            value={input}
            onChange={onInputChangeHandler}
          ></textarea>
        </div>
      </div>
      <button onClick={onClickQuest1} className="buttonClick">
        Save Question
      </button>

      <div className="test-admin2">
        <h1>Question 2</h1>
        <select id="lang2" onChange={onAlgoSelectHandler2}>
          <option value="BFS">BFS</option>
          <option value="DFS">DFS</option>
          <option value="LCS">LCS</option>
          <option value="LIS">LIS</option>
          <option value="BubbleSort">BubbleSort</option>
          <option value="CountingSort">CountingSortthon</option>
        </select>
        <div className="text-area-admin2">
          <textarea
            rows="25"
            cols="100"
            type="text"
            id="input"
            value={input2}
            onChange={onInputChangeHandler2}
          ></textarea>
        </div>
      </div>
      <button onClick={onClickQuest2} className="buttonClick">
        Save Question
      </button>

      <div className="test-admin2">
        <h1>Question 3</h1>
        <select id="lang2" onChange={onAlgoSelectHandler3}>
          <option value="BFS">BFS</option>
          <option value="DFS">DFS</option>
          <option value="LCS">LCS</option>
          <option value="LIS">LIS</option>
          <option value="BubbleSort">BubbleSort</option>
          <option value="CountingSort">CountingSortthon</option>
        </select>
        <div className="text-area-admin2">
          <textarea
            rows="25"
            cols="100"
            type="text"
            id="input"
            value={input3}
            onChange={onInputChangeHandler3}
          ></textarea>
        </div>
      </div>
      <button onClick={onClickQuest3} className="buttonClick">
        Save Question
      </button>
    </div>
  );
};

export default CreateTest;
