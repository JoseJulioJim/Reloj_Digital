let Interval = setInterval(() => {
    var d = new Date();
    document.getElementById("timer").innerHTML = d.toLocaleTimeString();
}, 1000);
