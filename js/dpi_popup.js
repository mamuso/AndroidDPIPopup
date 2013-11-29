var DPICalc = {
    // bind and call to set values
    init: function() {
        this.inputs = document.getElementsByTagName("input");
        for(i=0; i<this.inputs.length; i++) {
            if(inputs[i].getAttribute("type") == "text" && !inputs[i].disabled) {
    
                // bind keydown
                this.inputs[i].onkeydown = function() {
                    DPICalc.cv = this.value;
                },
                
                // bind keyup
                this.inputs[i].onkeyup = function() {
                    v = this.value,
                    d = this.id;
                    // is this a number?
                    if(!isNaN(parseFloat(v)) && isFinite(v)) {
                        if(DPICalc.cv != this.value){ DPICalc.setValues(d, v);}
                    } else {
                        p = document.getElementById(d).parentNode.className = "warn";
                    }
                }
            }
    
            // binding checkboxes
            if(inputs[i].getAttribute("type") == "checkbox") {
                this.inputs[i].onchange = function() {
                    e = document.getElementById(this.value);
                    if(this.checked) {
                        e.disabled = "";
                    } else {
                        e.value = "";
                        e.disabled = "disabled";
                    }
                }
            }
        };
    },

    setValues: function(d,v) {
        this.fail = false;
        for(i=0; i<inputs.length; i++) {
            if(inputs[i].getAttribute("type") == "text" && !inputs[i].disabled) {
                cv = v * inputs[i].id / d;
                inputs[i].value = cv;
                if((cv % 1) != 0) { this.fail = true; }
            }
        }
        this.checkFail(d);
    },

    checkFail: function(d) {
        p = document.getElementById(d).parentNode;
        p.className = (this.fail ? "fail" : "");
    }
};

window.onload = DPICalc.init;