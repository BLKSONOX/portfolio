___ = {

    matriceCollections: [],
    
    anim:{
        
        _(_svg,dur, count){
            /* CSS and SVG chain mode */   
        }
    },

    chainMatrice: {
        _(collection){
            /* Chain SVGS document mode */
        }
    },
    generateGraphicsDocument: {

    },
    generatePageDocument:{
        _(article){

        },
    }
}

/* WIP */
/* animations stage layers */
/* 
    SVGs functions like chains put together when doing animations in document animations 
    and CSS animations combined with blending modes makes it possible to create video channel graphics
    
    Browsers uses GPU or fall backs CPU with SVG graphics
    which means you can translate and transcode SVG graphics into video streams layered
    scale? would just be scale 

    generate styelsheet for generic use of the various modes

    why is this useful? full broadcast control of said streams or bit streams
    why outside of the standards? 

    codec control

    and with full channel controll to have multiple video channels mixed

*/
___.matriceCollections[0] = 
[ 

 /* 
    back plate can be direct video feed formed by rectangles the browser draws them anyways which means
    latency would be at an all time low it's mostly cordinates write out of the compression algorithms
    as seen possible to do in pure document mode  
    current delay oun this setup; 700nano seconds at the heaviest during profiling of this 20 SVG files in a flipbook in CSS 500x500 frame lowest 1u during the animation which means there's room for improvement

    direct browser draw native browser engine
    which means the SVG format also translates into operating system standards

    in operating systems the draws are still until moved and follows screen hz ranges when something moves
    30hz is if i'm not mistaken equal to around 24fps in old hardware using the left over hz space for pixel interpolation
    which is pixel calulations, frame matching and antialiazing

    the old way, even when doing 2D and 3D framebuffers mirrored the geometry 
    and then added differentials on draw

    always back to base draw which is symetrical

    older graphics cards had to, from 2mb to 120mb ram
    and a ten CPU cells 5-10mhz each 

    often mistaken as the memory modules

    which also was ten of, yep, there was a period during the release two cards was one card, not SLI the cards was supposed to be shiped as two
    SDK kit of Vooodo 2 shipped with two cards, 3Dfx chip logo design

    why is this important and relevant to this document? understanding graphics and geomtry compression

    https://i.redd.it/yqy0khco95l11.jpg

    https://en.wikipedia.org/wiki/3dfx

    one module card one main card, original SDK 10 10
    the secret to these cards? where everyoen did it wrong all the way up until now?

    buffer draws then read from disk was how it was supposed to be, channeled as live video feeds instead
    the chips were draw engines, not streaming engines

    all maps were just regular bitmap draws, which means:
    CPU could handle the bitmap draws while the 3D cards did the geometric draws and the CPU at the same time handle the video stream of it

    why intel 386 CPU had special M video capabilities of perfectly streaming with additional tasks running video and sound
    
    cards was more powerfull then what was shown, 3D drawing cards in 3D space, important differential, just vector points
    how i figured it out as a kid; scientific calculators 3M engines have the same egine

    yes we have the canvas element that does the same things, however understaning and disecting the math and functions behind it
    makes it possible to do even more and translates beyound just the web

    it also translates into traditional and classical art as well as other mediums and devices

*/
 'rect:0.490234:0.221191:500x500',
 'M239.209 268.916C231.805 266.357 225.642 261.14 221.816 254.267L221.021 252.762V296.561L239.209 276.896V268.916Z',
 'M266.994 253.28C263.813 258.146 258.445 261.758 252.68 261.758V262.294C252.68 262.294 253.475 275.589 239.211 268.917C231.806 266.358 225.643 261.14 221.816 254.267L221.021 252.762V296.56L239.211 276.894V271.676C244.281 274.134 271.169 286.175 271.02 260.588C271.02 260.905 271.02 247.008 271.02 247.008L266.994 253.28Z',
 'M266.994 225.296C263.813 230.162 258.445 233.774 252.68 233.774V261.82C252.68 261.82 253.475 275.115 239.211 268.442C231.806 265.883 225.643 260.666 221.816 253.792L221.021 252.287V296.086L239.211 276.419V271.201C244.281 273.66 271.169 285.701 271.02 260.114C271.02 232.922 271.02 219.024 271.02 219.024L266.994 225.296Z',
 'M266.994 225.296C263.813 230.162 258.446 233.774 252.68 233.774V261.82C252.68 261.82 253.475 275.115 239.211 268.442L239.211 249.879C231.806 247.32 225.643 242.102 221.816 235.229L221.021 233.724L221.021 236.408V296.086L239.211 276.419V271.201C244.281 273.66 271.169 285.701 271.02 260.114C271.02 232.922 271.02 219.024 271.02 219.024L266.994 225.296Z'
];
