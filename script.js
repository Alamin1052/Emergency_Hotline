
// ------------***Love react count***------------------

let count = 0;

const hearts = document.getElementsByClassName("fa-heart");

for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", function() {
        count++;
    
    const counts = document.getElementById("heart-counts")
    counts.innerText= count
});
}

// ------***Call button and history Function****--------------------

const buttons = document.querySelectorAll(".call-btn");
const pointElement = document.getElementById("point");
const historyList = document.getElementById("call-history");
const clearBtn = document.getElementById("clear-history");

buttons.forEach(btn => {
    btn.addEventListener("click", function() {
        let pointValue = parseInt(pointElement.textContent);
        const remain = pointValue - 20;


    if(remain < 0){
        alert("You don't have enough coins. You need at least 20 coins to make a call.")
        return;
    }

    pointElement.textContent = remain;
    alert(`📞 Calling ${btn.dataset.name} ${btn.dataset.number}...`)


    const callName = btn.dataset.name;
    const callNumber = btn.dataset.number;
    const callTime = new Date().toLocaleTimeString();

    const historyList = document.getElementById("call-history");
    const div = document.createElement("div");
    div.className = "history-card";

     div.innerHTML = `
        <div class="flex justify-between items-center p-3 bg-white rounded-lg shadow mb-2">
            <div>
                <p class="font-semibold">${callName}</p>
                <p class="text-sm text-gray-500">${callNumber}</p>
            </div>
            <div class="text-sm text-gray-500">
                ${callTime}
            </div>
        </div>
    `;
    historyList.appendChild(div);
});
});

clearBtn.addEventListener("click", function() {
    const cards = historyList.querySelectorAll(".history-card");
    cards.forEach(card => card.remove());
});

// --------------------Copy Function------------------

const copyButtons = document.querySelectorAll(".copy-btn");
const copyCountElement = document.getElementById("copy-count");
let copyCount = 0;

copyButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        const number = btn.dataset.number;

        navigator.clipboard.writeText(number)
            .then(() => {

                copyCount++;
                copyCountElement.textContent = copyCount + " Copy";
                alert(`Number ${number} copied to clipboard!`);
            })
    });
});