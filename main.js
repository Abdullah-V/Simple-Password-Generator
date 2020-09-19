var values = document.querySelector(".input")
var count = document.querySelector(".input2")
var result = document.querySelector("#result")

var jsresult = []
var valcount = Number(count.value)
var valueleng = Number(values.value.length)



function start(){
    valcount = Number(count.value)
    if(valcount>=136){
        alert("Maximum count is 135")
    }
    else{
        jsresult = []
        valueleng = Number(values.value.length)
        for(var i = 0;i<valcount;i++){
            var rnd =Math.floor(Math.random() * valueleng);
            jsresult.push(values.value[rnd])
        }
        var end =  jsresult.join("")
        result.innerText = end
        result.select()
        document.execCommand('copy')
    }
}



function over(){
    console.log("denememeemm");
}


