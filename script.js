document.getElementById('addContact').addEventListener('click', function() {
    let name = document.getElementById('name').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let email = document.getElementById('email').value.trim();
// min error msg
    let isValid = true;
    if (!name) {
        document.getElementById('nameError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }
    if (!phone) {
        document.getElementById('phoneError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }
    if (!email) {
        document.getElementById('emailError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }
    if (!isValid) return;

    let table = document.getElementById('contactList');
    let row = document.createElement('tr');

    let cellName = document.createElement('td');
    cellName.innerText = name;
    row.appendChild(cellName);

    let cellPhone = document.createElement('td');
    cellPhone.innerText = phone;
    row.appendChild(cellPhone);

    let cellEmail = document.createElement('td');
    cellEmail.innerText = email;
    row.appendChild(cellEmail);

    let cellActions = document.createElement('td');
      // edit knappen
    let editBtn = document.createElement('button');
    editBtn.innerText = 'Ändra';
    editBtn.classList.add('edit');
    cellActions.appendChild(editBtn);
  // radera knappen
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Radera';
    deleteBtn.classList.add('delete');
    cellActions.appendChild(deleteBtn);

    row.appendChild(cellActions);
    table.appendChild(row);
 // ränsar allt när man lägger till

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
});

document.getElementById('contactList').addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('delete')) {
        let row = e.target.parentElement.parentElement;
        row.parentElement.removeChild(row);
    }

    if (e.target && e.target.classList.contains('edit')) {
        let row = e.target.parentElement.parentElement;
        let cells = row.getElementsByTagName('td');
        
        if (e.target.innerText === 'Ändra') {
            // Aktivera redigering
            cells[0].contentEditable = "true";
            cells[1].contentEditable = "true";
            cells[2].contentEditable = "true";
            e.target.innerText = 'Spara';
        } else {
            // Spara och lås redigering
            cells[0].contentEditable = "false";
            cells[1].contentEditable = "false";
            cells[2].contentEditable = "false";
            e.target.innerText = 'Ändra';
        }
    }
});
