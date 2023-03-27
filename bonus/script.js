function getSubArray(array, a, b) {
    // Verifica che a sia minore di b
    if (a > b) {
      return [];
    }
  
    // Utilizza il metodo filter per selezionare gli elementi
    // dell'array che hanno la posizione compresa tra a e b
    const subArray = array.filter((_, index) => {
      return index >= a && index <= b;
    });
  
    return subArray;
  }
  
  // Esempio di utilizzo della funzione
  const numbersArray = [23, 14, 6, 8, 10];
  const newArray = getSubArray(numbersArray, 1, 3);
  console.log(newArray); // [14, 6, 8]