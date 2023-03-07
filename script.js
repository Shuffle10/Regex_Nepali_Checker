function checkText(){
    let text = document.getElementById("textBox").value;
    let textValidate = /^[\u0900-\u097F .!<>,-_?/":;'{}[]\|`]*$/;

    if (textValidate.test(text)){
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerHTML = "Well Done!";
 
    }
    else{
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "Not in Nepali Language"   
    }

}




// [\u0900-\u097F]