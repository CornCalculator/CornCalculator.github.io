var calculate = function(corn, geese, foxes) {
    let worker = [];

    if ((corn==1) && (geese==1) && (foxes == 0)) {
        return ["corn", "", "goose"];
    } else if ((corn==1) && (geese==1) && (foxes == 1)) {
        return ["goose", "", "corn", "goose", "fox", "", "goose"];
    } else if ((corn==1) && (geese==2) && (foxes == 0)) {
        return ["corn", "", "goose", "corn", "goose", "", "corn"];
    } else if ((corn==2) && (geese==1) && (foxes == 0)) {
        return ["goose", "", "corn", "goose", "corn", "", "goose"];
    } else if ((corn == 1) && (geese == 1) && (foxes == 1)) {
      return ["goose", "", "corn", "", "fox"];
    } else if ((corn == 0) && (geese == 2) && (foxes == 1)) {
      return ["fox", "", "goose", "fox", "goose", "", "fox"];
    } else if ((corn == 0) && (geese == 1) && (foxes == 2)) {
      return ["goose", "", "fox", "goose", "fox", "", "goose"];
    } else if (
      ((corn == 2) && (geese == 2)) || ((geese == 2) && (foxes == 2)) ||
      ((corn != 0 && geese != 0 && foxes != 0) && (corn > 1 || geese > 1 || foxes > 1)) ||
      (geese > 2 && corn > 0) ||
      (foxes > 2 && geese > 0)
    ) {
      return "ERROR";
    } else {
        while (corn--) {
            worker.push("corn");
            if ((corn-0) + (geese-0) + (foxes-0)) {
                worker.push("");
            }
        }

        while (geese--) {
            worker.push("goose");
            if ((corn-0) + (geese-0) + (foxes-0)) {
                worker.push("");
            }
        }
        
        while (foxes--) {
            worker.push("fox");
            if ((corn-0) + (geese-0) + (foxes-0)) {
                worker.push("");
            }
        }
    }

    if(!worker.length) return ["yourself"];

    return worker;
};
