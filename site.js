/* 
    
    Private semi useful framework for private sites
    
    Project title: ___

    Author Bendikt Martin Myklebust

    why this class structure?
    it follows the webstandards own object convention and not tutorial script type convention
     
    Structs
    URL { protocols: [], href: "", origin: "null", protocol: "file:", username: "", password: "", host: "", hostname: "", port: "", pathname: "" }

    why do we write comments on code?
    to write less code, and to plan more

    the more everything is mapped out the smaller the code base gets when going into production
    a huge part of Rock Solid programming style

    _() exec, init function 
    __() Callback function, where options go

    use _() for testing for now, sort code when most code is minimized

*/

___ = {

    matriceCollections: [],
    articles:           [],
    uris:               [],
    url: new URL(location),
    
    
    /*
        ASSII or SVG Animations
    */
    anim:{
        
        _(_svg,dur, count){
            /* CSS and SVG chain mode */   
        }
    },

    /* 
        Chain matrice also known as a scene 
        comparable with ANSI Escape blocks
    */
    chainMatrice: {
        _(collection){
            /* Chain SVGS document mode */
        }
    },
    generateGraphicsDocument: {},
    
    /*
        
        Threads
        this is how threads behind the software that's behind the software looks like
        mostly written in either binary, octal or in alot of cases hexidecimals

        it's also drawing egines for 2D and 3D graphics
        also usable algorithm for Event loops, listeners, call back functions

    */
    threads: {

        /*
            _() exec, init function 
        */
        _(){

            /* 
                UNIX time as thread root, time formats are still octals
            */
            ThreadRoot  = Math.floor(Date.now() / 1000);
            Thread      = ThreadRoot.toString();
            Threads     = [Thread.substring(9), Thread.substring(8), Thread.substring(7)];

            
            /*
                
                Callback functions usually threaded through the for loops intertwined
                usually in the inner loop

                callback functions in JavaScript and C are used to keep the loop alive
                in C it's pointers mixed with loops

                this way you can manage garbage collection by keep alive principles
                just like http1.1 protocol

                testing this loop properly in JavaScript has not been done yet, it works in C and in Python


            */
            for(i = Threads[0]; Thread < i; i++){
                for(x = Threads[1]; i < x; x++){
                    for(y = Threads[2]; x < i; y++){

                        /* 
                            on a web server multiple concurrent connections would be sorted in frequencey of 
                            Spawing new loops through callbacks

                            in this example every nth time we ping something
                        */
                        if(i % 2 == 0) console.log("threadded i times, every nth pulse: "+i);

                        // do if validation and equation of if larger then if not larger then
                        
                        // in threading the whole application exists within the thread loops
                        // the reason why JavaScript has callback functions, time interpolation inside of the loop

                        // fullly possible within JavaScript, in order for it to work it has to be not broken 
                        // easier said then done function calls breaks loops in javascript

                        // which is why the bind function exists, to not loose the scope

                        // why the struct structure of this class is set up the way it is, it's the same as C
                        // why the clock is the most important thing inside a computer

                    } 
                }
            }

        },

        /*
            __() Callback function, where options
        */
        __(){},

    },

    tpl: {
        _(type, _object){
            if(type == "page"){
                //document.body.innerHTML = ''; 

                /*
                    Threaded for loop
                    how to create a threaded for loop, multiple ways
                */
                _object = Object.values(_object);
                for(i = 0; i < _object.length; i++){
                    
                    // replace with callback function
                    document.title = _object[0]
                    
                    if(_object[i] == _object[1]){
                        
                        _tplConfig  = _object[1];
                        _tplConfig  = _tplConfig.split(':');

                        _tplConfig_  = _object[1];
                        _tplConfig_  = _tplConfig_.split(':');

                        for(x = 0; _tplConfig.length > x; x++){

                            _tplConfig[x] = _tplConfig[x].split('-');
                            
                            if(_tplConfig[x] === _tplConfig[0]){
                                // template width
                                //reset fullwidth array
                                _tplConfig[0] = 0;
                            }


                            console.log("______________");
                            for(y = 0; _tplConfig[x].length > y; y ++){

                                    
                                    /*
                                    
                                        array padding
                                        very useful for constraining the for loop
                                        and in creating rulesets for strictly typed string definitions and their position in a string
                                        in a contious loop the array number would increase thus one has to move from array to array

                                        using a math equation more complex then just it's as simple as +
                                        also useful, also known as the pointer

                                        why? unique identifier working with tables that's very useful if doing instructions sets and commands sets
                                        old way of doing things before struct existed was string objects, which still is very useful today

                                        Array padding also stems from combinators in math, in octal, hexidecimals, and decimals

                                    */
                                    if(_tplConfig[x][y+1]   == "top"     || 
                                    _tplConfig[x][y+1]      == "left"    ||  
                                    _tplConfig[x][y+1]      == "right"   ||  
                                    _tplConfig[x][y+1]      == "bottom"  ||
                                    _tplConfig[x][y+2]      == "top"     || 
                                    _tplConfig[x][y+2]      == "left"    ||  
                                    _tplConfig[x][y+2]      == "right"   ||  
                                    _tplConfig[x][y+2]      == "bottom"  ||
                                    _tplConfig[x][y+3]      == "top"     || 
                                    _tplConfig[x][y+3]      == "left"    ||  
                                    _tplConfig[x][y+3]      == "right"   ||  
                                    _tplConfig[x][y+3]      == "bottom"){

                                        /*
                                            
                                            When uneven results use match sets from the orignal object not parted
                                            programatically equal return 0

                                            the reason for why? 
                                            loop frequencies varies since there's padding inolved forward same applies to backwards
                                            the number gets used before it's even in the loop

                                            the reason JavaScript has the type undefined, in C it throws an exception while compiling

                                            same principles applies in regards to: Keep the loops alive
                                            you would have to change the main loop integer into a position

                                            like blowing soap bubbles, same physics princeples

                                            which is why array padding is useful for identifiers
                                            however there's also useful events when you don't need that and the holes from the missing data or wrong order is useful
                                            physics collisions and AI learning

                                        */
                                        
                                        if(_tplConfig[x][y+2] == undefined ){
                                            console.log("validated");
                                        }else{
                                        // find position owner
                                        //console.log(_tplConfig[x][y]);
                                        // console.log(_tplConfig[x][y+2]);
                                        console.log(_tplConfig[x][y]+"+"+_tplConfig[x][y+1]+"+"+_tplConfig[x][y+2]);
                                        }

                                        console.log("_____________________");

                                        if(_tplConfig[x][y+1] == undefined ){
                                            console.log("validated");
                                        }else{
                                        // find position owner
                                        console.log(_tplConfig[x][y]+"+"+_tplConfig[x][y+1]+"+"+_tplConfig[x][y+2]);
                                        // console.log(_tplConfig[x][y+1])
                                        }

                                        console.log("_____________________");

                                        if(_tplConfig[x][y+3] == undefined ){
                                            console.log("validated");
                                        }else{
                                        // find position owner
                                        // console.log(_tplConfig[x][y+3]);
                                        }



                                    
                                }
                                

                            }
                        }
                    }
                }

                /* element */
                // document.body.setAttribute("id", "ls");
                // document.body.appendChild(document.createElement("div"));
                // raisedMessages = document.querySelector("div");
                // raisedMessages.setAttribute("id","ls -l");
    
                /* Headline Debug */
                // raisedMessage = document.createElement("h1");
                // raisedMessages.appendChild(raisedMessage);
                // raisedMessage.setAttribute("id","ls-title");
                // content = document.createTextNode("Test Page");
                // raisedMessage.appendChild(content);

            }
            if(type == "css"){
                // use secondary HTML document, empty that out and print out on that as raw text without HTML tags
                // Tested it works, to have dynamically typed CSS use URI anchors and print on that document URI anchor route
                // needs an approach to routing and printing todo later when time is there
                // https://stackoverflow.com/questions/67527882/how-to-get-another-html-file-as-if-getting-it-by-document-without-using-jquery
            }
        },
        __(){

        }

    },

    /*
        Setup Page for URI paths, Events tied to URI paths, events tied to Protocol events and bindings
        and last brick sessions data
    */
    generateDebugPage:{
        _(){
            
        },
    },

    /*  
        Document HTML document, streams and channels, also Database Document stream and channels
        partition database in the same way

        byte read of database content optional
        create encrypted scheme of that later

    */
    generatePageDocument:{
        _(type =  null, depth = null, format = null, anchor = null){

            /* 
                null html document element useful for? hexdumps, hexstorage, reads and writes
                also if you want to create your own database structure on server side

                <data title="dataset">
                    <null>
                    </null>
                </data>

                null object is browser reset
                rest of the HTML tags carries additional data and javascript objects tied to them
                no documentation of the HTML tag exists, yet it's a legal tag within the standards

                allows for database creation manuall by hand through serverside 
                in regular pages it would be like this

                <article title="title" href="#uri">
                <article/>

            */
            if(format == "data"){ format = null; }

            form = document.createElement(format);

            
            /*

            
                !------------- DOCUMENT AND URI FORMATING EQUVILENT TO FILESYSTEM PARTITION TABLES -------------! 

               
                /partion 
                /partion1
                /partion2
                /partion3

                instead of Y space it's stacked in X space

                /partion/partion1/partion2/partion3

                HTML follows filesystem partitioning conventions in Y space inside of Y there's Z

                webstandards X cordinates points to Y cordinates that points to Z cortinates
                modern browsers are sandboxed which means they're running their own VM's for each tab

                one can extrapolate that the hash graph from the content is used within the browsers VMs
                all browsers are bundeled, their opensource versions are sepperate of then merged later into the bundles

                shard own bitstream of data, long time private project create database simple one


                !------------- DOCUMENT AND URI FORMATING EQUVILENT TO FILESYSTEM PARTITION TABLES -------------! 


            */


            /* 
                if anchor is of the right string type start URI partitioning
                root(also known as exponents)
            */

            if(anchor.indexOf("#/") == 0){ 
                str = anchor.split('#/');
                str = str[1].split('/');

                
                /*
                  
                    serialization into bind tree, spesify with array notation [] as options in input
                    serialize as : in bindtree array with event spesifications

                    singular serialization of page or document if not depth map defined
                    if all depths undefined run initialization of URI string
                    if either or run initialization of URI string

                    why? sometimes depths are completley empty other times not

                */


                // process URI string serialization here
                // this is also a cool algorithm for something

                if(typeof(str[1]) == undefined && typeof(str[2]) == undefined && typeof(str[3]) == undefined) self.___.uris.push(str);
                if(typeof(str[1]) == undefined || typeof(str[2]) == undefined || typeof(str[3]) == undefined) self.___.uris.push(str);


                /* 
                    if type of next to is not empty go bellow, if next levels exists either or is the applicable statements
                */
            if(typeof(str[1]) !== undefined || typeof(str[2]) !== undefined || typeof(str[3]) !== undefined){
                    
                    /* 
                        
                        in the 1st
                        if string in bind tree is equal too input string
                        URI event listener, closed if scope, possibly set up switch statement instead

                    */
                    if(str[0] == self.___.uris[0]){

                        /* 
                            
                            bind document to event listener
                            on load and on click
                            also bind to static hash change
                         
                        */


                    }
                }
               
                /* insert anchor into  HTML element */
            }
        
        }
    },


    /*
        The router in this case just reads from the serialized array bind tree and execs the route events
    */
    router:{

            
        _(){
            
            /* 

                Example from MMDN

                const url = new URL(location);
                url.searchParams.set("foo", "bar");
                history.pushState({}, "", url);
            
                https://developer.mozilla.org/en-US/docs/Web/API/History/pushState


                url = new URL(location);

                on address events, click events different but not differents 
                https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click

                URL and click two different events
                which means you can have two maps for one event

                which the history function addresses
                useful for variation in properties of click properties and url properties delinated

                push and pop states only one dimensional 

                old way of path mapping still the best way to do things
                why?

                index depth multiple events instead of loose threads there's sorted threads

                url.searchParams.set("foo", "bar");
                history.pushState({}, "", url);

                instead use URL params as a secondary state layer
                the live address change and enter need to be assigned as a state
                reasoning: going outside of the push and pop states gives flow control over data and events before the events


            */

            /* 
                translate events into channel blocks serverside
                protocolized version on serverside would be
                something similar in expressed type and partitioning
            */

            /*
             
             extend router later
             
             with protocol capabilities
             useful for media bit streams or and pure database bit streams


             https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol
             https://developer.mozilla.org/en-US/docs/Web/API/URL/port
        
             test:
             add additional stack of arrays extending the url class
             and use route switches, one for media and one for regular database

            */

            self.___.url.protocols = []
    

            /* 
                Fixed framework URI
                automate console.log and html rendering, streamlined
            */

            if (self.___.url.hash == "#/ls-l"){
                window.onload = function(){
                    document.body.innerHTML = ''; 

                    /* div */
                    document.body.setAttribute("id", "ls");
                    document.body.appendChild(document.createElement("div"));
                    raisedMessages = document.querySelector("div");
                    raisedMessages.setAttribute("id","ls -l");

                    /* Headline Debug */
                    raisedMessage = document.createElement("h1");
                    raisedMessages.appendChild(raisedMessage);
                    raisedMessage.setAttribute("id","ls-title");
                    content = document.createTextNode("Test Page");
                    raisedMessage.appendChild(content);

                    /* __________________ */
                    raisedMessage = document.createElement("h3");
                    raisedMessages.appendChild(raisedMessage);
                    raisedMessage.setAttribute("class","line-animation");
                    
                }

            }
            
            if (self.___.url.hash == "#/debug"){
                /* 
                    Console view, mostly useful for inline dev 
                */
                console.log("________________________: Client debug");
                console.log("____: Protocols Array");
                console.log(self.___.url.protocols);
                console.log("____: URL Object");
                console.log(self.___.url)
                console.log("____: URI's");
                console.log(self.___.uris)
                console.log("________________________: Server debug");

                /* 
                    HTML view, useful for PDF creation of to document objects for team discussions 
                */
                window.onload = function(){ 
                    
                    document.body.innerHTML = ''; 

                    /* div */
                    document.body.setAttribute("id", "system");
                    document.body.appendChild(document.createElement("div"));
                    raisedMessages = document.querySelector("div");
                    raisedMessages.setAttribute("id","raised");

                    /* Headline Debug */
                    raisedMessage = document.createElement("h1");
                    raisedMessages.appendChild(raisedMessage);
                    raisedMessage.setAttribute("id","debug");
                    content = document.createTextNode("Debugging.");
                    raisedMessage.appendChild(content);

                    /* Headline Client */
                    raisedMessage = document.createElement("h3");
                    raisedMessages.appendChild(raisedMessage);
                    raisedMessage.setAttribute("class","debug");
                    content = document.createTextNode("Client Debug.");
                    raisedMessage.appendChild(content);

                    /* Message Protocols */
                    raisedMessage = document.createElement("h4");
                    raisedMessages.appendChild(raisedMessage);
                    raisedMessage.setAttribute("class","debug");
                    content = document.createTextNode("Protocols Array.");
                    raisedMessage.appendChild(content);

                    /* raised object */
                    raisedMessage = document.createElement("p");
                    raisedMessages.appendChild(raisedMessage);
                    raisedMessage.setAttribute("class","debug");
                    content = document.createTextNode(JSON.stringify(self.___.url.protocols));
                    raisedMessage.appendChild(content);

                    /* Message URL */
                    raisedMessage = document.createElement("h4");
                    raisedMessages.appendChild(raisedMessage);
                    raisedMessage.setAttribute("class","debug");
                    content = document.createTextNode("URL Object.");
                    raisedMessage.appendChild(content);

                    /* raised object */
                    raisedMessage = document.createElement("p");
                    raisedMessages.appendChild(raisedMessage);
                    raisedMessage.setAttribute("class","debug");
                    content = document.createTextNode(JSON.stringify(self.___.url.hash));
                    raisedMessage.appendChild(content);

                    /* Message URI */
                    raisedMessage = document.createElement("h4");
                    raisedMessages.appendChild(raisedMessage);
                    raisedMessage.setAttribute("class","debug");
                    content = document.createTextNode("URI's.");
                    raisedMessage.appendChild(content);

                    /* raised object */
                    raisedMessage = document.createElement("p");
                    raisedMessages.appendChild(raisedMessage);
                    raisedMessage.setAttribute("class","debug");
                    content = document.createTextNode(JSON.stringify(self.___.uris));
                    raisedMessage.appendChild(content);

                    /* Headline Server */
                    raisedMessage = document.createElement("h3");
                    raisedMessages.appendChild(raisedMessage);
                    raisedMessage.setAttribute("class","debug");
                    content = document.createTextNode("Server Debug.");
                    raisedMessage.appendChild(content);

                    /* __________________ */
                    raisedMessage = document.createElement("h3");
                    raisedMessages.appendChild(raisedMessage);
                    raisedMessage.setAttribute("class","line-animation");
                    
                    


                }

               
            }  
            
        }
    },

    controller: {
        /* extend controller later  */
        _(){
            /*  
                page setup 
                type =  null, depth = null, format = null, anchor = null

                anchor options specified []
                [serializeddata:somemoreserilizeddata]

                follows js and css data conventions on html document structures
                example: li[data-active='1']

                why not configure into a pure object?
                data validation and object validations are two different things

                objects you throw into the function for validation
                data validation are state validations with intent

                Template setup:
                Grid options:
                fullwidth
                halfwidth
                nav-top-left
                nav-top-right
                nav-bottom-right
                nav-bottom-left
                brand-left
                brand-right
                brand-center
                hero-picture-left
                hero-picture-right
                hero-text-right
                hero-text-left
                content-square-grid
                content-rectangle-grid

            
            */

            tplpage_0 = {
                title: "page title",
                contentGrid: "fullwidth:nav-top-left:hero-picture-left:hero-text-left:content-square-grid",
            }


            self.___.tpl._("page", tplpage_0);


            self.___.generatePageDocument._(null, null, "data", "#/page");
            self.___.generatePageDocument._(null, null, "data", "#/page/innerPage");
            

            /* modal box setup */
            /* ___.generatePageDocument._(null, null, "blob", "#/page/modal/<boxType>"); */

            /* URI router */
            self.___.router._();
        }
    }
}


/* 
    Make JSON file to configure whole site
 */
___.controller._();



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


/* recording animation translate matrice behavior into a hex dump sequence possible with SVG and CSS behaviour, CSS mostly static with class changes SVG contains its own hex pointers */