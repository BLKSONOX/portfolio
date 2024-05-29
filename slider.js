


/*
    
    How sliders usually are done
    rotation figured out, then change the IMG source tag

    set interval ID then unset it

    this method i backwards compatible with extremley old browsers
    and follows standards, and the code for it is shorter

    it's not just an image slider sate function calls

*/
slider = {

    slideTime: 5000,

    init:{
        _(){

           const interval = window.setInterval(function(){
            
                const date = new Date();
                console.log(date.toLocaleTimeString());
    
                const slide1 = document.getElementById("slide1");
                const slide2 = document.getElementById("slide2");
    
                slide2.classList.remove("hidden");
                slide2.classList.add("show");
    
                slide1.classList.remove("show");
                slide1.classList.add("hidden");

                // add callback function within the class to change IMG tag
    
                setTimeout(function(){
                    const slide3 = document.getElementById("slide3");
                    const slide2 = document.getElementById("slide2");
    
                    slide3.classList.remove("hidden");
                    slide3.classList.add("show");
    
                    slide2.classList.remove("show");
                    slide2.classList.add("hidden");

                    // add callback function within the class to change IMG tag
    
                    setTimeout(function(){
                        // The end is the begining, logic
                        const slide3 = document.getElementById("slide3");
                        const slide1 = document.getElementById("slide1");
    
                        slide1.classList.remove("hidden");
                        slide1.classList.add("show");
    
                        slide3.classList.remove("show");
                        slide3.classList.add("hidden");

                        // add callback function within the class to change IMG tag

                        return self.slider.init._();
                        
                    }, self.slider.slideTime);
    
                },  self.slider.slideTime);
                
            }, self.slider.slideTime);


        }
    }
}

slider.init._();
