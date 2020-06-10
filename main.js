const creatineForm = document.querySelector("#creatinineForm");
const protocolForm = document.querySelector("#protocolForm");
const potassium = document.querySelector("#potassium");
const creatinine = document.querySelector("#creatinine");
const magnesium = document.querySelector("#magnesium");
const calcium = document.querySelector("#calcium");
const phosphate = document.querySelector("#phosphate");
const msg = document.querySelector("#message");
const submit = document.querySelector("#submit");
const output = document.querySelector("#output");
const creatineLevel = document.querySelector("#creatinineLevel");

creatineForm.addEventListener("submit", onSubmit);
protocolForm.addEventListener("submit", submitElectrolyte);

function onSubmit(e) {
  e.preventDefault();

  console.log("test test test");

  if (creatinine.value === "") {
    msg.innerHTML = "Please enter value";
    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
  } else if (creatinine.value <= 180) {
    creatineLevel.innerHTML = `<h3>Creatinine Value: ${creatinine.value}</h3>`;
    creatineForm.style.display = "none";
    protocolForm.style.display = "block";
    creatinine.value = "";
    // document.querySelector(".protocol").style.display = "block";
  } else {
    msg.innerHTML = "creatinine is high, not a candidate for protocol";
    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
    creatinine.value = "";
  }
}

function submitElectrolyte(e) {
  e.preventDefault();

  console.log("testing electrolyte protocol");

  getPotassiumValue();
  getMagnesiumValue();
  getCalciumValue();
  getPhosphateValue();

  protocolForm.style.display = "none";

  //   clear Fields
  // potassium.value = "";
  // magnesium.value = "";
  // calcium.value = "";

  // phosphate.value = "";
}

function getPotassiumValue() {
  let k = potassium.value;

  switch (true) {
    case k === "":
      return (outputPotassium.innerHTML = `<h3 class="ml-4 mr-4">K: ${k}</h3>
        <div class="card" style="width: 18rem;">
                <img src="../image/sad.png" class="card-img-top" alt="intravenous image" />
                <p class="details">No Input Value</p>
        </div>`);
      break;

    case k > 3 && k <= 3.5:
      return (outputPotassium.innerHTML = `<h3 class="ml-4 mr-4">K: ${k}</h3>
        <div>
            <div class="card" style="width: 18rem;">
                <img src="../image/intravenous.png" class="card-img-top" alt="intravenous image" />
                <div class="card-body">
                    <p class="card-text">Infuse KCL IV 20mmol, repeat bloodwork in 24hrs</p>  
                </div>
            </div>
        </div>`);
      break;
    case k <= 2.9:
      return (outputPotassium.innerHTML = `
        <h3 class="ml-4 mr-4">K: ${k}</h3>
        <div class="col-sm-3 col-md-3 mr-4">
            <div class="card" style="width: 18rem;">
                <img src="../image/callMD.png" class="card-img-top" alt="call MD"/>
                <div class="card-body">
                    <p class="card-text details">Call MD </p>  
                </div>
            </div>
        </div>
        <div class="col-sm-3 col-md-3 style="width: 18rem;">
                <p class="plus"> + </p>
        </div>
        <div class="col-sm-3 col-md-3 mr-4">
            <div class="card" style="width: 18rem;">
                <img src="../image/intravenous.png" class="card-img-top" alt="intravenous image" />
                <div class="card-body">
                    <p class="card-text details">Infuse KCL IV 20mmol x2 </p>  
                </div
            </div>
        </div>
          `);
      break;

    default:
      return (outputPotassium.innerHTML = `<h3 class="ml-4 mr-4">K: ${k}</h3>
        <div class="card" style="width: 18rem;">
                <img src="../image/smiling.png" class="card-img-top" alt="intravenous image" />
                <p class="details">No Replacement Needed</p>
        </div>`);
      break;
  }
}
function getMagnesiumValue() {
  let mg = magnesium.value;
  switch (true) {
    case mg === "":
      return (outputMagnesium.innerHTML = `
      <h3 class="ml-4 mr-4">Mg: ${mg}</h3>
      <div class="card" style="width: 18rem;">
              <img src="../image/sad.png" class="card-img-top" alt="intravenous image" />
              <p class="details">No Input Value</p>
      </div>`);
      break;
    case mg <= 0.79 && mg >= 0.6:
      return (outputMagnesium.innerHTML = `<h3 class="ml-4 mr-4">Mg: ${mg}</h3>
      <div>
          <div class="card" style="width: 18rem;">
              <img src="../image/intravenous.png" class="card-img-top" alt="intravenous image" />
              <div class="card-body">
                  <p class="card-text">Infuse KCL IV 20mmol, repeat bloodwork in 24hrs</p>  
              </div>
          </div>
      </div>`);
      break;
    case mg < 0.6:
      return (outputMagnesium.innerHTML = `<h3 class="ml-4 mr-4">Mg: ${mg}</h3>
      <div class="col-sm-3 col-md-3 mr-4">
          <div class="card" style="width: 18rem;">
              <img src="../image/callMD.png" class="card-img-top" alt="call MD"/>
              <div class="card-body">
                  <p class="card-text details">Call MD </p>
              </div>
          </div>
      </div>
      <div class="col-sm-3 col-md-3 style="width: 18rem;">
              <p class="plus"> + </p>
      </div>
      <div class="col-sm-3 col-md-3 mr-4">
          <div class="card" style="width: 18rem;">
              <img src="../image/intravenous.png" class="card-img-top" alt="intravenous image" />
              <div class="card-body">
                  <p class="card-text details">Infuse Magnesium Sulfate 2g x 2, repeat bloodwork in 6hrs</p>
              </div
          </div>
      </div>
        `);

      break;
    default:
      return (outputMagnesium.innerHTML = `<h3 class="ml-4 mr-4">Mg: ${mg}</h3>
      <div class="card" style="width: 18rem;">
              <img src="../image/smiling.png" class="card-img-top" alt="intravenous image" />
              <p class="details">No Replacement Needed</p>
      </div>`);
      break;
  }
}
function getCalciumValue() {
  let ca = calcium.value;
  switch (true) {
    case ca === "":
      return (outputCalcium.innerHTML = `<h3 class="ml-4 mr-4">Ca: ${ca}</h3>
      <div class="card" style="width: 18rem;">
              <img src="../image/sad.png" class="card-img-top" alt="intravenous image" />
              <p class="details">No Input Value</p>
      </div>`);
      break;
    case ca > 1.5 && ca <= 2:
      return;
      outputCalcium.innerHTML = `
      <h3 class="ml-4 mr-4">Mg: ${mg}</h3>
      <div>
          <div class="card" style="width: 18rem;">
              <img src="../image/intravenous.png" class="card-img-top" alt="intravenous image" />
              <div class="card-body">
                  <p class="card-text">Infuse KCL IV 20mmol, repeat bloodwork in 24hrs</p>  
              </div>
          </div>
      </div>`;
      break;
    case ca <= 1.5:
      return (outputCalcium.innerHTML = `<h3 class="ml-4 mr-4">Ca: ${ca}</h3>
        <div class="col-sm-3 col-md-3 mr-4">
            <div class="card" style="width: 18rem;">
                <img src="../image/callMD.png" class="card-img-top" alt="call MD"/>
                <div class="card-body">
                    <p class="card-text details">Call MD </p>  
                </div>
            </div>
        </div>
        <div class="col-sm-3 col-md-3 style="width: 18rem;">
                <p class="plus"> + </p>
        </div>
        <div class="col-sm-3 col-md-3 mr-4">
            <div class="card" style="width: 18rem;">
                <img src="../image/intravenous.png" class="card-img-top" alt="intravenous image" />
                <div class="card-body">
                    <p class="card-text details">Infuse Calcium gluconate 10g IV </p>  
                </div
            </div>
        </div>
          `);
      break;
    default:
      return (outputCalcium.innerHTML = `<h3 class="ml-4 mr-4">Ca: ${ca}</h3>
      <div class="card" style="width: 18rem;">
              <img src="../image/smiling.png" class="card-img-top" alt="intravenous image" />
              <p class="details">No Replacement Needed</p>
      </div>`);
      break;
  }
}

