var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/get_quiz', function(req, res, next) {
    let arr = {
        quiz:[
            {
                "numero": 1, "pergunta": "quanto é 2 + 2?","icone":null,
                "respostas": [
                    {"idresposta": 1, "resposta":"1", "certa":false},
                    {"idresposta": 2, "resposta":"2", "certa":false},
                    {"idresposta": 3, "resposta":"3", "certa":false},
                    {"idresposta": 4, "resposta":"4", "certa":true}
                ]
            },
            {
                "numero": 2, "pergunta": "quanto é 4 * 5?","icone":null,
                "respostas": [
                    {"idresposta": 1, "resposta":"5", "certa":false},
                    {"idresposta": 2, "resposta":"4", "certa":false},
                    {"idresposta": 3, "resposta":"20", "certa":true},
                    {"idresposta": 4, "resposta":"10", "certa":false}
                ]
            },
            {
                "numero": 3, "pergunta": "quanto é 16/8?","icone":null,
                "respostas": [
                    {"idresposta": 1, "resposta":"1", "certa":false},
                    {"idresposta": 2, "resposta":"2", "certa":true},
                    {"idresposta": 3, "resposta":"3", "certa":false},
                    {"idresposta": 4, "resposta":"4", "certa":false}
                ]
            },
            {
                "numero": 4, "pergunta": "quanto é 15620 - 4896?","icone":null,
                "respostas": [
                    {"idresposta": 1, "resposta":"10724", "certa":true},
                    {"idresposta": 2, "resposta":"11789", "certa":false},
                    {"idresposta": 3, "resposta":"9653", "certa":false},
                    {"idresposta": 4, "resposta":"89", "certa":false}
                ]
            },
            {
                "numero": 5, "pergunta": "Em média, quantos olhos tem cada pessoa?","icone":null,
                "respostas": [
                    {"idresposta": 1, "resposta":"menos que 2", "certa":true},
                    {"idresposta": 2, "resposta":"2", "certa":false},
                    {"idresposta": 3, "resposta":"mais que 2", "certa":false}
                ]
            },

        ]
    }
    res.json(arr)

});

module.exports = router;