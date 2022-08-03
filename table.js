function writeTable(){ 
    let table = document.getElementById('table').value;
for (let index = 1; index <=10; index++) {
   let result =table + " x " + index + " = " + table*index;
   let final =<h2>result</h2>;
   document.getElementById('writeTable').innerText += final;

}

    //r ( let tab = 1; tab<=10; tab++)
    // {
    //     let result ="<h1>" +table + " X " + tab + " = " + tab * table + "</br>";
    //     document.writeln(result);
    // }
}    