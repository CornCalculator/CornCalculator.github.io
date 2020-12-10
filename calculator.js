const always = (anything) => true;
const using = (value, func) => always(func()) && value;
const has = (array, item) => (array.indexOf(item) != -1);
const occurrences = (array, val) => array.reduce((a, v) => (v === val ? a + 1 : a), 0);

const take = (array, item) =>
  using(array, () => has(array, item) &&
    array.splice(array.indexOf(item), 1));

//finds a way to make the state safe by removing max_removal items
const make_safe = (bin, max_removal) => {
  if (occurrences(bin, "corn") > 0 && occurrences(bin, "geese") > 0) {
    if (Math.min(occurrences(bin, "corn"),occurrences(bin, "geese")))
    //we have to be able to load all of either
    //we should start with the ones which there are fewer of
  } else if (occurrences(bin, "geese") > 0 && occurrences(bin, "foxes") > 0) {
    //we have to be able to load all of either
    //we should start with the ones which there are fewer of
  } else {
    return "safe";
  }
}

const calculate = (corn, geese, foxes) => {
  //Coerce into integers
  corn = corn-0;
  geese = geese-0;
  foxes = foxes-0;
  //Init bins
  bins = [
    new Array(corn+geese+foxes), //farm
    [], //ferry
    [] //market
  ]
  const FARM_BIN = 0;
  const FERRY_BIN = 1;
  const MARKET_BIN = 2;
  
  const FERRY_SIZE = 1;
  
  bins[FARM_BIN].fill("corn", 0, corn);
  bins[FARM_BIN].fill("geese", corn, corn+geese);
  bins[FARM_BIN].fill("foxes", foxes, corn+geese+foxes);
  
  let farmer_bin_pointer = FARM_BIN;
  let destination = MARKET_BIN;
  
  while (bins[MARKET_BIN].length != corn+geese+foxes) {
    if (farmer_bin_pointer == FARM_BIN) {
      if (destination == MARKET_BIN) {
        while (bins[FERRY_BIN] < FERRY_SIZE) {
          
        }
        farmer_bin_pointer = MARKET_BIN;
        destination = MARKET_BIN;
      } else if (destination == FARM_BIN) {
        //unload ferry 
        while (bins[FERRY_BIN] > 0) {
          
        }
        destination = MARKET_BIN;
      }
    } else if (farmer_bin_pointer = MARKET_BIN) {
      console.log("MARKET BIN")
      console.log(bins)
      break;
    }
    
  }

}
  
/*var calculate = function(corn, geese, foxes) {
    let worker = [];

    // I'm well aware that this looks like a CS grad meme
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
*/
