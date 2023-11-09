const studentData = []; // Array to store student details

function isSerialNumberValid(serialNumber) {
    // Implement your validation logic here
    return serialNumber.trim() !== ''; // Example: Ensure the serial number is not empty
}

function isSerialNumberUnique(serialNumber) {
    return studentData.every(data => data.serialNumber !== serialNumber);
}

function isValidName(name) {
    return name.trim() !== '';
}

function isValidContactNumber(contact) {
    return /^[0-9]{10}$/.test(contact);
}
  
function isValidMarksMathA(mathA) {
    // Check if it's a valid number between 0 and 100
    const isNumber = !isNaN(parseFloat(mathA)) && isFinite(mathA);
    const isInRange = mathA >= 0 && mathA <= 100;

    // Check if it's an 'A' character
    const isA = mathA.toUpperCase() === 'A';

    return (isNumber && isInRange) || isA;
}

function isValidMarksMathB(mathB) {
    return isValidMarksMathA(mathB);
}

function isValidMarksPhysics(physics) {
    return isValidMarksMathA(physics);
}

function isValidMarksEnglish(english) {
    return isValidMarksMathA(english);
}
document.getElementById("studentname").disabled=false;
document.getElementById("contact").disabled=false;
document.getElementById("Math-A").disabled=false;
document.getElementById("Math-B").disabled=false;
document.getElementById("physics").disabled=false;
document.getElementById("English").disabled=false;

function submitDetails() {
    const sno = document.getElementById("serialNumber").value;
    const name = document.getElementById("studentname").value;
    const contact = document.getElementById("contact").value;
    const mathA = document.getElementById("Math-A").value;
    const mathB = document.getElementById("Math-B").value;
    const physics = document.getElementById("physics").value;
    const english = document.getElementById("English").value;

    // Validate the input
    
    if (!isSerialNumberValid(sno)) {
        alert("Please enter a valid Serial Number.");
        return;
    }
    
    if (!isSerialNumberUnique(sno)) {
        alert("Serial Number must be unique.");
        return;
    }

    if (!isValidName(name)) {
        alert("Name cannot be empty.");
        return;
    }

    if (!isValidContactNumber(contact)) {
        alert("Contact Number must have 10 numeric digits.");
        return;
    }

    if(!isValidMarksMathA(mathA)){
        alert("Enter the marks b/w 0-100 and if student is absent enter the symbool(A)");
        return;
    }
    if(!isValidMarksMathA(mathB)){
        alert("Enter the marks b/w 0-100 and if student is absent enter the symbool(A)");
        return;
    }
    if(!isValidMarksMathA(physics)){
        alert("Enter the marks b/w 0-100 and if student is absent enter the symbool(A)");
        return;
    }
    if(!isValidMarksMathA(english)){
        alert("Enter the marks b/w 0-100 and if student is absent enter the symbool(A)");
        return;
    }


    // Add values to the table
    const table = document.getElementById("table");
    const newRow = table.insertRow(table.rows.length);

    // Add cells with values
    const cell0 = newRow.insertCell(0);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    cell0.appendChild(checkbox);
    cell0.style.display = "flex";
    cell0.style.justifyContent = "center";
    cell0.style.alignItems = "center";

    const cell1 = newRow.insertCell(1);
    cell1.innerHTML = sno;

    const cell2 = newRow.insertCell(2);
    cell2.innerHTML = name;

    const cell3 = newRow.insertCell(3);
    cell3.innerHTML = contact;

    const cell4 = newRow.insertCell(4);
    cell4.innerHTML = mathA;

    const cell5 = newRow.insertCell(5);
    cell5.innerHTML = mathB;

    const cell6 = newRow.insertCell(6);
    cell6.innerHTML = physics;

    const cell7 = newRow.insertCell(7);
    cell7.innerHTML = english;

    const cell8 = newRow.insertCell(8);
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.style.backgroundColor = "blue"; 
    editButton.addEventListener("click", function() {
        editRow(newRow);
    });
    cell8.appendChild(editButton);


    // Clear the input values
    document.getElementById("serialNumber").value = "";
    document.getElementById("studentname").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("Math-A").value = "";
    document.getElementById("Math-B").value = "";
    document.getElementById("physics").value = "";
    document.getElementById("English").value = "";

    // Store the student details in the array
    studentData.push({
        serialNumber: sno,
        studentName: name,
        contactNumber: contact,
        mathA: mathA,
        mathB: mathB,
        physics: physics,
        english: english,
    });
}

