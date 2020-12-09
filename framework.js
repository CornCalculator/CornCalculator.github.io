var throw_error = function(element) {
    element.className = "error";

    let message = document.createElement("span");
    message.innerHTML = "Please enter a valid number!";

    element.parentNode.insertBefore(message, element);
};

var expect = function(compare1, method, compare2) {
    if(method=="to eq") {
        if(compare1.join) compare1 = compare1.join("");
        if(compare2.join) compare2 = compare2.join("");
        if(compare1==compare2) {
            return true;
        }
    }
};

var run_tests = function() {
    for(let key in tests) {
        console.log(key);
        console.log(tests[key]()==true?true:tests[key]());
    }
}