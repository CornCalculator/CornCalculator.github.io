const always = (anything) => true;
const apply = (value, func) => func(value);
const using = (value, func) => always(func(value)) && value;
const has = (array, item) => (array.indexOf(item) != -1);
const occurrences = (array, val) => array.reduce((a, v) => (v === val ? a + 1 : a), 0);
const clone = (item, times) => (new Array(times)).fill(item)
const extend = (a, b) => [...a,...b]

//mutates
const take = (array, item) =>
  has(array, item) && array.splice(array.indexOf(item), 1);

const take_all = (array, items) => items.map((item) => using(item, () => take(array, item)));

//finds a way to make the state safe by removing max_removal items
const make_safe = (bin, max_removal = 1) => {
  if (occurrences(bin, "corn") > 0 && occurrences(bin, "geese") > 0) {
    if (Math.min(occurrences(bin, "corn"), occurrences(bin, "geese")) > max_removal) {
      return null;
    } else if (occurrences(bin, "corn") < occurrences(bin, "geese")) {
      return clone("corn", occurrences(bin, "corn"));
    } else {
      return clone("geese", occurrences(bin, "geese"));
    }
  } else if (occurrences(bin, "geese") > 0 && occurrences(bin, "foxes") > 0) {
    if (Math.min(occurrences(bin, "geese"), occurrences(bin, "foxes")) > max_removal) {
      return null;
    } else if (occurrences(bin, "geese") < occurrences(bin, "foxes")) {
      return clone("geese", occurrences(bin, "geese"));
    } else {
      return clone("foxes", occurrences(bin, "foxes"));
    }
  } else {
    return [];
  }
};

//we never take more than one class at a time
//this avoids complicating calculations
//keeping this deterministic makes debugging easier
const any_single_class = (bin, max_removal) => {
  //shouldn't be taking more than max_removal
  if (occurrences(bin, "corn") > 0) {
    return clone("corn", Math.min(occurrences(bin, "corn"), max_removal));
  } else if (occurrences(bin, "geese") > 0) {
    return clone("geese", Math.min(occurrences(bin, "geese"), max_removal));
  } if (occurrences(bin, "foxes") > 0) {
    return clone("foxes", Math.min(occurrences(bin, "foxes"), max_removal));
  } 
};

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
  bins[FARM_BIN].fill("foxes", corn+geese, corn+geese+foxes);
  
  let farmer_bin_pointer = FARM_BIN;
  let destination = MARKET_BIN;
  
  while (true) {
    let changes = apply(make_safe(bins[FARM_BIN], FERRY_SIZE), (changes) => {
      if (changes === null) {
        return null;
      }
      if (changes.length == 0) {
        return any_single_class(bins[FARM_BIN], FERRY_SIZE);
      }
      return changes;
    });
    if (changes === null) {
      return "ERROR";
    }
    console.log(changes);
    take_all(bins[FARM_BIN], changes);
    bins[MARKET_BIN] = extend(bins[MARKET_BIN],changes);
    if (bins[MARKET_BIN].length != corn+geese+foxes) {
      changes = make_safe(bins[MARKET_BIN], FERRY_SIZE);
      console.log(changes);
      take_all(bins[MARKET_BIN], changes);
      bins[FARM_BIN] = extend(bins[FARM_BIN], changes);
    } else {
      break;
    }
    console.log(bins);
    alert("wait");
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
