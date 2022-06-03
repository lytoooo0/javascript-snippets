const name_element = document.getElementById("name");
const age_element = document.getElementById("age");

let myData = {};

const default_person = "a";

let current_person = default_person;

document.addEventListener("DOMContentLoaded",() => {
    selectPerson();
})

function selectPerson() {
    const switcher = document.getElementById("selector")
    switcher.value = default_person;
    switcher.onchange = (e) => {
        current_person = e.target.value;
        updateData();
    }
}

async function updateData() {
    myData = await fetchMyData();
    name_element.innerText = myData[current_person]["name"];
    age_element.innerText = myData[current_person]["age"];
}

async function fetchMyData() {
    const response = await fetch('./data.json');
    const mydata = await response.json();
    return mydata;
}