function editRow(row) {
    const cells = row.getElementsByTagName("td");
    alert("Edit row serial number is: "+cells[1].textContent)
    for (let i = 1; i <= 7; i++) {
        const cellValue = cells[i].textContent;
        cells[i].textContent = "";
        const input = document.createElement("input");
        input.type = "text";
        input.value = cellValue;
        cells[i].appendChild(input);
        
        
    }
    const cell8 = cells[8];
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.style.backgroundColor = "green"; 
    saveButton.addEventListener("click", function() {
        saveRow(row);
    });
    cell8.innerHTML = "";
    cell8.appendChild(saveButton);

}

function seditRow(row) {
    const cells = row.getElementsByTagName("td");
    //alert("Edit row serial number is: "+cells[1].textContent)
    for (let i = 1; i <= 7; i++) {
        const cellValue = cells[i].textContent;
        //cells[i].textContent = "";
        const input = document.createElement("input");
        input.type = "text";
        input.value = cellValue;
        cells[i].appendChild(input);
        
        
    }
    const cell8 = cells[8];
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.style.backgroundColor = "green"; 
    saveButton.addEventListener("click", function() {
        saveRow(row);
    });
    cell8.innerHTML = "";
    cell8.appendChild(saveButton);
}

function saveRow(row) {
    const cells = row.getElementsByTagName("td");
    alert("saved row serial number is :"+cells[1].querySelector("input").value)     
    for (let i = 1; i <= 7; i++) {
        const inputValue = cells[i].querySelector("input").value;
        cells[i].textContent = inputValue;
        let serialNumber=cells[1].textContent
        let newName=cells[2].textContent
        if (i === 3) {
                const inputValue = cells[i].textContent
                // Use a regular expression to remove non-numeric characters
                const numericValue = inputValue.replace(/\D/g, '');
                // Limit the input to exactly 10 digits
                cells[i].textContent = numericValue
                if(cells[i].textContent.length !== 10){
                    alert("enter 10 digits");
                    seditRow(row)
                    return
                    
                }
        }
        let newContact=cells[3].textContent
        if (i === 4) {
                const inputValue = cells[i].textContent;
                const sanitizedValue = inputValue.replace(/[^0-9Aa]/g, ''); // Remove characters other than 0-9 and 'A' or 'a'
        
                if (sanitizedValue === '' || sanitizedValue === 'A' || (parseInt(sanitizedValue) >= 0 && parseInt(sanitizedValue) <= 100)) {
                    cells[i].textContent = sanitizedValue; // Update the input value
                } else {
                    // Handle invalid input, you can show an error message or take any other action
                    alert("Invalid input. Marks should be between 0 and 100 or 'A'.");
                     // Clear the input value
                     editRow(row)
                     return
                
                }
        }
        let newMathA=cells[4].textContent
        if (i === 5) {
            const inputValue = cells[i].textContent;
            const sanitizedValue = inputValue.replace(/[^0-9Aa]/g, ''); // Remove characters other than 0-9 and 'A' or 'a'
    
            if (sanitizedValue === '' || sanitizedValue === 'A' || (parseInt(sanitizedValue) >= 0 && parseInt(sanitizedValue) <= 100)) {
                cells[i].textContent = sanitizedValue; // Update the input value
            } else {
                // Handle invalid input, you can show an error message or take any other action
                alert("Invalid input. Marks should be between 0 and 100 or 'A'.");
            // Clear the input value
                editRow(row)
                return
            }
    }
        let newMathB=cells[5].textContent
        
        if (i === 6) {
            const inputValue = cells[i].textContent;
            const sanitizedValue = inputValue.replace(/[^0-9Aa]/g, ''); // Remove characters other than 0-9 and 'A' or 'a'
    
            if (sanitizedValue === '' || sanitizedValue === 'A' || (parseInt(sanitizedValue) >= 0 && parseInt(sanitizedValue) <= 100)) {
                cells[i].textContent = sanitizedValue; // Update the input value
            } else {
                // Handle invalid input, you can show an error message or take any other action
                alert("Invalid input. Marks should be between 0 and 100 or 'A'.");
                // Clear the input value
                editRow(row)
                return
            }
    }
       let newPhysics=cells[6].textContent
       
       if (i === 7) {
        const inputValue = cells[i].textContent;
        const sanitizedValue = inputValue.replace(/[^0-9Aa]/g, ''); // Remove characters other than 0-9 and 'A' or 'a'

        if (sanitizedValue === '' || sanitizedValue === 'A' || (parseInt(sanitizedValue) >= 0 && parseInt(sanitizedValue) <= 100)) {
            cells[i].textContent = sanitizedValue; // Update the input value
        } else {
            // Handle invalid input, you can show an error message or take any other action
            alert("Invalid input. Marks should be between 0 and 100 or 'A'.");
            cells[i].textContent = ''; // Clear the input value
            editRow(row)
            return
        }
}
        let newEnglish=cells[7].textContent
    updateStudentDetails(serialNumber, newName, newContact, newMathA, newMathB, newPhysics, newEnglish);

    }

    const cell8 = cells[8];
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.style.backgroundColor = "blue"; 
    editButton.addEventListener("click", function() {
        editRow(row);
    });
    cell8.innerHTML = "";
    cell8.appendChild(editButton);
   

    
}

