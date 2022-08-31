require("../task-manager/src/db/mongoose");
const Task = require("../task-manager/src/models/task");

// Task.findByIdAndDelete("62d4ca9fc19b752abcdcc50e")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((tasks) => {
//     console.log(tasks);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("62d4074e63f96a4e687e0fae")
  .then((count) => {
    console.log(count);
  })
  .catch((err) => {
    console.log(err);
  });
