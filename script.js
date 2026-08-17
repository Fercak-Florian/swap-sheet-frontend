async function getData() {
  const url = "http://127.0.0.1:8080";
  try {
    const reponse = await fetch(url);
    console.log(reponse);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const resultat = await reponse.json();
    console.log(resultat);
  } catch (erreur) {
    console.error(erreur.message);
  }
}

getData();