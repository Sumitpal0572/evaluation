


const files = [
    "document1.pdf",
    "document2.pdf",
    "image1.png",
    "text1.txt",
    "photo1.jpg",
    "program1.exe",
    "data1.csv",
    "report1.pdf"
];



function countFileExtension(files) {
    let count = {};
    for (let i = 0; i < files.length; i++) {
        let indexofpoint = files[i].indexOf(".");
        let extensions = files[i].substring(indexofpoint + 1);
        if (count[extensions] === undefined) {
            count[extensions] = 1;
        } else {
            count[extensions] += 1;
        }
    }
    return count;
}

console.log(countFileExtension(files));