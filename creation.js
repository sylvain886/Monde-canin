function creerCompte(event) {
  event.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const prenom = document.getElementById("prenom").value.trim();
  const telephone = document.getElementById("telephone").value.trim();
  const email = document.getElementById("email").value.trim();
  const motdepasse = document.getElementById("motdepasse").value;

  if (!/^\d{9,15}$/.test(telephone)) {
    alert("Numéro de téléphone invalide !");
    return false;
  }

  localStorage.setItem("utilisateur", JSON.stringify({
    nom, prenom, telephone, email, motdepasse
  }));

  alert("Compte créé avec succès !");
  window.location.href = "index.html";
  return true;
}
