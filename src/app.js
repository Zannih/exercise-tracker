

//parameter 'activity' and 'activity2' replace the need to have functions specific to each exercise
//button click calls incValue() with specific id/names
let valueToAdd = 0;
const incValue = (activity, activityTwo) => {
    valueToAdd += Number(document.getElementById(activity).value);
    document.getElementById(activityTwo).innerHTML = valueToAdd + Number(document.getElementById(activityTwo).innerHTML);
    valueToAdd = 0;
} 


//bool functions
let pushupsBool = false;
const getPushupsBool = () => {
    if (Number(document.getElementById('pushupsComplete').innerHTML) >= Number(document.getElementById('pushupsGoal').innerHTML) && Number(document.getElementById('pushupsGoal').innerHTML) > 0) {
        pushupsBool = true;
    } else {
        pushupsBool = false;
    }
}

let squatsBool = false;
const getSquatsBool = () => {
    if (Number(document.getElementById('squatsComplete').innerHTML) >= Number(document.getElementById('squatsGoal').innerHTML) && Number(document.getElementById('squatsGoal').innerHTML) > 0) {
        squatsBool = true;
    } else {
        squatsBool = false;
    }
}

let crunchesBool = false;
const getCrunchesBool = () => {
    if (Number(document.getElementById('crunchesComplete').innerHTML) >= Number(document.getElementById('crunchesGoal').innerHTML) && Number(document.getElementById('crunchesGoal').innerHTML) > 0) {
        crunchesBool = true;
    } else {
        crunchesBool = false;
    }
}

let planksBool = false;
const getPlanksBool = () => {
    if (Number(document.getElementById('planksComplete').innerHTML) >= Number(document.getElementById('planksGoal').innerHTML) && Number(document.getElementById('planksGoal').innerHTML) > 0) {
        planksBool = true;
    } else {
        planksBool = false;
    }
}

let walkingBool = false;
const getWalkingBool = () => {
    if (Number(document.getElementById('walkingComplete').innerHTML) >= Number(document.getElementById('walkingGoal').innerHTML) && Number(document.getElementById('walkingGoal').innerHTML) > 0) {
        walkingBool = true;
    } else {
        walkingBool = false;
    }
}

let meditationBool = false;
const getMeditationBool = () => {
    if (Number(document.getElementById('meditationComplete').innerHTML) >= Number(document.getElementById('meditationGoal').innerHTML) && Number(document.getElementById('meditationGoal').innerHTML) > 0) {
        meditationBool = true;
    } else {
        meditationBool = false;
    }
}

let stretchingBool = false;
const getStretchingBool = () => {
    if (Number(document.getElementById('stretchingComplete').innerHTML) >= Number(document.getElementById('stretchingGoal').innerHTML) && Number(document.getElementById('stretchingGoal').innerHTML) > 0) {
        stretchingBool = true;
    } else {
        stretchingBool = false;
    }
}

//call bool functions and tally them as an integer, called by 'get result button'
let goalsMet = 0;
const calcGoalsMet = () => {
    getPushupsBool();
    getSquatsBool();
    getCrunchesBool();
    getPlanksBool();
    getWalkingBool();
    getMeditationBool();
    getStretchingBool();
    goalsMet = (
            (pushupsBool ? 1 : 0)
            + (squatsBool ? 1 : 0)
            + (crunchesBool ? 1 : 0)
            + (planksBool ? 1 : 0)
            + (walkingBool ? 1 : 0)
            + (meditationBool ? 1 : 0)
            + (stretchingBool ? 1 : 0)
        );
    getResult();
}

const getResult = () => {
    if (goalsMet === 7) {
        alert(`AMAZING! You hit ${goalsMet}/7 of your goals! Take tomorrow off, you've earned it`)
    } else if (goalsMet >= 4) {
        alert(`Great effort! You hit ${goalsMet}/7 of your goals! If you're up for it, complete the remaining exercises tomorrow.`)
    } else {
        alert(`Uh oh! Looks like you hit ${goalsMet} of your goals! Keep going, or complete the remainder tomorrow.`)
    }
}

const resetAll = () => {
    if (confirm('Are you sure? All Data will be cleared.')) {
        location.reload();
    } else {
        //do nothing 
        console.log('Data was not reset.')
    }
}