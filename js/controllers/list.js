(function(){

	angular
		.module('turtleFacts')
		.controller("listCtrl", ListController);

        ListController.$inject = ['quizMetrics', 'dataService'];

		function ListController(quizMetrics, dataService){
			var vm = this;

            vm.quizMetrics = quizMetrics;
			vm.data = dataService.turtlesData;
			vm.activeTurtle = {};
			vm.changeActiveTurtle = changeActiveTurtle;
            vm.startQuiz = startQuiz;
            vm.search = "";

            function startQuiz(){
                quizMetrics.changeState("quiz", true);
            }

			function changeActiveTurtle(index){
				vm.activeTurtle = index;
			}
		}

})();