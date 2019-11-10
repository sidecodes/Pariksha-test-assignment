webpackJsonp(["common"],{

/***/ "./src/app/views/home/state/home.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.questions = [
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
];
function resetSelectedIndex() {
    exports.questions.forEach(function (question) {
        question.selectedAnswerIndex = -1;
    });
}
exports.resetSelectedIndex = resetSelectedIndex;


/***/ })

});
//# sourceMappingURL=common.chunk.js.map