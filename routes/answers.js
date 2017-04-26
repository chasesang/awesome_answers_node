const express = require('express');

const router = express.Router({mergeParams: true});
const Models = require('../models/index');

const Question = Models.Question;
const Answer = Models.Answer;


// Ansers#create URL: /questions/:questionsId/answers VERB: Post
router.post('/', function (req, res){
// res.send(Object.assign({}, req.body, req.params))
// // adding req.body and params to the empty object
  const questionId = req.params.questionId;
  Answer
  .create({content: req.body.content, QuestionId: questionId})
  .then(function (){ res.redirect(`/questions/${questionId}`)});

})


module.exports = router;












/* */
