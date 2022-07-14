// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"public/script/universal/check.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkAS = checkAS;
exports.checkDateFromId = checkDateFromId;
exports.checkID = checkID;
exports.checkLen = checkLen;
exports.checkLet = checkLet;
exports.checkNum = checkNum;
exports.checkYear = checkYear;
exports.checkYearFromId = checkYearFromId;

//function checking for any number
function checkNum(string) {
  return /[0-9]/.test(string);
} //function checking for @ symbol


function checkAS(string) {
  for (var key in string) {
    if (string[key] == "@") {
      return true;
    }
  }

  return false;
} //function checking for any letter


function checkLet(string) {
  return /[a-z]/.test(string);
} //function checking for valid year


function checkYear(date) {
  var time = new Date();
  var year = time.getFullYear();
  return year >= date;
} //function checking if id is correct with alghoritm


function checkID(id) {
  var x = 1 * id[0] + 3 * id[1] + 7 * id[2] + 9 * id[3] + 1 * id[4] + 3 * id[5] + 7 * id[6] + 9 * id[7] + 1 * id[8] + 3 * id[9];
  var y = x.toString();
  var z = 10 - y.slice(-1);
  return id[10] == z;
} //function checking length of string


function checkLen(string) {
  var x = 0;

  for (var key in string) {
    x++;
  }

  return x;
} //function checking date of birth from id


function checkDateFromId(id) {
  var yearB = new Array();
  var birthY = 0;
  var birthM = 0;
  var birthD = 0;
  yearB[1] = id[0];
  yearB[2] = id[1];
  var pom = Number(id[2]);
  var base = 19;
  base = base + pom / 2;
  yearB[0] = base;
  var dif = id[2] + "0";
  birthM = id[2] + id[3] - dif;
  birthY = yearB[0] + yearB[1] + yearB[2];
  birthD = id[4] + id[5];

  if (birthM < 10) {
    birthM = "0" + birthM;
  }

  return birthY + "-" + birthM + "-" + birthD;
} //function checking year of birth from id


function checkYearFromId(id) {
  var yearB = new Array();
  var birthY = 0;
  yearB[1] = id[0];
  yearB[2] = id[1];
  var pom = Number(id[2]);
  var x = 19;
  x = x + pom / 2;
  yearB[0] = x;
  birthY = yearB[0] + yearB[1] + yearB[2];
  return birthY;
}
},{}],"public/script/universal/validInput.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invalidID = invalidID;
exports.invalidLet = invalidLet;
exports.invalidNum = invalidNum;

var _check = require("./check.js");

function validBorder(item) {
  item.style.border = "1px solid black";
  item.style.borderRadius = "5px";
}

function invalidBorder(item) {
  item.style.border = "2px solid red";
  item.style.borderRadius = "5px";
}

function invalidNum(e) {
  if ((0, _check.checkNum)(e.target.value)) {
    invalidBorder(e.target);
  } else {
    validBorder(e.target);
  }
}

function invalidLet(e) {
  if ((0, _check.checkLet)(e.target.value)) {
    invalidBorder(e.target);
  } else {
    validBorder(e.target);
  }
}

function invalidID(e) {
  if ((0, _check.checkLen)(e.target.value) == 11) {
    if (!(0, _check.checkLet)(e.target.value) && (0, _check.checkID)(e.target.value)) {
      validBorder(e.target);
    } else {
      invalidBorder(e.target);
    }
  }
}
},{"./check.js":"public/script/universal/check.js"}],"public/script/script.js":[function(require,module,exports) {
"use strict";

var _check = require("./universal/check");

var _validInput = require("./universal/validInput");

document.getElementById('saveButton').addEventListener('click', save);
document.getElementById('name').addEventListener('input', _validInput.invalidNum);
document.getElementById('surname').addEventListener('input', _validInput.invalidNum);
document.getElementById('id').addEventListener('input', _validInput.invalidID);
var block = document.createElement('p');
block.setAttribute("id", "block");

function fireAlert(mess) {
  var alert = document.createElement('div');
  var alertTxt = document.createElement('div');
  var alertBtt = document.createElement('button');
  var block = document.querySelector('#block');
  alertTxt.innerText = mess;
  alertBtt.innerText = "OK";
  alert.setAttribute("id", "alertDiv");
  alertTxt.setAttribute("id", "alertTxt");
  alertBtt.setAttribute("id", "alertBtt");
  alertBtt.setAttribute("type", "button");
  alert.style.display = "flex";
  alert.style.justifyContent = "center";
  var main = document.querySelector('#main');
  var body = document.querySelector('body');
  body.appendChild(alert);
  alert.appendChild(alertTxt);
  alert.appendChild(alertBtt);

  function alertRemove() {
    alert.remove();
  }

  setTimeout(alertRemove, 4000);
  alertBtt.onclick = alertRemove;

  if (block) {
    block.remove();
  }
}

function save(event) {
  var form = document.querySelector('form');
  var main = document.querySelector('#main');
  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var email = document.getElementById('email').value;
  var desc = document.getElementById('desc').value;
  var id = document.getElementById('id').value;
  var gender;

  if (id[9] % 2 == 0) {
    gender = "kobieta";
  } else {
    gender = "mężczyzna";
  }

  var date = new Date();
  var fullYear = date.getFullYear();
  var age = fullYear - (0, _check.checkYearFromId)(id);

  if (name && surname && email && id && age) {
    if (!(0, _check.checkNum)(name) && !(0, _check.checkNum)(surname) && (0, _check.checkAS)(email) && !(0, _check.checkLet)(id)) {
      if ((0, _check.checkID)(id)) {
        block.innerText = "Imie: ".concat(name, " \n                                Nazwisko: ").concat(surname, " \n                                Wiek: ").concat(age, " \n                                E-mail: ").concat(email, " \n                                P\u0142e\u0107: ").concat(gender, "\n                                Pesel: ").concat(id, "\n                                Data urodzenia: \n                                ").concat((0, _check.checkDateFromId)(id), "\n                                Opis: ").concat(desc);
        main.appendChild(block);
      } else {
        fireAlert("Wpowadź poprawny pesel");
      }
    } else {
      fireAlert("Wprowadź poprawne dane");
    }
  } else {
    fireAlert("Wprowadź dane");
  }
}
},{"./universal/check":"public/script/universal/check.js","./universal/validInput":"public/script/universal/validInput.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58777" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","public/script/script.js"], null)
//# sourceMappingURL=/script.77fc25d1.js.map