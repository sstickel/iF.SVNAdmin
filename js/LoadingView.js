(function (jQ) {
  "use strict";
  
  brite.registerView("LoadingView", {}, {
    
    create: function (data, config) {
      return jQ("#tmpl-LoadingView").render();
    },
    
    postDisplay: function (data, config) {
    }
    
  });
  
}(jQuery));