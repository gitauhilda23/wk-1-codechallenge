// Function to generate student grade based on input marks
function calculateGrade(marks) {
    let grade;

    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    return grade;
}

// Example usage:
let studentMarks = prompt("Enter student marks (0-100):");
studentMarks = parseInt(studentMarks);

if (!isNaN(studentMarks) && studentMarks >= 0 && studentMarks <= 100) {
    let result = calculateGrade(studentMarks);
    console.log(`Grade: ${result}`);
} else {
    console.log("Please enter a valid number between 0 and 100.");
}
