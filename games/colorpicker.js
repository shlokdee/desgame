const submitbutton=document.getElementById("submitbutton");
submitbutton.disabled=true;
submitbutton.classList.add("blocked");

var rrandom=0;
var grandom=0;

var brandom=0;



function start(){
    rrandom=Math.floor(Math.random()*255)
    grandom=Math.floor(Math.random()*255)
     brandom=Math.floor(Math.random()*255)
    document.getElementById("colorbox").style.background=`rgb(${rrandom}, ${grandom}, ${brandom})`
    submitbutton.disabled=false;
    submitbutton.classList.remove("blocked");
}

function submit(){
    var rselected=parseInt(document.getElementById("colorpicker").value.slice(1,3),16)
    var gselected=parseInt(document.getElementById("colorpicker").value.slice(3,5),16)
    var bselected=parseInt(document.getElementById("colorpicker").value.slice(5,7),16)

    score=Math.floor((1-((Math.abs(rselected-rrandom)+Math.abs(gselected-grandom)+Math.abs(bselected-brandom))/(255*3)))*100)
    document.getElementById("scorelabel").innerText="ur " + score+"% right"

}