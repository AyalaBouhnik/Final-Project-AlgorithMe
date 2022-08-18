import React, { Component } from "react";
import "./Ide.css";
import axios from "axios";
import { code } from "./defaultCode";
import Editor from "@monaco-editor/react";

export default class MergeSort extends Component {
  state = {
    code: code.python,
    result: "Submit Code to See Result",
    lang: "python",
    algo: "MergeSort",
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/app/submit", this.state)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        if (data.err) {
          // Error in user code
          this.setState({
            result: data.error,
          });
        } else {
          this.setState({
            result: data.output,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onCodeChangeHandler = (newCode, e) => {
    //console.log(e)
    this.setState({
      code: newCode,
    });
  };
  onInputChangeHandler = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  editorDidMount = (e) => {
    //  console.log("EDITOR MOUNTED")
  };

  onLangSelectHandler = (e) => {
    const lang = e.target.value;
    this.setState({
      lang,
      code: code[lang],
    });
  };

  render() {
    // const options = {
    //   selectOnLineNumbers: true,
    //   renderIndentGuides: true,
    //   colorDecorators: true,
    //   cursorBlinking: "blink",
    //   autoClosingQuotes: "always",
    //   find: {
    //     autoFindInSelection: "always",
    //   },
    //   snippetSuggestions: "inline",
    // };
    return (
      <div className="container-grid">
        <div className="desciprtion">
          <h2>MergeSort desciprtion</h2>
          <p>
            <h5> Merge Sort: </h5>
            The Merge Sort algorithm is a sorting algorithm that is considered an example of the divide 
            and conquer strategy. So, in this algorithm, the array is initially divided into two equal
            halves and then they are combined in a sorted manner. We can think of it as a recursive
            algorithm that continuously splits the array in half until it cannot be further divided. 
            This means that if the array becomes empty or has only one element left, the dividing will 
            stop, i.e. it is the base case to stop the recursion. If the array has multiple elements, 
            we split the array into halves and recursively invoke the merge sort on each of the halves.
            Finally, when both the halves are sorted, the merge operation is applied. Merge operation is
            the process of taking two smaller sorted arrays and combining them to eventually make a larger one.

            <h5>The task :</h5>
            Given an array arr[], its starting position l and its ending position r. Sort the array using merge sort algorithm.
            Note:
            note: use helper function
            <h5>Signature of a function:</h5>
            1. def mergeSort(arr, l, r):
            2. def merge(arr, l, m, r):
          </p>
        </div>
        <div className="dfs-container">
          <div className="dfs-row">
            <div className="col-12 mt-5">
              <select id="lang" onChange={(e) => this.onLangSelectHandler(e)}>
                <option value="python">Python</option>
              </select>
              <div className="editor" type="text" id="code">
                <Editor
                  height="90vh"
                  language={this.state.lang}
                  theme="vs-dark"
                  value={this.state.code}
                  onChange={this.onCodeChangeHandler}
                  editorDidMount={this.editorDidMount}
                />
              </div>
            </div>
          </div>
          <button className="btn btn-success" onClick={this.onSubmitHandler}>
            Submit Code
          </button>
          <div className="row">
            <div className="col-12 my-5">
              <textarea
                rows="10"
                cols="5"
                type="text"
                id="result"
                value={this.state.result}
                disabled={true}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
