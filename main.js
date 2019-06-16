function arr() {
    var colArr = ['blue', 'green', 'red'];
    rndArrInd = Math.floor(Math.random() * colArr.length);
    console.log(colArr[rndArrInd]);
    return colArr[rndArrInd];
}

function rndN() {
    var rndNum = Math.ceil(Math.random() * 10);
    return rndNum;
}


for (let i = 0; i < 3; i++) {
    document.getElementById('center').innerHTML += '<div id="i' + i + '">' + 0 + "</div>"

}

function creaDiv() {

    for (let i = 0; i < 3; i++) {
        let rndArrInd = arr();
        let rndNum = rndN()

        document.getElementById('i' + i).style.backgroundColor = rndArrInd;
        document.getElementById('i' + i).innerHTML = setTimeout(rndNum );
    }
}


creaDiv();