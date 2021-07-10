//1st Semester
function grade1() {

    //arrays
    var gr = new Array();
    var pt = new Array();
    var ingr = new Array();
    var incr = new Array();


    // define valid grades and their values

    gr = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "D", "F", "NA"]
    pt = [4, 3.75, 3.50, 3.25, 3, 2.75, 2.50, 2.25, 2, 0, 0]


    // retrieve user input
    ingr[0] = document.getElementById("510201").value;
    ingr[1] = document.getElementById("510202").value;
    ingr[2] = document.getElementById("510203").value;
    ingr[3] = document.getElementById("510204").value;
    ingr[4] = document.getElementById("510205").value;
    ingr[5] = document.getElementById("510207").value;
    ingr[6] = document.getElementById("510209").value;




    //credits
    incr = [3, 1.5, 3, 1.5, 3, 3, 3]


    // Calculate GPA

    var allgr = 0;
    var allcr = 0;
    var gpa = 0;
    //Condition
    for (var x = 0; x < ingr.length; x++) {
        if (ingr[x] == "") {
            alert("Error- Grade cannot be empty.");
            return 0;

        }

        else if (ingr[x] == gr[9] || ingr[x] == gr[10]) {
            alert("Error- For Grade F / NA  GPA= Incomplete")
            var msg = "Incomplete"
            document.getElementById("demo1").innerHTML = msg;
            document.getElementById("demo1").style.color = "orangred";

            return 0;

        }
        var validgrcheck = 0;
        for (var xx = 0; xx < gr.length; xx++) {
            if (ingr[x] == gr[xx]) {
                allgr = allgr + (parseFloat(incr[x], 10) * pt[xx]);
                allcr = allcr + parseFloat(incr[x], 10);
                validgrcheck = 1;
                break;
            }

        }
        if (validgrcheck == 0) {
            alert("Error- Please enter correct input and  use standard  grades in the form of A A- B+ ...F.");
            return 0;
        }
    }
    //result
    var gpa = allgr / allcr;
    document.getElementById("demo1").innerHTML = gpa.toFixed(2);



}//Function

//2nd Semester
function grade2() {

    //arrays
    var gr = new Array();
    var pt = new Array();
    var ingr = new Array();
    var incr = new Array();


    // define valid grades and their values

    gr = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "D", "F", "NA"]
    pt = [4, 3.75, 3.50, 3.25, 3, 2.75, 2.50, 2.25, 2, 0, 0]


    // retrieve user input
    ingr[0] = document.getElementById("510221").value;
    ingr[1] = document.getElementById("510222").value;
    ingr[2] = document.getElementById("510223").value;
    ingr[3] = document.getElementById("510225").value;
    ingr[4] = document.getElementById("510227").value;
    ingr[5] = document.getElementById("510229").value;




    //credits
    incr = [3, 1.5, 3, 3, 3, 3]


    // Calculate GPA

    var allgr = 0;
    var allcr = 0;
    var gpa = 0;
    //Condition
    for (var x = 0; x < ingr.length; x++) {
        if (ingr[x] == "") {
            alert("Error- Grade cannot be empty.");
            return 0;

        }

        else if (ingr[x] == gr[9] || ingr[x] == gr[10]) {
            alert("Error- For Grade F / NA  GPA= Incomplete")
            var msg = "Incomplete"
            document.getElementById("demo2").innerHTML = msg;
            return 0;

        }
        var validgrcheck = 0;
        for (var xx = 0; xx < gr.length; xx++) {
            if (ingr[x] == gr[xx]) {
                allgr = allgr + (parseFloat(incr[x], 10) * pt[xx]);
                allcr = allcr + parseFloat(incr[x], 10);
                validgrcheck = 1;
                break;
            }

        }
        if (validgrcheck == 0) {
            alert("Error- Please enter correct input and  use standard  grades in the form of A A- B+ ...F.");
            return 0;
        }
    }
    //result
    var gpa = allgr / allcr;
    document.getElementById("demo2").innerHTML = gpa.toFixed(2);



}//Function

