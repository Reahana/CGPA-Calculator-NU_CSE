function myGrade() {
    var text;
    var Th = 3;
    var Pr = 1.5;
    // 510201 Structured Programming Language   3.0
    //  510202 Structured Programming Language Lab  1.5
    // 510203 Electrical and Electronic Circuit  3.0 
    // 510204 Electrical and Electronic Circuit Lab 1.5
    //  510205 Calculus  3.0 
    // 510207 Physics 3.0 
    // 510209 English 3.0 
    
    //1st semester
    // 510201
    var G = document.getElementById("myInput510201").value


    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s1 = text * Th;



    // 510202
    var G = document.getElementById("myInput510202").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s2 = text * Pr;


    // 510203
    var G = document.getElementById("myInput510203").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }


    var s3 = text * Th;


    // 510204
    var G = document.getElementById("myInput510204").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s4 = text * Pr;

    // 510205
    var G = document.getElementById("myInput510205").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s5 = text * Th;

    // 510207
    var G = document.getElementById("myInput510207").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s6 = text * Th;

    // 510209
    var G = document.getElementById("myInput510209").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s7 = text * Th;

    //cgpa
    var Cr = 18;
    var result = (s1 + s2 + s3 + s4 + s5 + s6 + s7) / Cr;
    document.getElementById("demo1").innerHTML = result;

    //2nd semester
    // 510221
    var G = document.getElementById("myInput510221").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s1 = text * Th;

    // 510222
    var G = document.getElementById("myInput510222").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s2 = text * Pr;


    // 510223
    var G = document.getElementById("myInput510223").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }


    var s3 = text * Th;


    // 510225
    var G = document.getElementById("myInput510225").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s4 = text * Th;

    // 510227
    var G = document.getElementById("myInput510227").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s5 = text * Th;

    // 510229
    var G = document.getElementById("myInput510229").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s6 = text * Th;

    //cgpa
    var Cr = 16.5;
    var result = (s1 + s2 + s3 + s4 + s5 + s6) / Cr;
    document.getElementById("demo2").innerHTML = result;

    //3rd semester
    // 520201
    var G = document.getElementById("myInput520201").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s1 = text * Th;

    // 520202
    var G = document.getElementById("myInput520202").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s2 = text * Pr;


    // 520203
    var G = document.getElementById("myInput520203").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }


    var s3 = text * Th;


    // 520204
    var G = document.getElementById("myInput520204").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s4 = text * Pr;

    // 520205
    var G = document.getElementById("myInput520205").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s5 = text * Th;

    // 520207
    var G = document.getElementById("myInput520207").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s6 = text * Th;

    // 520209
    var G = document.getElementById("myInput520209").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s7 = text * Th;

    //cgpa
    var Cr = 18;
    var result = (s1 + s2 + s3 + s4 + s5 + s6 + s7) / Cr;
    document.getElementById("demo3").innerHTML = result;

    //4th semester
    // 520221
    var G = document.getElementById("myInput520221").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s1 = text * Th;

    // 520222
    var G = document.getElementById("myInput520222").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s2 = text * Pr;


    // 520223
    var G = document.getElementById("myInput520223").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }


    var s3 = text * Th;


    // 520224
    var G = document.getElementById("myInput520224").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s4 = text * Pr;

    // 520225
    var G = document.getElementById("myInput520225").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s5 = text * Th;

    // 520226
    var G = document.getElementById("myInput520226").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s6 = text * Pr;

    // 520227
    var G = document.getElementById("myInput520227").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s7 = text * Th;

    //cgpa
    var Cr = 16.5;
    var result = (s1 + s2 + s3 + s4 + s5 + s6 + s7) / Cr;
    document.getElementById("demo4").innerHTML = result;

    //5th semester
    // 530201 
    var G = document.getElementById("myInput530201").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s1 = text * Th;

    // 530202 
    var G = document.getElementById("myInput530202").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s2 = text * Pr;
    // 530203  
    var G = document.getElementById("myInput530203").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s3 = text * Th;
    // 530204   
    var G = document.getElementById("myInput530204").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s4 = text * Pr;
    // 530205 
    var G = document.getElementById("myInput530205").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s5 = text * Th;
    // 530206 
    var G = document.getElementById("myInput530206").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s6 = text * Pr;
    // 530207 
    var G = document.getElementById("myInput530207").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;


    }
    var s7 = text * Th;

    //cgpa
    var Cr = 16.5
    var result = (s1 + s2 + s3 + s4 + s5 + s6 + s7) / Cr;
    document.getElementById("demo5").innerHTML = result;
    

    //6th semester
    // 530219 
    var G = document.getElementById("myInput530219").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s1 = text * Th;

    // 530220 
    var G = document.getElementById("myInput530220").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s2 = text * Pr;

    // 530221 
    var G = document.getElementById("myInput530221").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s3 = text * Th;

    // 530222  
    var G = document.getElementById("myInput530222").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s4 = text * Pr;

    // 530223 
    var G = document.getElementById("myInput530223").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s5 = text * Th;

    //  530224  
    var G = document.getElementById("myInput530224").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s6 = text * Pr;

    //  530225 
    var G = document.getElementById("myInput530225").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s7 = text * Th;

    //cgpa
    var Cr = 16.5
    var result = (s1 + s2 + s3 + s4 + s5 + s6 + s7) / Cr;
    document.getElementById("demo6").innerHTML = result;

    //7th semester
    // 540201 
    var G = document.getElementById("myInput540201").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;
    }
    var s1 = text * Th;

    // 540202  
    var G = document.getElementById("myInput540202").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s2 = text * Pr;

    //  540203 
    var G = document.getElementById("myInput540203").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s3 = text * Th;

    //  540204  
    var G = document.getElementById("myInput540204").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s4 = text * Pr;

    //   540205 
    var G = document.getElementById("myInput540205").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s5 = text * Th;

    //   540206 
    var G = document.getElementById("myInput540206").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s6 = text * Pr;

    //  540207  
    var G = document.getElementById("myInput540207").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s7 = text * Th;

    //  540208  
    var G = document.getElementById("myInput540208").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s8 = text * Pr;

    //cgpa
    var Cr = 18.0
    var result = (s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8) / Cr;
    document.getElementById("demo7").innerHTML = result;

    //8th semester
    // 540219  
    var G = document.getElementById("myInput540219").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s1 = text * Th;
    // 540220  
    var G = document.getElementById("myInput540220").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s2 = text * Pr;
    // 540221 
    var G = document.getElementById("myInput540221").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s3 = text * Th;

    //  540222  project
    var G = document.getElementById("myInput540222").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var pj = 6;
    var sp = text * pj;

    //  5402XX optional
    var G = document.getElementById("optional").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var s0 = text * Th;

    //  5402XXL optional lab
    var G = document.getElementById("optionalLab").value;

    switch (G) {
        case "A+":
            text = 4.00;
            break;
        case "A":
            text = 3.75;
            break;
        case "A-":
            text = 3.50;
            break;
        case "B+":
            text = 3.25;
            break;
        case "B":
            text = 3;
            break;
        case "B-":
            text = 2.75;
            break;
        case "C+":
            text = 2.50;
            break;
        case "C":
            text = 2.25;
            break;
        case "D":
            text = 2.00;
            break;
        case "F":
            text = 0.00;
            break;
        default:
            text = 0;

    }
    var sl0 = text * Pr;

    //cgpa
    var Cr = 18
    var result = (s1 + s2 + s3 + sp + s0 + sl0) / Cr;
    document.getElementById("demo8").innerHTML = result;

    //FINAL

    var X1 = document.getElementById("myInput1").value;
    var a1 = X1 * 18;
    var X2 = document.getElementById("myInput2").value;
    var a2 = X2 * 16.5;
    var X3 = document.getElementById("myInput3").value;
    var a3 = X3 * 18;
    var X4 = document.getElementById("myInput4").value;
    var a4 = X4 * 16.5;
    var X5 = document.getElementById("myInput5").value;
    var a5 = X5 * 16.5;
    var X6 = document.getElementById("myInput6").value;
    var a6 = X6 * 16.5;
    var X7 = document.getElementById("myInput7").value;
    var a7 = X7 * 18;
    var X8 = document.getElementById("myInput8").value;
    var a8 = X8 * 18;

    var Cr = 138;
    var result = (a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8) / Cr;
    
    document.getElementById("demo").innerHTML = result;
} 
