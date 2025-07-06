const questionSets = {
  "technical": [
    {
      question: "What is the output of the following Python code?\n\nfunction func(x):\n    if x <= 1:\n        return 1\n    return x * func(x-1)\n\nprint(func(4))",
      options: ["10", "24", "16", "12"],
      answer: "24"
    },
    {
      question: "What is the time complexity of binary search on a sorted array?",
      options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
      answer: "O(log n)"
    },
    {
      question: "In a relational database, what is the purpose of a foreign key?",
      options: ["To uniquely identify each row in a table", "To prevent data duplication", "To establish a link between data in two tables", "To increase query speed"],
      answer: "To establish a link between data in two tables"
    },
    {
      question: "What is the output of the following SQL query?\n\nSELECT COUNT(DISTINCT department) FROM employees;",
      options: ["Total number of employees", "Count of all rows including duplicates", "The number of unique departments in the employees table", "Syntax error"],
      answer: "The number of unique departments in the employees table"
    },
    {
      question: "What is the difference between HTTP and HTTPS?",
      options: ["HTTP is faster than HTTPS", "HTTPS is encrypted and secure, while HTTP is not", "HTTP uses port 443", "There is no difference"],
      answer: "HTTPS is encrypted and secure, while HTTP is not"
    },
    {
      question: "What will be the output of the following JavaScript code?\n\nconsole.log(0.1 + 0.2 === 0.3);",
      options: ["true", "false", "NaN", "undefined"],
      answer: "false"
    },
    {
      question: "In object-oriented programming, what is inheritance?",
      options: ["The process of creating private variables", "The ability to create multiple classes from one", "A mechanism where a class inherits properties and behaviors from another class", "A type of polymorphism"],
      answer: "A mechanism where a class inherits properties and behaviors from another class"
    },
    {
      question: "What does the following regular expression match?\n\n^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
      options: ["Phone numbers", "IP addresses", "Email addresses", "Passwords"],
      answer: "Email addresses"
    },
    {
      question: "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n    int x = 5;\n    printf(\"%d %d %d\", x, ++x, x++);\n    return 0;\n}",
      options: ["5 6 6", "6 6 5", "Undefined behavior", "7 6 5"],
      answer: "Undefined behavior"
    },
    {
      question: "What is the purpose of a subnet mask in networking?",
      options: ["To assign IP addresses dynamically", "To encrypt data packets", "To divide an IP address into network and host portions", "To block external traffic"],
      answer: "To divide an IP address into network and host portions"
    }
  ],

  "situational": [
    {
      question: "You notice a colleague taking office supplies home for personal use. What is the most appropriate action?",
      options: ["Ignore the situation", "Report them immediately to HR", "Privately talk to the colleague and then escalate if needed", "Take supplies home too"],
      answer: "Privately talk to the colleague and then escalate if needed"
    },
    {
      question: "Your team receives a project with an unrealistic deadline. What do you do?",
      options: ["Work nonstop to meet it anyway", "Complain to your team", "Meet with your manager to discuss priorities and propose a plan", "Decline the project"],
      answer: "Meet with your manager to discuss priorities and propose a plan"
    },
    {
      question: "A colleague takes credit for your work during a meeting. How do you respond?",
      options: ["Call them out publicly", "Let it go", "Speak to them privately and clarify with your manager if necessary", "Sabotage their future work"],
      answer: "Speak to them privately and clarify with your manager if necessary"
    },
    {
      question: "You discover a teammate has made a serious error in a submitted report. What’s your response?",
      options: ["Do nothing unless asked", "Blame them publicly", "Notify them and your supervisor, and help correct it", "Rewrite it yourself silently"],
      answer: "Notify them and your supervisor, and help correct it"
    },
    {
      question: "You have a major deadline but are asked to help another team urgently. What should you do?",
      options: ["Refuse the request", "Drop your work and help", "Assess priorities and communicate with both managers", "Pretend to help but don’t"],
      answer: "Assess priorities and communicate with both managers"
    },
    {
      question: "You disagree with a new company policy. What is the best way to express this?",
      options: ["Post about it on social media", "Refuse to follow it", "Discuss with your manager constructively and offer alternatives", "Ignore it and move on"],
      answer: "Discuss with your manager constructively and offer alternatives"
    },
    {
      question: "A client is angry and verbally abusive due to a delay. What do you do?",
      options: ["Hang up", "Argue back", "Stay calm, acknowledge frustration, and focus on solutions", "Tell them to stop yelling"],
      answer: "Stay calm, acknowledge frustration, and focus on solutions"
    },
    {
      question: "A colleague seems overwhelmed and stressed. What should you do?",
      options: ["Avoid them", "Gossip about it", "Check in privately and offer support if appropriate", "Tell the manager to fire them"],
      answer: "Check in privately and offer support if appropriate"
    },
    {
      question: "You identify a big improvement in a business process. What do you do?",
      options: ["Ignore it", "Apply it secretly", "Document and propose it to your manager", "Complain about inefficiency"],
      answer: "Document and propose it to your manager"
    },
    {
      question: "You realize you’ve made a mistake that could impact the team. What’s the best action?",
      options: ["Hide it", "Blame others", "Admit it, assess the impact, and propose a fix", "Pretend to fix it without telling anyone"],
      answer: "Admit it, assess the impact, and propose a fix"
    }
  ],
  "quantitative": [
    {
      question: "If the price of a book is first decreased by 25% and then increased by 20%, then the net change in the price is:",
      options: ["5% decrease", "10% decrease", "No change", "10% increase"],
      answer: "10% decrease"
    },
    {
      question: "A train 150 meters long passes a platform 200 meters long in 20 seconds. What is the speed of the train?",
      options: ["15 m/s", "17.5 m/s", "63 km/h", "Both B and C"],
      answer: "Both B and C"
    },
    {
      question: "Two pipes A and B can fill a tank in 12 and 15 minutes respectively. If both are opened together, how long will it take to fill the tank?",
      options: ["6 minutes", "6.67 minutes", "7 minutes", "8 minutes"],
      answer: "6.67 minutes"
    },
    {
      question: "A man completes 2/5 of a job in 10 days. How many more days will he take to finish the remaining work?",
      options: ["10 days", "12 days", "15 days", "18 days"],
      answer: "15 days"
    },
    {
      question: "If x% of y is z, then y% of x is:",
      options: ["x", "y", "z", "2z"],
      answer: "z"
    },
    {
      question: "A shopkeeper gives a discount of 10% on the marked price and still makes a profit of 26%. If the cost price is Rs. 250, what is the marked price?",
      options: ["Rs. 350", "Rs. 360", "Rs. 375", "Rs. 400"],
      answer: "Rs. 375"
    },
    {
      question: "The ratio of the present ages of A and B is 3:4. Eight years ago, the ratio was 1:2. Find the present age of A.",
      options: ["24 years", "28 years", "30 years", "32 years"],
      answer: "24 years"
    },
    {
      question: "A boat goes 12 km upstream and 40 km downstream in 8 hours. It also goes 16 km upstream and 24 km downstream in 7 hours. What is the speed of the boat and the current?",
      options: ["6 km/h and 4 km/h", "7 km/h and 3 km/h", "8 km/h and 2 km/h", "9 km/h and 1 km/h"],
      answer: "7 km/h and 3 km/h"
    },
    {
      question: "A sum of money doubles itself in 8 years at simple interest. What is the rate of interest per annum?",
      options: ["10%", "12.5%", "14%", "15%"],
      answer: "12.5%"
    },
    {
      question: "If a, b, c form an AP and a², b², c² form a GP, then b/a equals:",
      options: ["1", "√2", "2", "Cannot be determined"],
      answer: "2"
    }
  ],

  "logical": [
    {
      question: "In a row, Arun is 7th from left and Varun is 12th from right. If they swap places, and Arun becomes 22nd from left, how many boys are there?",
      options: ["28", "30", "33", "34"],
      answer: "33"
    },
    {
      question: "If 'TEACHER' is coded as 'VGCEJGT', then 'STUDENT' is coded as:",
      options: ["UTVFHPV", "UVWFGPV", "WUVWFPV", "UWWFGPT"],
      answer: "UVWFGPV"
    },
    {
      question: "In the code:\n'pit na som' = 'bring me water'\n'na jo tod' = 'water is life'\n'tod ka tim' = 'life and death'\n'tim na jod' = 'death is certain'\nWhich word means \"certain\"?",
      options: ["na", "tim", "jod", "tod"],
      answer: "jod"
    },
    {
      question: "If South-East becomes North, North-East becomes West, then what will South become?",
      options: ["North-West", "West", "East", "South-West"],
      answer: "East"
    },
    {
      question: "Five friends P, Q, R, S, and T are sitting in a row facing north.\nS is to immediate right of P, and immediate left of T.\nQ is at extreme left, R is to left of P.\nWho is sitting in the middle?",
      options: ["S", "R", "P", "T"],
      answer: "P"
    },
    {
      question: "In a family of six:\nA and B are married (A is male)\nC is A’s brother\nD is C’s son\nE is D’s sister\nB is daughter-in-law of F (F’s husband is dead)\nHow is E related to F?",
      options: ["Granddaughter", "Niece", "Daughter", "Sister"],
      answer: "Granddaughter"
    },
    {
      question: "Among P, Q, R, S, and T:\nR is taller than only P\nQ is taller than T but shorter than S\nWho is the tallest?",
      options: ["Q", "S", "T", "R"],
      answer: "S"
    },
    {
      question: "If:\nA + B ⇒ A is sister of B\nA × B ⇒ A is brother of B\nA − B ⇒ A is mother of B\nA ÷ B ⇒ A is father of B\nWhich means M is maternal uncle of N?",
      options: ["M × P + N", "M × P − N", "M + P − N", "M − P × N"],
      answer: "M × P − N"
    },
    {
      question: "Consider:\nI. All artists are entertainers\nII. Some entertainers are actors\nIII. All actors are artists\nWhich conclusion is valid?",
      options: ["All actors are entertainers", "Some entertainers are artists", "Some artists are actors", "All entertainers are artists"],
      answer: "Some entertainers are artists"
    },
    {
      question: "A, B, C, and D need to cross a bridge with 1 torch:\nA = 1 min, B = 2 min, C = 5 min, D = 10 min\nMax 2 can cross at a time, at slower’s pace\nWhat is minimum total time required?",
      options: ["15 minutes", "16 minutes", "17 minutes", "18 minutes"],
      answer: "17 minutes"
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
        window.location.href = "aptitude-result.html"; // Redirect when all questions are done
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

// Call this function at the start of `displayQuestion()`
displayQuestion();


// Load the first question on page load
displayQuestion();

