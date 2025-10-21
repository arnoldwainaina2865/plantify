import { useCart } from "../context/cart-context";

function loadRazorpay() {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
  });
}

const BillingDetail = () => {
  const { cartState, cartDispatch } = useCart();
  async function displayRazorpay() {
    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay failed");
      return;
    }
    var options = {
      key: process.env.REACT_APP_RAZOR_ID, // Enter the Key ID generated from the Dashboard
      amount:
        (cartState.bill.total -
          cartState.bill.discount +
          cartState.bill.deliveryCharge) *
        100,
      currency: "INR",
      name: "Plant Shop",
      description: "Test Transaction",
      image: require("../assets/favicon.jpg"),
      handler: function (response) {
        cartDispatch({
          type: "EMPTY_CART",
        });
      },
      prefill: {
        email: "useremail@example.com",
        contact: "123456789",
        method: "upi",
      },
      notes: {
        address: "Plant Shop, Delhi Office",
      },
      theme: {
        color: "#469a57",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  return (
    <>
      <div className='bill'>
        <div className='h6 bill-heading'>PRICE DETAILS</div>
        <hr />
        <div className='price-details'>
          <div className='price-detail'>Price</div>
          <div className='price-value'>Rs. {cartState.bill.total}</div>
          <div className='price-detail'>Discount</div>
          <div className='price-value'>- Rs. {cartState.bill.discount}</div>
          <div className='price-detail'>Delivery Charges</div>
          <div className='price-value'>Rs. {cartState.bill.deliveryCharge}</div>
        </div>
        <hr />
        <div className='price-details'>
          <div className='bill-heading price-detail'>TOTAL AMOUNT</div>
          <div className='price-value'>
            Rs.{" "}
            {cartState.bill.total -
              cartState.bill.discount +
              cartState.bill.deliveryCharge}
          </div>
        </div>
        <hr />
        <div className='paragraph2'>
          You will save Rs. {cartState.bill.discount} on this order
        </div>
        <hr />
        <div
          className='btn bill-btn'
          onClick={async () => {
            await displayRazorpay();
          }}>
          Place Order
        </div>
      </div>
    </>
  );
};
export default BillingDetail;
