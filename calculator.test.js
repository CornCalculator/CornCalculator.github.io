var tests = {
    "Nothing to transport": function() {
        return expect(calculate(0, 0), "to eq", ["yourself"]);
    },
    "Nothing to transport (string inputs)": function() {
        return expect(calculate("0", "0"), "to eq", ["yourself"]);
    },
    "1 bag of corn to transport": function() {
        return expect(calculate(1, 0), "to eq", ["corn"]);
    },
    "2 bags of corn to transport": function() {
        return expect(calculate(2, 0), "to eq", ["corn", "", "corn"]);
    },
    "1 goose to transport": function() {
        return expect(calculate(0, 1), "to eq", ["goose"])
    },
    "2 geese to transport": function() {
        return expect(calculate(0, 2), "to eq", ["goose", "", "goose"])
    },
    "2 geese and 2 corn to transport is not possible": function() {
        return expect(calculate(2, 2), "to eq", "ERROR")
    },
    "1 geese and 1 corn to transport is possible": function() {
        return expect(calculate(1, 1), "to eq", ["corn", "", "goose"])
    },
    "2 geese and 1 corn to transport is possible": function() {
            return expect(calculate(1, 2), "to eq", ["corn", "", "goose", "corn", "goose", "", "corn"])
    },
    "1 geese and 2 corn to transport is possible": function() {
        return expect(calculate(2, 1), "to eq", ["goose", "", "corn", "goose", "corn", "", "goose"])
    }
};
