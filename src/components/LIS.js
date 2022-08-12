import React, { Component } from "react";
import "./Ide.css";
import axios from "axios";
import { code } from "./defaultCode";
import Editor from "@monaco-editor/react";

export default class LIS extends Component {
  state = {
    code: code.pythonLis,
    result: "Submit Code to See Result",
    lang: "python",
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
          <h2>LIS desciprtion</h2>
          <p>
            Breadth-first search (BFS) is an algorithm for searching a tree data
            structure for a node that satisfies a given property. It starts at
            the tree root and explores all nodes at the present depth prior to
            moving on to the nodes at the next depth level. Extra memory,
            usually a queue, is needed to keep track of the child nodes that
            were encountered but not yet explored. For example, in a chess
            endgame a chess engine may build the game tree from the current
            position by applying all possible moves, and use breadth-first
            search to find a win position for white. Implicit trees (such as
            game trees or other problem-solving trees) may be of infinite size;
            breadth-first search is guaranteed to find a solution node[1] if one
            exists. In contrast, (plain) depth-first search, which explores the
            node branch as far as possible before backtracking and expanding
            other nodes,[2] may get lost in an infinite branch and never make it
            to the solution node. Iterative deepening depth-first search avoids
            the latter drawback at the price of exploring the tree's top parts
            over and over again. On the other hand, both depth-first algorithms
            get along without extra memory. Breadth-first search can be
            generalized to graphs, when the start node (sometimes referred to as
            a 'search key')[3] is explicitly given, and precautions are taken
            against following a vertex twice. BFS and its application in finding
            connected components of graphs were invented in 1945 by Konrad Zuse,
            in his (rejected) Ph.D. thesis on the Plankalkül programming
            language, but this was not published until 1972.[4] It was
            reinvented in 1959 by Edward F. Moore, who used it to find the
            shortest path out of a maze,[5][6] and later developed by C. Y. Lee
            into a wire routing algorithm (published 1961).
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
            <div className="dfs-result-text">
              <p className="lead d-block my-0">Provide Input</p>
              <textarea
                type="text"
                id="input"
                value={this.state.input}
                onChange={this.onInputChangeHandler}
              ></textarea>
            </div>
          </div>
          <button className="btn btn-success" onClick={this.onSubmitHandler}>
            Submit Code
          </button>
          <div className="row">
            <div className="col-12 my-5">
              <textarea
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
