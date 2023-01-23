let nameInput = document.getElementById("name")
let surnameInput = document.getElementById("surname")
let dateInput = document.getElementById("date")
let addButton = document.getElementById("addButton")

function User(name, surname, date) {
    this.name = name;
    this.surname = surname;
    this.date = date;

}

addButton.onclick = function () {
    const myUser = new User(nameInput.value, surnameInput.value, dateInput.value);
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = myUser.name;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = myUser.surname;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = myUser.date;
    tr.appendChild(td);
    let tbody = document.getElementById("tbody");
    tbody.appendChild(tr);

}
