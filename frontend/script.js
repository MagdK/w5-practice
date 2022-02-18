/* function loadEvent() {

    let rootElement = document.getElementById("root")

    let card2 = function (title, year, rate) {
            return `
            <div class="card">
                <h2>${title}</h2>
                <div class="time">${year}</div>
                <div class="rate">${rate}</div>
            </div>
            `;
    }

    for (const movieSend of movies) { 
        let newerThan2000 = false;

        if (movieSend.year > 2000) {
            newerThan2000 = true;
        }
        if (newerThan2000) {
            rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, movieSend.rate));
        }
    }
}
window.addEventListener("load", loadEvent);
 */
/* if else a ler cards ala: Ha egy fuggveny, ami return-ol valamit, ha a feltetel nem teljesul akkor undefined modon kerul vissza az az adat ami a szuron kivul esik year > 2000 ==> undefinied jon vissza

Memoriakezelesben valo gondolkodas, ures dolgot is kell return- olni, feleselegesen turaztatjuk a kodunkat. 

Inkabb a for ciklusba vigyuk az if -et
*/


// function loadEvent() {

//     let rootElement = document.getElementById("root")

//     let card2 = function (title, year, rate) {
//             return `
//             <div class="card">
//                 <h2>${title}</h2>
//                 <div class="time">${year}</div>
//                 <div class="rate">${rate}</div>
//             </div>
//             `;
//     }

//     let renderAllCardElements = function (cardsArray) {
//         return renderedCardList = "";
//     }

//     /*movies.sort(function(a, b){return a.year - b.year});
//     console.log(movies); */
//     let newGoodMovies = [];

//     for (const movieSend of movies) { 
//         /*let newerThan2000 = false;

//         if (movieSend.year > 2000) {
//             newerThan2000 = true;
//         }
        
//         */   
       
//     //    let floorRate = Math.floor(movieSend.rate);

//         if (movieSend.year > 2000 && movieSend.rate >= 8) {
//             newGoodMovies.push(movieSend);
//             // rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, floorRate));
//         }
//     }
//     newGoodMovies.sort(function(a, b){return a.year - b.year});
//     console.log(newGoodMovies);
//     // rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies));
// }

// window.addEventListener("load", loadEvent);


/* Harom modot neztunk arra, hogy a rate-et lefele kerekitsuk: 
  
1. a div-en belul: <div class="rate">${Math.floor(rate)}</div>

2. az if en belul: if (movieSend.year > 2000 && movieSend.rate >= 8) {
            rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, movieSend.rate)); <== ide a movie send-re megy ra a Math.floor
        }
3. harmadik modja kulon valtozot letrehozni: 
    let floorRate = Math.floor(movieSend.rate);

Amikor lehivjuk a fuggvenyt a vegen card2() akkor a floorRate-et toljuk bele
*/


function loadEvent() {

    let rootElement = document.getElementById("root")

    let card2 = function (title, year, rate) {
        return `
        <div class="card">
            <h2>${title}</h2>
            <div class="time">${year}</div>
            <div class="rate">${rate}</div>
        </div>
        `;
    }

    let renderAllCardElements = function(incomingMoviesArray) {
        let renderedCardList = `<div class="cards">`;

        // 1. for loop ami vegigmegy a cardArrray-en, amit parameterkent kaptunk meg
        for (const incomingMovie of incomingMoviesArray) {
            renderedCardList += card2(incomingMovie.title, incomingMovie.year, incomingMovie.rate)
            // 2. for loop minden lepcsojenel hozzaadja a renderedCardList-hez az adott elemet a megfelelo div card-ban
            /* renderedCardList += `
            <div class="card">
                <h2>${incomingMovie.title}</h2>
                <div class="time">${incomingMovie.year}</div>
                <div class="rate">${incomingMovie.rate}</div>
            </div>
            `;  */
        }
        renderedCardList += `</div>`
        console.log(renderedCardList);
        // 3. return-oli az elkeszult elemekkel feltoltott renderedCardList-et
        return renderedCardList;
    }

 /*    movies.sort(function(a, b){return a.year - b.year});
    console.log(movies); */
    let newGoodMovies = [];

    for (const movieSend of movies) { 
        if (movieSend.year > 2000 && movieSend.rate >= 8) {
            newGoodMovies.push(movieSend);
        }
    }

    newGoodMovies.sort(function(a, b){return a.year - b.year})

    // renderAllCardElementhez bekuldunk egy tombot
    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies));
}

window.addEventListener("load", loadEvent);

/* A feladat az volt h a renderAllCardElements et bovitsuk ki */