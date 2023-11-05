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

              <button type="reset" id="messageReset2">Reset</button>
              <button type="button" class="address-next" id="nextBtn1" onClick="productChoice()">Next</button>
            </fieldset>
    `;
});

// CREATE PRODUCT CHOICE
function productChoice() {
  // hide buttons
  const msgReset2 = document.getElementById("messageReset2");
  msgReset2.style.display = "none";

  const msgNext = document.getElementById("nextBtn1");
  msgNext.style.display = "none";

  document.getElementById("form-row2").innerHTML += `
  <fieldset class="yourOrder" id="yourOrder">
              <legend>Choose Product</legend>

              <p>
                <label for="coffeeItem"
                  >Choose your coffee:<br />
                  <select
                    name="coffeeItem"
                    id="coffeeItem"
                    
                    onchange="disableFive()"
                  >
                    <option value="0000">--CHOOSE YOUR COFFEE--</option>
                    <option value="dcc011" >404</option>
                    <option value="dcc009" >Black Hat</option>
                    <option value="dcc006" >Bug Fixing</option>
                    <option value="dcc008" >Corrupted Database</option>
                    <option value="dcc005" >Cybersecurity</option>
                    <option value="dcc013" >Data Breach</option>
                    <option value="dcc012" >DDoS</option>
                    <option value="dcc003" >Firewall</option>
                    <option value="dcc015" >Malware</option>
                    <option value="dcc007" >Pen Testing</option>
                    <option value="dcc010" >Ransomware</option>
                    <option value="dcc004" >Server Meltdown</option>
                    <option value="dcc001" >Source Code</option>
                    <option value="dcc014" >System Failure</option>
                    <option value="dcc002" >White Hat</option>
                  </select></label
                ><br />
              </p>

              <p>
                <label for="coffeeSize">
                  Weight:<br />
                  <input
                    type="radio"
                    name="weight"
                    id="weight250"
                    value="250"
                    required
                  />
                  <label for="weight250">250g</label>
                  <input
                    type="radio"
                    name="weight"
                    id="weight500"
                    value="500"
                    required
                  />
                  <label for="weight500" id="weight500ID">500g</label>
                  <input
                    type="radio"
                    name="weight"
                    id="weight1k"
                    value="1000"
                    required
                  />
                  <label for="weight1k">1000g</label>
                </label>
              </p>
              <p>
                <label for="groundStyle">Grind Style: <br /> </label>
              </p>

              <div class="ground-style">
                <input
                  type="radio"
                  name="ground"
                  id="beans"
                  value="roasted coffee beans"
                  class="ground"
                  required
                />
                <label for="beans" title="Roasted coffee beans"
                  ><img
                    src="./img/coffee-beans.png"
                    alt="Roasted coffee beans"
                    class="ground-img"
                /></label>

                <input
                  type="radio"
                  name="ground"
                  id="espresso"
                  value="grounded for espresso"
                  class="ground"
                  required
                />
                <label for="espresso" title="Ground for espresso"
                  ><img
                    src="./img/coffee-machine.png"
                    alt="Ground for espresso"
                    class="ground-img"
                /></label>
                <input
                  type="radio"
                  name="ground"
                  id="pods"
                  value="grounded for pods"
                  class="ground"
                  required
                />
                <label for="pods" title="Ground for pods"
                  ><img
                    src="./img/pod.png"
                    alt="Ground for pods"
                    class="ground-img"
                /></label>
                <input
                  type="radio"
                  name="ground"
                  id="aeropress"
                  value="grounded for aeropress"
                  class="ground"
                  required
                />
                <label for="aeropress" title="Ground for aeropress"
                  ><img
                    src="./img/drip-glass.png"
                    alt="Ground for aeropress"
                    class="ground-img"
                /></label>
                <input
                  type="radio"
                  name="ground"
                  id="cafetiere"
                  value="grounded for cafetiere"
                  class="ground"
                  required
                />
                <label for="cafetiere" title="Ground for cafetiere"
                  ><img
                    src="./img/french-press.png"
                    alt="Ground for cafetiere"
                    class="ground-img"
                /></label>
              </div>
              <div class="orderSubmit-btnLeft">
                <button type="reset" id="messageReset3">Reset</button>
                <button type="button" class="address-next" id="productNext" onClick="yourOrderBox()">
                  Next
                </button>
              </div>
            </fieldset>
  `;
  document.getElementById("form-row2").innerHTML += `
  <fieldset id="submitBox" class="submitBox hideMe">
              <legend>Your Order</legend>
              <!-- <p>Your order:</p> -->

              <div class="orderFinal">
                <table class="table4">
                  <tr>
                    <td></td>
                    <td class="tableVisible">ORDER NUMBER</td>
                    <td
                      class="tableVisible"
                      id="orderNumber"
                      name="orderNumber"
                      onLoad="genOrderNum()"
                    >
                      
                    </td>
                  </tr>
                  <tr>
                    <td
                      colspan="2"
                      class="tableVisible"
                      id="orderedItem"
                      name="orderedItem"
                    >
                      ITEM
                    </td>

                    <td class="tableVisible" id="price"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td class="tableVisible">POSTAGE</td>
                    <td class="tableVisible" id="postage"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td class="tableVisible2">TOTAL</td>
                    <td class="tableVisible2" id="total"></td>
                  </tr>
                </table>
                <p>
                  To confirm your order make a payment using below bank details
                  using order number as reference<br />
                  Sebastian Kolenderski<br />
                  Sort Code: 04-29-09<br />
                  Account Number: 04841948
                </p>
              </div>
              <div class="orderSubmit-btnRight">
              <button type="reset" >Reset</button>
                <button type="submit" id="messageSend">Submit Order</button>
              </div>
            </fieldset>
  `;
}

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
function yourOrderBox() {
  // hide buttons
  const msgReset3 = document.getElementById("messageReset3");
  msgReset3.style.display = "none";

  // const msgNext2 = document.getElementById("productNext");
  // msgNext2.style.display = "none";

  // create element

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
  document.getElementById("total").textContent = `£${totalPrice.toFixed(2)}`;

  // SHOW ORDERED PRODUCT
  var code = document.getElementById("coffeeItem").value;
  // console.log(code);

  // SHOW BOX
  var hideMeBox = document.getElementById("submitBox");
  hideMeBox.classList.remove("hideMe");
}
