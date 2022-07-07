//document.getElementById("count").innerText = 5;
let saveel = document.getElementById("save-el");
let countEl = document.getElementById("count-el")
console.log(countEl);
let count = 0;
function increment()
{
    console.log("when button is clicked");
    count += 1;
    countEl.textContent = count;

}

function save()
{
    let countStr = count + " - "
    saveel.textContent += countStr;
    console.log(count)
    count = 0;
    countEl.textContent = 0;
}

 