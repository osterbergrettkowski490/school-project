// Node.js example: a simple countdown timer

let countDown = 10;

function countdownTimer() {
    let remainingCountdown = countDown;
    setInterval(() => {
        if (remainingCountdown > 0) {
            console.log(`Time left is ${remainingCountdown} seconds.`);
            remainingCountdown--;
        } else {
            alert("Timer finished!");
            process.exit();
        }
    }, 1000);
}

countdownTimer();
