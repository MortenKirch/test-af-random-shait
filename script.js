const url = "../kager.json";

fetch(url)
  .then(res => res.json())
  .then(data => {
    const kagerListe = document.getElementById('kager-liste');
    data.kager.forEach(kage => {
      const listItem = document.createElement('li');
      listItem.textContent = `${kage.navn} - ${kage.pris}`;
      listItem.addEventListener('click', function() {
        // Tilføj valgt kage til kontaktformularen
        document.getElementById('besked').value += `${kage.navn} - ${kage.pris}\n`;
      });
      kagerListe.appendChild(listItem);
    });
  });