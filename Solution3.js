function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let start = (i % 2 === 0) ? 0 : 1;
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += start + " ";
            start = 1 - start;
        }
        console.log(line.trimEnd());
    }
}

printPattern(6);