function getPhosphateValue() {
  let phos = phosphate.value;
  switch (true) {
    case phos === "":
      return (outputPhosphate.innerHTML = `<h3 class="ml-4 mr-4">PO4: ${phos}</h3>
      <div class="card" style="width: 18rem;">
              <img src="../image/sad.png" class="card-img-top" alt="intravenous image" />
              <p class="details">No Input Value</p>
      </div>`);
    case phos > 0.9 && phos <= 0.7:
      return (outputPhosphate.innerHTML = `<h3 class="ml-4 mr-4">PO4: ${phos}</h3>
      <div>
          <div class="card" style="width: 18rem;">
              <img src="../image/intravenous.png" class="card-img-top" alt="intravenous image" />
              <div class="card-body">
                  <p class="card-text">Infuse Sodium Phosphate 15mmol, repeat bloodwork in 24hrs</p>  
              </div>
          </div>
      </div>`);
      break;
    case phos <= 0.7:
      return (outputPhosphate.innerHTML = `<h3 class="ml-4 mr-4">PO4: ${phos}</h3>
        <div class="col-sm-3 col-md-3 mr-4">
            <div class="card" style="width: 18rem;">
                <img src="../image/callMD.png" class="card-img-top" alt="call MD"/>
                <div class="card-body">
                    <p class="card-text details">Call MD </p>  
                </div>
            </div>
        </div>
        <div class="col-sm-3 col-md-3 style="width: 18rem;">
                <p class="plus"> + </p>
        </div>
        <div class="col-sm-3 col-md-3 mr-4">
            <div class="card" style="width: 18rem;">
                <img src="../image/intravenous.png" class="card-img-top" alt="intravenous image" />
                <div class="card-body">
                    <p class="card-text details">Infuse Sodium Phosphate 30mmol IV, repeat bloodwork in 6hrs </p>  
                </div
            </div>
        </div>
          `);
      break;
    default:
      return (outputPhosphate.innerHTML = `<h3 class="ml-4 mr-4">PO4: ${phos}</h3>
      <div class="card" style="width: 18rem;">
              <img src="../image/smiling.png" class="card-img-top" alt="intravenous image" />
              <p class="details">No Replacement Needed</p>
      </div>`);
      break;
  }
}
