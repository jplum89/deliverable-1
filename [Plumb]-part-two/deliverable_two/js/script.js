var greeting1 = 'What type of event is this?';
var greeting2 = 'What is the temperature going to be?';
var eventType = prompt(greeting1);
var tempFarh = prompt(greeting2);

var strng1;
var strng2;

if (eventType === 'casual') {
    strng1 = `Since it is ${tempFarh} and you are going to a casual event, you should wear something comfy and `;
} else if (eventType === 'semi-casual') {
    strng1 = `Since it is ${tempFarh} and you are going to a semi-casual event, you should wear a polo and `;
} else {
    strng1 = `Since it is ${tempFarh} and you are going to a formal event, you should wear a suit and `;
} 
if (tempFarh < 54) {
    strng2 = ' a coat.';
} else if (tempFarh >= 54 && tempFarh <=70 ) {
    strng2 = 'a jacket.';
} else {
    strng2 = 'no jacket.';
}

var result = strng1.concat(strng2);

console.log(result);
alert(result);