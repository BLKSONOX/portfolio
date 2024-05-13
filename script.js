/*
    
    A JavaScript class outside of webstandards conventions
    looks like a C program

    Mimicks C object model with functions wrapped within objects
    interfaces are either models of a class, or the wrapper around a class
    two ways

    use constant to declare interfaces as models, different Object oriented pattern
    not covered here

    bind method usually used to extend

    Author Bendikt Martin Myklebust 


  */

/* 

    A struct defined as a variable  same as C 
    Additional note; allowed special character types in JavaScript clones _ and $ 

*/

____ = {

    /*     
       
        Argument against WEB API's
        everyone uses loading anyways for UI/UX
        and animations

    */
    xhttp: new XMLHttpRequest(),
    docs: {0:"html", 1:"css"},

    /*       
        
        Web standards spesific note

        Why not just use CSS classes? 
        the identifiers are there for a reason, classes is generative

        generative means programatically changable 
        css id and class logic delinates here

    */

    
    /* why not objects? binding tree unsets, just like C, two types of arrays in C [] and {} */
    bindingTree: new Array,

    
    /* A struct within a struct that type can be arrays in C which is objects in JavaScript */
    exec: {
        /* 
           
            use elements array as search table within the stylesheet
            clone style properties add traverse options for "child elements"

            return objects of said manipulated template into css class structures
        
        */
        
        /* A JS class inside a JS class also possible in regular languages, differently */

        _(){ 
            
            /* regular forever loop here as event loop */
            /* can direct towards one already running */

            /* 
                
                Event calls are just ques in an array fired off if signal recived 
                it's all the same as low level code

                can do this without forever loop

            */
            xhttp = self.window.____.xhttp;
            return  xhttp;
        },
        
        subobject_: function (){
            
            /* here goes private objects inside local functions scope */
            /* Private object nest until code ran and returned */
            eventObject = {}

            /* Public */
            /* 
                eventObject = {} 
                return eventObject
            */

            /* Private */
            obj = { newobjects: "new objects"}

            /* here goes for loop to manipulate new objects that's not static */
            /* in C this would be a type array with string arrays */
            /* create private objects in C make it not return as behavoir if called  outside of assigned scope */

            /* Static */
            return( {nest: "object functions nesting" + obj} )

            /* 
                This entire function can be additionally scoped in strictly typed and mutated in loosley typed
                which means you can change the obects state of private, public, static, protected. and package
                within the object itself which is more handy then documented in language references
            
            */

            /* 
                How an operating system kernel is made, and how it's routed 

                usually through special characters expression |*@£$$€{}
                tied to keyboard mappings

                a kernels test drive on a hardware is;
                run as many mapped special character channels multiplied also known as threads
                
                why special characters are reserved in programming languages CPU profiling

                this is what became the ISO standards, later unicode

                pure ANSI streams mostly ran on BIOS level supplying hardware vendors with encrypted data pipes for their hardware drivers
                
            */

            /* Event rotational objects and functions */



        },
        
        subobject: {
            text: "text"
        },

        
    },

    

    /* 
        Substruct Ecample, loosley typed
    */
    models: { 
        
        _(){

        /* Standard formating */
        /* mutatet exec */
        /* compressed programming, rock solid programming */

        /* 
            property and functions mutations, also known as constructor 
            which makes the whole defining the constructors more akin to how API's are really designed at the fundemental levels
        */
        m = self.window.____.exec;
        /* bind or change said function, both possible also in C */
        return m._

        /* private functions */
        /* escape scope with self */

        /* access local scope with this */
        /* models.newProperty._() */

        },

        /* public functions, getters and setter */

        importModels: function( _type ){
            switch(_type){
                case "data":
                    return "this is a data import";
                    break;
                case "document":
                    return "this is a document model import";
                    break;
            }
        },
        exportModels: function( _type ){

        },

    },

    
    /* 
        property direct function, with substruct, strictly typed, locked scopes, also similar to C
    */
    models2: function(){

        substruct: {
            function a (){
                substruct_: {
                    function b(){

                    }
                }
            }
        }


    },

    documents:{ _(){


        /* Standard formating */
        /* mutatet exec */
        /* compressed programming, rock solid programming */

        /* 
            property and functions mutations, also known as constructor 
            which makes the whole defining the constructors more akin to how API's are really designed at the fundemental levels
        */
        d = self.window.____.exec;
        /* bind or change said function, both possible also in C */
        return d._

        /* private functions */
        /* escape scope with self */

        /* access local scope with this */
        /* documents.newProperty._() */

        },

        /* public functions */
    },

    /* 
        
        my hex dump is not the same as your hex dump, also known as transcoding 
        key here not the same as key on server etc
        public pipe, private pipe, private pipe feeds public pipe
        kinda like the economy

        to do afterwards, it's all colours and none colours outside of
       
        in C this would be the direct memory addresses
        or even device hex stream addresses of said chip

    */
    hexStream:{
        /* 
            assemblers example address 0x000000000 this address means something, assembly of that address is just signal and pointers similarly to C itself
            in JavaScript it's both undefined functions and prototype functions

            add the address or find it
            depending on the JavaScript engine, this is where event calls and call backs happens

            this section is the equivlent to top

         */
    },
    
}

