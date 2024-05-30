/*
    
    How sliders usually are done
    rotation figured out, then change the IMG source tag

    set interval ID then unset it

    this method i backwards compatible with extremley old browsers
    and follows standards, and the code for it is shorter

    it's not just an image slider sate function calls

    you can solve this with CSS, however when delivering to serverside 
    this is aproximatly the solution, because of doucment and data flow control

    Why React has components, also why there's a dispute on the browser covering the CSS Object Model
    as a javaScript API, document standard still being developed even if Mozilla and others says it's depracated

    

    https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model



*/
slider = {

    slideTime:      0,
    intervalCount:  0,
    seconds:        0,
    interval:       0,

    init:{
        _(){

            self.slider.interval = setInterval(function(){

                const d      = new Date();
                const slide1 = document.getElementById("slide1");
                const slide2 = document.getElementById("slide2");
                const slide3 = document.getElementById("slide3");

                self.slider.seconds     = d.getSeconds();
                
                if(self.slider.seconds <= 30) clearInterval(self.slider.interval);

                if(self.slider.intervalCount === 1 || self.slider.intervalCount === 0){
        
                    slide2.classList.remove("hidden");
                    slide2.classList.add("show");
                    slide1.classList.remove("show");
                    slide1.classList.add("hidden");
                    // add callback function within the class to change IMG tag after first slide run is shown
                }

                if(self.slider.intervalCount === 2 || self.slider.intervalCount === 0){

                    slide3.classList.remove("hidden");
                    slide3.classList.add("show");
                    slide2.classList.remove("show");
                    slide2.classList.add("hidden");
                    // add callback function within the class to change IMG tag after first slide run is shown
                }

                if(self.slider.intervalCount === 3 || self.slider.intervalCount === 0){

                    slide1.classList.remove("hidden");
                    slide1.classList.add("show");
                    slide3.classList.remove("show");
                    slide3.classList.add("hidden");
                // add callback function within the class to change IMG tag after first slide run is shown
            
                }
                
                if(self.slider.intervalCount > 2){
                    self.slider.intervalCount = 0;
                } 

                self.slider.intervalCount = self.slider.intervalCount+1;
                    
                }, self.slider.slideTime, "slider");
            
            }

        }
    }

slider.slideTime = 3000;
slider.init._();
