var global = this;

// log
(function (selector) {
  function log() {
    console.log.apply(console, arguments);
    var args = [].slice.apply(arguments);
    var logStr = (args.length > 1)? JSON.stringify(args) : JSON.stringify(args[0]);
    if (selector && global.document) {
      var lst = document.querySelector(selector + '>' + 'ul');
      if (!lst) {
        lst = document.createElement('ul');
        document.querySelector(selector).appendChild(lst);
      }
      lst.innerHTML += '<li>'+logStr+'</li>';
    }
  }
  go.log = log;
})('#result');
