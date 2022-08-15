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
const pythonExecuteTest = (data, quest) => {
  const res = {
    err: false,
    msg: "",
  };
  let filePath ="";
  let inputPath="";
  if(quest == 1){
    filePath = "BFS.py";
    inputPath = path.join(__dirname, "../inputBFS.py");
      return new Promise((resolve, reject) => {
        saveFile(filePath, data)
          .then(() => {
            // Create Input file
            // FILE SAVED SUCCESSFULLY
            // Generate the output file for it
            console.log("FILE PATH >> " + inputPath);
            exec(
              "python " + inputPath + "<" + filePath,
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
              }
            );
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
  }
  else if(quest == 2){
    filePath = "DFS.py";
    inputPath = path.join(__dirname, "../inputDFS.py");
      return new Promise((resolve, reject) => {
        saveFile(filePath, data)
          .then(() => {
            // Create Input file
            // FILE SAVED SUCCESSFULLY
            // Generate the output file for it
            console.log("FILE PATH >> " + inputPath);
            exec(
              "python " + inputPath + "<" + filePath,
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
              }
            );
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
  }
  else if (quest == 3) {
    filePath = "LCS.py";
    inputPath = path.join(__dirname, "../inputLCS.py");
    return new Promise((resolve, reject) => {
      saveFile(filePath, data)
        .then(() => {
          // Create Input file
          // FILE SAVED SUCCESSFULLY
          // Generate the output file for it
          console.log("FILE PATH >> " + inputPath);
          exec(
            "python " + inputPath + "<" + filePath,
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
            }
          );
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
  }
  
};

module.exports = {
  pythonExecuteTest,
};
