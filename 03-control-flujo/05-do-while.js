// la unica diferencia es que en while revisa primero de nada si se cumple la condicion,si asi es, ejecuta el codigo
// En el caso de while, primero se ejecuta la porcion de codigo y despues se revisa la condicion

let i = 2;

while (i < 2) {
    if (i % 2 == 0) {
        console.log('Número par', i);
    }
    i++;
}

// do {
//     if (i % 2 == 0) {
//         console.log('Número par', i);
//     }
//     i++;
// } while (i < 2);