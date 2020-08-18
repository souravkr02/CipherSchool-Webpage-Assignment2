var data = {
    "all": [
        {
            "name": "Television",

            "image": "./images/lgtv.jpg"
        },
        {
            "name": "Air Conditioner",

            "image": "./images/lgac.jpg"
        },
        {
            "name": "Washing Machine",

            "image": "./images/ifbwm.jpg"
        },
        {
            "name": "Refrigerator",

            "image": "./images/godrejfridge.jpeg"
        },
        {
            "name": "Microwave Oven",

            "image": "./images/philpsoven.jpg"
        }
    ],
    "tv": [
        {
            "name": "TV - Samsung",
            "price": "$10",
            "image": "./images/samsungtv.jpg"
        },
        {
            "name": "TV - LG",
            "price": "$12",
            "image": "./images/lgtv.jpg"
        },
        {
            "name": "TV - MI",
            "price": "$15",
            "image": "./images/mitv.jpg"
        }],
    "ac": [{
        "name": "AC - Hitachi",
        "price": "$2",
        "image": "./images/hitachiac.jpeg"
    },
    {
        "name": "AC - LG",
        "price": "$4",
        "image": "./images/lgac.jpg"
    },
    {
        "name": "AC - Samsung",
        "price": "$5",
        "image": "./images/samsungac.jpg"
    },
    {
        "name": "AC - Voltas",
        "price": "$6",
        "image": "./images/voltasac.jpg"
    }
    ],
    "wm": [{
        "name": "WM - IFB",
        "price": "$8",
        "image": "./images/ifbwm.jpg"
    },
    {
        "name": "WM - Voltas Beko",
        "price": "$10",
        "image": "./images/voltaswm.jpg"
    }],
    "fridge": [{
        "name": "Refrigerator - Godrej",
        "price": "$3",
        "image": "./images/godrejfridge.jpeg"
    },
    {
        "name": "Refrigerator - Samsung",
        "price": "$4",
        "image": "./images/samsungfridge.jpeg"
    }],
    "oven": [{
        "name": "Oven - Philips",
        "price": "$5",
        "image": "./images/philpsoven.jpg"
    }]
}
$(document).ready(function () {
    var source = $("#items-template").html();
    var template = Handlebars.compile(source);
    $("#cards").html(template(data.all));

    $("#all").click(function () {
        $("#cards").html(template(data.all));
    });

    $("#tv").click(function () {
        $("#cards").html(template(data.tv));
    });

    $("#ac").click(function () {
        $("#cards").html(template(data.ac));
    });

    $("#wm").click(function () {
        $("#cards").html(template(data.wm));
    });

    $("#fridge").click(function () {
        $("#cards").html(template(data.fridge));
    });
    $("#oven").click(function () {
        $("#cards").html(template(data.oven));
    });
});


//for searching the items via search bar
const searchItems = () => {
    var filter = document.getElementById("itemSearch");
    var cards = document.getElementById("cards");
    var list = cards.getElementsByClassName("extra");
    for (var i = 0; i < list.length; i++) {
        let a = list[i].getElementsByClassName("card")[0];
        let textvalue = a.textContent || a.innerHTML;
        if (textvalue.toUpperCase().indexOf(filter) > -1) {
            list[i].style.display = " ";
        }
        else {
            list[i].style.display = "none";
        }
    }
}