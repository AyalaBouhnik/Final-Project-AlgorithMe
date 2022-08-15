const fs = require("fs");
const { exec } = require("child_process");
const path = require("path");

const saveFile = (name, data) => {
  return new Promise((resolve, reject) => {
    // Saving File
    console.log("SAVING FILES");
    fs.writeFile(name, data, function (err) {
      if (err) {
        console.log(err);
        reject();
      } else {
        console.log("The file was saved!");
        resolve();
      }
    });
  });
};

// Function for execuing python code
const pythonExecute = (data, algo) => {
  let fileName="";
  let inputPath= "";
  const res = {
    err: false,
    msg: "",
  };
  return new Promise((resolve, reject) => {
    switch (algo) {
      case 'BFS':
        fileName = "BFS.py";
        inputPath = path.join(__dirname, "../inputBFS.py");
        break;
      case 'DFS':
        fileName = "DFS.py";
        inputPath = path.join(__dirname, "../inputDFS.py");
        break;
      case 'LCS':
        fileName = "LCS.py";
        inputPath = path.join(__dirname, "../inputLCS.py");
        break;
      case 'BubbleSort':
        fileName = "BubbleSort.py";
        inputPath = path.join(__dirname, "../inputBubbleSort.py");
        break;
      case 'CountingSort':
        fileName = "CountingSort.py";
        inputPath = path.join(__dirname, "../inputCountingSort.py");
        break;
      case 'LIS':
        fileName = "LIS.py";
        inputPath = path.join(__dirname, "../inputLIS.py");
        break;
      default:
        console.log(`Sorry, no test for ${algo}.`);
    }

    saveFile(fileName, data)
      .then(() => {
        // FILE SAVED SUCCESSFULLY
        // Generate the output file for it
        // COMPILE THE C++ CODES
        exec("python " + inputPath + "<" + fileName,
         (err, stdout, stderr) => {
          if (err) {
            // IF COMPILATION ERROR
            console.error(`exec error: ${err}`);
            resolve({
              err: true,
              output: err,
              error: stderr,
            });
          }
          resolve({
            err: false,
            output: stderr,
          });
        });
      })
      .catch(() => {
        console.log("ERROR SAVE FILE");
        const err = {
          err: true,
          output: "Internal Server Error!",
        };
        resolve(err);
      });
  });
};

module.exports = {
  pythonExecute,
};
