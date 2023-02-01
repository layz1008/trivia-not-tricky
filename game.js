const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


//List of questions

let questions = [
    {
        question: 'What does the S stand for in Harry S. truman?',
        choice1: 'Solomon',
        choice2: 'S',
        choice3: 'Shipp',
        choice4: 'Schiltz',
        answer: 2,
    },
    {
        question:
            "What US state has the tallest mountain?",
        choice1: "California",
        choice2: "Colorado",
        choice3: "Wyoming",
        choice4: "Montana",
        answer: 1,
    },
    {
        question: "What is the second biggest organ in the human body?",
        choice1: "Lung",
        choice2: "Heart",
        choice3: "Liver",
        choice4: "Brain",
        answer: 3,
    },
    {
        question: "What decade was baseballs first perfect game thrown?",
        choice1: "1980",
        choice2: "1880",
        choice3: "1930",
        choice4: "1950",
        answer: 2,
    },
    {
        question: "What day did did Nazi Germany invade Poland?",
        choice1: "0ct 8 1943",
        choice2: "Sep 1 1945",
        choice3: "May 15 1942",
        choice4: "Aug 21 1944",
        answer: 2,
    },
    {
        question: "How many legs does a Centipede have?",
        choice1: "25",
        choice2: "40",
        choice3: "60",
        choice4: "30",
        answer: 4,
    },
    {
        question: "Who was the youngest US president?",
        choice1: "Thedore Roosevelt",
        choice2: "Donald Trump",
        choice3: "Teddy Roosevelt",
        choice4: "Benjamin Franklin",
        answer: 3,
    },
    {
        question: "In printing its the letter black. In chemistry, its potassium. In baseball, its a strikeout. Which letter is it?",
        choice1: "v",
        choice2: "s",
        choice3: "g",
        choice4: "k",
        answer: 4,
    },
    {
        question: "How many humps does a dromedary camel have?",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 1,
    },
    {
        question: "Which decade was the first artificial tree made?",
        choice1: "1980",
        choice2: "1880",
        choice3: "1930",
        choice4: "1950",
        answer: 3,
    },
    {
        question: "Best selling album of all time?",
        choice1: "1989 Taylor Swift",
        choice2: "Back In Black ACDC",
        choice3: "Thriller Michale Jackson",
        choice4: "Dark Side Of The Moon Pink Flyod",
        answer:3,
    },
    {
        question: "First Disney princress?",
        choice1: "Snow White",
        choice2: "Bella",
        choice3: "Cinderalla",
        choice4: "Jasmin",
        answer:1,
    },
    {
        question: "What food company piloted chicken flavored nail polish?",
        choice1: "Mary Browns",
        choice2: "Popeyes",
        choice3: "Churchs Chicken",
        choice4: "KFC",
        answer:4,
    },
    {
        question: "What is the only mammal covered in scales?",
        choice1: "Manidae",
        choice2: "Pangolin",
        choice3: "Snake",
        choice4: "Dolphine",
        answer:2,
    },
    {
        question: "Where is the world's largest desert?",
        choice1: "Antartica",
        choice2: "North Africa",
        choice3: "South Africa",
        choice4: "Mali",
        answer:1,
    },
    {
        question: "What bird is most related to a dinosaur?",
        choice1: "Ostritch",
        choice2: "Emu",
        choice3: "Penguin",
        choice4: "Chicken",
        answer:4,
    },
    {
        question: "What company is the world's biggest distributor of toys?",
        choice1: "Mcdonalds",
        choice2: "Hasboro",
        choice3: "Lego",
        choice4: "Fisher price",
        answer:1,
    },
    {
        question: "What is the official language of the US?",
        choice1: "English",
        choice2: "Spanish",
        choice3: "None",
        choice4: "French",
        answer:3,
    },
    {
        question: "What is the only official bilingual providence in Canada?",
        choice1: "New Brunswick",
        choice2: "Ontario",
        choice3: "Brithsh Columbia",
        choice4: "Quebec",
        answer:1,
    },
    {
        question: "How many wings does a flea have?",
        choice1: "6",
        choice2: "0",
        choice3: "2",
        choice4: "4",
        answer:2,
    },
    {
        question: "What company produces the most tires?",
        choice1: "Toyo",
        choice2: "Firestone",
        choice3: "Lego",
        choice4: "Goodyear",
        answer:3,
    },
    {
        question: "What did Darth Vader say to Luke when he revealed that he was his father?",
        choice1: "Luke, I am your father",
        choice2: "I'm the pappy",
        choice3: "No, I am your father",
        choice4: "Where's the pizza",
        answer:3,
    },
    {
        question: "Where is the world's deepest lake?",
        choice1: "Russia",
        choice2: "United States",
        choice3: "Canada",
        choice4: "South Africa",
        answer:1,
    },
    {
        question: "How long does a Cicada live underground?",
        choice1: "20 years",
        choice2: "2 days",
        choice3: "17 years",
        choice4: "1000 hours",
        answer:3,
    },
    {
        question: "How long is a moment?",
        choice1: "60 seconds",
        choice2: "1 day",
        choice3: "30 seconds",
        choice4: "90 seconds",
        answer:4,
    },
    {
        question: "What food aided the production of bombs in WW2?",
        choice1: "Pickles",
        choice2: "Bacon",
        choice3: "Potatoes",
        choice4: "Ham",
        answer:2,
    },
    {
        question: "How many ways can you make change for a US $1?",
        choice1: "376",
        choice2: "1764",
        choice3: "154",
        choice4: "292",
        answer:4,
    },
    {
        question: "Before it was called mouse what animal was that computer accessory named after?",
        choice1: "Bee",
        choice2: "Turtle",
        choice3: "Moose",
        choice4: "Mice",
        answer:2,
    },
    {
        question: "What is the only US State with a Spanish Moto?",
        choice1: "Montana",
        choice2: "California",
        choice3: "New Mexico",
        choice4: "Texas",
        answer:1,
    },
    {
        question: "What finger is responsible for 50% of strength in the hand?",
        choice1: "Pinky",
        choice2: "Middle",
        choice3: "Index",
        choice4: "Thumb",
        answer:1,
    },
    {
        question: "What is the worlds most venomous fish?",
        choice1: "Moray Eel",
        choice2: "Boxfish",
        choice3: "Stonefish",
        choice4: "Candiru",
        answer:3,
    },
    {
        question: "What state in the US produces the most rice?",
        choice1: "California",
        choice2: "Arkansas",
        choice3: "Oregon",
        choice4: "Mississippi",
        answer:2,
    },
    {
        question: "How many languages are written from right to left?",
        choice1: "4",
        choice2: "10",
        choice3: "27",
        choice4: "12",
        answer:4,
    },
    {
        question: "On average how long does it take food to pass through the human body?",
        choice1: "24 hours",
        choice2: "53 hours",
        choice3: "48 hours",
        choice4: "6 hours",
        answer:2,
    },
    {
        question: "How fast does the earth spin?",
        choice1: "1000 mph",
        choice2: "100 mph",
        choice3: "60 mph",
        choice4: "To Fast",
        answer:1,
    },
    {
        question: "What birthday in the US is the most common?",
        choice1: "Apr 1",
        choice2: "Jan 10",
        choice3: "Feb 22",
        choice4: "Sep 9",
        answer:4,
    },
    {
        question: "What do you call a group of toads?",
        choice1: "Gaggle",
        choice2: "A knot",
        choice3: "toad group",
        choice4: "Bunch",
        answer:2,
    },
    {
        question: "What is the wettest city in the US?",
        choice1: "Portland, OR",
        choice2: "New Orleans, LA",
        choice3: "Seattle, WA",
        choice4: "Mobile, AL",
        answer:4,
    },
    {
        question: "Which insect shorted out an early super computer and inspired the term Computer Bug?",
        choice1: "Mosqito",
        choice2: "Moth",
        choice3: "Bee",
        choice4: "Dragon fly",
        answer:2,
    },
]
// For Counter
const SCORE_POINTS = 100
const MAX_QUESTIONS = 20

//Functioin to start game
startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

//Function to get a new question
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
// incrementing question by one what question to ask
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    //Function looks at number for answer
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}


//Check if question is Correct or Incorrect toggle red for incorrect or green for corrrect
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
//If Correct increase score
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
//Timeout to show if red or green
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()