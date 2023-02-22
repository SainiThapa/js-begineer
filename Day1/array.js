var arr = [1,2,3,4,5];
// Functions
function validate()
{
    var a=document.forms["Myform"]["num1"].value;
    var b=document.forms["Myform"]["num2"].value;
    if(a == "")
    {
        alert("WRONG VALUE ENTERED");
        return false;
    }
    if(b == "")
    {
        alert("WRONG VALUE ENTERED");
        return false;
    }
    
}

// function avg()
// {
//     var a=document.forms["Myform"]["num1"].value;
//     var b=document.forms["Myform"]["num2"].value;
//     var c= (a+b);
// }
// document.write(c); 