var timeField = document.querySelector("#time");
var targetView = document.querySelector("#target");
var errorView = document.querySelector("#error");
var goButton = document.querySelector("#go");
var interval;

goButton.addEventListener("click", function(){
    clearInterval(interval);
    errorView.innerText = "";
    
    var x = timeField.value;
    var regex = /\d+/;

    if(regex.test(x)){
        var start = new Date().getTime();
        
        interval = setInterval(function(){
            var time = new Date().getTime() - start;
            if(time < x*1000){
                targetView.innerText = Math.ceil(x - time/1000);
            }else{
                targetView.innerText = "finished processing!";
                clearInterval(interval);
            }

        }, 100);
        
    }else{
        errorView.innerText = "Invalid";
    }
    
});