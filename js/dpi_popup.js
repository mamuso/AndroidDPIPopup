var DPICalc = {
  // bind and call to set values
  init: function() {
    this.inputs = document.getElementsByTagName("input");
    for(i=0; i<this.inputs.length; i++) {
      // bind keyup
      this.inputs[i].onkeyup = function() {
        v = this.value,
        d = this.id;
        // is this a number?
        if(!isNaN(parseFloat(v)) && isFinite(v)) {
          DPICalc.setValues(d, v);
        }
      };
    };
  },
  
  
  setValues: function(d,v) {
    this.fail = false;
    for(i=0; i<inputs.length; i++) {
      cv = v * inputs[i].id / d;
      inputs[i].value = cv;
      if((cv % 1) != 0) { this.fail = true; }
    }
    this.checkFail(d);
  },

  checkFail: function(d) {
    p = document.getElementById(d).parentNode;
    p.className = (this.fail ? "fail" : "");
  }
};

window.onload = DPICalc.init;