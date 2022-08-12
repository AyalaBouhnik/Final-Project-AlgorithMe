import React, { Component } from 'react'
import './Ide.css'
import axios from 'axios'
import {code} from './defaultCode'
import Editor from "@monaco-editor/react";

export default class Test extends Component {
    state={
        code: code.cpp,
        result: 'Submit Code to See Result',
        lang: 'cpp'
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
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
    }


    onCodeChangeHandler = (newCode, e) => {
        //console.log(e)
        this.setState({
            code: newCode
        })
    }
    onInputChangeHandler = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    editorDidMount = (e) => {
      //  console.log("EDITOR MOUNTED")
    }


    onLangSelectHandler = (e) => {
        const lang = e.target.value
        this.setState({
            lang,
            code: code[lang]
        })
    }


    render() {
        // const options = {
        //     selectOnLineNumbers: true,
        //     renderIndentGuides: true,
        //     colorDecorators: true,
        //     cursorBlinking: "blink",
        //     autoClosingQuotes: "always",
        //     find: {
        //         autoFindInSelection: "always"
        //     },
        //     snippetSuggestions: "inline"
        //   };
    //    console.log(this.state)
        return (
          <>
            <div className="container">
              <div className="row">
                <div className="col-12 mt-5">
                  <select
                    id="lang"
                    onChange={(e) => this.onLangSelectHandler(e)}
                  >
                    <option value="cpp">C++</option>
                    <option value="c">C</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                  </select>
                  <p className="code-ide">Code your code here</p>
                  <div className="editor" type="text" id="code">
                  <Editor
                  height="90vh"
                  language={this.state.lang}
                  theme="vs-dark"
                  value={this.state.code}
                  onChange={this.onCodeChangeHandler}
                  editorDidMount={this.editorDidMount}/>
                    {/* <MonacoEditor
                      width="800"
                      height="700"
                      language={this.state.lang}
                      theme="vs-dark"
                      value={this.state.code}
                      options={options}
                      onChange={this.onCodeChangeHandler}
                      editorDidMount={this.editorDidMount}
                    /> */}
                  </div>
                </div>
                <div className="result-text">
                  <p className="lead d-block my-0">Provide Input</p>
                  <textarea
                    type="text"
                    id="input"
                    value={this.state.input}
                    onChange={this.onInputChangeHandler}
                  ></textarea>
                </div>
              </div>
              <button
                className="btn btn-success"
                onClick={this.onSubmitHandler}
              >
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
          </>
        );
    }
}