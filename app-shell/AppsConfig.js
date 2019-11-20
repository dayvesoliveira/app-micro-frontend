module.exports = () => ({
    libs:[
        "https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.1/zone.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.10/custom-elements-es5-adapter.js",
        "http://localhost:8081/main.js",
        "http://localhost:8082/main.js"
    ],
    apps: [
        {
            id:      "flight-booking-container",
            tagName: "app-flight-booking"
        },
        {
            id:      "train-booking-container",
            tagName: "app-train-booking"
        }
    ]

});