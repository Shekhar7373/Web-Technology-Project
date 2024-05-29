const addCourseBtn = document.querySelector(".addcourse");

function addTable() {
  // Get the table and the row containing the "Add Course +" button
  const buttonRow = addCourseBtn.closest("tr");

  // Create a new row
  const newRow = document.createElement("tr");

  // Helper function to create and append input elements to the table row
  function createInputCell(type, className, placeholder) {
    const input = document.createElement("input");
    input.type = type;
    input.className = className;
    input.placeholder = placeholder;
    const cell = document.createElement("td");
    cell.appendChild(input);
    newRow.appendChild(cell);
  }

  // Create and append course name input
  createInputCell("text", "course", "Course name");

  // Create and append select for grades
  const selectCell = document.createElement("td");
  const select = document.createElement("select");
  select.className = "grade";
  const grades = ["-1", "1", "2", "3", "4", "5", "6", "7", "8"];
  const gradeLabels = ["Grade", "O", "A+", "A", "B+", "B", "C", "P", "F"];
  grades.forEach((grade, index) => {
    const option = document.createElement("option");
    option.value = grade;
    option.textContent = gradeLabels[index];
    select.appendChild(option);
  });
  selectCell.appendChild(select);
  newRow.appendChild(selectCell);

  // Create and append credits input
  createInputCell("number", "credits", "Credits");

  // let heightcalculator = document.getElementById("calculator").style.height =  "40px"

  // Use insertAdjacentElement to insert the new row before the button row
  buttonRow.insertAdjacentElement("beforebegin", newRow);
}
addCourseBtn.addEventListener("click", addTable);

//To compute cgpa and sgpa**********************************************************************************************************************************
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("calculate-sgpa-btn")
    .addEventListener("click", calculateSGPA);
  document
    .getElementById("calculate-cgpa-btn")
    .addEventListener("click", calculateCGPA);
});

const gradePoints = {
  "O": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6,
  "C": 5,
  "P": 4,
  "F": 0,
};

function calculateSGPA() {
  let totalCredits = 0;
  let totalPoints = 0;

  const courseRows = document.getElementsByClassName("course-row");
  for (let i = 0; i < courseRows.length; i++) {
    const grade = courseRows[i].getElementsByClassName("grade")[0].value;
    const credits = parseFloat(courseRows[i].getElementsByClassName("credits")[0].value
    );

    console.log(`Row ${i + 1}: Grade - ${grade}, Credits - ${credits}`);

    if (grade !== "-1" && !isNaN(credits)) {
      console.log("testing : "+ gradePoints[grade]);
      if (gradePoints[grade] !== undefined) {
        totalCredits += credits;
        totalPoints += gradePoints[grade] * credits;
      } else {
        console.log(`Invalid grade value: ${grade}`);
      }
    } else {
      document.getElementById("result-display2").textContent = "Invalid input. Please enter valid values.";
    }
  }

  const sgpa = totalPoints / totalCredits;
  document.getElementById("result-display2").textContent = `SGPA: ${
    isNaN(sgpa) ? "Invalid input. Please enter valid values." : sgpa.toFixed(2)
  }`;
}

function calculateCGPA() {
  const previousCGPAInput = document.getElementById("previous-cgpa");
  const currentYearSGPAInput = document.getElementById("current-year-sgpa");

  const previousCGPA = previousCGPAInput ? parseFloat(previousCGPAInput.value) : NaN;
  const currentYearSGPA = currentYearSGPAInput ? parseFloat(currentYearSGPAInput.value) : NaN;

  if (!isNaN(previousCGPA) && !isNaN(currentYearSGPA)) {
    const cgpa = (previousCGPA + currentYearSGPA) / 2;

    document.getElementById("result-display1").textContent = `CGPA: ${
      isNaN(cgpa) ? "N/A" : cgpa.toFixed(2)
    }`;
  } else {
    document.getElementById("result-display1").textContent = "Invalid input. Please enter valid values.";
  }
}