//3rd Semester
function grade3() {

    //arrays
    var gr = new Array();
    var pt = new Array();
    var ingr = new Array();
    var incr = new Array();


    // define valid grades and their values

    gr = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "D", "F", "NA"]
    pt = [4, 3.75, 3.50, 3.25, 3, 2.75, 2.50, 2.25, 2, 0, 0]


    // retrieve user input
    ingr[0] = document.getElementById("520201").value;
    ingr[1] = document.getElementById("520202").value;
    ingr[2] = document.getElementById("520203").value;
    ingr[3] = document.getElementById("520204").value;
    ingr[4] = document.getElementById("520205").value;
    ingr[5] = document.getElementById("520207").value;
    ingr[6] = document.getElementById("520209").value;




    //credits
    incr = [3, 1.5, 3, 1.5, 3, 3, 3]


    // Calculate GPA

    var allgr = 0;
    var allcr = 0;
    var gpa = 0;
    //Condition
    for (var x = 0; x < ingr.length; x++) {
        if (ingr[x] == "") {
            alert("Error- Grade cannot be empty.");
            return 0;

        }

        else if (ingr[x] == gr[9] || ingr[x] == gr[10]) {
            alert("Error- For Grade F / NA  GPA= Incomplete")
            var msg = "Incomplete"
            document.getElementById("demo3").innerHTML = msg;
            return 0;

        }
        var validgrcheck = 0;
        for (var xx = 0; xx < gr.length; xx++) {
            if (ingr[x] == gr[xx]) {
                allgr = allgr + (parseFloat(incr[x], 10) * pt[xx]);
                allcr = allcr + parseFloat(incr[x], 10);
                validgrcheck = 1;
                break;
            }

        }
        if (validgrcheck == 0) {
            alert("Error- Please enter correct input and  use standard  grades in the form of A A- B+ ...F.");
            return 0;
        }
    }
    //result
    var gpa = allgr / allcr;
    document.getElementById("demo3").innerHTML = gpa.toFixed(2);



}//Function

//4th Semester
function grade4() {

    //arrays
    var gr = new Array();
    var pt = new Array();
    var ingr = new Array();
    var incr = new Array();


    // define valid grades and their values

    gr = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "D", "F", "NA"]
    pt = [4, 3.75, 3.50, 3.25, 3, 2.75, 2.50, 2.25, 2, 0, 0]


    // retrieve user input
    ingr[0] = document.getElementById("520221").value;
    ingr[1] = document.getElementById("520222").value;
    ingr[2] = document.getElementById("520223").value;
    ingr[3] = document.getElementById("520224").value;
    ingr[4] = document.getElementById("520225").value;
    ingr[5] = document.getElementById("520226").value;
    ingr[6] = document.getElementById("520227").value;




    //credits
    incr = [3, 1.5, 3, 1.5, 3, 1.5, 3]


    // Calculate GPA

    var allgr = 0;
    var allcr = 0;
    var gpa = 0;
    //Condition
    for (var x = 0; x < ingr.length; x++) {
        if (ingr[x] == "") {
            alert("Error- Grade cannot be empty.");
            return 0;

        }

        else if (ingr[x] == gr[9] || ingr[x] == gr[10]) {
            alert("Error- For Grade F / NA  GPA= Incomplete")
            var msg = "Incomplete"
            document.getElementById("demo4").innerHTML = msg;
            return 0;

        }
        var validgrcheck = 0;
        for (var xx = 0; xx < gr.length; xx++) {
            if (ingr[x] == gr[xx]) {
                allgr = allgr + (parseFloat(incr[x], 10) * pt[xx]);
                allcr = allcr + parseFloat(incr[x], 10);
                validgrcheck = 1;
                break;
            }

        }
        if (validgrcheck == 0) {
            alert("Error- Please enter correct input and  use standard  grades in the form of A A- B+ ...F.");
            return 0;
        }
    }
    //result
    var gpa = allgr / allcr;
    document.getElementById("demo4").innerHTML = gpa.toFixed(2);



}//Function

