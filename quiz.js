const questionSets = {
  "interview": [
    {
      question: "Tell me about yourself.",
      options: ["Give a personal history", "Focus on professional achievements", "Talk about hobbies", "Discuss weaknesses"],
      answer: "Focus on professional achievements"
    },
    {
      question: "What are your strengths?",
      options: ["Generic skills like 'hardworking'", "Strengths tailored to the job role", "Weaknesses turned into strengths", "Avoid answering"],
      answer: "Strengths tailored to the job role"
    },
    {
      question: "How do you handle stress and pressure?",
      options: ["Avoid it completely", "Panic and work slower", "Stay organized and prioritize tasks", "Ignore it"],
      answer: "Stay organized and prioritize tasks"
    },
    {
      question: "Where do you see yourself in five years?",
      options: ["Unsure", "In a different field", "Growing within the company", "Retiring"],
      answer: "Growing within the company"
    },
    {
      question: "What is your biggest weakness?",
      options: ["Something irrelevant to the job", "An honest weakness and how you overcome it", "List multiple weaknesses", "Say 'I have none'"],
      answer: "An honest weakness and how you overcome it"
    },
    {
      question: "Why should we hire you?",
      options: ["Because I need a job", "Because I match the role and bring value", "Because I want to learn", "Because I am better than others"],
      answer: "Because I match the role and bring value"
    },
    {
      question: "Describe a time you had a conflict at work and how you handled it.",
      options: ["Avoid the question", "Blame others", "Show professionalism in resolving it", "Say conflicts don’t happen"],
      answer: "Show professionalism in resolving it"
    },
    {
      question: "What motivates you?",
      options: ["Money", "Challenges and personal growth", "Approval from others", "Avoiding failure"],
      answer: "Challenges and personal growth"
    },
    {
      question: "Why do you want to work here?",
      options: ["I just need a job", "Your company aligns with my goals and values", "You pay well", "I don't know"],
      answer: "Your company aligns with my goals and values"
    },
    {
      question: "What do you do if you make a mistake?",
      options: ["Ignore it", "Blame someone else", "Own up and find a solution", "Quit the job"],
      answer: "Own up and find a solution"
    }
  ],

  "personality": [
    {
      question: "How do you make decisions?",
      options: ["Impulsively", "After careful analysis", "Based on emotions", "Following others"],
      answer: "After careful analysis"
    },
    {
      question: "How do you handle failure?",
      options: ["Give up", "Learn from it and improve", "Blame external factors", "Ignore it"],
      answer: "Learn from it and improve"
    },
    {
      question: "What is your approach to teamwork?",
      options: ["Avoid working with others", "Collaborate effectively and support teammates", "Dominate discussions", "Do the bare minimum"],
      answer: "Collaborate effectively and support teammates"
    },
    {
      question: "How do you react to unexpected challenges?",
      options: ["Panic", "Look for solutions and adapt", "Wait for someone else to fix it", "Ignore the challenge"],
      answer: "Look for solutions and adapt"
    },
    {
      question: "Which best describes your communication style?",
      options: ["Direct and clear", "Passive and reserved", "Aggressive and controlling", "Avoid communication"],
      answer: "Direct and clear"
    },
    {
      question: "How do you manage your time?",
      options: ["Prioritize and plan effectively", "Work randomly", "Procrastinate", "Rush everything"],
      answer: "Prioritize and plan effectively"
    },
    {
      question: "Do you prefer routine or spontaneity?",
      options: ["Strict routine", "A balance of both", "Total spontaneity", "Avoid structure"],
      answer: "A balance of both"
    },
    {
      question: "How do you approach learning new skills?",
      options: ["Avoid learning", "Embrace challenges and seek growth", "Learn only when forced", "Stick to what I already know"],
      answer: "Embrace challenges and seek growth"
    },
    {
      question: "How do you handle criticism?",
      options: ["Ignore it", "Use it constructively to improve", "Take it personally", "Get defensive"],
      answer: "Use it constructively to improve"
    },
    {
      question: "What is your leadership style?",
      options: ["Supportive and encouraging", "Controlling and strict", "Avoid leadership", "Uninvolved"],
      answer: "Supportive and encouraging"
    }
  ]
};


const quizType = localStorage.getItem("selectedQuiz"); // Get stored quiz type
const questions = questionSets[quizType] || [];

let currentQuestionIndex = 0;
let selectedAnswer = null;

function displayQuestion() {
    if (questions.length === 0) {
        alert("No questions found for this quiz type!");
        return;
    }

    if (currentQuestionIndex >= questions.length) {
        window.location.href = "result.html"; // Redirect when all questions are done
        return;
    }

    document.getElementById("question-number").innerText = currentQuestionIndex + 1;
    document.getElementById("total-questions").innerText = questions.length;

    const questionObj = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = questionObj.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    questionObj.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.onclick = () => selectAnswer(button, option);
        optionsContainer.appendChild(button);
    });

    document.getElementById("confirm-btn").disabled = false;
    document.getElementById("next-btn").disabled = true;
    document.getElementById("feedback").innerText = "";
    document.getElementById("correct-answer").style.display = "none";
}

function selectAnswer(button, answer) {
    selectedAnswer = answer;
    document.querySelectorAll(".option-btn").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
}

function confirmAnswer() {
    if (!selectedAnswer) {
        alert("Please select an answer before confirming.");
        return;
    }

    const questionObj = questions[currentQuestionIndex];
    const feedback = document.getElementById("feedback");

    // ✅ Retrieve the current score correctly
    let score = parseInt(localStorage.getItem("quizScore") || "0");
    console.log("Before Update - Stored Score:", score); // Debugging Step

    let correctButton = null;

    document.querySelectorAll(".option-btn").forEach(button => {
        if (button.innerText === questionObj.answer) {
            correctButton = button;
        }
        button.onclick = null; // Disable further clicks
    });

    if (selectedAnswer === questionObj.answer) {
        feedback.innerText = "Correct!";
        feedback.style.color = "green";

        if (correctButton) {
            correctButton.classList.remove("selected");
            correctButton.classList.add("correct-answer");
        }

        score++; // ✅ Increase the score when correct
        localStorage.setItem("quizScore", score); // ✅ Store updated score
        console.log("After Update - Stored Score:", score); // Debugging Step
    } else {
        feedback.innerText = "Wrong!";
        feedback.style.color = "red";

        if (correctButton) {
            correctButton.classList.add("correct-answer");
        }
    }

    document.getElementById("confirm-btn").disabled = true;
    document.getElementById("next-btn").disabled = false;
}


function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}
// Reset score at the beginning of a new quiz
function startNewQuiz() {
    localStorage.setItem("quizScore", "0"); // ✅ Reset score
    currentQuestionIndex = 0; // ✅ Ensure questions start from first
    displayQuestion();
}

startNewQuiz()
