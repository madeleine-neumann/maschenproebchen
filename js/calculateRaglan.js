
function calculateRaglan(e) {
  e.preventDefault();

  let gauge = parseInt(document.querySelector("[data-js-id=gauge]").value);
  let headCircumference = parseInt(document.querySelector("[data-js-id=headCircumference]").value);
  let raglanLine = parseInt(document.querySelector("[data-js-id=raglanLine]").value);
  let result = document.querySelector("[data-js-id=result]");

  let stichesEachCentimer = gauge / 10
  let totalNumberOfStiches = Math.round(stichesEachCentimer * headCircumference)
  let raglanStiches = raglanLine * 4
  let stichesEachPart =  Math.round((totalNumberOfStiches - raglanStiches) / 3)

  result.innerHTML = `
    <h3 class="mb-4">Du brauchst:</h3>
    <article class="row">
      <p class="col-md-6">  Maschen Rückenteil: ${stichesEachPart} </p>
      <p class="col-md-6">  Maschen Vorderteil: ${stichesEachPart} </p>
      <p class="col-md-6">  Maschen je Ärmel: ${Math.round(stichesEachPart / 2)} </p>
      <p class="col-md-6">  Maschen je Raglanlinie: ${raglanLine} (vor und nach den ${Math.round(stichesEachPart / 2)} Maschen des jeweiligen Ärmels)</p>
      <p class="col-md-12 alert alert-success">  Anzahl an Maschen die angeschlagen werden müssen: ${totalNumberOfStiches}</p>
    </article>
  `;
}