//5th Semester
function grade5() {

    //arrays
    var gr = new Array();
    var pt = new Array();
    var ingr = new Array();
    var incr = new Array();


    // define valid grades and their values

    gr = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "D", "F", "NA"]
    pt = [4, 3.75, 3.50, 3.25, 3, 2.75, 2.50, 2.25, 2, 0, 0]


    // retrieve user input
    ingr[0] = document.getElementById("530201").value;
    ingr[1] = document.getElementById("530202").value;
    ingr[2] = document.getElementById("530203").value;
    ingr[3] = document.getElementById("530204").value;
    ingr[4] = document.getElementById("530205").value;
    ingr[5] = document.getElementById("530206").value;
    ingr[6] = document.getElementById("530207").value;




    //credits
    incr = [3, 1.5, 3, 1.5, 3, 1.5, 3]


    // Calculate GPA

    var allgr = 0;
    var allcr = 0;
    var gpa = 0;
    //Condition
    for (var x = 0; x < ingr.length; x++) {
        if (ingr[x] == "") {
            alert("Error- Grade cannot be empty.");
            return 0;

        }

        else if (ingr[x] == gr[9] || ingr[x] == gr[10]) {
            alert("Error- For Grade F / NA  GPA= Incomplete")
            var msg = "Incomplete"
            document.getElementById("demo5").innerHTML = msg;
            return 0;

        }
        var validgrcheck = 0;
        for (var xx = 0; xx < gr.length; xx++) {
            if (ingr[x] == gr[xx]) {
                allgr = allgr + (parseFloat(incr[x], 10) * pt[xx]);
                allcr = allcr + parseFloat(incr[x], 10);
                validgrcheck = 1;
                break;
            }

        }
        if (validgrcheck == 0) {
            alert("Error- Please enter correct input and  use standard  grades in the form of A A- B+ ...F.");
            return 0;
        }
    }
    //result
    var gpa = allgr / allcr;
    document.getElementById("demo5").innerHTML = gpa.toFixed(2);



}//Function

//6th Semester
function grade6() {

    //arrays
    var gr = new Array();
    var pt = new Array();
    var ingr = new Array();
    var incr = new Array();


    // define valid grades and their values

    gr = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "D", "F", "NA"]
    pt = [4, 3.75, 3.50, 3.25, 3, 2.75, 2.50, 2.25, 2, 0, 0]


    // retrieve user input
    ingr[0] = document.getElementById("530219").value;
    ingr[1] = document.getElementById("530220").value;
    ingr[2] = document.getElementById("530221").value;
    ingr[3] = document.getElementById("530222").value;
    ingr[4] = document.getElementById("530223").value;
    ingr[5] = document.getElementById("530224").value;
    ingr[6] = document.getElementById("530225").value;




    //credits
    incr = [3, 1.5, 3, 1.5, 3, 1.5, 3]


    // Calculate GPA

    var allgr = 0;
    var allcr = 0;
    var gpa = 0;
    //Condition
    for (var x = 0; x < ingr.length; x++) {
        if (ingr[x] == "") {
            alert("Error- Grade cannot be empty.");
            return 0;

        }

        else if (ingr[x] == gr[9] || ingr[x] == gr[10]) {
            alert("Error- For Grade F / NA  GPA= Incomplete")
            var msg = "Incomplete"
            document.getElementById("demo6").innerHTML = msg;
            return 0;

        }
        var validgrcheck = 0;
        for (var xx = 0; xx < gr.length; xx++) {
            if (ingr[x] == gr[xx]) {
                allgr = allgr + (parseFloat(incr[x], 10) * pt[xx]);
                allcr = allcr + parseFloat(incr[x], 10);
                validgrcheck = 1;
                break;
            }

        }
        if (validgrcheck == 0) {
            alert("Error- Please enter correct input and  use standard  grades in the form of A A- B+ ...F.");
            return 0;
        }
    }
    //result
    var gpa = allgr / allcr;
    document.getElementById("demo6").innerHTML = gpa.toFixed(2);



}//Function

