function submitQuiz() {
    const correctAnswers = {
        Q1: 'B', Q2: 'C', Q3: 'A', Q4: 'B',
        Q5: 'B', Q6: 'B', Q7: 'B', Q8: 'A',
        Q9: 'B', Q10: 'B', Q11: 'B', Q12: 'B',
        Q13: 'C', Q14: 'C', Q15: 'B', Q16: 'B'
    };

    let score = 0;
    const form = document.getElementById('quiz-form');

    for (let question in correctAnswers) {
        const options = document.getElementsByName(question);
        let answered = false;

        for (let option of options) {
            if (option.checked) {
                answered = true;
                if (option.value === correctAnswers[question]) {
                    score++;
                }
            }
        }

        if (!answered) {
            alert(`Veuillez répondre à la question ${question}`);
            return;
        }
    }

    
    alert(`Vous avez obtenu ${score} sur 16.`);
}

