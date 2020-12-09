var calculate = function(corn, geese) {
    let worker = [];

    if(corn&&geese) {
        if(corn==1&&geese==1) {
            return ["corn", "", "goose"];
        }

        else if(corn==1&&geese==2) {
            return ["corn", "", "goose", "corn", "goose", "", "corn"];
        }

        else if(corn==2&&geese==1) {
            return ["goose", "", "corn", "goose", "corn", "", "goose"];
        }

        else return "ERROR";
    }

    else {
        while (corn--) {
            worker.push("corn");
            if (corn) {
                worker.push("");
            }
        }

        while (geese--) {
            worker.push("goose");
            if (geese) {
                worker.push("");
            }
        }
    }

    if(!worker.length) return ["yourself"];

    return worker;
};