
async function chargerPilotes() {
  const reponse = await fetch('pilotes.json');
  const pilotes = await reponse.json();
  const container = document.getElementById('liste-pilotes');

  pilotes.forEach(pilote => {
    const div = document.createElement('div');
    div.className = 'carte-pilote';
    div.innerHTML = `
      <img src="${pilote.image}" alt="${pilote.nom}">
      <h3>${pilote.nom}</h3>
      <p><strong>Équipe :</strong> ${pilote.equipe}</p>
      <p><strong>Nationalité :</strong> ${pilote.nationalite}</p>
      <p><strong>Titres :</strong> ${pilote.titres}</p>
    `;
    container.appendChild(div);
  });
}

if (document.getElementById('liste-pilotes')) {
  chargerPilotes();
}
