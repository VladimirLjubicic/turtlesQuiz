(function(){

	angular
		.module('turtleFacts')
		.controller('resultsCtrl', ResultsController);

		ResultsController.$inject = ['quizMetrics', 'dataService']

		function ResultsController(quizMetrics, dataService){
		var vm = this;

			vm.reviewLength = dataService.quizQuestions.length -1;
			vm.quizMetrics = quizMetrics;
			vm.dataService = dataService;
			vm.activeQuestion = 0;
			vm.getAnswerClass = getAnswerClass;
			vm.setActiveQuestion = setActiveQuestion;
			vm.reviewNextQuestion = reviewNextQuestion;
			vm.reviewPreviousQuestion = reviewPreviousQuestion;
			vm.quizToIndex = quizToIndex;
			vm.correctAnswersToTotal = correctAnswersToTotal;
			vm.scorePercentage = scorePercentage;

			function getAnswerClass(index){
				if (index === quizMetrics.correctAnswers[vm.activeQuestion]) {
					return "correct-answer";
					
				}else if (index === dataService.quizQuestions[vm.activeQuestion].selected ) {
					return "incorrect-answer";
					
				}
			};

			function setActiveQuestion(index){
				vm.activeQuestion = index;
			};

			function reviewNextQuestion(){
				vm.activeQuestion++
			};
			function reviewPreviousQuestion(){
				vm.activeQuestion--
			};

			function quizToIndex(status){
				quizMetrics.changeState("results", false);
				quizMetrics.numCorrect = 0;

				for(var i = 0; i < dataService.quizQuestions.length; i++){
					var data = dataService.quizQuestions[i];

					data.selected = null;
					data.correct = null;
				}

			};

			function correctAnswersToTotal(){
				return quizMetrics.numCorrect + ' / ' + dataService.quizQuestions.length;
			};

			function scorePercentage(){
				return quizMetrics.numCorrect / dataService.quizQuestions.length * 100;
			}

		}	

})();