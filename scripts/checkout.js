import { renderOrderSummary } from "./checkout/orderSummary.js";

import { renderPaymentSummary } from "./checkout/paymentSummary.js";

import { cart } from "../data/cart.js";

// import "../data/cart-class.js";
//import "../data/car.js";

//import "../data/backend-practice.js";

import { loadProducts, loadProductsFetch } from "../data/products.js";

import { loadCart } from "../data/cart.js";

async function loadPage() {
  try {
    //  throw "error1";

    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      // throw "error2";

      loadCart(() => {
        // reject("error3");

        resolve();
      });
    });
  } catch (error) {
    console.log("Unexpected error. Please try again later");
  }

  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve("value1");
  }); //callback fn
})
  .then((value) => {
    console.log(value);

    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
*/

/*
loadProducts(() => {
  loadCart(() => {});
  renderOrderSummary();
  renderPaymentSummary();
});
*/

export function renderCheckoutHeader() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const checkoutHeaderHTML = `
  <div class="checkout-header">
<div class="header-content">
      <div class="checkout-header-left-section">
        <a href="amazon.html">
          <img class="amazon-logo" src="images/amazon-logo.png" />
          <img
            class="amazon-mobile-logo"
            src="images/amazon-mobile-logo.png"
          />
        </a>
      </div>

      <div class="checkout-header-middle-section">
        Checkout (<a
          class="return-to-home-link js-checkout-quantity"
          href="amazon.html"
        >${cartQuantity} items</a
        >)
      </div>

      <div class="checkout-header-right-section">
        <img src="images/icons/checkout-lock-icon.png" />
      </div>
    </div>
  </div>
</div>
`;

  document.querySelector(".js-checkout-header").innerHTML = checkoutHeaderHTML;
}
