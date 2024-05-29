

slider = {

    slideTime: 5000,

    init:{
        _(){

            setInterval(function(){
            
                const date = new Date();
                console.log(date.toLocaleTimeString());

                // Do a timed repeat for loop or event action call
                // not quite done with this
    
                const slide1 = document.getElementById("slide1");
                const slide2 = document.getElementById("slide2");
    
                slide2.classList.remove("hidden");
                slide2.classList.add("show");
    
                slide1.classList.remove("show");
                slide1.classList.add("hidden");
    
                setTimeout(function(){
                    const slide3 = document.getElementById("slide3");
                    const slide2 = document.getElementById("slide2");
    
                    slide3.classList.remove("hidden");
                    slide3.classList.add("show");
    
                    slide2.classList.remove("show");
                    slide2.classList.add("hidden");
    
                    setTimeout(function(){
                        // The end is the begining
                        const slide3 = document.getElementById("slide3");
                        const slide1 = document.getElementById("slide1");
    
                        slide1.classList.remove("hidden");
                        slide1.classList.add("show");
    
                        slide3.classList.remove("show");
                        slide3.classList.add("hidden");
                        
                    }, self.slider.slideTime);
    
                },  self.slider.slideTime);
                
            }, self.slider.slideTime);


        }
    }
}

window.onload = function(){
    slider.init._();
}
