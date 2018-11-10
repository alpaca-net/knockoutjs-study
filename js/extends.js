// extend
(function () {
  function extend(_super, sub) {
    for (var k in _super) {
      if (!_super.hasOwnProperty(k)) {
        continue;
      }

      if (Array.isArray(_super[k])) {
        sub[k] = _super[k].slice(0);
        for(var i = 0; i < _super[k].length; i++) {
          if (typeof _super[k][i] === 'object') {
            sub[k][i] = {};
            extend(_super[k][i], sub[k][i]);
          }
        }
      } else if (typeof _super[k] === 'object') {
        sub[k] = {};
        extend(_super[k], sub[k]);
      } else {
        sub[k] = _super[k];
      }
    }
  }
  go.extend = extend;
})();
