// const array = new Array(100000000000000000000000000000000000);

function readFile(fileName: string): string {
    if(fileName === 'not exist!') {
        throw new Error(`file not exist! ${fileName}`)
    }
    return 'file contents';
}

function closeFile(fileName: string) {

}
const fileName = 'not exist!';
function run(){
    try {
    console.log(readFile(fileName));
} catch (error) {
    console.log(`catched!`)
    return;
} finally {
    closeFile(fileName);
    console.log(`closed`)
}
}
run();

console.log(`!!!!`);
closeFile(fileName);