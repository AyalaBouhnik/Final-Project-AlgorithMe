const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignupModel");
const bycrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const execute = require("./compile");
const ExecuteTest = require("./compileTest");


// router.post("/signup", async (req, res) => {
//   const saltPassword = await bycrypt.genSalt(10);
//   const securePassword = await bycrypt.hash(req.body.password, saltPassword);

//   const signUpUser = new signUpTemplateCopy({
//     AlgoName: 'BFS',
//     function: "visited = [] queue = []    ret_arr = [] def bfs(visited, graph, node): ret_arr.clear() visited.append(node) queue.append(node) while queue: m = queue.pop(0) ret_arr.append(m) for neighbour in graph[m]: if neighbour not in visited: visited.append(neighbour) queue.append(neighbour) return ret_arr"
//   });
//   signUpUser
//     .save()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((error) => {
//       res.json(error);
//     });
// });



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
  const algoName = req.body[0];
  switch (algoName) {
    case "BFS":
    //fill
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



module.exports = router;
