// Creazione dell'array di bici da corsa
const bici = [
    { nome: 'Bianchi', peso: 7.5 },
    { nome: 'Specialized', peso: 7.2 },
    { nome: 'Trek', peso: 7.9 },
    { nome: 'Cannondale', peso: 7.1 },
    { nome: 'Pinarello', peso: 7.6 }
  ];
  
  // Trovare la bici con il peso minore
  let biciLeggera = bici[0];
  for (let i = 1; i < bici.length; i++) {
    if (bici[i].peso < biciLeggera.peso) {
      biciLeggera = bici[i];
    }
  }
  
  // Utilizzo del destructuring e del template literal per stampare la bici leggera
  const { nome, peso } = biciLeggera;
  console.log(`La bici più leggera è ${nome} con un peso di ${peso} kg`);