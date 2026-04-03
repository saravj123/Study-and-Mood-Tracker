let totalHours = 0;

function addHours() {
    let hours = document.getElementById("hours").value;

    if (hours == "") {
        alert("enter something pls");
        return;
    }

    totalHours = totalHours + parseFloat(hours);

    alert("Total hours: " + totalHours);
}

function saveEntry() {
    let mood = document.getElementById("mood").value;

    let li = document.createElement("li");

    li.textContent = "Mood: " + mood + " | Total study: " + totalHours;
  
    if (mood == "happy") {
        li.style.color = "gold";
    } else if (mood == "sad") {
        li.style.color = "blue";
    } else if (mood == "stressed") {
        li.style.color = "red";
    } else if (mood == "excited") {
        li.style.color = "orange";
    } else if (mood == "nervous") {
        li.style.color = "purple";
    }

    document.getElementById("log").appendChild(li);
}


function resetAll() {
    totalHours = 0;
    document.getElementById("log").innerHTML = "";
}

