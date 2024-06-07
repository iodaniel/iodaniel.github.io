// Web Developer Skills Project:

// Tests: definition of the terminologies

// LEAN TERMINOLOGY
// •	6S: Study, sort, shine, set in order, standardize, and sustain.
// •	Andon: A visual light used to show the current status of a machine or process.
// •	Current State: Current condition of anything. How something is currently being done.
// •	Defects: Waste of inspection, repair, and scrapping of material to which value has already been added.
// •	FIFO: First in, first out.
// •	Five Whys: Asking five why questions to get to the root cause of a problem.
// •	Flow: Move or process in a forward motion.
// •	Future state: The condition we imagine something can be in once changes have taken place.
// •	Gemba: “The real place” the place where work occurs.
// •	Hai: “I accept the challenge.”
// •	Hansei: “Reflection”. Reflect on what went right or what went wrong. Make changes if needed and try something else.
// •	Heijunka: A process to help manage production by leveling peaks and valleys of customer demand.
// •	Kaizen: Many small changes for the better, created by the people that do the work.
// •	Kanban: A visual system that shows you to replace what has been consumed.

 
// 8 WASTES
// 1.	Overproduction: To produce sooner, faster, or in greater quantities than customer demands.
// 2.	Inventory: Raw material, work in process, or finished goods which are not having value added to it.
// 3.	Waiting: People or parts that wait for a work cycle to be completed.
// 4.	Motion: Unnecessary movement of people, parts or machines within a process.
// 5.	Transportation: Unnecessary movement of people or parts between processes.
// 6.	Defects: Not right the first time. Repetition or correction of a process. Scrap, rework and defects.
// 7.	Over Processing: Processing beyond the standard required by the customer.
// 8.	Talent: Underutilizing people’s talents, skills, and knowledge.
$(document).ready(function() {
    const data = [
        {
            "question": "What is Overproduction?",
            "options": [
                "To produce sooner, faster, or in greater quantities than customer demands.",
                "Raw material, work in process, or finished goods which are not having value added to it.",
                "People or parts that wait for a work cycle to be completed.",
                "Unnecessary movement of people, parts or machines within a process."
            ],
            "correct_answer": "To produce sooner, faster, or in greater quantities than customer demands."
        },
        {
            "question": "What is Inventory?",
            "options": [
                "To produce sooner, faster, or in greater quantities than customer demands.",
                "Raw material, work in process, or finished goods which are not having value added to it.",
                "People or parts that wait for a work cycle to be completed.",
                "Unnecessary movement of people, parts or machines within a process."
            ],
            "correct_answer": "Raw material, work in process, or finished goods which are not having value added to it."
        },
        {
            "question": "What is Waiting?",
            "options": [
                "Raw material, work in process, or finished goods which are not having value added to it.",
                "Unnecessary movement of people, parts or machines within a process.",
                "People or parts that wait for a work cycle to be completed.",
                "Processing beyond the standard required by the customer."
            ],
            "correct_answer": "People or parts that wait for a work cycle to be completed."
        },
        {
            "question": "What is Motion?",
            "options": [
                "Unnecessary movement of people, parts or machines within a process.",
                "Unnecessary movement of people or parts between processes.",
                "Underutilizing people’s talents, skills, and knowledge.",
                "Processing beyond the standard required by the customer."
            ],
            "correct_answer": "Unnecessary movement of people, parts or machines within a process."
        },
        {
            "question": "What is Transportation?",
            "options": [
                "Unnecessary movement of people, parts or machines within a process.",
                "Unnecessary movement of people or parts between processes.",
                "Underutilizing people’s talents, skills, and knowledge.",
                "Processing beyond the standard required by the customer."
            ],
            "correct_answer": "Unnecessary movement of people or parts between processes."
        },
        {
            "question": "What are Defects?",
            "options": [
                "Raw material, work in process, or finished goods which are not having value added to it.",
                "People or parts that wait for a work cycle to be completed.",
                "Not right the first time. Repetition or correction of a process. Scrap, rework and defects.",
                "Processing beyond the standard required by the customer."
            ],
            "correct_answer": "Not right the first time. Repetition or correction of a process. Scrap, rework and defects."
        },
        {
            "question": "What is Over Processing?",
            "options": [
                "To produce sooner, faster, or in greater quantities than customer demands.",
                "People or parts that wait for a work cycle to be completed.",
                "Unnecessary movement of people, parts or machines within a process.",
                "Processing beyond the standard required by the customer."
            ],
            "correct_answer": "Processing beyond the standard required by the customer."
        },
        {
            "question": "What is Talent?",
            "options": [
                "Unnecessary movement of people or parts between processes.",
                "Underutilizing people’s talents, skills, and knowledge.",
                "Processing beyond the standard required by the customer.",
                "People or parts that wait for a work cycle to be completed."
            ],
            "correct_answer": "Underutilizing people’s talents, skills, and knowledge."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    const quizContainer = $('#quiz-container');

    function showQuestion(index) {
        if (index < data.length) {
            const item = data[index];
            const questionDiv = $('<div>').addClass('question').attr('id', `question${index}`);

            const questionTitle = $('<h2>').text(item.question);
            questionDiv.append(questionTitle);

            item.options.forEach(option => {
                const label = $('<label>');
                const radio = $('<input>').attr({
                    type: 'radio',
                    name: `question${index}`,
                    value: option
                });
                label.append(radio).append(option);
                questionDiv.append(label).append('<br>');
            });

            const submitButton = $('<button>').text('Submit').attr('id', `submit${index}`).addClass('submit-button');
            const resultDiv = $('<div>').attr('id', `result${index}`).addClass('result');
            questionDiv.append(submitButton).append(resultDiv);

            quizContainer.html(questionDiv);

            submitButton.on('click', function() {
                const selectedOption = $(`input[name="question${index}"]:checked`).val();
                if (!selectedOption) {
                    resultDiv.text('You don\'t have an answer ready').css('color', 'grey');
                } else {
                    if (selectedOption === item.correct_answer) {
                        score++;
                    }
                    currentQuestionIndex++;
                    showQuestion(currentQuestionIndex);
                }
            });
        } else {
            showResult();
        }
    }

    function showResult() {
        const percentage = (score / data.length) * 100;
        const resultCard = $('<div>').addClass('result-card');
        const circle = $('<div>').addClass('circle').text(`${percentage.toFixed(0)}%`);
        const resultText = $('<p>').text(`You scored ${score} out of ${data.length}`);
        resultCard.append(circle).append(resultText);
        quizContainer.html(resultCard);
    }

    showQuestion(currentQuestionIndex);
});
