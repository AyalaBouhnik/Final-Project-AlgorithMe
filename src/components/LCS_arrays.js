import React, { Component } from "react";
import "./Ide.css";
import axios from "axios";
import { code } from "./defaultCode";
import Editor from "@monaco-editor/react";

export default class LCS_arrays extends Component {
  state = {
    code: code.python,
    result: "Submit Code to See Result",
    lang: "python",
    algo: "LCS_arrays",
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
          <h2>LCS_2arrays desciprtion</h2>
          <p>
          <h5> LCS_arrays: </h5>
            The longest common subsequence (LCS) is defined as the longest subsequence that is
            common to all the given sequences, provided that the elements of the subsequence are
            not required to occupy consecutive positions within the original sequences.

            <h5>The task :</h5>
            Given two sequences of numbers, return the length of their longest common subsequence. 
            If it doesn't exist , return 0.
            A subsequence is a sequence that appears in the same relative order, but 
            not necessarily contiguous. 
            Example of subsequence:
            [ 1, 3, 8] ,[ 1, 18, 28] ,[ 3, 18, 28] ,.. etc are subsequences of [1,4,3,18,28,18]
         
            <h5>Signature of a function:</h5>           
            def LCS_2arrays(X, Y):
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
