// Creazione dell'array di squadre
const squadre = [
    { nome: 'Juventus', punti: 0, falli: 0 },
    { nome: 'Inter', punti: 0, falli: 0 },
    { nome: 'Milan', punti: 0, falli: 0 },
    { nome: 'Roma', punti: 0, falli: 0 },
    { nome: 'Napoli', punti: 0, falli: 0 },
  ];
  
  // Generazione dei numeri casuali per punti e falli
  squadre.forEach(squadra => {
    squadra.punti = Math.floor(Math.random() * 100);
    squadra.falli = Math.floor(Math.random() * 50);
  });
  
  // Creazione del nuovo array con nome e falli subiti
  const nomeFalli = squadre.map(({ nome, falli }) => ({ nome, falli }));
  
  // Stampa di tutto in console
  console.log('Squadre:', squadre);
  console.log('Nome e falli subiti:', nomeFalli);