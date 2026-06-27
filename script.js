let fieldData;
let textWrapper;


function main() {
    // Wrap every word in a div and each letter in an individual div
    textWrapper = document.querySelector('.text1');
    textWrapper.innerHTML = setupText(textWrapper);
    
    textWrapper = document.querySelector('.text2');
    textWrapper.innerHTML = setupText(textWrapper);

    if (fieldData.testModeEnabled && fieldData.testModeDisableAnimations) return;
    
    anime
        .timeline({
            loop: true
        })
        .add({
            targets: '.text1 .letter',
            translateX: [fieldData.text1TranslateXIn, 0],
            translateY: [fieldData.text1TranslateYIn, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: fieldData.text1EasingIn,
            duration: fieldData.text1DurationIn,
            delay: (el, i) => fieldData.text1DelayInBase + fieldData.text1DelayInStep * i
        })
        .add({
            targets: '.text1 .letter',
            translateX: [0, fieldData.text1TranslateXOut],
            translateY: [0, fieldData.text1TranslateYOut],
            translateZ: 0,
            opacity: [1, 0],
            easing: fieldData.text1EasingOut,
            duration: fieldData.text1DurationOut,
            delay: (el, i) => fieldData.text1DelayOutBase + fieldData.text1DelayOutStep * i
        })
        .add({
            targets: '.text2 .letter',
            translateX: [fieldData.text2TranslateXIn, 0],
            translateY: [fieldData.text2TranslateYIn, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: fieldData.text2EasingIn,
            duration: fieldData.text2DurationIn,
            delay: (el, i) => fieldData.text2DelayInBase + fieldData.text2DelayInStep * i
        })
        .add({
            targets: '.text2 .letter',
            translateX: [0, fieldData.text2TranslateXOut],
            translateY: [0, fieldData.text2TranslateYOut],
            translateZ: 0,
            opacity: [1, 0],
            easing: fieldData.text2EasingOut,
            duration: fieldData.text2DurationOut,
            delay: (el, i) => fieldData.text2DelayOutBase + fieldData.text2DelayOutStep * i
        });
    //debugger;
}

function setupText(textWrapper) {
    let textArray = textWrapper.textContent.split(" ");
    let textHTML = "";
    for (let index in textArray) {
        textHTML += "<div class='word'>"
        textArray[index] = textArray[index].replace("\\s", " ");
        textHTML += textArray[index].replace(/./g, "<div class='letter'>$&</div>");
        textHTML += "</div>"
    }
    return textHTML
}

function setupTestMode() {
    if (fieldData.testModeEnabled == false) {
        document.getElementsByTagName('html')[0].style.backgroundColor = "transparent";
        document.getElementsByTagName('body')[0].style.backgroundColor = "transparent";
        document.getElementsByClassName('text1')[0].style.backgroundColor = "transparent";
        document.getElementsByClassName('text2')[0].style.backgroundColor = "transparent";
    } else {
        if(!fieldData.testModeDisplayBackgroundColor) {
            document.getElementsByTagName('html')[0].style.backgroundColor = "transparent";
            document.getElementsByTagName('body')[0].style.backgroundColor = "transparent";
        }
        if(!fieldData.testModeDisplayBox1BackgroundColor) {
            document.getElementsByClassName('text1')[0].style.backgroundColor = "transparent";
        }
        if(!fieldData.testModeDisplayBox2BackgroundColor) {
            document.getElementsByClassName('text2')[0].style.backgroundColor = "transparent";
        }
        if (!fieldData.testModeDisplayText1) {
            document.querySelector('.text1').innerHTML = "";
        }
        if (!fieldData.testModeDisplayText2) {
            document.querySelector('.text2').innerHTML = "";
        }
    }
}


window.addEventListener('onWidgetLoad', function (obj) {
    fieldData = obj.detail.fieldData;
    setupTestMode();
  	main();
});
