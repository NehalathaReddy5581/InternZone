const questionSets = {
     "Cp": [
        { question: "1.Which operator is used to access the address of a variable?", options: ["&", "*", "@", "#"], answer: "&" },
        { question: "2.What is the main purpose of the `malloc()` function?", options: ["Memory allocation", "File handling", "Data sorting", "Variable declaration"], answer: "Memory allocation" },
        { question: "3.Which header file is required for using `printf()` and `scanf()`?", options: ["stdio.h", "math.h", "string.h", "stdlib.h"], answer: "stdio.h" },
        { question: "4.What is the default return type of the `main()` function in C?", options: ["void", "int", "char", "float"], answer: "int" },
        { question: "5.Which loop ensures execution at least once?", options: ["for loop", "while loop", "do-while loop", "nested loop"], answer: "do-while loop" },
        { question: "6.How do you declare a pointer in C?", options: ["int *ptr;", "pointer int ptr;", "int ptr*;", "ptr int *;"], answer: "int *ptr;" },
        { question: "7.What is a structure in C?", options: ["A memory allocation function", "A user-defined data type", "A built-in function", "An external library"], answer: "A user-defined data type" },
        { question: "8.What does `sizeof()` do?", options: ["Returns memory address", "Allocates memory", "Finds variable size", "Converts data types"], answer: "Finds variable size" },
        { question: "9.Which operator is used for bitwise AND?", options: ["&&", "&", "||", "|"], answer: "&" },
        { question: "10.How do you define a constant variable?", options: ["const int x = 5;", "constant x = 5;", "fixed int x = 5;", "define x = 5;"], answer: "const int x = 5;" },
        { question: "11.Which function is used to compare strings?", options: ["strcmp()", "strcpy()", "strlen()", "strcat()"], answer: "strcmp()" },
        { question: "12.What does the `return` keyword do?", options: ["Stops execution", "Sends a value to the calling function", "Allocates memory", "Declares a new function"], answer: "Sends a value to the calling function" },
        { question: "13.What keyword is used for defining macros?", options: ["#define", "macro", "const", "static"], answer: "#define" },
        { question: "14.What is the entry point of a C program?", options: ["start()", "run()", "main()", "begin()"], answer: "main()" },
        { question: "15.How do you declare an array?", options: ["int arr[10];", "array int arr(10);", "int array arr[10];", "arr int[10];"], answer: "int arr[10];" }
    ],
    "JAVA": [
        { question: "1.Which keyword is used to define a class in Java?", options: ["class", "define", "struct", "object"], answer: "class" },
        { question: "2.Which data type is used for storing decimal values?", options: ["int", "float", "double", "char"], answer: "double" },
        { question: "3.What does JVM stand for?", options: ["Java Virtual Machine", "Java Visual Mode", "Java Variable Memory", "Java Version Manager"], answer: "Java Virtual Machine" },
        { question: "4.What is the purpose of the `final` keyword in Java?", options: ["Prevent modification", "Create objects", "Allow multithreading", "Enhance security"], answer: "Prevent modification" },
        { question: "5.Which operator is used for concatenation in Java?", options: ["+", "&", "*", "-"], answer: "+" },
        { question: "6.What is the superclass of all Java classes?", options: ["Main", "Object", "System", "Base"], answer: "Object" },
        { question: "7.How do you define an array in Java?", options: ["int[] arr = new int[10];", "array arr(10);", "int array[10];", "arr int(10);"], answer: "int[] arr = new int[10];" },
        { question: "8.What is Java primarily used for?", options: ["System Programming", "Web Development", "Game Development", "Cloud Computing"], answer: "Web Development" },
        { question: "9.Which keyword is used to declare an interface in Java?", options: ["class", "interface", "struct", "abstract"], answer: "interface" },
        { question: "10.What is the default access modifier for a class in Java?", options: ["public", "private", "protected", "package-private"], answer: "package-private" },
        { question: "11.Which method is called when an object is created?", options: ["start()", "run()", "constructor", "initialize()"], answer: "constructor" },
        { question: "12.Which loop is guaranteed to run at least once?", options: ["for loop", "while loop", "do-while loop", "nested loop"], answer: "do-while loop" },
        { question: "13.How do you handle exceptions in Java?", options: ["catch-try", "try-catch", "throw-catch", "error-handler"], answer: "try-catch" },
        { question: "14.What is used for multi-threading in Java?", options: ["Thread", "Process", "Runnable", "Parallel"], answer: "Thread" },
        { question: "15.Which collection type maintains unique values?", options: ["List", "Set", "Queue", "Map"], answer: "Set" }
    ],
    "Python": [
        { question: "1.What keyword is used to define a function in Python?", options: ["func", "def", "function", "define"], answer: "def" },
        { question: "2.What is the output of `print(3 ** 2)`?", options: ["6", "9", "16", "None"], answer: "9" },
        { question: "3.Which built-in function gets user input?", options: ["read()", "scan()", "input()", "get()"], answer: "input()" },
        { question: "4.What does `len()` do?", options: ["Returns memory size", "Finds the length of a string", "Checks variable type", "Counts instances"], answer: "Finds the length of a string" },
        { question: "5.What does `type()` do?", options: ["Checks variable type", "Prints data", "Sorts objects", "Runs a loop"], answer: "Checks variable type" },
        { question: "6.How do you create a list?", options: ["list = []", "list = {}", "list = ()", "list = set()"], answer: "list = []" },
        { question: "7.Which loop executes while a condition is true?", options: ["for loop", "while loop", "do-while loop", "nested loop"], answer: "while loop" },
        { question: "8.Which module is used for working with JSON data?", options: ["json", "serialize", "data", "dict"], answer: "json" },
        { question: "9.How do you define a class in Python?", options: ["class MyClass:", "define MyClass{}", "struct MyClass{}", "object MyClass:"], answer: "class MyClass:" },
        { question: "10.What is the output of `print('Python'[::-1])`?", options: ["nohtyP", "Python", "nthoP", "Error"], answer: "nohtyP" },
        { question: "11.Which keyword is used for exception handling?", options: ["catch", "throw", "try", "error"], answer: "try" },
        { question: "12.Which type of loop is used to iterate through elements in a list?", options: ["while loop", "for loop", "nested loop", "do-while loop"], answer: "for loop" },
        { question: "13.What does `import` do?", options: ["Loads a module", "Starts a process", "Deletes a file", "Executes a loop"], answer: "Loads a module" },
        { question: "14.What does `break` do inside a loop?", options: ["Stops execution", "Repeats code", "Deletes objects", "Creates instances"], answer: "Stops execution" },
        { question: "15.What is Python mostly used for?", options: ["Web Development", "AI & Machine Learning", "Game Development", "All of the above"], answer: "All of the above" }
    ],
    "Frontend": [
        { question: "1.Which language is used for styling web pages?", options: ["HTML", "CSS", "JavaScript", "Python"], answer: "CSS" },
        { question: "2.What does `position: absolute;` do in CSS?", options: ["Fixes element position", "Allows free movement", "Aligns elements", "Hides elements"], answer: "Fixes element position" },
        { question: "3.What is the main purpose of JavaScript in front-end development?", options: ["Styling", "Interactivity", "Database Management", "Hosting"], answer: "Interactivity" },
        { question: "4.Which HTML tag is used to create a button?", options: ["<input>", "<button>", "<click>", "<hover>"], answer: "<button>" },
        { question: "5.What does `grid-template-columns` do in CSS?", options: ["Defines column width", "Changes font size", "Adds rows", "Aligns content"], answer: "Defines column width" },
        { question: "6.What does `display: flex;` do?", options: ["Creates a flexible layout", "Hides elements", "Changes font styles", "Aligns images"], answer: "Creates a flexible layout" },
        { question: "7.What does `padding` do in CSS?", options: ["Sets space inside an element", "Adjusts margin", "Aligns text", "Resizes fonts"], answer: "Sets space inside an element" },
        { question: "8.Which event is fired when a user clicks an element in JavaScript?", options: ["onhover", "onpress", "onclick", "onload"], answer: "onclick" },
        { question: "9.What does `overflow: hidden;` do?", options: ["Hides excess content", "Creates a scroll bar", "Expands container", "Deletes text"], answer: "Hides excess content" },
        { question: "10.How do you make a text bold in HTML?", options: ["<b>", "<bold>", "<strong>", "<thick>"], answer: "<b>" },
        { question: "11.What does `background-color` do in CSS?", options: ["Changes text color", "Sets background color", "Adjusts padding", "Defines font family"], answer: "Sets background color" },
        { question: "12.What is `z-index` used for?", options: ["Layering elements", "Text alignment", "Font styling", "Margin spacing"], answer: "Layering elements" },
        { question: "13.What does `transition` do in CSS?", options: ["Adds animation effects", "Changes font sizes", "Adjusts borders", "Aligns tables"], answer: "Adds animation effects" },
        { question: "14.What is a responsive website?", options: ["Mobile-friendly design", "Fixed-width layout", "Only works on desktops", "Uses JavaScript only"], answer: "Mobile-friendly design" },
        { question: "15.Which unit is scalable in CSS?", options: ["px", "em", "rem", "%"], answer: "rem" }
    ],
    "DSA": [
        { question: "1.Which data structure follows FIFO (First-In-First-Out)?", options: ["Stack", "Queue", "Linked List", "Heap"], answer: "Queue" },
        { question: "2.What is the worst-case time complexity of QuickSort?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], answer: "O(n^2)" },
        { question: "3.Which sorting algorithm is considered the most efficient for large datasets?", options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"], answer: "Merge Sort" },
        { question: "4.What type of data structure is used in a Binary Search Tree (BST)?", options: ["Array", "Graph", "Linked List", "Tree"], answer: "Tree" },
        { question: "5.Which algorithm is used for finding the shortest path in a graph?", options: ["Dijkstra's Algorithm", "DFS", "Kruskal's Algorithm", "Prim's Algorithm"], answer: "Dijkstra's Algorithm" },
        { question: "6.How is a stack implemented?", options: ["FIFO", "LIFO", "Random Access", "Sorted Order"], answer: "LIFO" },
        { question: "7.What does Big O notation represent?", options: ["Memory usage", "Algorithm complexity", "Number of loops", "Sorting order"], answer: "Algorithm complexity" },
        { question: "8.Which data structure is best suited for implementing recursion?", options: ["Queue", "Heap", "Stack", "Linked List"], answer: "Stack" },
        { question: "9.Which algorithm is commonly used for graph traversal?", options: ["DFS", "Bubble Sort", "Binary Search", "Heap Sort"], answer: "DFS" },
        { question: "10.What is a hash table used for?", options: ["Sorting data", "Quick data retrieval", "Graph traversal", "Tree balancing"], answer: "Quick data retrieval" },
        { question: "11.Which algorithm is best for finding a minimum spanning tree?", options: ["Prim's Algorithm", "QuickSort", "Binary Search", "Insertion Sort"], answer: "Prim's Algorithm" },
        { question: "12.What is the primary advantage of a linked list over an array?", options: ["Fast indexing", "Dynamic memory allocation", "Better sorting", "Less memory usage"], answer: "Dynamic memory allocation" },
        { question: "13.What is the time complexity of Binary Search?", options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"], answer: "O(log n)" },
        { question: "14.Which type of tree ensures balanced structure for efficient searching?", options: ["Binary Search Tree", "B-tree", "Heap", "Linked List"], answer: "B-tree" },
        { question: "15.What is a priority queue used for?", options: ["Sorting data", "Managing tasks in order of priority", "Binary search", "Memory management"], answer: "Managing tasks in order of priority" }
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
        window.location.href = "programming-result.html"; // Redirect when all questions are done
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

