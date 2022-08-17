const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignupModel");
const bycrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const execute = require("./compile");
const ExecuteTest = require("./compileTest");



router.get("/test", (req, res) => {
  res.json({ msg: "code route" });
});

const deleteFile = (filename) => {
  fs.unlink(filename, function (err) {
    if (err) {
      console.log("SORRY NOT DELETED");
    }
    // if no error, file has been deleted successfully
    console.log("File deleted!");
  });
};

router.post("/submit", (req, res) => {
  const code = req.body.code;
  const lang = req.body.lang;
  const algo = req.body.algo;
  return execute
        .pythonExecute(code, algo)
        .then((data) => {
          res.json(data);
          deleteFile(path.join(__dirname, "../"+algo+".py"));
        })
        .catch((err) => {
          console.log("ERROR PROMISE " + err);

        });

});

router.post("/testsubmit", (req, res) => {
    if (req.body.arrBol[0]) {
      const code = req.body.code1;
      const quest = req.body.quest;
      
      return ExecuteTest.pythonExecuteTest(code, quest)
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          console.log("ERROR PROMISE " + err);
        });
    } else if (req.body.arrBol[1]) {
       const code = req.body.code2;
       const quest = req.body.quest;
       return ExecuteTest.pythonExecuteTest(code, quest)
         .then((data) => {
           res.json(data);
         })
         .catch((err) => {
           console.log("ERROR PROMISE " + err);
         });
    } else if (req.body.arrBol[2]) {
       const code = req.body.code3;
       const quest = req.body.quest;
       return ExecuteTest.pythonExecuteTest(code, quest)
         .then((data) => {
           res.json(data);
         })
         .catch((err) => {
           console.log("ERROR PROMISE " + err);
         });
    }
})

router.post("/maketest", (req, res) => {
  let algoName = req.body[0];
  const text = req.body[1];
  const questNumber = req.body[2];
  algoName=algoName+".txt"


  switch (algoName) {
    case "BFS.txt":
      saveFile(algoName,text).then(() => {
        console.log("jo")
      })
    case "DFS":
    //fill
    case "LCS":
    //fill
    case "LIS":
    //fill
    case "BubbleSort":
    //fill
    case "CountingSort":
    //fill
  }
});

const saveFile = (algoName, text) => {
  return new Promise((resolve, reject) => {
    // Saving File
    console.log("SAVING FILES");
    fs.writeFile(algoName, text, function (err) {
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



module.exports = router;
