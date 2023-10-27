// CREATE ADDRESS FORM
document.getElementById("orderBtn").addEventListener("click", function () {
  const inputMessage = document.getElementById("message");
  inputMessage.removeAttribute("required");

  const msgReset = document.getElementById("messageReset");
  msgReset.style.display = "none";

  const msgSend = document.getElementById("messageSend");
  msgSend.style.display = "none";

  const msgOrder = document.getElementById("orderBtn");
  msgOrder.style.display = "none";

  document.getElementById("form-row1").innerHTML += `
    <fieldset class="address" id="address">
              <legend>Address</legend>
              <p>
                <label for="address"
                  >Address<br />
                  <input
                    type="text"
                    name="address1"
                    id="address1"
                    required
                    minlength="3"
                    maxlength="35"
                /></label>
              </p>
              <p>
                <label for="address2"
                  >Address<br />
                  <input type="text" name="address2" id="address2"
                /></label>
              </p>
              <p>
                <label for="city"
                  >City<br />
                  <input
                    type="text"
                    name="city"
                    id="city"
                    required
                    minlength="2"
                    maxlength="35"
                /></label>
              </p>
              <input type="hidden" name="source" value="ContactForm" />
              <p>
                <label for="postcode"
                  >Post Code<br />
                  <input
                    type="text"
                    name="postcode"
                    id="postcode"
                    required
                    minlength="2"
                    maxlength="35"
                /></label>
              </p>
              <p>
                <label for="country"
                  >Country<br />
                  <input
                    type="text"
                    name="country"
                    id="country"
                    required
                    minlength="2"
                    maxlength="35"
                /></label>
              </p>

              <button type="reset">Reset</button>
              <button type="button" class="address-next" id="nextBtn1">Next</button>
            </fieldset>
    `;
});

// CREATE PRODUCT CHOICE

// DISABLE 500g
function disableFive() {
  var coffeeDrop = document.getElementById("coffeeItem").value;
  var weightFive = document.getElementById("weight500");
  var weightFiveID = document.getElementById("weight500ID");
  const noFive = [
    "dcc008",
    "dcc009",
    "dcc010",
    "dcc011",
    "dcc012",
    "dcc013",
    "dcc014",
    "dcc015",
  ];
  // if (coffeeDrop === "dcc011") {
  if (noFive.includes(coffeeDrop)) {
    weightFiveID.style.opacity = "0.2";
    weightFive.style.opacity = "0.2";
    weightFiveID.style.textDecoration = "line-through";
    weightFive.disabled = true;
  } else {
    weightFive.disabled = false;
    weightFiveID.style.textDecoration = "none";
    weightFiveID.style.opacity = "1";
    weightFive.style.opacity = "1";
  }
}

// CREATE YOUR ORDER SECTION
document.getElementById("productNext").addEventListener("click", function () {
  // GENERATE ORDER NUMBER
  const orderNo = Math.floor(Math.random() * 10000);
  document.getElementById("orderNumber").textContent = orderNo
    .toString()
    .padStart(4, "0");

  // GET ITEM
  var dropdown = document.getElementById("coffeeItem");
  var selectedItem = dropdown.options[dropdown.selectedIndex].text;
  var selectedWeight = document.querySelector(
    'input[name="weight"]:checked'
  ).value;
  var selectedGrind = document.querySelector(
    'input[name="ground"]:checked'
  ).value;
  // console.log(selectedGrind);
  document.getElementById(
    "orderedItem"
  ).textContent = `${selectedItem} Coffee ${selectedWeight}g ${selectedGrind}`;

  // GET PRICE
  var itemPrice = 0;
  if (selectedWeight == 250) {
    itemPrice = 9.99;
  } else if (selectedWeight == 500) {
    itemPrice = 14.99;
  } else if (selectedWeight == 1000) {
    itemPrice = 24.99;
  }
  document.getElementById("price").textContent = `£${itemPrice}`;

  // GET POSTAGE
  const postagePrice = 2.99;
  document.getElementById("postage").textContent = `£${postagePrice}`;

  // CALCULATE TOTAL
  var totalPrice = itemPrice + postagePrice;
  document.getElementById("total").textContent = `£${totalPrice}`;

  // SHOW ORDERED PRODUCT
  var code = document.getElementById("coffeeItem").value;
  console.log(code);
});
