window.addEventListener('deviceorientation', function(event) {
    document.getElementById('beta').innerHTML = event.beta;
    document.getElementById('gamma').innerHTML = event.gamma;
    document.getElementById('alpha').innerHTML = event.alpha;
 });

 window.addEventListener('devicemotion', function(event) {
    document.getElementById('acceleration-x').innerHTML = event.acceleration.x;
    document.getElementById('acceleration-y').innerHTML = event.acceleration.y;
    document.getElementById('acceleration-z').innerHTML = event.acceleration.z;

    document.getElementById('rotation-rate-beta').innerHTML = event.rotationRate.beta;
    document.getElementById('rotation-rate-gamma').innerHTML = event.rotationRate.gamma;
    document.getElementById('rotation-rate-alpha').innerHTML = event.rotationRate.alpha;

    document.getElementById('interval').innerHTML = event.interval;
 });