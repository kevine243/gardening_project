function calculateCost() {
  // Sélection des éléments HTML correspondant aux cases à cocher et aux champs de coût
  const flower = document.querySelector("#flower");
  const tree = document.querySelector("#tree");
  const cleaning = document.querySelector("#cleaning");
  const watering = document.querySelector("#watering");
  const trimming = document.querySelector("#trimming");

  // Initialisation du coût total
  let totalCost = 0;

  // Calcul du coût en fonction des options sélectionnées
  if (flower.checked) {
    totalCost += 50 + 100;
  }
  if (tree.checked) {
    totalCost += 120 + 60;
  }
  if (cleaning.checked) {
    totalCost += 100 + 60;
  }
  if (watering.checked) {
    totalCost += 75 + 60;
  }
  if (trimming.checked) {
    totalCost += 250 + 100;
  }
  

  // Vérification si le coût total dépasse 1000 pour appliquer une réduction de 15%
  if (totalCost > 1000) {
    totalCost *= 0.85; // Appliquer une réduction de 15%
    // Création d'un message de réduction
    const reductionMessage = document.createElement("p");
    reductionMessage.innerText =
      "Congratulations ! A 15% discount has been applied.";
    // Ajout du message de réduction à l'élément avec la classe "result"
    document.querySelector(".result").appendChild(reductionMessage);
  }

  // Mise à jour de l'affichage du coût total sur la page avec deux décimales
  document.getElementById("totalCost").innerText = totalCost.toFixed(2);
}

// Cette fonction réinitialise le formulaire en rechargeant la page
function resetForm() {
  window.location.reload();
}

// Cette fonction gère la validation du formulaire de contact
function contactForm() {
  // Sélection de l'élément formulaire
  const form = document.getElementById("contactForm");

  // Écoute de l'événement de soumission du formulaire
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Validation des champs du formulaire
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const phoneNumber = document.getElementById("phoneNumber");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Sélection des éléments pour afficher les messages d'erreur
    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const phoneNumberError = document.getElementById("phoneNumberError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Validation du prénom : uniquement du texte et maximum 15 caractères
    if (!/^[a-zA-Z]+$/.test(firstName.value) || firstName.value.length > 15) {
      firstNameError.innerHTML =
        "Invalid first name. Only text allowed, max 15 characters.";
    } else {
      firstNameError.innerHTML = ""; // Efface le message d'erreur si la validation réussit
    }

    // Validation du nom : uniquement du texte et maximum 20 caractères
    if (!/^[a-zA-Z]+$/.test(lastName.value) || lastName.value.length > 20) {
      lastNameError.innerHTML =
        "Invalid lastname. Only text allowed, max 20 characters.";
    } else {
      lastNameError.innerHTML = ""; // Efface le message d'erreur si la validation réussit
    }

    // Validation du numéro de téléphone : format XXX-XXXXXXX
    if (!/^\d{3}-\d{7}$/.test(phoneNumber.value)) {
      phoneNumberError.innerHTML = "Invalid phone number.";
    } else {
      phoneNumberError.innerHTML = ""; // Efface le message d'erreur si la validation réussit
    }

    // Validation de l'adresse email : format standard
    if (!/\S+@\S+\.\S+/.test(email.value)) {
      emailError.innerHTML = "Invalid email adress.";
    } else {
      emailError.innerHTML = ""; // Efface le message d'erreur si la validation réussit
    }

    // Validation du message : non vide et maximum 300 caractères
    if (message.value.length === 0 || message.value.length > 300) {
      messageError.innerHTML = "Invalid Message";
    } else {
      messageError.innerHTML = ""; // Efface le message d'erreur si la validation réussit
    }
  });
}