function deleteSelectedRow(){
        const checkboxs=document.querySelectorAll('input[type="checkbox"]');
        let selectedrow=null;
    
        checkboxs.forEach((checkbox,index)=>{
            if(checkbox.checked){
                selectedrow=checkbox.parentElement.parentElement
                // checkbox.checked=false;
                if(selectedrow){
                    const table = document.getElementById("table");
                    table.deleteRow(selectedrow.rowIndex);
                }
            }else{
                alert("select a row to delete record")
            }
    
        });
    }
    
    function populateStudentDetails(serialNumber) {
        const student = studentData.find(data => data.serialNumber === serialNumber);

        if (student) {
            // Populate the input fields with student details
            document.getElementById("studentname").value = student.studentName;
            document.getElementById("contact").value = student.contactNumber;
            document.getElementById("Math-A").value = student.mathA;
            document.getElementById("Math-B").value = student.mathB;
            document.getElementById("physics").value = student.physics;
            document.getElementById("English").value = student.english;

            document.getElementById("studentname").disabled=true;
            document.getElementById("contact").disabled=true;
            document.getElementById("Math-A").disabled=true;
            document.getElementById("Math-B").disabled=true;
            document.getElementById("physics").disabled=true;
            document.getElementById("English").disabled=true;

        } else {
            // Handle the case when no student is found with the entered serial number
            alert("Student not found.");
        }
    }

    // Event listener for the "Get Details" button click
    document.getElementById("getDetails").addEventListener("click", function () {
        const enteredSerialNumber = document.getElementById("serialNumber").value;
        populateStudentDetails(enteredSerialNumber);
    });

function clearvalues(){
    document.getElementById("serialNumber").value = "";
    document.getElementById("studentname").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("Math-A").value = "";
    document.getElementById("Math-B").value = "";
    document.getElementById("physics").value = "";
    document.getElementById("English").value = "";
}

function updateStudentDetails(serialNumber, newName, newContact, newMathA, newMathB, newPhysics, newEnglish) {
    // Find the index of the student with the matching serial number
    const index = studentData.findIndex(data => data.serialNumber === serialNumber);

    // Check if a student with the given serial number exists
    if (index !== -1) {
        // Update the properties of the student
        studentData[index].studentName = newName;
        studentData[index].contactNumber = newContact;
        studentData[index].mathA = newMathA;
        studentData[index].mathB = newMathB;
        studentData[index].physics = newPhysics;
        studentData[index].english = newEnglish;
    } else {
        // Handle the case when no student is found with the entered serial number
        alert("Student not found.");
    }
}
