import React, { Component } from "react";
import "./Ide.css";
import axios from "axios";
import { code } from "./defaultCode";
import Editor from "@monaco-editor/react";

export default class DFS extends Component {
  state = {
    code: code.python,
    result: "Submit Code to See Result",
    lang: "python",
    algo: "DFS",
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
          <h2>DFS desciprtion</h2>
          <p>
            DFS or Depth First Search is an algorithm for traversing or
            searching tree or graph data structures. It starts at the root
            (selecting some arbitrary node as the root in the case of a graph)
            and explores as far as possible along each branch before
            backtracking. Note: Unlike trees, graphs may contain cycles, so we
            may come to the same node again. To avoid processing a node more
            than once, we use a boolean visited array. task: Given a directed
            graph. is to perform a Depth First Search of this graph starting
            from a given vertex. Create a recursive function that takes the
            index of the node and a visited array.
            <br />
            <h6>use:</h6> visited = set() # Set to keep track of visited nodes
            of graph.
            <br />
            ret_arr = [] # for final solution
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
