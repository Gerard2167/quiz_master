const questions = [
    {
        question: "¿Cuál es el planeta más cercano al sol?",
        options: ["Venus", "Marte", "Mercurio", "Júpiter"],
        answer: 2
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        options: ["Atlántico", "Índico", "Ártico", "Pacífico"],
        answer: 3
    },
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Berlín", "Madrid", "París", "Roma"],
        answer: 3
    },
    {
        question: "¿Qué animal es conocido como el 'rey de la selva'?",
        options: ["Elefante", "León", "Tigre", "Gorila"],
        answer: 1
    },
    {
        question: "¿Cuál es el elemento químico con el símbolo 'O'?",
        options: ["Oro", "Oxígeno", "Osmio", "Oxalato"],
        answer: 1
    },
    {
        question: "¿En qué año llegó el hombre a la luna?",
        options: ["1965", "1969", "1972", "1975"],
        answer: 1
    },
    {
        question: "¿Qué país tiene la mayor población del mundo?",
        options: ["Estados Unidos", "India", "China", "Rusia"],
        answer: 2
    },
    {
        question: "¿Quién escribió 'Cien años de soledad'?",
        options: ["Mario Vargas Llosa", "Julio Cortázar", "Gabriel García Márquez", "Isabel Allende"],
        answer: 2
    },
    {
        question: "¿Cuál es la fórmula química del agua?",
        options: ["CO2", "H2O", "O2", "H2SO4"],
        answer: 1
    },
    {
        question: "¿Qué país ganó la Copa Mundial de Fútbol en 2018?",
        options: ["Alemania", "Brasil", "Argentina", "Francia"],
        answer: 3
    },
    {
        question: "¿Qué científico desarrolló la teoría de la relatividad?",
        options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"],
        answer: 2
    },
    {
        question: "¿Cuál es la capital de Australia?",
        options: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
        answer: 2
    },
    {
        question: "¿Qué instrumento mide los terremotos?",
        options: ["Barómetro", "Termómetro", "Sismógrafo", "Higrómetro"],
        answer: 2
    },
    {
        question: "¿Quién pintó la 'Mona Lisa'?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: 2
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
        answer: 0
    },
    {
        question: "¿Qué país es conocido como la cuna del Renacimiento?",
        options: ["Francia", "España", "Italia", "Grecia"],
        answer: 2
    },
    {
        question: "¿En qué año comenzó la Segunda Guerra Mundial?",
        options: ["1914", "1939", "1941", "1945"],
        answer: 1
    },
    {
        question: "¿Qué poeta chileno ganó el Premio Nobel de Literatura en 1971?",
        options: ["Pablo Neruda", "Gabriela Mistral", "Vicente Huidobro", "Nicanor Parra"],
        answer: 0
    },
    {
        question: "¿Qué gas es esencial para la respiración humana?",
        options: ["Nitrógeno", "Hidrógeno", "Oxígeno", "Dióxido de carbono"],
        answer: 2
    },
    {
        question: "¿Cuál es el libro más vendido en el mundo después de la Biblia?",
        options: ["El Corán", "Don Quijote de la Mancha", "Harry Potter y la piedra filosofal", "El Señor de los Anillos"],
        answer: 2
    },
    // Agrega más preguntas aquí...
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const options = document.querySelectorAll('.option');
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    options.forEach((option, index) => {
        option.textContent = current.options[index];
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        alert("¡Correcto!");
        score += 10;
    } else {
        alert("Incorrecto.");
        score -= 5;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("¡Juego terminado!");
    }
}

document.addEventListener('DOMContentLoaded', loadQuestion);
