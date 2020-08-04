// 4digit random number
document.getElementById("generate-pin").addEventListener("click",function(){
     random=Math.floor(1000+Math.random()*9000);
    document.getElementById("randomNumber").value=random;
})

// user input function
function pressBtn(value){
     previousValue=document.getElementById("userInput").value;
     newVal=previousValue+value;
    document.getElementById("userInput").value=newVal;  
}

// BackButton Handler
document.getElementById("backBtn").addEventListener("click",function(){
    slice=newVal.slice(0,length-1);
    document.getElementById("userInput").value=slice;
    newVal=slice;
})

// clear Button Handler
document.getElementById("clearBtn").addEventListener("click",function(){
    slice=newVal.slice(0,length);
    document.getElementById("userInput").value=slice;
})

// submit Button Handler
document.getElementById("submitBtn").addEventListener("click",function(){ 
    if(random==newVal){
       const pinMatch= document.getElementById("pinMatch");         
         pinMatch.style.display="block";
    }
    else{
        // Trying left work solved
          let  number= document.getElementById("tryCount").innerText;
          let  num=number-1;
            document.getElementById("tryCount").innerText=num;
            number= document.getElementById("tryCount").innerText;  
                    // Hide submit button
            if(number==0){
                const submitBtn=document.getElementById("submitBtn");
                submitBtn.style.display="none";
            }
        const pinNotMatch=document.getElementById("pin-did-not-match");
        pinNotMatch.style.display="block";

    }

})