//7th Semester
function grade7() {

    //arrays
    var gr = new Array();
    var pt = new Array();
    var ingr = new Array();
    var incr = new Array();


    // define valid grades and their values

    gr = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "D", "F", "NA"]
    pt = [4, 3.75, 3.50, 3.25, 3, 2.75, 2.50, 2.25, 2, 0, 0]


    // retrieve user input
    ingr[0] = document.getElementById("540201").value;
    ingr[1] = document.getElementById("540202").value;
    ingr[2] = document.getElementById("540203").value;
    ingr[3] = document.getElementById("540204").value;
    ingr[4] = document.getElementById("540205").value;
    ingr[5] = document.getElementById("540206").value;
    ingr[6] = document.getElementById("540207").value;
    ingr[7] = document.getElementById("540208").value;




    //credits
    incr = [3, 1.5, 3, 1.5, 3, 1.5, 3, 1.5]


    // Calculate GPA

    var allgr = 0;
    var allcr = 0;
    var gpa = 0;
    //Condition
    for (var x = 0; x < ingr.length; x++) {
        if (ingr[x] == "") {
            alert("Error- Grade cannot be empty.");
            return 0;

        }

        else if (ingr[x] == gr[9] || ingr[x] == gr[10]) {
            alert("Error- For Grade F / NA  GPA= Incomplete")
            var msg = "Incomplete"
            document.getElementById("demo7").innerHTML = msg;
            return 0;

        }
        var validgrcheck = 0;
        for (var xx = 0; xx < gr.length; xx++) {
            if (ingr[x] == gr[xx]) {
                allgr = allgr + (parseFloat(incr[x], 10) * pt[xx]);
                allcr = allcr + parseFloat(incr[x], 10);
                validgrcheck = 1;
                break;
            }

        }
        if (validgrcheck == 0) {
            alert("Error- Please enter correct input and  use standard  grades in the form of A A- B+ ...F.");
            return 0;
        }
    }
    //result
    var gpa = allgr / allcr;
    document.getElementById("demo7").innerHTML = gpa.toFixed(2);



}//Function

//8th Semester
function grade8() {

    //arrays
    var gr = new Array();
    var pt = new Array();
    var ingr = new Array();
    var incr = new Array();


    // define valid grades and their values

    gr = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "D", "F", "NA"]
    pt = [4, 3.75, 3.50, 3.25, 3, 2.75, 2.50, 2.25, 2, 0, 0]


    // retrieve user input
    ingr[0] = document.getElementById("540219").value;
    ingr[1] = document.getElementById("540220").value;
    ingr[2] = document.getElementById("540221").value;
    ingr[3] = document.getElementById("540222P").value;
    ingr[4] = document.getElementById("optional").value;
    ingr[5] = document.getElementById("optionalLab").value;





    //credits
    incr = [3, 1.5, 3, 6, 3, 1.5]


    // Calculate GPA

    var allgr = 0;
    var allcr = 0;
    var gpa = 0;
    //Condition
    for (var x = 0; x < ingr.length; x++) {
        if (ingr[x] == "") {
            alert("Error- Grade cannot be empty.");
            return 0;

        }

        else if (ingr[x] == gr[9] || ingr[x] == gr[10]) {
            alert("Error- For Grade F / NA  GPA= Incomplete")
            var msg = "Incomplete"
            document.getElementById("demo8").innerHTML = msg;
            return 0;

        }
        var validgrcheck = 0;
        for (var xx = 0; xx < gr.length; xx++) {
            if (ingr[x] == gr[xx]) {
                allgr = allgr + (parseFloat(incr[x], 10) * pt[xx]);
                allcr = allcr + parseFloat(incr[x], 10);
                validgrcheck = 1;
                break;
            }

        }
        if (validgrcheck == 0) {
            alert("Error- Please enter correct input and  use standard  grades in the form of A A- B+ ...F.");
            return 0;
        }
    }
    //result
    var gpa = allgr / allcr;
    document.getElementById("demo8").innerHTML = gpa.toFixed(2);



}//Function

//Final CGPA//

function cgpa() {

    var X1 = document.getElementById("1").value;
    var a1 = X1 * 18;
    var X2 = document.getElementById("2").value;
    var a2 = X2 * 16.5;
    var X3 = document.getElementById("3").value;
    var a3 = X3 * 18;
    var X4 = document.getElementById("4").value;
    var a4 = X4 * 16.5;
    var X5 = document.getElementById("5").value;
    var a5 = X5 * 16.5;
    var X6 = document.getElementById("6").value;
    var a6 = X6 * 16.5;
    var X7 = document.getElementById("7").value;
    var a7 = X7 * 18;
    var X8 = document.getElementById("8").value;
    var a8 = X8 * 18;



    var Cr = 138;
    var result = (a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8) / Cr;
    document.getElementById("demo").innerHTML = result.toFixed(2);

}