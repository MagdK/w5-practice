// // String
// console.log("This is my string.")
// console.log('This is my string.')
// console.log(`This is my string.`)

// // Numbers
// console.log(typeof 2) // => number
// console.log(typeof NaN) // not a number console will say number
// console.log(0/0) // => NaN
// console.log(2.14) // => 2.14


// // Boolean
// console.log(true) // => true
// console.log(false) // => false


// // Undefined
/* ha objectet probalok helyettesiteni, akkor valami objekthez hasonlo dologgal probalom helyettesiteni. Tehat a null valami objektet helyettesito dolog. PLACEHOLDER szeru, objektumkent elkonyvelt vmi. Ezert kapunk null-t, ha valami hianyzik a kodunkbol amit nem tudtunk elkapni, akkor kapju ezt, ilyenkor erdemes kutakodni mi maradt le a kodbol.
 */

// console.log(undefined) // nincs erteke, foleg objektumokra igaz => undefined

// // getElementById - itt a null megprobal elkapni valamit? nem tudta megcsinalni az objektumot. null tipusa hataran van annak, hogy ez primitiv-e vagy sem
// console.log(null) 

// console.log(typeof undefined) // => undefined
// console.log(typeof null) // => object



/* Mit tudunk epiteni ezekbol a stringekbol? Adatstrukturakat tudunk letrehozni, objektumokat krealok. Pl a konyv cimet hozzarendelem a cimehez. 
 */


// Object es Array - hasonlosag es kulonbseg

// Array - ez is kulcsertekpar, csak ez rejtett. Egymas utan le vannak irva a primitivek. 
// Object - kulcsertekparkent vannak 
// teljes mertekben atjarhatoak az array-k es a tombok, ez alatt szerintem azt ertjuk, hogy array-k ben lehetnek object-ek es object-en belul lehetnek array-k.



// FELADAT - Journey oldal struktura
/* https://journey.code.cool/v2/project/curriculum/project/start-coding/SOLO/javascript/FRONTENDV2-4M-DAYTIME/1252
szedjunk ki innen adatot
 */

/*    Title nem feltetlenul kell idezojelbe irni. Ha .json fileba kerul, akkor kell idezojelbe rakni. Kulonbseg a ketto kozott, a json fajl korlatozza csak adatra, amit oda beteszunk. Ezzel szemben a javascriptten belul sokkal tobb mindent meg tudunk tenni. 
*/  

/* console.log({
    "title": "Start coding", 
    "type": "solo",
    "difficulty": 4.1,
    "usefulness": 4.2,
    "enjoyability": 3.7,
    "materials": 3.4,
    "tasks": [
            {
                "title": "Bank accounts",
                "description": ""
            },
            {
                "title": "100 doors",
                "description": "" 
            },
            {
                "title": "Word filter",
                "description": "" 
            }
    ]
})
 */



// Variables - VÁLTOZÓK

    // tipusok: var let const
/* console.log(a)
console.log(c)

var a = "Hello1"
let b = "Hello2"
const c = "Hello3"

console.log(a, b, c)

    // vagy

console.log(a) // mivel var-ral lett deklaralva, mar a -1-edik sorban inicializalva lett
console.log(b) // 0-adik sorban consol.log-ozva error-t kapunk
console.log(c) // 0-adik sorban consol.log-ozva error-t kapunk
 */

     /* !!!KET nagyon fontos dolog van a VALTOZOKKAL kapcsolatban: 
   Valtozok nem ugy mukodnek, mint ahogy nalunk latszanak - nem fentrol lefele olvassa  a javascript a kodunkat:
   !!!!! HOISTING !!!!!

   Ket lepcsofok van - 1. DECLARE 2. INITIALISE  - a `var` eseteben ez egyszeru - var global scope-ban letrejon, amikor letrejon a `var`, akkor az osszes varunkat kiszedi es legfentebbre rendezi kepletesen a -1-edik sorba. Felrendezi a `var`-t es deklaralja is. A 0-adik sorunkban a var eseteben felviszi, azt mondja, hogy var a, es meg erteket is ad neki a var. Tehat ha a 0-adik sorban console log-ozunk, letrehozza a valtozot es nem csak deklaralja, hanem inicializalja UNDEFINE-dal. Azert ferunk hozza, a sajat scope-ja fole rendezi. 0.sor `var a = undefined`
   
   `let b` - ha console.log-ozzuk azelot, mielott - deklaralja, de hibauzit kuld: 
   ReferenceError: Cannot access 'b' before initialization `var`-ral deklaralt valtozohoz hozza lehet ferni inicializalas elott. A `let`-hez, `const`-hoz viszont nem. 
    */




    // FUNCTIONS - függvények

