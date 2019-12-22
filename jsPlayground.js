var myModule = (function() {
    'use strict';
  
    var _privateProperty = 'Hello World, I am here!!!';
    var alert_message = 'Chrome!!!'
      
    function _privateMethod() {
      console.log(_privateProperty);
    }
      
    return {
      publicMethod: function() {
        _privateMethod();
      },
      alert: alert_message
    };
  }());

var addElements = (function() {
  'use strict';

  var message = "Element "
  var id = 0

  function _add(parentId, elementTag, elementId, html) {
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId+id, html);
    id++;
    newElement.innerHTML = html;
    p.appendChild(newElement);
  }

  return {
    newEle: function(parentId, elementTag, elementId, html) {
      _add(parentId, elementTag, elementId, html);
    }
  }
}());
    
  myModule.publicMethod();                    // outputs 'Hello World'   
  console.log(myModule._privateProperty);     // is undefined protected by the module closure
  //myModule._privateMethod();                  // is TypeError protected by the module closure
  //alert(myModule.alert);
  //var anothermodule = myModule.publicMethod();
  var ele = '<p>New Element!!!</p>'
  for (let step = 0; step < 100; step++) {
    addElements.newEle('extras', 'p', 'para-', ele);
    await TimeRanges(100);
  };
  