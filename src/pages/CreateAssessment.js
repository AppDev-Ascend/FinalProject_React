import React from 'react'
import TextEditor from '../components/TextEditor'
import FileUpload from '../components/FileUpload'

const CreateAssessment = () => {

  return (
    <div>
        <main class="generic-content-container">
          <br/>
          <div class="">
            <h1> Create Quiz </h1>
            <p> Quiz is a quick way to assess students on a topic. Recommended for short and simple assessments. </p>
            <div class="asessment-creator-container">
              <div class="assessment-attributes-form">

              </div>
            </div>
          </div>
          <TextEditor/>
          <FileUpload />
          <br/>
        </main>
        
    </div>
  )
}

export default CreateAssessment