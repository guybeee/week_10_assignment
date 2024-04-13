// function to add a new row to tbody
function addRow (firstName, lastName, phoneNumber, email) {
    // new variable table in order to get the document by element Id 'tableBody'
    var table = document.getElementById('tableBody')
    // new variable newRow; utilize .insertRow() in order to insert a new row to the table variable
    var newRow = table.insertRow()
    // new varibale newRow; utilize insertCell() in order to insert cell to the new row variable
    var cell1 = newRow.insertCell(0)
    var cell2 = newRow.insertCell(1)
    var cell3 = newRow.insertCell(2)
    var cell4 = newRow.insertCell(3)
    // utilize .innerHTML to set the property of the cell to the value of the parameter then passed to the 'addRow' function
    /* each line assigns the value of a specific parameter to the innerHTML property of the corresponding cell in the newly inserted row,
    effectively populating the table with the provided contact information */
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = phoneNumber;
    cell4.innerHTML = email;
}


// jQuery function that waits for the DOM to be fully loaded before executing the code inside the function
$(document).ready(function() {
    // attaches submit event handler to the form with the ID 'data-form'
    // specifies a function to be executed when the form is submitted.
    $('#data-form').submit(function(event) {
        // event.preventDefault() prevents the default form submission behavior causing the page to reload.
        // it allows us to handle form submission using JavaScript.
      event.preventDefault();
      // retrieve the values entered in the form fields
      var firstName = $('#firstName').val();
      var lastName = $('#lastName').val();
      var phoneNumber = $('#phoneNumber').val();
      var email = $('#email').val();
      // addRow function, passing the retrieved form field values as arguments.
      // adds a new row to the table with the entered contact information
      addRow(firstName, lastName, phoneNumber, email);
      // Clear the form fields after submission
      $('#firstName').val('');
      $('#lastName').val('');
      $('#phoneNumber').val('');
      $('#email').val('');
    });
})


