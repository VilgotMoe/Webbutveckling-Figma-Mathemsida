// För att visa mat info vid klick

const buttons = document.querySelectorAll(".menu-info-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const matNamn = "Salad";
    const pris = "80 kr";
    const beskrivning = "Lorem ipsum dolor sit amet consectetur.";

    // Skapa ett meddelande med matinformation
    const meddelande =
      `Mat: ${matNamn}\n` + `Pris: ${pris}\n` + `Beskrivning: ${beskrivning}`;

    // Visa alert med matinformation
    alert(meddelande);
  });
});
