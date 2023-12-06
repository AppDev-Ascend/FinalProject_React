import React from 'react'
import { Link } from 'react-router-dom';

const DashBoardPage= () => {


  return (
    <main class="generic-content-container">
        <br/><br/><br/>
        <h1> My Assessments </h1>
        <p> Welcome back, John Doe! Here are the assessments you have created since you've joined us! </p> <br/><br/>
        <div class="assessment-grid-container">
          <div class="assessment-box">
            <div class="assessment-description">
              <h2> Sample Quiz Assessment 1 </h2>
              <p> Quiz Type | 10 Items | Dec. 01, 2023 </p>
              <p> This is a sample quiz assessment with a sample description. Feel free to add descriptions to your assessments to help you keep track of things. </p>
            </div>
          </div>

          <div class="assessment-box">
            <div class="assessment-description">
              <h2> Sample Examination Assessment 2 </h2>
              <p> Exam Type | 20 Items - 2 Parts </p>
              <p> This is a sample assessment with a sample description. </p>
            </div>
          </div>

          <Link to="/create-assessment" className="assessment-create-box">
            <img src="../assets/images/add.png" height="150" width="165" alt='add button'/>
            <h2> Create New <br/> Assessment </h2>
          </Link>
        </div>
    </main>
  )
}

export default DashBoardPage