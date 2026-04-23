let okAnswer = false;
let userAnswer;
let shownMenu = "";
let whichMenu = [];
let myMenuDishes = [];
let myMenuPrices = [];
let totalPrice = 0;
let extrasText;
let noServe = false;
let conExtra;


const complimentList = [
    "¡Qué buena elección!",
    "Sin duda es una elección excelente.",
    "Yippieee.",
    "Uno de los mejores platos de la casa.",
    "Es la opción favorita del chef."
];

const morningMenuFirstDishes = [
    "PASTA",
    "ARROZ",
    "ALUBIAS"
];

const morningMenuFirstPrices = [
    1.5,
    5,
    3.5
];

const morningMenuSecondDishes = [
    "CARNE",
    "PESCADO",
    "HAMBURGUESA"
];

const morningMenuSecondPrices = [
    7,
    4.5,
    2
];

const morningMenuDessert = [
    "CONO DE PATATAS",
    "FRUTA",
    "YOGURT"
];

const morningMenuDessertPrices = [
    8,
    2.5,
    3
];


const lunchMenuFirstDishes = [
    "HUEVOS",
    "ENCHILADAS",
    "SOPA"
];

const lunchMenuFirstPrices = [
    1.5,
    2,
    1.5
];

const lunchMenuSecondDishes = [
    "TORTILLA",
    "ENSALADA",
    "PAELLA"
];

const lunchMenuSecondPrices = [
    3,
    2,
    1.7
];

const lunchMenuDessert = [
    "HELADO",
    "LECHE",
    "FLAN"
];

const lunchMenuDessertPrices = [
    0.4,
    1,
    2.5
];


const dinnerMenuFirstDishes = [
    "HUEVOS",
    "ENCHILADAS",
    "SOPA"
];

const dinnerMenuFirstPrices = [
    2.5,
    3,
    3.5
];

const dinnerMenuSecondDishes = [
    "TORTILLA",
    "ENSALADA",
    "PAELLA"
];

const dinnerMenuSecondPrices = [
    5,
    4,
    3.7
];

const dinnerMenuDessert = [
    "HELADO",
    "LECHE",
    "FLAN"
];

const dinnerMenuDessertPrices = [
    10.4,
    2,
    3.5
];

const extrasDishes = [
    "PATATAS",
    "AROS DE CEBOLLA",
    "NACHOS",
    "ACEITUNAS"
]

const extrasPrices = [
    1,
    2,
    1.8,
    1
]


function menuOfferedByHour() {
    let hour = prompt(`¿Cuál es la hora local? Por favor, introduce la hora en formato hh:mm.\nPor ejemplo, 08:00 o 17:45`);
    try {
        hour = Number(hour.slice(0,2));
        if (hour != hour) {
            throw new Error('Hour is NaN.');
        }
    } catch(err) {
        noServe = true;
        console.log(err.message);
        alert("Datos incorrectos, por favor recarga la página web.");
    }
    if (hour >= 8 && hour <= 13) {
        alert(`Enseñando el menú de mañana.\n\nPRINCIPAL: \n${morningMenuFirstDishes}\n\nSECUNDARIO: \n${morningMenuSecondDishes}\n\nPOSTRE: \n${morningMenuDessert}`);
        whichMenu = "Morning";
    } else if (hour >= 14 && hour <= 16) {
        alert(`Enseñando el menú de la comida.\n\nPRINCIPAL: \n${lunchMenuFirstDishes}\n\nSECUNDARIO: \n${lunchMenuSecondDishes}\n\nPOSTRE: \n${lunchMenuDessert}`);
        whichMenu = "Lunch";
    } else if (hour >= 17 && hour <= 22) {
        alert(`Enseñando el menú de la cena.\n\nPRINCIPAL: \n${dinnerMenuFirstDishes}\n\nSECUNDARIO: \n${dinnerMenuSecondDishes}\n\nPOSTRE: \n${dinnerMenuDessert}`);
        whichMenu = "Dinner";
    } else if (hour >= 0 && hour <= 7 || hour >= 23) {
        if (noServe == false) {
        alert("El restaurante está cerrado a esa hora.");
        }
        noServe = true;
    }
}