/*     Scopes - three of them:
        1. Global: 
            - A variable declared outside a function, becomes GLOBAL.
            - Global variables can be accessed from anywhere in a JavaScript program.
            - Variables declared with var, let and const are quite similar when declared outside a block.

        2. Local scope: 
            - Variables declared within a JavaScript function, become LOCAL to the function.
            - parameterek is function scope-ban jonnek letre

            2.I Function scope
            - variable declared inside of a function is only scoped to that specific function
            - can only be accessed inside of the function it was declared in
            - Some people view Local Scope and Function Scope as the same because variables declared inside of a function are local to that function.
            
            2.II Block scope: 
            - relatively new, let and const keywords provide Block Scope in JavaScript.
            - it is basically the code inside curly braces {} within a function (in if statements, switch statements, loops (for, while, etc)
 */


/* function d() {
    var a = "Hello1"
    let b = "Hello2"
    const c = "Hello3"
    console.log(a)
    console.log(b)
    console.log(c)
}

d()
 */
    // Olvassuk a hibauzenetet, ha azt kapjuk, hogy cannot access, akkor lehet a sorrenddel van baj. Sokat segithet nekunk.



/* function d() {
    if(1 + 1 === 2) {
    }
    var a = "Hello1"
    let b = "Hello2"
    const c = "Hello3"
    console.log(a)
    console.log(b)
    console.log(c)
}

d()
 */

    // hoisting - visszacsekkolas, ujrakerdezes : https://www.w3schools.com/js/js_scope.asp

/* let e = 1
console.log(e)
e = 2
console.log(e)
e = e * 2
console.log(e)
let f = 1
 // => 1 2 4
 */

    // Parameterek is function scope-ban jonnek letre
/* function multiplyByTwo(num) {
    console.log(num)
    // ha a return-t meg akarjuk kapni, el kell menteni
    return num * 2 
    // return utan nem szabad semmit irni, mert az a vege a trotenetnek
    // a num itt parameter, function scope-ja van, local - fuggvenyen belul fog latszodni
}

let f = multiplyByTwo(1)
console.log(f)
console.log(multiplyByTwo(1));

// a num-ot nem tudjuk console.log-ozni, mert a scope-ja local, nem letezik a function-on kivul
console.log(num) // => num is not defined 
 */

// METODUSOK - METHODS - definition: object-be irt function
// Objektumon belul el tudok menteni kulcs ertek parokat, azon belul primitiveket, objektumot, tombot. Fuggvenyt is el tudunk menteni az objektumba, ezt pedig ugy hivjuk h metodus

/* let g = {
    // nem kell nevet adni a fuggvenynek, mert myMethod a neve
    myMethod: function() {
        console.log("Hello");
    }
};

g.myMethod()
 */

    // W3schools pelda object methods-ra: 
/* const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
 */


// Az alabb kovetkezo kod nem valos kod, nem fog mukodni
/* let window = {
    addEventListener: function (eventName, eventFunction) {
        if( eventName === "load" ) {
            eventFunction()
    }
}

window.addEventListener("load", loadEvent) */


/* let h = {
    anotherMethod: function (text){
    return `You sent the following argument to this method: ${text}`
    }
}

    // ha el akarjuk menteni az erteket akkor ezt kell kiirni
let i = h.anotherMethod("itt kuldjuk be az argument-et")
console.log(i);

    //ha az eredmenyt szeretnenk ki consol.log-ozni
console.log(h.anotherMethod("another argument"));
 */


// 2022 02 16

/* let myString = "Mikkamakka";

let mySecondString = myString;
let myThirdString = "Mikkamakka";

console.log(mySecondString);
console.log(myString);
console.log(myString === mySecondString);
console.log(myString === myThirdString);
*/

    // Fuggvenyek is ugyanolyan erteku dolgok, first class citizenek. A lenyeg az, hogy ha barmit teszunk a myString sorba, es egyenlove tesszuk oket, akkor ez az osszehasonlitas igaz lesz. 


    // Objektumok eseteben mi a helyzet?

/* let myObject = {
    myString: "Mikkamakka"
}

let mySecondObject = myObject;

let myThirdObject = {
    myString: "Mikkamakka"
}
    // ha a tartalmat felulirjuk az objektumnak, de egyenlove van teve egy masikkal, akkor visszafele is felulirja. 
mySecondObject.myString = "Dömdödöm";

    // Másolás - harom pont, csak kesobb kell, csak erdekessegkeppen
let myFourthObject = {...myObject};

myFourthObject.myString = "Vacskamati";

console.log(myObject.myString);
console.log(myFourthObject.myString);
 */

