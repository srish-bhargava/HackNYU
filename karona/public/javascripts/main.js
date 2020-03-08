


var timeBuffer = {}
var dataBuffer = [undefined, undefined]

function onTouchPositive() {
    console.log("positive");
}

function onTouchNegative() {
    console.log("negative");
}

console.log(document.getElementById("pos-btn"));
document.getElementById('pos-btn').addEventListener("mousedown", function (evt) {
    onTouchPositive();
});
document.getElementById('neg-btn').addEventListener("mousedown", function (evt) {
    onTouchNegative();
});

function addToTimeBuffer(data) {
    let count = 0;
    for (const key in data) {
        if (!timeBuffer.hasOwnProperty(key)) {
            timeBuffer[key] = []
        }
        timeBuffer[key].push(data[key])
        count = timeBuffer[key].length;
    }
    if (count >= 128) {
        for (const key in timeBuffer) {
            timeBuffer[key].shift()
        }
    }
    // sendData(timeBuffer);
    timeBuffer = {}
}


function addToDataBuffer(val, indx) {
    dataBuffer[indx] = val;
    // If the data buffer is now full, add data object to the time buffer
    if (dataBuffer[(indx + 1) % 2] != undefined) {
        let data = {};
        for (const key in dataBuffer[0]) {
            data[key] = dataBuffer[0][key];
        }
        for (const key in dataBuffer[1]) {
            data[key] = dataBuffer[1][key];
        }
        addToTimeBuffer(data);
        dataBuffer = [undefined, undefined]
    }
}

window.addEventListener('deviceorientation', function (event) {
    document.getElementById('beta').innerHTML = event.beta.toFixed(3);
    document.getElementById('gamma').innerHTML = event.gamma.toFixed(3);
    document.getElementById('alpha').innerHTML = event.alpha.toFixed(3);
    addToDataBuffer({
        "beta": event.beta.toFixed(3),
        "gamma": event.gamma.toFixed(3),
        "alpha": event.alpha.toFixed(3),
    }, 0);
});

window.addEventListener('devicemotion', function (event) {
    document.getElementById('acceleration-x').innerHTML = event.acceleration.x.toFixed(3);
    document.getElementById('acceleration-y').innerHTML = event.acceleration.y.toFixed(3);
    document.getElementById('acceleration-z').innerHTML = event.acceleration.z.toFixed(3);
    document.getElementById('rotation-rate-beta').innerHTML = event.rotationRate.beta.toFixed(3);
    document.getElementById('rotation-rate-gamma').innerHTML = event.rotationRate.gamma.toFixed(3);
    document.getElementById('rotation-rate-alpha').innerHTML = event.rotationRate.alpha.toFixed(3);
    addToDataBuffer({
        "acceleration-x": event.acceleration.x.toFixed(3),
        "acceleration-y": event.acceleration.y.toFixed(3),
        "acceleration-z": event.acceleration.z.toFixed(3),
        "rotation-rate-beta": event.rotationRate.beta.toFixed(3),
        "rotation-rate-gamma": event.rotationRate.gamma.toFixed(3),
        "rotation-rate-alpha": event.rotationRate.alpha.toFixed(3),
    }, 1);
});

function startRecording() {

}


function sendData(data) {
    var myRequest = new Request('/addMovementData');
    fetch(myRequest, {
        method: 'POST',
        body: data
    });
}





