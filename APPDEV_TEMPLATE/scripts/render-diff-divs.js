const urlParams = new URLSearchParams(window.location.search);
const creationType = urlParams.get('type');
var sectionCounter = 1;

document.addEventListener("DOMContentLoaded", function() {
    // A duct-tape solution to a bug, not elegant, but it works.
    addNewSection();

    var title = document.getElementById('header-title');
    var subtitle = document.getElementById('header-subtitle');
    var sectionButton = document.getElementById('section-add-button');
    var icon = document.getElementById('header-icon');

    // Change some elements to accomodate the assessment type.
    if (creationType === 'exam') {
        title.textContent = 'Create Examination Type Assessment';
        subtitle.textContent = 'Exams are a comprehensive assessment on multiple topics. Recommended for long form assessments.';
        sectionButton.style.display = 'block';
        icon.src = "../media/exam-icon.png";
    }
});

function addNewSection() {
    var newAssessmentSection = document.createElement('div');
    newAssessmentSection.classList.add('assessment-section');

    newAssessmentSection.innerHTML = `
        <h2 class="exam-part"> Section ${sectionCounter} </h2> <br>
        <label> Assessment Type </label>
        <div class="dropdown-container">
            <input type="text" class="generic-form-textbox" placeholder="Select an option" onclick="toggleDropdown(this)" name="assessment_type" readonly>
            <ul class="dropdown-options">
            <li onclick="selectOption(this)"> Multiple Choice</li>
            <li onclick="selectOption(this)"> True or False </li>
            <li onclick="selectOption(this)"> Fill in The Blanks </li>
            <li onclick="selectOption(this)"> Identification </li>
            <li onclick="selectOption(this)"> Esssay </li>
            </ul>
        </div>
        
        <label> Assessment Length </label>
        <div class="dropdown-container">
            <input type="text" class="generic-form-textbox" placeholder="Select an option" onclick="toggleDropdown(this)" name="assessment_length" readonly>
            <ul class="dropdown-options">
            <li onclick="selectOption(this)"> Pop Quiz Format (5 Items) </li>
            <li onclick="selectOption(this)"> Short Assessment Check (10 Items) </li>
            <li onclick="selectOption(this)"> Standard Assessments (20 Items) </li>
            <li onclick="selectOption(this)"> Comprehensive Assessment Checks (30 Items) </li>
            </ul>
        </div>

        <label> Learning Outcomes: </label>
        <div class="learning-objectives" id="learning-objectives-${sectionCounter}"></div>
        <button class="generic-button-variant" onclick="addInputElement('learning-objectives-${sectionCounter}')" type="button"> Add Learning Objective </button>
    `;

    document.getElementById('assessment-section-container').appendChild(newAssessmentSection);
    sectionCounter++;
}

function addInputElement(containerID) {
    var newInput = document.createElement('input');

    newInput.type = 'text';
    newInput.placeholder = `Learning Objective ${document.getElementById(containerID).childElementCount + 1}`;
    newInput.name = `learning_objectives_${sectionCounter - 1}_${document.getElementById(containerID).childElementCount + 1}`;

    newInput.classList.add('generic-form-textbox');
    document.getElementById(containerID).appendChild(newInput);
}