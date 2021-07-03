let tasks = [
    { label: 'Eat my lunch', done: true },
    { label: 'Make the bed', done: false },
    { label: 'Have some fun', done: false },
    { label: 'Finish the replits', done: false },
    { label: 'Replit the finishes', done: true },
    { label: 'Ask for a raise', done: false },
    { label: 'Read a book', done: true },
    { label: 'Make a trip', done: false }
];

let isTaskNotDone = function(task){
    return (!task.done)
}
//let doneTask = tasks.filter(function(donetask){
   // return (task.done)
// })
///let isDoneTask = function(doneTask){
  //  return tasks.done
//}//
let completedTasks = tasks.filter(singleTask => singleTask.done === true)
let removeDone = tasks.filter(isTaskNotDone)
console.log(removeDone);

console.log(completedTasks);
