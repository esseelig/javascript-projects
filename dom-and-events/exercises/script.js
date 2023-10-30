function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.

    // clicking variable button or id="liftoffButton" changes the innerHTML of <p id="statusReport"> to Houston, we have liftoff!

    button.addEventListener("click", event => {
        paragraph.innerHTML = "Houston, we have liftoff!";
    });

    // TODO mouseover variable missionAbort or button getElementById("abortMission" changes background style color to red

    missionAbort.addEventListener("mouseover", event => {
        missionAbort.style.backgroundColor = "red";
    });


    // TODO mouseout variable missionAbort or button getElementById("abortMission" removes background color styling
    // Setting the background color to the empty string, "", will force it to revert to the default browser styles.
    
    missionAbort.addEventListener("mouseout", event => {
        missionAbort.style.backgroundColor = "";
    });

    //TODO clicking mouseover variable missionAbort or button getElementById("abortMission" creates popup confirm Are you sure you want to abort the mission?
    //if true, changes the innerHTML of <p id="statusReport"> to Mission aborted! Space shuttle returning home
    
    missionAbort.addEventListener("click", event => {
        let answer = window.confirm("Are you sure you want to abort the mission?");
        if (answer === true) {
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
        }  
    });
    
}

window.addEventListener("load", init);


