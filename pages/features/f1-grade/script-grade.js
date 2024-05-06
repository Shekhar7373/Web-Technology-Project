const addCourseBtn = document.querySelector(".addcourse");

function addTable() {
    // Get the table and the row containing the "Add Course +" button
    const buttonRow = addCourseBtn.closest('tr');

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

    // Use insertAdjacentElement to insert the new row before the button row
    buttonRow.insertAdjacentElement('beforebegin', newRow);
}

addCourseBtn.addEventListener("click", addTable);
