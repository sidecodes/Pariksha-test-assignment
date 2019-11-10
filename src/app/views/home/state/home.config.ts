export const questions = [
    {
        id: 1,
        question: "Which state government has declared Pakke Paga Hornbill Festival (PPHF) as the “State Festival”?",
        options: [
            "Manipur",
            "Arunachal Pradesh",
            "Nagaland",
            "Meghalaya"
        ],
        correctAnswer: "Arunachal Pradesh",
        selectedAnswerIndex: -1
    },
    {
        id: 2,
        question: "Which state government has decided to give 5% quota for Kapu community in 10% reservation for EWS?",
        options: [
            "Andhra Pradesh",
            "Jharkhand",
            "Tamil Nadu",
            "Telangana"
        ],
        correctAnswer: "Andhra Pradesh",
        selectedAnswerIndex: -1
    },
    {
        id: 3,
        question: "Who has been bestowed with the 2017 Saraswati Samman?",
        options: [
            "Ramakantha Rath",
            "Padma Sachdev",
            "Mahabaleshwar Sail",
            "Sitanshu Yashashchandra"
        ],
        correctAnswer: "Mahabaleshwar Sail",
        selectedAnswerIndex: -1
    }
]

export function resetSelectedIndex() {
    questions.forEach(question => {
        question.selectedAnswerIndex = -1;
    })
}