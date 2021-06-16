var studentArray = [];

function submit() {
    var studentdisplayArray = [];
    for (let i = 1; i <= 4; i++) {
        var studentName = document.getElementById("student" + i).value;
        console.log(studentName);
        studentArray.push(studentName);
    };
    
    console.log(studentArray);

    var studentlengthArray = studentArray.length;
    console.log(studentArray);

    for (let j = 0; j < studentlengthArray; j++) {
        studentdisplayArray.push("<h4>NAME - " + studentArray[j] + "</h4>");
        console.log(studentdisplayArray);
    };

    console.log(studentdisplayArray);
    document.getElementById("CommaYes").innerHTML = studentdisplayArray;

    var removeCommas = studentdisplayArray.join(" ");
    console.log(removeCommas);
    document.getElementById("CommaNo").innerHTML = removeCommas;
    
    document.getElementById("submit").style.display = "none";

    document.getElementById("sort").style.display = "inline-block";
};

function sort() {
    studentArray.sort();
    console.log(studentArray);

    var studentdisplaysortArray = [];
    
    var studentlength2Array = studentArray.length;
    console.log(studentlength2Array);

    for (let k = 0; k < studentlength2Array; k++) {
        studentdisplaysortArray.push("<h4>NAME - " + studentArray[k] + "</h4>");
        console.log(studentdisplaysortArray);
    };

    var RemoveCommas2 = studentdisplaysortArray.join(" ");
    console.log(RemoveCommas2);

    document.getElementById("CommaNo").innerHTML = RemoveCommas2;
};