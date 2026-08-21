async function getData() {
  const url = "/swap-sheet-backend";
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const allTsp = await reponse.json();
    return allTsp
  } catch (erreur) {
    console.error(erreur.message);
  }
}
// Start //
console.log("en cours...")
const allTsp = await getData();
getSelectOptions(allTsp);

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(navLink => {
    navLink.classList.toggle(
        "active",
        navLink.pathname === window.location.pathname
    );
});



function getSelectOptions(allTsp) {
  const tspSelect = document.getElementById("tsp-select");
    for (let i = 0; i < allTsp.length; i++) {
      console.log(allTsp[i]);
      const optionElement = document.createElement("option");
      optionElement.textContent = allTsp[i]["lastName"] + " " + allTsp[i]["firstName"];
      tspSelect.appendChild(optionElement);
  }
}