function displayNum(n){
    result.value=result.value+n
}

function allclear(){
    result.value=''
}
function evaluvate(){
    // exp=result.value
    // out=eval(exp)
    // result.value=out
    result.value=eval(result.value)
}
function backspace(){
    cur_str=result.value
    result.value=cur_str.slice(0,-1)
}