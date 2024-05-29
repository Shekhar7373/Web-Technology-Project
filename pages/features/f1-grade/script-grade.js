document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calculate-sgpa-btn").addEventListener("click", calculateSGPA);
  document.getElementById("calculate-cgpa-btn").addEventListener("click", calculateCGPA);
  document.getElementById("add-course-btn").addEventListener("click", addCourse);
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
      const credits = parseFloat(courseRows[i].getElementsByClassName("credits")[0].value);

      console.log(`Row ${i + 1}: Grade - ${grade}, Credits - ${credits}`);

      if (grade !== "-1" && !isNaN(credits)) {
          console.log("Testing: " + gradePoints[grade]);
          if (gradePoints[grade] !== undefined) {
              totalCredits += credits;
              totalPoints += gradePoints[grade] * credits;
          } else {
              console.log(`Invalid grade value: ${grade}`);
          }
      } else {
          document.getElementById("result-display2").textContent = "Invalid input. Please enter valid values.";
          return;
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

function addCourse() {
  const table = document.getElementById("semester-table");
  const newRow = document.createElement("tr");
  newRow.classList.add("course-row");

  newRow.innerHTML = `
      <td><input type="text" placeholder="Course name" class="course"></td>
      <td>
          <select name="" class="grade">
              <option value="-1">Grade</option>
              <option value="O">O</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="P">P</option>
              <option value="F">F</option>
          </select>
      </td>
      <td><input type="text" placeholder="Credits" class="credits"></td>
  `;

  // Insert the new row before the "Add Course +" button row
  table.insertBefore(newRow, table.lastElementChild);
}