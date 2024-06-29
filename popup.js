document.addEventListener('DOMContentLoaded', () => {
  const nmeItems = [
    "Gloves",
    "Tissues",
    "Vasofix (IV catheter)",
    "Syringes and needles",
    "Dressings and bandages",
    "Gauze pads and sponges",
    "Catheters",
    "Masks and face shields",
    "IV bags and tubing",
    "Bed linens and blankets (some hospitals charge for extra or specialized types)",
    "Wound care supplies"
  ];

  const itemInput = document.getElementById('itemInput');
  const suggestionsDiv = document.getElementById('suggestions');

  itemInput.addEventListener('input', suggestItems);

  function suggestItems() {
    const input = itemInput.value.trim().toLowerCase();
    suggestionsDiv.innerHTML = '';

    if (input === '') {
      suggestionsDiv.style.display = 'none';
      return;
    }

    const filteredItems = nmeItems.filter(item => item.toLowerCase().includes(input));
    filteredItems.forEach(item => {
      const suggestion = document.createElement('div');
      suggestion.className = 'suggestion';
      suggestion.textContent = item;
      suggestion.addEventListener('click', () => {
        itemInput.value = item;
        suggestionsDiv.innerHTML = '';
        suggestionsDiv.style.display = 'none';
        document.getElementById('result').textContent = 'Yes';
      });
      suggestionsDiv.appendChild(suggestion);
    });

    if (filteredItems.length > 0) {
      suggestionsDiv.style.display = 'block';
      resizePopup();
    } else {
      suggestionsDiv.style.display = 'none';
    }
  }

  function resizePopup() {
    const suggestionsHeight = suggestionsDiv.scrollHeight;
    const popupHeight = Math.min(document.body.scrollHeight + suggestionsHeight, 600); // Add suggestions height and limit to 600px
    document.body.style.height = `${popupHeight}px`; // Directly set the height of the popup body
    suggestionsDiv.style.maxHeight = `${popupHeight - 150}px`; // Adjust suggestions max height based on popup height
  }
});
