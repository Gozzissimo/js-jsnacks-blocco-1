// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

invitedList = [
    'Marco',
    'Chiara',
    'Francesco',
    'Topolino',
    'Ciro',
    'Lele',
    'Ciccio Graziani'
]

const userName = prompt('Inserisci il tuo nome');

// METODO 1 OK - INCLUDES + IF
// const invited = invitedList.includes(userName);

// if (invited) {
//     alert('Prego può entrare');
// } else {
//     alert('Non può entare');
// }


// METODO 2 OK - BOOLEAN + FOR + IF
// let find = false 

// for (let i = 0; i < invitedList.length; i++) {
//     if (userName == invitedList[i]) {
//         find = true;
//     }
// }

// if (find == true) {
//     alert('Prego può entrare');
// } else {
//     alert('Non può entare');
// }


// METODO 3 OK - BOOLEAN + WHILE + IF

let i = 0
while (i < invitedList && find == false) {
    if (invitedList[i] == nameUser) {
        find = true;
    }

    i++
}

if (find) {
    alert('Prego può entrare');
} else {
    alert('Non può entare');
}