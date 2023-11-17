function makeLine(size) {
    let line = "";
    for (let i = 0; i < size; i++) {
        line += "#";
    }
    return line;
}

console.log(makeLine(5) + "\n");

function makeSquare(size) {

    // let square = "";

    // for (let i = 0; i < size; i++) {
    //     square += (makeLine(size) + "\n");
    // }

    // square = square.slice(0, -1)

    return makeRectangle(size, size);
}


console.log(makeSquare(5) + "\n");

// console.log(makeSquare(3));

function makeRectangle(width, height) {

    let rectangle = "";

    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + "\n");
    }

    rectangle = rectangle.slice(0, -1);

    return rectangle;
}

console.log(makeRectangle(5, 3) + "\n");

function makeDownwardStairs(height) {

    let downwardStairs = "";

    for (let i = 0; i < height; i++) {
        downwardStairs += (makeLine(i + 1) + "\n");
    }

    downwardStairs = downwardStairs.slice(0, -1)

    return downwardStairs;
}

console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let line = ""
    for (let i = 0; i < numSpaces; i++) {
        line += " ";
    }

    for (let i = 0; i < numChars; i++) {
        line += "#";
    }

    for (let i = 0; i < numSpaces; i++) {
        line += " ";
    }

    return line;
}

console.log("\n" + makeSpaceLine(3, 5));

function makeIsocelesTriangle(height) {
    let isocelesTriangle = "";

    for (let i = 0; i < height; i++) {
        isocelesTriangle += makeSpaceLine((height - i - 1), (2 * i + 1));
        isocelesTriangle += "\n";
    }

    return isocelesTriangle;
}

console.log("\n" + makeIsocelesTriangle(5));

function makeDiamond(height) {
    let diamond = [];
    let completedDiamond = "";

    for (let i = 0; i < height; i++) {
        diamond[i] = makeSpaceLine((height - i - 1), (2 * i + 1));
        diamond[i] += "\n";
    }

    completedDiamond += diamond.join("");
    completedDiamond += diamond.reverse().join("");


    return completedDiamond;
}

console.log("\n" + makeDiamond(5));