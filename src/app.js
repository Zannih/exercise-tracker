
//goal and completion setters called by button click
let pushupsGoal = 0;
const incPushupsGoal = () => {
    pushupsGoal += Number(document.getElementById('act-1-goal').value);
    document.getElementById('pushups-goal').innerHTML = pushupsGoal;
    getPushupsBool();
}
let pushupsDone = 0;
const incPushupsComplete = () => {
    pushupsDone += Number(document.getElementById('act-1-complete').value);
    document.getElementById('pushups-complete').innerHTML = pushupsDone;
    getPushupsBool();
}

let squatsGoal = 0;
const incSquatsGoal = () => {
    squatsGoal += Number(document.getElementById('act-2-goal').value);
    document.getElementById('squats-goal').innerHTML = squatsGoal;
    getSquatsBool();
}
let squatsDone = 0;
const incSquatsComplete = () => {
    squatsDone += Number(document.getElementById('act-2-complete').value);
    document.getElementById('squats-complete').innerHTML = squatsDone;
    getSquatsBool();
}

let crunchesGoal = 0;
const incCrunchesGoal = () => {
    crunchesGoal += Number(document.getElementById('act-3-goal').value);
    document.getElementById('crunches-goal').innerHTML = crunchesGoal;
    getCrunchesBool();
}
let crunchesDone = 0;
const incCrunchesComplete = () => {
    crunchesDone += Number(document.getElementById('act-3-complete').value);
    document.getElementById('crunches-complete').innerHTML = crunchesDone;
    getCrunchesBool();
}

let planksGoal = 0;
const incPlanksGoal = () => {
    planksGoal += Number(document.getElementById('act-4-goal').value);
    document.getElementById('planks-goal').innerHTML = planksGoal;
    getPlanksBool();
}
let planksDone = 0;
const incPlanksComplete = () => {
    planksDone += Number(document.getElementById('act-4-complete').value);
    document.getElementById('planks-complete').innerHTML = planksDone;
    getPlanksBool();
}

let walkingGoal = 0;
const incWalkingGoal = () => {
    walkingGoal += Number(document.getElementById('act-5-goal').value);
    document.getElementById('walking-goal').innerHTML = walkingGoal;
    getWalkingBool();
}
let walkingDone = 0;
const incWalkingComplete = () => {
    walkingDone += Number(document.getElementById('act-5-complete').value);
    document.getElementById('walking-complete').innerHTML = walkingDone;
    getWalkingBool();
}

let meditationGoal = 0;
const incMeditationGoal = () => {
    meditationGoal += Number(document.getElementById('act-6-goal').value);
    document.getElementById('meditation-goal').innerHTML = meditationGoal;
    getMeditationBool();
}
let meditationDone = 0;
const incMeditationComplete = () => {
    meditationDone += Number(document.getElementById('act-6-complete').value);
    document.getElementById('meditation-complete').innerHTML = meditationDone;
    getMeditationBool();
}

let stretchingGoal = 0;
const incStretchingGoal = () => {
    stretchingGoal += Number(document.getElementById('act-7-goal').value);
    document.getElementById('stretching-goal').innerHTML = stretchingGoal;
    getStretchingBool();
}
let stretchingDone = 0;
const incStretchingComplete = () => {
    stretchingDone += Number(document.getElementById('act-7-complete').value);
    document.getElementById('stretching-complete').innerHTML = stretchingDone;
    getStretchingBool();
}

//bool functions
let pushupsBool = false;
const getPushupsBool = () => {
    if (pushupsDone >= pushupsGoal && pushupsGoal > 0) {
        pushupsBool = true;
    } else {
        pushupsBool = false;
    }
}

let squatsBool = false;
const getSquatsBool = () => {
    if (squatsDone >= squatsGoal && squatsGoal > 0) {
        squatsBool = true;
    } else {
        squatsBool = false;
    }
}

let crunchesBool = false;
const getCrunchesBool = () => {
    if (crunchesDone >= crunchesGoal && crunchesGoal > 0) {
        crunchesBool = true;
    } else {
        crunchesBool = false;
    }
}

let planksBool = false;
const getPlanksBool = () => {
    if (planksDone >= planksGoal && planksGoal > 0) {
        planksBool = true;
    } else {
        planksBool = false;
    }
}

let walkingBool = false;
const getWalkingBool = () => {
    if (walkingDone >= walkingGoal && walkingGoal > 0) {
        walkingBool = true;
    } else {
        walkingBool = false;
    }
}

let meditationBool = false;
const getMeditationBool = () => {
    if (meditationDone >= meditationGoal && meditationGoal > 0) {
        meditationBool = true;
    } else {
        meditationBool = false;
    }
}

let stretchingBool = false;
const getStretchingBool = () => {
    if (stretchingDone >= stretchingGoal && stretchingGoal > 0) {
        stretchingBool = true;
    } else {
        stretchingBool = false;
    }
}

//call bool functions and tally them as an integer, called by 'get result button'
let goalsMet = 0;
const calcGoalsMet = () => {
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