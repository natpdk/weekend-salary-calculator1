function addEmployee(event) {
    // Stop default behavior
    event.preventDefault();
      // Get the inputs and table
      const firstName = document.querySelector("#firstNameInput").value;
      const lastName = document.querySelector("#lastNameInput").value;
      const idNumber = document.querySelector("#idNumberInput").value;
      const jobTitle = document.querySelector("#jobTitleInput").value;
      const annualSalary = document.querySelector("#annualSalaryInput").value;
      let tableBody = document.querySelector("#employeeList tbody");
  
      // Add the new employee to the table
      tableBody.innerHTML += `
        <tr>
          <td>${firstName}</td>
          <td>${lastName}</td>
         <td>${idNumber}</td>
          <td>${jobTitle}</td>
          <td>${annualSalary}</td>
          <td>
            <button onClick="removeEmployee(event)">❌</button>
          </td>
        </tr>
      `;
    }

    function removeEmployee(event) {
        event.target.parentNode.parentNode.remove();
    }