/* console.log(myObject === mySecondObject);
console.log(myObject === myThirdObject);
 */

// Primitivek es objektumok elteroen viselkednek osszehasonlitasnal. Mert memoria szinten alapvetoen mashol tarolodnak el.




// console.log("" === ""); // => true - ha ures stringet hasonlitok ossze
// console.log({} === {}); // => false - ha ures objectet hasonlitok ossze

    /*  miert lett false a masodik? Amint letrehozunk egy objektumot, egybol egy uj objektumot hozunk letre. Hiaba van benne ugyanaz a kulcs, ertek, az objektum az ujra letrejott, teljesen kulon az elozotol. Ha egyenlove akarjuk tenni a ket objektumot, akkor hozza kell rendelni. let myObj = yourObj
 */


// Leegyszerusitett verzio a kettovel lentebb levo fuggvenyre, ha nem hasznaljuk ujra a fuggvenyt
/* window.addEventListener("load", function() {
    console.log("Negyszogletu kerekerdo");
})
 */



// Eredeti kod, mielott Szilvit kovettuk
    //forof
/* function loadEvent() {
    for (const movie of movies) {
        document.getElementById("root").insertAdjacentHTML("beforeend", `
        <div class="card">
            <h2>${movie.title}</h2> 
            <time>${movie.year}</time>
            <div class="rate">${movie.rate}</div>
        </div>
        `)
    }
}
// const-ban a kulcsok ertekeit at tudom irni, uj kulcsokat tudok hozza adni
window.addEventListener("load", loadEvent) */


    /* Fealadat szunetre: ezt a kodot bovitsuk ki ugy, hogy keruljon bele html-be css-elve az ev es az ertekeles a div kartyan belul egy egy html elembe, harom oszlopos flex formazas. Title, year, rate. span-be akar a rate-et. Root id-ju divbe harom oszlop es flexszel oldjuk meg */

    // let instead of forof
/* function loadEvent() {
    let rootElement = document.getElementById("root")

     let card = function(movieReceived){
        return `
        <div class="card">
            <h2>${movieReceived.title}</h2> 
            <time>${movieReceived.year}</time>
            <div class="rate">${movieReceived.rate}</div>
        </div>
        `;
    };
    // ezt pluszba beküldjük
    rootElement.insertAdjacentHTML("beforeend", card({
        "title": "The Goldrush",
        "year": 1925,
        "rate": 9.9
    }));

    // ezt is pluszba beküldjük
    let actuallyFavMovie = {
        "title": "Random title",
        "year": 2002,
        "rate": 8.9
    }

    rootElement.insertAdjacentHTML("beforeend", card(actuallyFavMovie));

    //ezzel kétszer is benne van a Shawshank - 0adik helyiertek az elso elem lesz
    rootElement.insertAdjacentHTML("beforeend", card(movies[0]));


    for (const movieSend of movies) {
        rootElement.insertAdjacentHTML("beforeend", card(movieSend));
    }
    console.log(movies);
}
// const-ban a kulcsok ertekeit at tudom irni, uj kulcsokat tudok hozza adni
window.addEventListener("load", loadEvent)
 */

/* Fontos, hogy a javascript az valtozokat deklaralja (hoisting), a fuggvenyeket teljes egeszeben elerhetove teszi a nulladik sorban. Ha fuggvenykent hoznank letre, a folotte levo sorokban is tudnank hasznalni. Hasznosabb, ha valtozoba mentjuk el a fuggvenyeinket debuggolas, fenntarthatosag szempontjabol. 
Szebb kodot tudunk irni ugy, ha a fuggvenyek ugyanugy viselkednek, mint minden mas, amit valtozoba mentunk.  
Igy lehet tisztabb kodot irni. */



function loadEvent() {
    console.log("load2")

    let rootElement = document.getElementById("root")

    let card2 = function (title, year, rate){
        return `
        <div class="card">
            <h2>${title}</h2>
            <div class="time">${year}</div>
            <div class="rate">${rate}</div>
        </div>
        `;
    }

    let anotherFavouriteMovie = {
        title: "The last scout boy",
        year: 1991,
        rate: 7
    }

    rootElement.insertAdjacentHTML("beforeend", card2(anotherFavouriteMovie.title, anotherFavouriteMovie.year, anotherFavouriteMovie.rate));

    for (const movieSend of movies) { 
        
        rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, movieSend.rate));
    }

    console.log(movies);
}
window.addEventListener("load", loadEvent);