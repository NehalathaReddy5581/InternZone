function navigateToRules(quizType) {
    localStorage.setItem("quizScore", "0"); 
    localStorage.setItem("selectedQuiz", quizType); // Store quiz type
    window.location.href = quizType + "-rules.html";
}

function initializeButtons() {
    document.getElementById("startQuizBtn").addEventListener("click", startQuiz);
    document.getElementById("cancelBtn").addEventListener("click", goBack);
}


function startQuiz() {
    window.location.href = "programming-quiz.html"; 
}

function goBack() {
    window.location.href = "programming-index.html";
}