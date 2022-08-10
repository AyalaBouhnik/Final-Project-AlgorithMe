const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignupModel");
const bycrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const execute = require("./compile");


router.post("/signup", async (req, res) => {
  const saltPassword = await bycrypt.genSalt(10);
  const securePassword = await bycrypt.hash(req.body.password, saltPassword);

  const signUpUser = new signUpTemplateCopy({
    AlgoName: 'BFS',
    function: "visited = [] queue = []    ret_arr = [] def bfs(visited, graph, node): ret_arr.clear() visited.append(node) queue.append(node) while queue: m = queue.pop(0) ret_arr.append(m) for neighbour in graph[m]: if neighbour not in visited: visited.append(neighbour) queue.append(neighbour) return ret_arr"
  });
  signUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});



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
  //console.log(req.body);
  const code = req.body.code;
  const input = req.body.input;
  const lang = req.body.lang;
  switch (lang) {
    case "cpp":
      return execute
        .cPlusPlusExecute(code, input)
        .then((data) => {
          //console.log("SUCCESSFULL PROMISE " + data);
         // console.log("SENDING " + data);
          res.json(data);
          deleteFile(path.join(__dirname, "../  input.txt"));
          deleteFile(path.join(__dirname, "../test.cpp"));
        })
        .catch((err) => {
         // console.log("ERROR PROMISE " + err);
          deleteFile(path.join(__dirname, "../input.txt"));
          deleteFile(path.join(__dirname, "../test.cpp"));
        });
    case "c":
      return execute
        .cExecute(code, input)
        .then((data) => {
          //console.log("SUCCESSFULL PROMISE " + data);
          //console.log("SENDING " + data);
          res.json(data);
          deleteFile(path.join(__dirname, "../input.txt"));
          deleteFile(path.join(__dirname, "../test.c"));
          deleteFile(path.join(__dirname, "../a.exe"));
        })
        .catch((err) => {
         // console.log("ERROR PROMISE " + err);
          deleteFile(path.join(__dirname, "../input.txt"));
          deleteFile(path.join(__dirname, "../test.c"));
          deleteFile(path.join(__dirname, "../a.exe"));
        });

    case "java":
      return execute
        .javaExecute(code, input)
        .then((data) => {
         // console.log("SUCCESSFULL PROMISE " + data);
         // console.log("SENDING " + data);
          res.json(data);
          deleteFile(path.join(__dirname, "../input.txt"));
          deleteFile(path.join(__dirname, "../test.java"));
          deleteFile(path.join(__dirname, "../test.class"));
        })
        .catch((err) => {
        //  console.log("ERROR PROMISE " + err);
          deleteFile(path.join(__dirname, "../input.txt"));
          deleteFile(path.join(__dirname, "../test.java"));
          deleteFile(path.join(__dirname, "../test.class"));
        });

    case "python":
      return execute
        .pythonExecute(code, input)
        .then((data) => {
       //   console.log("SUCCESSFULL PROMISE " + data);
       //   console.log("SENDING " + data);
          res.json(data);
          deleteFile(path.join(__dirname, "../input.txt"));
          deleteFile(path.join(__dirname, "../test.py"));
          deleteFile(path.join(__dirname, "../a.exe"));
        })
        .catch((err) => {
        //  console.log("ERROR PROMISE " + err);
          deleteFile(path.join(__dirname, "../input.txt"));
          deleteFile(path.join(__dirname, "../test.py"));
          deleteFile(path.join(__dirname, "../a.exe"));
        });
  } // switch
});

module.exports = router;
