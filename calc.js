function buttons(val)
{
    document.getElementById("screen").value+=val
    console.log(val)
}
function clear1()
{
    document.getElementById("screen").value=""
}
function eq(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}