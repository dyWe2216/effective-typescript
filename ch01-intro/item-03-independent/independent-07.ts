function setLightSwitch(value: boolean) {
    switch (value) {
        case true:
            turnLightOn();
            break;
        case false:
            turnLightOff();
            break;
        default:
            console.log(`실행되지 않을까 봐 걱정됩니다.`);
    }
}

function turnLightOn() {}
function turnLightOff() {}