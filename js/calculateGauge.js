
function calculateGauge(e) {
  e.preventDefault();

  let widthInCM = parseInt(document.querySelector("[data-js-id=widthInCM]").value);
  let heightInCM = parseInt(document.querySelector("[data-js-id=heightInCM]").value);
  let numberStiches = parseInt(document.querySelector("[data-js-id=numberStiches]").value);
  let rows = parseInt(document.querySelector("[data-js-id=rows]").value);
  let expecteWidthInCM = parseInt(document.querySelector("[data-js-id=expecteWidthInCM]").value);
  let expecteHeightInCM = parseInt(document.querySelector("[data-js-id=expecteHeightInCM]").value);
  let result = document.querySelector("[data-js-id=result]");

  let stiches = (numberStiches / widthInCM) * expecteWidthInCM
  let rowNumber = (rows / heightInCM) * expecteHeightInCM

  result.innerHTML = `
    <h3 class="mb-4">Du brauchst:</h3>
    <article class="row">
      <p class="col-md-12 alert alert-primary">${stiches} Maschen anschlagen für ${expecteWidthInCM}cm Breite</p>
      <p class="col-md-12 alert alert-primary">${rowNumber} Reihen für ${expecteHeightInCM}cm Höhe</p>
    </article>
  `;
}
