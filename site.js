___ = {


    splashSiteBrand: "M45.9736 48.5647C42.7927 53.4312 37.425 57.0435 31.6597 57.0435V85.0886C31.6597 85.0886 32.4549 98.3837 18.1906 91.7111V16.1548C10.7852 13.5961 4.62221 8.37842 0.795219 1.5051L0 0V59.6774V119.355L18.1906 99.6881V94.4704C23.2602 96.9288 50.1485 108.97 49.9994 83.3828C49.9994 56.1906 49.9994 42.2934 49.9994 42.2934L45.9736 48.5647Z",

    anim:{
        
        _(_svg,dur, count){
            
        }
    },

    getMatrice:{ 
        _(source, dest){

        }
    },

    matricePartition: {
        _(start, mid, end){
                /* 
                    when working with differentials it has to be differentials that seems like uniformity
                    mili second matrice partitioning
                    which is extremley labor intensive for the CPU and GPU
                    which is why one partition up the element into their own matrices, to make the shapes seem uniform
                    Tools automate this, they part the whole objects

                    Paralleled animated ojects usually disconnected at their matrice calculation usually on 2D surfaces that's clear cuts on more complex organic shapes, aproximatly 
                    overlays are used and implemented as well to cover up seem problems

                    all of it aproximatly calculated according to said shape

                    how? M is the SVG object root document from there; inside of matrice of the uniformed shape, it's possible

                    it makes graphics elements their own VM
                */
        }
    },
}