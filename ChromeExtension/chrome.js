let myLeads = ["www.stackoverflow.com", "www.youtube.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

localStorage.getItem("")

function saveLead()
{
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads();
}




function renderLeads()
{
    let listItems = "";
    for(let i=0; i<myLeads.length; i++)
{
        listItems += "<li>" + myLeads[i] + "</li>"
}
    ulEl.innerHTML = listItems;

}