/* How a linux or unix bootstrap loader would look like */
console.log( ____.exec.subobject_() );
console.log( ____.models.importModels( "data" ) );

/* add return nesting, allows for private and public chain link class constructors */
/* From here events and callback loops are very straight forward */

/* 
    
    Look up the program would look exactly like an object oriented C program 
    C is as loosleey typed as Javascript in its nature
    pointers, structs, functions, pointer arrays, nested functions, similar scope structures
    basically the same with syntax variation

    escaping and entering scopes would be pointer manipulation
    with struct and bind manipulations

    this JS document:

    <object>
    |   <constructor>(property)
            <function>
            <struct>(property)
                <function>
            <struct>(property)
        <struct>(property)
            <function>

    how interfaces are made, this approch declares the whole structure as interfaces
    and is C friendly

    a private function would be an anonoymous or named function within the struct and method
    binding to the object tree declared visible or not, where event loops and call back functions tend to get called

    same as C, basically JavaScript is C if followed properly according to standards, all the additional functions and classes one would otherwise create for most
    C project on repeat, with minimal variation of syntax and dialect

    added as its own language

    
    ------------------------------------------------------------------------------------

    Additional resources and thoughts:

    A struct, is a class type object structure from 1968  
    ALGOL 68 language which C is derrived from 
    https://en.wikipedia.org/wiki/Struct_(C_programming_language)

    pointer chains and struct chains behave similarly slightly different
    https://en.wikipedia.org/wiki/Pointer_(computer_programming)

    writing ones own JavScript language spesific engine is alignment and transfer of
    according to standards

    https://tc39.es/ecma262/

    a JavaScript clone is loosely typed according to function and API behaviour of the language itself
    programming languages aren't just the API's

    Python object orientation functions in exactly the same way
    https://docs.python.org/3.12/library/collections.abc.html

    Same with PhP
    https://www.php.net/manual/en/language.types.object.php

    Same with Ruby
    http://ruby-doc.com/docs/ProgrammingRuby/html/tut_classes.html

    Same with Perl
    https://perldoc.perl.org/perlootut#Object

    Same with Haskell
    https://www.haskell.org/tutorial/monads.html

    things may be written in C++ but language derriving is directly from C

    even lower level Go
    https://go.dev/doc/tutorial/web-service-gin

    and objective-c which is not c++, but however is similar
    https://en.wikipedia.org/wiki/Objective-C

    same with new Swift
    https://developer.apple.com/swift/
    which is a mix of its own thing and JavaScript clone

    similarly with rust
    https://doc.rust-lang.org/book/ch05-02-example-structs.html

    and with ziglang
    https://ziglang.org

    all the same with Java which also has more of a sibling connection to C++ in regards to C

    */

    /* test */