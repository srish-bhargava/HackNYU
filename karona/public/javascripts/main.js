window.addEventListener('deviceorientation', function(event) {
    document.getElementById('beta').innerHTML = event.beta.toFixed(3);
    document.getElementById('gamma').innerHTML = event.gamma.toFixed(3);
    document.getElementById('alpha').innerHTML = event.alpha.toFixed(3);
 });

 window.addEventListener('devicemotion', function(event) {
    document.getElementById('acceleration-x').innerHTML = event.acceleration.x.toFixed(3);
    document.getElementById('acceleration-y').innerHTML = event.acceleration.y.toFixed(3);
    document.getElementById('acceleration-z').innerHTML = event.acceleration.z.toFixed(3);

    document.getElementById('rotation-rate-beta').innerHTML = event.rotationRate.beta.toFixed(3);
    document.getElementById('rotation-rate-gamma').innerHTML = event.rotationRate.gamma.toFixed(3);
    document.getElementById('rotation-rate-alpha').innerHTML = event.rotationRate.alpha.toFixed(3);

    document.getElementById('interval').innerHTML = event.interval.toFixed(3);
 });