// Funkcja zmieniająca border-radius na 0px
function removeBorderRadius() {
    const elements = document.querySelectorAll("*"); // Pobierz wszystkie elementy na stronie
    elements.forEach(el => {
        el.style.borderRadius = "0px"; // Ustaw border-radius na 0px
    });
}

// Nasłuchuj zmian w DOM i stosuj zmiany
const observer = new MutationObserver(removeBorderRadius);
observer.observe(document.body, { childList: true, subtree: true });

// Wykonaj zmiany na początku
removeBorderRadius();
