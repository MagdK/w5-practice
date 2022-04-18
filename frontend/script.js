// // String
// console.log("This is my string.")
// console.log('This is my string.')
// console.log(`This is my string.`)

// // Numbers
// console.log(typeof 2)
// console.log(typeof NaN) // not a number
// console.log(0/0)
// console.log(2.14)


// // Boolean
// console.log(true)
// console.log(false)


// // Undefined
// console.log(undefined) // nincs erteke
// // foleg objektumokra igaz
// // getElementById - itt a null megprobal elkapni valamit? nem tudta megcsinalni az objektumot. null tipusa hataran van annak, hogy ez primitiv-e vagy sem
// console.log(null) 

// console.log(typeof undefined) // => undefined
// console.log(typeof null) // => object

// // ha objectet probalok helyettesiteni, akkor valami objekthez hasonlo dologgal probalom helyettesiteni. Tehat a null valami objektet helyettesito dolog. PLACEHOLDER szeru, objektumkent elkonyvelt vmi. Ezert kapunk null-t, ha valami hianyzik a kodunkbol amit nem tudtunk elkapni. 



// Mit tudunk epiteni ezekbol a stringekbol? Adatstrukturakat tudunk letrehozni, objektumokat krealok. Pl a konyvcimet hozzarendelem a cimehez. 


// Object es Array - hasonlosag es kulonbseg

// Array - ez is kulcsertekpar, csak ez rejtett, mert a helyiertek. Egymas utan le vannak irva a primitivek. 
// Object - kulcsertekparkent vannak 
// teljes mertekben atjarhatoak az array-k es a tombok


// Journey oldal struktura
    // // https://journey.code.cool/v2/project/curriculum/project/start-coding/SOLO/javascript/FRONTENDV2-4M-DAYTIME/1252
    // //szedjunk ki innen adatot

    // console.log({
    //     title: "Start coding", 
    //     // title nem feltetlenul kell idezojelbe irni
    //     //ha .json fileba kerul, csak akkor kell idezojel
    //     // kulonbseg a ketto kozott, a json fajl korlatozza csak adatra, amit oda beteszunk. Ezzel szemben a javascriptten belul sokkal tobb mindent meg tudunk tenni. 
    //     "type": "solo",
    //     "difficulty": 4.1,
    //     "usefulness": 4.2,
    //     "enjoyability": 3.7,
    //     "materials": 3.4,
    //     "tasks": [
    //         {
    //             "title": "Bank accounts",
    //             "description": ""
    //         },
    //         {
    //             "title": "100 doors",
    //             "description": "" 
    //         },
    //         {
    //             "title": "Word filter",
    //             "description": "" 
    //         }
    //     ]
    // })


// // Variables - VÁLTOZÓK

    // // var let const
    // console.log(a)
    // console.log(c)

    // var a = "Hello1"
    // let b = "Hello2"
    // const c = "Hello3"

    // console.log(a, b, c)

    // // vagy

    // console.log(a)
    // console.log(b)
    // console.log(c)

    // // ket nagyon fontos dolog van a valtozokkal kapcsolatban: 
    // // 1. Valtozok nem ugy mukodnek, mint ahogy nalunk latszanak - nem fentrol lefele olvassa a javascript a kodunkat - !!!!! HOISTING !!!!! - ket lepcsofok van - 1. DECLARE 2. INITIALISE  - a var eseteben ez egyszeru - var valamilyen scope-ban letrejon, amikor letrejon a var, akkor az osszes varunkat kiszedi es legfentebbre rendezi kepletesen a -1-edik sorba. felrendezi a var-t es deklaralja is. A 0-adik sorunkban a var eseteben felviszi, azt mondja, hogy var a, es meg erteket is ad neki a var. Tehat ha a 0-adik sorban console log-ozunk, letrehozza a valtozot es nem csak deklaralja, hanem inicializalja UNDEFINE-dal. Azert ferunk hozza, a sajat scope-ja fole rendezi. 0.sor var a = undefined


    // // let b - ha console.log-ozzuk azelot, mielott - deklaralja, de hibauzit kuld: ReferenceError: Cannot access 'b' before initialization Var szocskahoz hozza lehet ferni inicializalas elott. A let-hez viszont nem. 

    // // const - ugyanaz az uzenet - Cannot access 'c' before initialization
    // // nem ferunk hozza



    // FUNCTIONS - függvények
// scope-okban harom kulonbozo szint letezik



// function d() {
//     var a = "Hello1"
//     let b = "Hello2"
//     const c = "Hello3"
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// d()

// Olvassuk a hibauzenetet, ha azt kapjuk, hogy cannot access, akkor lehet a sorrenddel van baj. Sokat segithet nekunk.

// GLOBAL SCOPE 
// BLOCK SCOPE - let const
// FUNCTION scope

// let const - globalThis, functional es block scope-ja is van, var az mas


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
 */
// d()

// hoisting - visszacsekkolas, ujrakerdezes
// https://www.w3schools.com/js/js_scope.asp

/* let e = 1
console.log(e)
e = 2
console.log(e)
e = e * 2
console.log(e)
let f = 1 */

/* // Parameterek is function scope-ban jonnek letre
function multiplyByTwo(num) {
    console.log(num)
    // ha a return-t meg akarjuk kapni, el kell menteni
    return num * 2 
    // return utan nem szabad semmit irni, mert az a vege a trotenetnek
    // a num itt parameter, function scope-ja van, local - fuggvenyen belul fog latszodni
}

let f = multiplyByTwo(1)
console.log(f)
console.log(multiplyByTwo(1));

// a num-ot nem tudjuk console.log-ozni, mert a scope-ja local, nem tudjuk, mert o nem letezik ezen kivul
console.log(num) // => num is not defined */


// METODUSOK - METHODS 
// objektumon belul el tudok menteni kulcs ertek parokat, azon belul primitiveket, objektumot, tombot
// fuggvenyt is el tudunk menteni, ezt pedig ugy hivjuk h metodus

/* let g = {
    // nem kell nevet adni a fuggvenynek, mert myMethod a neve
    myMethod: function () {
        console.log("Hello");
    }
}
g.myMethod()
 */

// nem valos kod, nem fog mukodni ezalatt 
/* let window = {
    addEventListener: function (eventName, eventFunction) {
        if( eventName === "load" ) {
            eventFunction()
    }
}

window.addEventListener("load", loadEvent) */

let h = {
    anotherMethod: function (text){
        return `You sent the following argument to this method: ${text}`
    }
}

// ha el akarjuk menteni az erteket akkor ezt kell kiirni
let i = h.anotherMethod("itt kuldjuk be az argument-et")
console.log(i);

//ha az eredmenyt szeretnenk ki consol.log-ozni
console.log(h.anotherMethod("another argument"));