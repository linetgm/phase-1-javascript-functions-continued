function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun(activity);

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}
mondayWork(work);

function wrapAdjective(asterik = "*"){
    return function emphatic(message = "a hard worker"){
        return `You are ${asterik}${message}${asterik}!`;
    }
}
wrapAdjective("||")("dedicated programmer")