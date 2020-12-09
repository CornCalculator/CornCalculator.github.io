transport_cost = function() {
    let cost_of_transport = document.getElementsByName("cost_of_transport")[0].value;
    let bags_of_corn = document.getElementsByName("bags_of_corn")[0].value;
    let geese = document.getElementsByName("geese")[0].value;
    let foxes = document.getElementsByName("foxes")[0].value;

    let result_holder = document.getElementsByClassName("result")[0];

    while(document.getElementsByTagName('span').length) {
        document.getElementsByTagName('span')[0].parentNode.removeChild(document.getElementsByTagName('span')[0]);
    }

    result_holder.style.display = 'none';

    let inputs_with_errors = document.getElementsByClassName('error');
    for(var i=0; i<inputs_with_errors.length; i++) {
        inputs_with_errors[i].classList.remove('error');
    }

    if(parseFloat(cost_of_transport)!=cost_of_transport||cost_of_transport<=0) {
        throw_error(document.getElementsByName("cost_of_transport")[0]);
    }
    else {
        let journey = calculate(bags_of_corn, geese, foxes);

        result_holder.style.display = "block";

        if(journey=="ERROR") {
            result_holder.innerHTML = "Ahhhhh, your corn's getting munched!";
            
            return;
        }


        result_holder.innerHTML = "You will be paying £" + journey.length*cost_of_transport+"<br /><br />";

        document.getElementsByTagName("iframe")[0].src = gifs[Math.floor(gifs.length*Math.random())];

        for(var i=0; i<journey.length; i++) {
            let div = document.createElement("div");
            if(!(i%2)) div.innerHTML = "<b>Trip "+(i+1)+"</b>: Load "+(journey[i]?journey[i]:"nothing")+" onto ferry, take journey, unload";
            else div.innerHTML = "<b>Trip "+(i+1)+"</b>: Take return trip "+(journey[i]?"with "+journey[i]+", unload":"");
            result_holder.appendChild(div);
        }
    }
};
