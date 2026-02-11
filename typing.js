const texts = [
  {
    text: "From building fast, modern websites that convert...",
    color: "#008080",
  }, // Teal
  { text: "To ranking you higher where it truly matters...", color: "#c9a227" }, // Gold
  { text: "To turning followers into loyal customers...", color: "#008080" }, // Teal
  { text: "To crafting emails people actually click...", color: "#c9a227" }, // Gold
  { text: "To scaling your growth with precision ads.", color: "#008080" }, // Teal
];

const typingElement = document.getElementById("typingText");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 80;
const deletingSpeed = 50;
const pauseAfterTyping = 1500;

function typeEffect() {
  const currentItem = texts[textIndex];
  const currentText = currentItem.text;

  // Set color for current text
  typingElement.style.color = currentItem.color;

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => (isDeleting = true), pauseAfterTyping);
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

typeEffect();
