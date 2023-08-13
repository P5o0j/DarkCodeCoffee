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
                    name="address"
                    id="add1"
                    required
                    minlength="3"
                    maxlength="35"
                /></label>
              </p>
              <p>
                <label for="address2"
                  >Address<br />
                  <input type="text" name="address2" id="add2"
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
              <button type="button" class="address-next">Next</button>
            </fieldset>
    `;
});

// CREATE PRODUCT CHOICE

// CREATE YOUR ORDER SECTION
document.getElementById("productNext").addEventListener("click", function () {
  // SHOW ORDERED PRODUCT
  var code = document.getElementById("coffeeItem").value;
  console.log(code);
});
