Paddle.Environment.set('sandbox');
Paddle.Setup({ 
    vendor: 2290,
    eventCallback: function(data) {
            if (data.event === "Checkout.Complete") {
            console.log(data.eventData);
            }
            else if (data.event === "Checkout.Close") {
            console.log(data.eventData);
            }
        }
 })