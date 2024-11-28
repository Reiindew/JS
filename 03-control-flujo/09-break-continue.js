// no muestra el 2,ya que ese paso se lo salta y al llegar a 4 se detiene

let i = 0

while (i < 6) {
    i++
    if (i === 2) {
        continue;
    }
    if (i === 4) {
        break;
    }
    console.log(i);
}