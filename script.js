document.addEventListener('DOMContentLoaded', function() {
    var stawKanaButton = document.getElementById('stawKanaButton');
    var pagodaKanjiButton = document.getElementById('pagodaKanjiButton');
    
    stawKanaButton.addEventListener('click', function() {
        document.getElementById('stawKana').style.display = 'block';
        document.getElementById('pagodaKanji').style.display = 'none';
    });

    pagodaKanjiButton.addEventListener('click', function() {
        document.getElementById('stawKana').style.display = 'none';
        document.getElementById('pagodaKanji').style.display = 'block';
    });
});

var currentQuestionIndex = 0;
var questions = [
    // Pytania z kana
    { question: 'a', answers: ['あ', 'い', 'う', 'え'], correct: 'あ' },
    { question: 'i', answers: ['あ', 'い', 'う', 'え'], correct: 'い' },
    { question: 'u', answers: ['あ', 'い', 'う', 'え'], correct: 'う' },
    { question: 'e', answers: ['あ', 'い', 'う', 'え'], correct: 'え' },
    { question: 'o', answers: ['あ', 'い', 'う', 'お'], correct: 'お' },
    { question: 'ka', answers: ['か', 'き', 'く', 'け'], correct: 'か' },
    { question: 'ki', answers: ['か', 'き', 'く', 'け'], correct: 'き' },
    { question: 'ku', answers: ['か', 'き', 'く', 'け'], correct: 'く' },
    { question: 'ke', answers: ['か', 'き', 'く', 'け'], correct: 'け' },
    { question: 'ko', answers: ['か', 'き', 'く', 'こ'], correct: 'こ' },
    // Pytania z kanji
    { question: 'mizu', answers: ['川', '水', '木', '火'], correct: '水' },
    { question: 'hi', answers: ['川', '水', '木', '火'], correct: '火' },
    { question: 'ki', answers: ['川', '水', '木', '火'], correct: '木' },
    { question: 'kane', answers: ['金', '土', '日', '月'], correct: '金' },
    { question: 'tsuchi', answers: ['金', '土', '日', '月'], correct: '土' },
    { question: 'nichi', answers: ['金', '土', '日', '月'], correct: '日' },
    { question: 'getsu', answers: ['金', '土', '日', '月'], correct: '月' },
    { question: 'yama', answers: ['山', '川', '田', '石'], correct: '山' },
    { question: 'kawa', answers: ['山', '川', '田', '石'], correct: '川' },
    { question: 'ta', answers: ['山', '川', '田', '石'], correct: '田' }
];

function displayQuestion() {
    var question = questions[currentQuestionIndex];
    document.getElementById('gameQuestion').innerText = 'Jaki jest znak dla: ' + question.question;
    var options = document.getElementById('gameOptions');
    options.innerHTML = '';
    question.answers.forEach(function(answer) {
        var div = document.createElement('div');
        div.innerText = answer;
        div.onclick = function() { checkAnswer(answer); };
        options.appendChild(div);
    });
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestionIndex].correct) {
        alert('Dobrze!');
    } else {
        alert('Źle, spróbuj jeszcze raz.');
    }

    // Przejście do następnego pytania
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert('Koniec gry!');
        currentQuestionIndex = 0; // Zresetuj grę do pierwszego pytania
        displayQuestion(); // Opcjonalnie: zrestartuj grę automatycznie
    }
}

document.getElementById('nextQuestionButton').onclick = function() {
    displayQuestion();
};

displayQuestion(); // Zaczynamy
