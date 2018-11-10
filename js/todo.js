(function () {
    function ViewModel() {
        var self = this;

        self.todoList = ko.observableArray();
        self.todoSummary = ko.observable('');
        var subscription = self.todoSummary.subscribe(function(newValue){
          if(newValue === ""){
            newValue = "初期化処理";
          }
          console.log("subscription: " + newValue);
        });
        self.addTodo = function () {
            var todo = {
                summary: self.todoSummary()
            };

            self.todoList.push(todo);
            self.todoSummary('');
        };
    }

    ko.applyBindings(new ViewModel());
})();
