// Récupération des éléments du DOM
const quantiteInput = document.getElementById("quantitePlastique");

// Résultats Pyrolyse
const huilePyrolyseSpan = document.getElementById("huilePyrolyse");
const gazSpan = document.getElementById("gaz");
const residusSpan = document.getElementById("residus");
const huileLourdeSpan = document.getElementById("huileLourde");

// Résultats Distillation
const dieselSpan = document.getElementById("diesel");
const essenceSpan = document.getElementById("essence");
const keroseneSpan = document.getElementById("kerosene");
const huileLourdeDistSpan = document.getElementById("huileLourdeDist");

// Prix de vente
const prixDieselSpan = document.getElementById("prixDiesel");
const prixEssenceSpan = document.getElementById("prixEssence");
const prixKeroseneSpan = document.getElementById("prixKerosene");
const prixHuileLourdeDistSpan = document.getElementById("prixHuileLourdeDist");

// Dépenses
const depMainOeuvreSpan = document.getElementById("depMainOeuvre");
const depAchatDechetsSpan = document.getElementById("depAchatDechets");
const depTransportSpan = document.getElementById("depTransport");
const depTotalSpan = document.getElementById("depTotal");

// Totaux
const totalVentesSpan = document.getElementById("totalVentes");
const beneficeNetSpan = document.getElementById("beneficeNet");

// Fonction de mise à jour des calculs
function calculer() {
  const quantite = parseFloat(quantiteInput.value) || 0;

  // --- Pyrolyse (kg)
  const huilePyrolyse = quantite * 0.45;
  const gaz = quantite * 0.35;
  const residus = quantite * 0.10;
  const huileLourde = quantite * 0.10;

  huilePyrolyseSpan.textContent = huilePyrolyse.toFixed(2);
  gazSpan.textContent = gaz.toFixed(2);
  residusSpan.textContent = residus.toFixed(2);
  huileLourdeSpan.textContent = huileLourde.toFixed(2);

  // --- Distillation (L)
  const diesel = huilePyrolyse * 0.50;
  const essence = huilePyrolyse * 0.30;
  const kerosene = huilePyrolyse * 0.15;
  const huileLourdeDist = huilePyrolyse * 0.05;

  dieselSpan.textContent = diesel.toFixed(2);
  essenceSpan.textContent = essence.toFixed(2);
  keroseneSpan.textContent = kerosene.toFixed(2);
  huileLourdeDistSpan.textContent = huileLourdeDist.toFixed(2);

  // --- Prix de vente (€)
  const prixDiesel = diesel * 1.5;
  const prixEssence = essence * 1.5;
  const prixKerosene = kerosene * 1.0;
  const prixHuileLourdeDist = huileLourdeDist * 0.8;

  prixDieselSpan.textContent = prixDiesel.toFixed(2) + " €";

prixEssenceSpan.textContent = prixEssence.toFixed(2) + " €";
  prixKeroseneSpan.textContent = prixKerosene.toFixed(2) + " €";
  prixHuileLourdeDistSpan.textContent = prixHuileLourdeDist.toFixed(2) + " €";

  // --- Dépenses (€)
  const depMainOeuvre = quantite * 0.15;
  const depAchatDechets = quantite * 0.10;
  const depTransport = quantite * 0.05;
  const depTotal = depMainOeuvre + depAchatDechets + depTransport;

  if (depMainOeuvreSpan) depMainOeuvreSpan.textContent = depMainOeuvre.toFixed(2) + " €";
  if (depAchatDechetsSpan) depAchatDechetsSpan.textContent = depAchatDechets.toFixed(2) + " €";
  if (depTransportSpan) depTransportSpan.textContent = depTransport.toFixed(2) + " €";
  if (depTotalSpan) depTotalSpan.textContent = depTotal.toFixed(2) + " €";

  // --- Totaux
  const totalVentes = prixDiesel + prixEssence + prixKerosene + prixHuileLourdeDist;
  const beneficeNet = totalVentes - depTotal;

  totalVentesSpan.textContent = totalVentes.toFixed(2) + " €";
  beneficeNetSpan.textContent = beneficeNet.toFixed(2) + " €";
}

// Événement sur l'input quantité pour recalculer
quantiteInput.addEventListener("input", calculer);