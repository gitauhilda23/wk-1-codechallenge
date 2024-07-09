// Function to calculate demerit points based on speed
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
        return 0;
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
        return points;
    }
}

// Example usage:
let carSpeed = prompt("Enter car speed:");
carSpeed = parseInt(carSpeed);

if (!isNaN(carSpeed)) {
    calculateDemeritPoints(carSpeed);
} else {
    console.log("Please enter a valid number for speed.");
}