function complimentTheUser() {
    alert(complimentList[[(Math.random() * complimentList.length) | 0]]); // We're showing one of the compliments at random
}

morningMenuFirstDishes.forEach((num1, index) => {
  const num2 = morningMenuFirstPrices[index];
  shownMenu += `${num1} -- ${num2} euros\n`;
});

function selectDish() {
    switch (whichMenu) {
        case "Morning":
            //morningMenuFirstDishes
            shownMenu = "";
            morningMenuFirstDishes.forEach((num1, index) => {
                const num2 = morningMenuFirstPrices[index];
                shownMenu += `${num1} -- ${num2}€\n`;
            });
            do {
                userAnswer = prompt(`\nPor favor, selecciona el primer plato que deseas."\n${shownMenu}`, morningMenuFirstDishes[0]);
                userAnswer = userAnswer.toUpperCase();
                morningMenuFirstDishes.forEach((num1, index) => {
                    if (num1 === userAnswer) {
                        okAnswer = true;
                        complimentTheUser();
                        alert(`Has seleccionado ${userAnswer} por ${morningMenuFirstPrices[index]}€.\n`);
                        myMenuDishes.push(userAnswer);
                        myMenuPrices.push(morningMenuFirstPrices[index]);
                    }
                });
                if (okAnswer == false) {
                    alert("Ha habido un error al seleccionar el plato deseado.");
                }
            } while (okAnswer == false);
            okAnswer = false;

            //morningMenuSecondDishes
            shownMenu = "";
            morningMenuSecondDishes.forEach((num1, index) => {
                const num2 = morningMenuSecondPrices[index];
                shownMenu += `${num1} -- ${num2}€\n`;
            });
            do {
                userAnswer = prompt(`\nPor favor, selecciona el segundo plato que deseas.\n${shownMenu}`, morningMenuSecondDishes[0]);
                userAnswer = userAnswer.toUpperCase();
                morningMenuSecondDishes.forEach((num1, index) => {
                    if (num1 === userAnswer) {
                        okAnswer = true;
                        complimentTheUser();
                        alert(`Has seleccionado ${userAnswer} por ${morningMenuSecondPrices[index]}€.\n`);
                        myMenuDishes.push(userAnswer);
                        myMenuPrices.push(morningMenuSecondPrices[index]);
                    }
                });
                if (okAnswer == false) {
                alert("Ha habido un error al seleccionar el plato deseado.");
                }
            } while (okAnswer == false);
            okAnswer = false;

            //morningMenuDessert
            shownMenu = "";
            morningMenuDessert.forEach((num1, index) => {
                const num2 = morningMenuDessertPrices[index];
                shownMenu += `${num1} -- ${num2}€\n`;
            });
            do {
                userAnswer = prompt(`\nPor favor, selecciona el postre que deseas.\n${shownMenu}`, morningMenuDessert[0]);
                userAnswer = userAnswer.toUpperCase();
                morningMenuDessert.forEach((num1, index) => {
                    if (num1 === userAnswer) {
                        okAnswer = true;
                        complimentTheUser();
                        alert(`Has seleccionado ${userAnswer} por ${morningMenuDessertPrices[index]}€.\n`);
                        myMenuDishes.push(userAnswer);
                        myMenuPrices.push(morningMenuDessertPrices[index]);
                    }
                });
                if (okAnswer == false) {
                alert("Ha habido un error al seleccionar el plato deseado.");
                }
            } while (okAnswer == false);
            okAnswer = false;
            break;

        case "Lunch":
            //lunchMenuFirstDishes 
            shownMenu = "";
            lunchMenuFirstDishes.forEach((num1, index) => {
                const num2 = lunchMenuFirstPrices[index];
                shownMenu += `${num1} -- ${num2}€\n`;
            });
            do {
                userAnswer = prompt(`\nPor favor, selecciona el primer plato que deseas."\n${shownMenu}`, lunchMenuFirstDishes[0]);
                userAnswer = userAnswer.toUpperCase();
                lunchMenuFirstDishes.forEach((num1, index) => {
                    if (num1 === userAnswer) {
                        okAnswer = true;
                        complimentTheUser();
                        alert(`Has seleccionado ${userAnswer} por ${lunchMenuFirstPrices[index]}€.\n`);
                        myMenuDishes.push(userAnswer);
                        myMenuPrices.push(lunchMenuFirstPrices[index]);
                    }
                });
                if (okAnswer == false) {
                    alert("Ha habido un error al seleccionar el plato deseado");
                }
            } while (okAnswer == false);
            okAnswer = false;

            //lunchMenuSecondDishes
            shownMenu = "";
            lunchMenuSecondDishes.forEach((num1, index) => {
                const num2 = lunchMenuSecondPrices[index];
                shownMenu += `${num1} -- ${num2}€\n`;
            });
            do {
                userAnswer = prompt(`\nPor favor, selecciona el segundo plato que deseas.\n${shownMenu}`, lunchMenuSecondDishes[0]);
                userAnswer = userAnswer.toUpperCase();
                lunchMenuSecondDishes.forEach((num1, index) => {
                    if (num1 === userAnswer) {
                        okAnswer = true;
                        complimentTheUser();
                        alert(`Has seleccionado ${userAnswer} por ${lunchMenuSecondPrices[index]}€.\n`);
                        myMenuDishes.push(userAnswer);
                        myMenuPrices.push(lunchMenuSecondPrices[index]);
                    }
                });
                if (okAnswer == false) {
                alert("Ha habido un error al seleccionar el plato deseado.");
                }
            } while (okAnswer == false);
            okAnswer = false;

            //lunchMenuDessert
            shownMenu = "";
            lunchMenuDessert.forEach((num1, index) => {
                const num2 = lunchMenuDessertPrices[index];
                shownMenu += `${num1} -- ${num2}€\n`;
            });
            do {
                userAnswer = prompt(`\nPor favor, selecciona el postre que deseas.\n${shownMenu}`, lunchMenuDessert[0]);
                userAnswer = userAnswer.toUpperCase();
                lunchMenuDessert.forEach((num1, index) => {
                    if (num1 === userAnswer) {
                        okAnswer = true;
                        complimentTheUser();
                        alert(`Has seleccionado ${userAnswer} por ${lunchMenuDessertPrices[index]}€.\n`);
                        myMenuDishes.push(userAnswer);
                        myMenuPrices.push(lunchMenuDessertPrices[index]);
                    }
                });
                if (okAnswer == false) {
                alert("Ha habido un error al seleccionar el plato deseado.");
                }
            } while (okAnswer == false);
            okAnswer = false;
            break;

        case "Dinner":
            //dinnerMenuFirstDishes 
            shownMenu = "";
            dinnerMenuFirstDishes.forEach((num1, index) => {
                const num2 = dinnerMenuFirstPrices[index];
                shownMenu += `${num1} -- ${num2}€\n`;
            });
            do {
                userAnswer = prompt(`\nPor favor, selecciona el primer plato que deseas."\n${shownMenu}`, dinnerMenuFirstDishes[0]);
                userAnswer = userAnswer.toUpperCase();
                dinnerMenuFirstDishes.forEach((num1, index) => {
                    if (num1 === userAnswer) {
                        okAnswer = true;
                        complimentTheUser();
                        alert(`Has seleccionado ${userAnswer} por ${dinnerMenuFirstPrices[index]}€.\n`);
                        myMenuDishes.push(userAnswer);
                        myMenuPrices.push(dinnerMenuFirstPrices[index]);
                    }
                });
                if (okAnswer == false) {
                    alert("Ha habido un error al seleccionar el plato deseado");
                }
            } while (okAnswer == false);
            okAnswer = false;

            //dinnerMenuSecondDishes
            shownMenu = "";
            dinnerMenuSecondDishes.forEach((num1, index) => {
                const num2 = dinnerMenuSecondPrices[index];
                shownMenu += `${num1} -- ${num2}€\n`;
            });
            do {
                userAnswer = prompt(`\nPor favor, selecciona el segundo plato que deseas.\n${shownMenu}`, dinnerMenuSecondDishes[0]);
                userAnswer = userAnswer.toUpperCase();
                dinnerMenuSecondDishes.forEach((num1, index) => {
                    if (num1 === userAnswer) {
                        okAnswer = true;
                        complimentTheUser();
                        alert(`Has seleccionado ${userAnswer} por ${dinnerMenuSecondPrices[index]}€.\n`);
                        myMenuDishes.push(userAnswer);
                        myMenuPrices.push(dinnerMenuSecondPrices[index]);
                    }
                });
                if (okAnswer == false) {
                alert("Ha habido un error al seleccionar el plato deseado.");
                }
            } while (okAnswer == false);
            okAnswer = false;

            //lunchMenuDessert
            shownMenu = "";
            dinnerMenuDessert.forEach((num1, index) => {
                const num2 = dinnerMenuDessertPrices[index];
                shownMenu += `${num1} -- ${num2}€\n`;
            });
            do {
                userAnswer = prompt(`\nPor favor, selecciona el postre que deseas.\n${shownMenu}`, dinnerMenuDessert[0]);
                userAnswer = userAnswer.toUpperCase();
                dinnerMenuDessert.forEach((num1, index) => {
                    if (num1 === userAnswer) {
                        okAnswer = true;
                        complimentTheUser();
                        alert(`Has seleccionado ${userAnswer} por ${dinnerMenuDessertPrices[index]}€.\n`);
                        myMenuDishes.push(userAnswer);
                        myMenuPrices.push(dinnerMenuDessertPrices[index]);
                    }
                });
                if (okAnswer == false) {
                alert("Ha habido un error al seleccionar el plato deseado.");
                }
            } while (okAnswer == false);
            okAnswer = false;
            break;
        default:
            noServe = true;
    }
    //Extra
    if (noServe == false) {
        conExtra = confirm("¿Desea añadir un extra?");
        if (conExtra){ 
            shownMenu = "";
            extrasDishes.forEach((num1, index) => {
                const num2 = extrasPrices[index];
                shownMenu += `${num1} -- ${num2}€\n`;
            });
            do {
                userAnswer = prompt(`\nPor favor, selecciona el extra que deseas, si quieres alguno.\n${shownMenu}`);
                userAnswer = userAnswer.toUpperCase();
                extrasDishes.forEach((num1, index) => {
                    if (num1 === userAnswer) {
                        okAnswer = true;
                        complimentTheUser();
                        alert(`Has seleccionado ${userAnswer} por ${extrasPrices[index]}€.\n`);
                        myMenuDishes.push(userAnswer);
                        myMenuPrices.push(extrasPrices[index]);
                    }
                });
                if (okAnswer == false) {
                    alert("No has seleccionado ningún extra.");
                    okAnswer = true;
                }
                } while (okAnswer == false);
                okAnswer = false;
        }
    }
}

menuOfferedByHour();
selectDish();

if (noServe == false) {
for (let i = 0; i < myMenuPrices.length; i++ ) {
  totalPrice += myMenuPrices[i];
  if (myMenuPrices[3]) {
    extrasText = `${myMenuDishes[3]} --> ${myMenuPrices[3]}€.\n\n`
  } else {
    extrasText = "Sin extra.";
  }
}
alert(`Estos son los platos seleccionados del menú ${whichMenu}.\n
    PRINCIPAL: ${myMenuDishes[0]} --> ${myMenuPrices[0]}€.
    SECUNDARIO: ${myMenuDishes[1]} --> ${myMenuPrices[1]}€.
    POSTRE: ${myMenuDishes[2]} --> ${myMenuPrices[2]}€.\n
    ${extrasText}
    El total es: ${totalPrice}€`);
}