function bookRoom() {

    let name =
    document.getElementById("name").value;

    let phone =
    document.getElementById("phone").value;

    let room =
    document.getElementById("room").value;

    let checkin =
    document.getElementById("checkin").value;

    let checkout =
    document.getElementById("checkout").value;

    let bill = 0;

    // Room prices

    if(room == "Single Room") {

        bill = 1000;
    }

    else if(room == "Double Room") {

        bill = 2000;
    }

    else {

        bill = 3000;
    }

    document.getElementById("output")
    .innerHTML =

    "<h2>Booking Successful</h2>" +

    "<p>Name: " + name + "</p>" +

    "<p>Phone: " + phone + "</p>" +

    "<p>Room: " + room + "</p>" +

    "<p>Check-In: " + checkin + "</p>" +

    "<p>Check-Out: " + checkout + "</p>" +

    "<h3>Total Bill = ₹" + bill + "</h3>";
}