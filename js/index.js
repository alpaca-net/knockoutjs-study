window.onload = function () {
  var ViewModel = function(first, last) {
      this.firstName = ko.observable(first);
      this.lastName = ko.observable(last);
      this.fullName = ko.computed(function() {
          return this.firstName() + " " + this.lastName();
      }, this);
  };
  // このViewModelとView(上のexample.html)を関連付け
  ko.applyBindings(new ViewModel("hiromu", "sasaki"));
}
