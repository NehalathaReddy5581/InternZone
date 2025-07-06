const totalQuestions = 10; // Update based on quiz length
const correctAnswers = parseInt(localStorage.getItem("quizScore") || "0");

document.getElementById("score-display").innerText = correctAnswers;
document.getElementById("total-questions").innerText = totalQuestions;

// Generate Performance Chart
const ctx = document.getElementById("performanceChart").getContext("2d");

new Chart(ctx, {
    type: "pie",
    data: {
        labels: ["Correct", "Incorrect"],
        datasets: [{
            data: [correctAnswers, totalQuestions - correctAnswers],
            backgroundColor: ["green", "red"]
        }]
    }
});

// Reset Score for Next Quiz Attempt
function retakeQuiz() {
    localStorage.setItem("quizScore", "0");
    window.location.href = "aptitude-quiz.html";
}

function goToHome() {
    window.location.href = "aptitude-index.html";
}
