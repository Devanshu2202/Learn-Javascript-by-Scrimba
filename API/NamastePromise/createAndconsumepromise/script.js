const cart = ["shoes", "pant", "shirt"];

function createOrder() {
  const pr = new Promise(function (resolve, reject) {
    const orderId = "123456";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      },4000);
    }

    if (!validOrderId) {
      const err = new Error("OrderId is not valid");
      reject(err);
    }
  });
  return pr;
}
creat8eOrder(cart)
.then((orderId) => {
  console.log(orderId);
  return orderId;
})
.then((orderId)=>{
  return proceedToPayement(orderId)
})
.then((paymentInfo)=>{
    console.log(paymentInfo);
    return orderSummary(paymentInfo)
})
.catch((err)=>{
    console.log(err.message);
    
})
.then((orderSummary)=>{
    console.log(orderSummary);
    
})
.catch((err)=>{
    console.log(err.message);
    
})

function validOrderId(){
    return true
}

function proceedToPayement(orderId){

    const payment = new Promise((resolve,reject)=>{
        const paymentStatus = "Payment successful"
        if(orderId){
            resolve(paymentStatus)

        }else{
            const rejerr = new Error("Payment not successful")
            reject(rejerr)
        }
    })
    return payment
}
function orderSummary(paymentInfo){
    const orderPromise = new Promise((resolve,reject)=>{
        const orderStatus = {
            orderId: "12345789",
            orderItems: ["pant","pencil","phone","mouse"],
            paymentStatus: paymentInfo
        }
        if(orderStatus.paymentStatus === "Payment successful"){
            resolve(orderStatus)
        }else{
            const orderStatusErr = new Error("Payment not successful")
            reject(orderStatusErr)
        }  
    })
    return orderPromise
}