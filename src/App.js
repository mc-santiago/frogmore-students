import React from 'react';
import './App.css';

var students = [
  {"id":"905126","firstname":"Bob","lastname":"Smith","maths":9.9,"english":3.3},
  {"id":"739559","firstname":"Harry","lastname":"Talbot","maths":5.6,"english":6.1},
  {"id":"878999","firstname":"Pradosh","lastname":"Brown","maths":4.7,"english":8.1},
  {"id":"421848","firstname":"Anna","lastname":"Ashley","maths":4.7,"english":5.5},
  {"id":"073342","firstname":"Melanie","lastname":"Brown","maths":7.8,"english":4.2},
  {"id":"503297","firstname":"Andrew","lastname":"Kimber","maths":8.3,"english":8.9},
  {"id":"318977","firstname":"Peter","lastname":"Johnson","maths":9.3,"english":2.3},
  {"id":"042725","firstname":"Simon","lastname":"Smith","maths":4.9,"english":8},
  {"id":"687756","firstname":"Martha","lastname":"Robertson","maths":5,"english":5.2},
  {"id":"739955","firstname":"William","lastname":"Talbot","maths":4.1,"english":3.1},
  {"id":"312366","firstname":"Martha","lastname":"Slater","maths":7.3,"english":7.8},
  {"id":"519357","firstname":"Harry","lastname":"Smith","maths":5.8,"english":5.2},
  {"id":"261417","firstname":"Mark","lastname":"O'hara","maths":6,"english":8.7},
  {"id":"438375","firstname":"Roderick","lastname":"Snow","maths":4,"english":4.4},
  {"id":"454278","firstname":"Melanie","lastname":"Young","maths":2.4,"english":5.5},
  {"id":"233935","firstname":"Benjamin","lastname":"McDonnel","maths":5.2,"english":3.1}
];

// Header
let length = students.length

let passedEnglish = students.filter(value =>{
  return value.english>=5;}).length

let passedMaths = students.filter(value =>{
  return value.maths>=5;}).length


// Card1
let topEnglish = students.sort((student1,student2) => student2.english-student1.english).slice(0,3);
let avgEnglish = topEnglish.reduce((total, student) => total+student.english, 0)/topEnglish.length
let engAvg = avgEnglish.toFixed(2)

// Card2
let topEnglishAll = students.sort((student1,student2) => student2.english-student1.english)
let avgEnglishAll = topEnglishAll.reduce((total, student) => total+student.english, 0)/topEnglishAll.length
let engAvgAll = avgEnglishAll.toFixed(2)
let engTop = topEnglishAll[0].english
let engWorst = topEnglishAll[topEnglishAll.length-1].english

// Card3
let topMaths = students.sort((student1,student2) => student2.maths - student1.maths).slice(0,3);
let avgMaths = topMaths.reduce((total, student) => total+student.maths, 0)/topMaths.length
let mathAvg = avgMaths.toFixed(2)

// Card4
let topMathsAll = students.sort((student1,student2) => student2.english-student1.maths)
let avgMathsAll = topMathsAll.reduce((total, student) => total+student.maths, 0)/topMathsAll.length
let mathAvgAll = avgMathsAll.toFixed(2)
let mathTop = topMathsAll[0].english
let mathWorst = topMathsAll[topMathsAll.length-1].maths

function App() {

  return (
    <div className="App">
      <h1>Frogmore School Grade 8 Class</h1>
      <p>There are {length} students enrolled</p>
      <p>{passedEnglish} students passed English</p>
      <p>{passedMaths} students passed Maths</p> 
    
    <div className="cardGroup">
{/* First Card */}
      <div className="card">
        <p>Top 3 English students are:</p>
        <ol>
        {topEnglish.map(student =>
        <li>{student.lastname}, {student.firstname}</li>)}
        </ol>
        <hr/>
        <br/>
        <p>Top 3 English average</p>
          <h3>{engAvg}</h3>
      </div>
{/* Second Card */}
      <div className="card">
          <p>English, class average:</p>
            <h3>{engAvgAll}</h3>
            <hr/>
          <p>English, top score:</p>
          <h3>{engTop}</h3>
          <hr/>
          <p>English, worst score:</p>
          <h3>{engWorst}</h3>
        </div>
{/* Third Card */}
<div className="card">
    <p>Top 3 Maths students are:</p>
    <ol>
      {topMaths.map(student => 
        <li>{student.lastname}, {student.firstname}</li>)}
    </ol>
    <hr/>
    <br/>
    <p>Top 3 Maths average</p>
    <h3>{mathAvg}</h3>
  </div>
{/* Fourth Card */}
    <div className="card">
        <p>Maths, class average:</p>
          <h3>{mathAvgAll}</h3>
          <hr/>
        <p>Maths, top score:</p>
          <h3>{mathTop}</h3>
          <hr/>
        <p>Maths, worst score:</p>
          <h3>{mathWorst}</h3>
    </div>
  </div>
    
    
    </div>
  );
}

export default App;
