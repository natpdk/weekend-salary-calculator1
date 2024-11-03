function addEmployee(event) {
    // Stop default behavior
    event.preventDefault();
      // Get the inputs and table
      const firstName = document.querySelector("#firstNameInput").value;
      const lastName = document.querySelector("#lastNameInput").value;
      const idNumber = document.querySelector("#idNumberInput").value;
      const jobTitle = document.querySelector("#jobTitleInput").value;
      const annualSalary = parseFloat(document.querySelector("#annualSalaryInput").value);
      let tableBody = document.querySelector("#employeeList tbody");
  
      // Add the new employee to the table
      tableBody.innerHTML += `
        <tr>
          <td>${firstName}</td>
          <td>${lastName}</td>
         <td>${idNumber}</td>
          <td>${jobTitle}</td>
          <td>${annualSalary.toFixed(2)}</td>
          <td>
            <button onClick="removeEmployee(event)">FIRED!🔥</button>
          </td>
        </tr>
      `;

      //Add up and update the montly cost.
      monthlyCost(annualSalary);
      //This will clear the inputs.
      document.getElementById('employeeForm').reset();
}


function removeEmployee(event) {
    //remove the row that the employee is in.
   const row = event.target.closest('tr');
   //This will remove the the monthly cost of the removed employee.
   const annualSalary = parseFloat(row.cells[4].innerText);
   row.remove();
   monthlyCost(-annualSalary);
}

function monthlyCost(salaryChange) {
    const totalMonthly = document.getElementById('totalMonthly');
    let currentTotal = parseFloat(totalMonthly.innerText) || 0;
    const newTotal = currentTotal + (salaryChange / 12);
    totalMonthly.innerText = newTotal.toFixed(2)
//This is to change the css of the footer if we exceed the cost.
    if (newTotal > 20000) {
        footer.classList.add('footer-exceeded');
    } else {
        footer.classList.remove('footer-exceeded');
    }
}