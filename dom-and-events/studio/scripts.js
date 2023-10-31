// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    let imgObj = document.getElementById('rocket');
    imgObj.style.position = 'absolute';
    imgObj.style.left = '50%';
    imgObj.style.right = '50%';
    imgObj.style.bottom = '0%';
    let status = document.getElementById('flightStatus');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');

    let shuttleWidth = document.getElementById('spaceShuttleWidth');
    let shuttleFlightScreen = document.getElementById('shuttleBackground');


    let takeoffButton = document.getElementById('takeoff');
    takeoffButton.addEventListener("click", event => {
        let confirmTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmTakeoff === true && status.innerHTML !== "Shuttle in flight.") {
            status.innerHTML = "Shuttle in flight.";
            shuttleFlightScreen.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = (10000 + Number(shuttleHeight.innerHTML));
            imgObj.style.bottom = ((parseInt(imgObj.style.bottom) + 10) +"px");
        }  
    })

    let landButton = document.getElementById('landing');
    landButton.addEventListener("click", event => {
        status.innerHTML = "The shuttle has landed.";
        shuttleFlightScreen.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
        imgObj.style.left = '50%';
        imgObj.style.right = '50%';
        imgObj.style.bottom = '0%';
        window.alert("The shuttle is landing. Landing gear engaged.");
    })

    let abortButton = document.getElementById('missionAbort');
    abortButton.addEventListener("click", event => {
        let confirmAbort = window.confirm("Confirm that you want to abort the mission.");
        if (confirmAbort === true) {
            imgObj.style.left = '50%';
            imgObj.style.right = '50%';
            imgObj.style.bottom = '0%';
            status.innerHTML = "Mission aborted.";
            shuttleFlightScreen.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";
        }  
    })

    let upButton = document.getElementById('up');
    upButton.addEventListener("click", event => {
        // window.alert(imgObj.style.bottom);
        // window.alert(shuttleBackground.offsetHeight);
        if ((parseInt(imgObj.style.bottom) + 75) < shuttleBackground.offsetHeight) {
        imgObj.style.bottom = ((parseInt(imgObj.style.bottom) + 10) +"px");
        shuttleHeight.innerHTML = (10000 + Number(shuttleHeight.innerHTML));
        }
    })

    let downButton = document.getElementById('down');
    downButton.addEventListener("click", event => {
        if (imgObj.style.bottom > '0%' && parseInt(shuttleHeight.innerHTML) > 0) {
        // window.alert(imgObj.style.bottom)
        imgObj.style.bottom = ((parseInt(imgObj.style.bottom) - 10) + "px");
        shuttleHeight.innerHTML = (Number(shuttleHeight.innerHTML) - 10000);
        }
    })

    let leftButton = document.getElementById('left');
    leftButton.addEventListener("click", event => {
        // window.alert(imgObj.style.left);
        if (parseInt(imgObj.style.left) > 0) {
        let currentLeft = imgObj.offsetLeft;
        // window.alert(currentLeft);
        imgObj.style.left = ((currentLeft) - 10) + "px";
        }
    })

    let rightButton = document.getElementById('right');
    rightButton.addEventListener("click", event => {
        // window.alert(imgObj.style.right);
        // window.alert(parseInt(imgObj.style.right));
        // window.alert("Offset width: " + shuttleBackground.offsetWidth);
        // window.alert("Client width: " + shuttleBackground.clientWidth);
        if (parseInt(imgObj.style.right) < shuttleBackground.offsetWidth) {
        let currentRight = imgObj.offsetLeft;
        // window.alert(currentRight);
        imgObj.style.left = ((currentRight + 10) + "px");
        imgObj.style.right = ((parseInt(imgObj.style.left) + 75) + "px");
        // window.alert(imgObj.style.right);
        }
    })



}

)