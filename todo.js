// import React, {useState} from "react";

// const Todo = () = {

//     const [tasks,setTasks] = useState ([]);
//     const [newtask,setNewTask] = useState ("");
// }


// const handleChange = (e) => {


//     setNewTask(e.target.value);
// }

// const addTask = () => {

//     if (newTask.trim()) {

//         setTask([...tasks,{id : Date.now(), text :newTask}])
//     }
//     setNewTask("");
    
// }

// const deleteTask = (taskId) = {

// setTask (tasks.filter(task = task.id !== taskId))


// }

// return (



//     <div>

//     <h1>Todo</h1>

//     <input type = "text" value = {newtask} onChange = { handleChange}></input>
// <button onClick = {addTask}> Add Task</button>


// <ul>

// {tasks.map(task => (
    
// <li  key = {task.id}>
// {tasks.text}
// <button onClick = {()  => deleteTask(task.id)}>Delete</button>


// </li>


// ))}

// </ul>
// </div>





// )










function second (str){

    const charCount = {}





    for (let char of str) {
charCount[char] = (charCount[char] || 0) + 1;
    }



    const sorted = Object.values(charCount).sort((a, b) => b - a);
    const second = sorted[1];


    const secondMost = Object.keys(charCount).filter(char => charCount[char] == second)


    return secondMost.length === 1 ? secondMost[0] : secondMost

}


     console.log(second("abhiaaai"));
// const numbers = [1,2,3];
// const sum = numbers.reduce((acc, cur) => acc + cur,0);

// console.log(sum);





//  var str = "abhi123";


// var sum1 = 0;

// var input = str.split("");
// for (var i=0; i<str.length; i++) {

    

//  var counter= 0;
//     if (typeof(str[i]) === Number) {

//     sum1 = sum1 + str[i];
//     counter++;
//     }
// }

// var avg = Math.floor(sum1/counter)
// console.log(sum1)
// console.log(avg);









