var tests = {
    "Nothing to transport": function() {
        return expect(calculate(0, 0, 0), "to eq", ["yourself"]);
    },
    "Nothing to transport (string inputs)": function() {
        return expect(calculate("0", "0", "0"), "to eq", ["yourself"]);
    },
    "1 bag of corn to transport": function() {
        return expect(calculate(1, 0, 0), "to eq", ["corn"]);
    },
    "2 bags of corn to transport": function() {
        return expect(calculate(2, 0, 0), "to eq", ["corn", "", "corn"]);
    },
    "1 fox to transport": function() {
        return expect(calculate(0, 0, 1), "to eq", ["fox"])
    },
    "2 foxes to transport": function() {
        return expect(calculate(0, 0, 2), "to eq", ["fox", "", "fox"])
    },
    "1 goose to transport": function() {
        return expect(calculate(0, 1, 0), "to eq", ["goose"])
    },
    "2 geese to transport": function() {
        return expect(calculate(0, 2, 0), "to eq", ["goose", "", "goose"])
    },
    "2 geese and 2 corn to transport is not possible": function() {
        return expect(calculate(2, 2, 0), "to eq", "ERROR")
    },
    "2 foxes and 2 geese to transport is not possible": function() {
        return expect(calculate(0, 2, 2), "to eq", "ERROR")
    },
    "1 geese and 1 corn to transport is possible": function() {
        return expect(calculate(1, 1, 0), "to eq", ["corn", "", "goose"])
    },
    "2 geese and 1 corn to transport is possible": function() {
        return expect(calculate(1, 2, 0), "to eq", ["corn", "", "goose", "corn", "goose", "", "corn"])
    },
    "1 geese and 2 corn to transport is possible": function() {
        return expect(calculate(2, 1, 0), "to eq", ["goose", "", "corn", "goose", "corn", "", "goose"])
    },
    "1 corn, 1 goose, 1 fox can be transported": function() {
      return expect(calculate(1, 1, 1), "to eq", ["goose", "", "corn", "goose", "fox", "", "goose"])
    },
    "0 corn, 2 geese, 1 fox can be transported": function() {
      return expect(calculate(0, 2, 1), "to eq", ["fox", "", "goose", "fox", "goose", "", "fox"])
    },
    "0 corn, 1 goose, 2 foxes can be transported": function() {
      return expect(calculate(0, 1, 2), "to eq", ["goose", "", "fox", "goose", "fox", "", "goose"])
    },
    "2 corn, 0 geese, 2 foxes can be transported": function() {
      return expect(calculate(2, 0, 2), "to eq", ["corn","", "corn", "", "fox", "", "fox"])
    },
    "3 corn, 0 geese, 3 foxes can be transported": function() {
      return expect(calculate(3, 0, 3), "to eq", ["corn","", "corn", "", "corn", "", "fox", "", "fox", "", "fox"])
    }
};
