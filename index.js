console.log("hi");

let btn=document.getElementById('btn-pay');

btn.addEventListener('click',function(){
    let text=document.getElementById('text');
    let payvalue=text.value;
    if((1000-payvalue)<300){
        alert(`cash payment done ${1000-payvalue} done by the online credit card`)
    }
    else{
        alert(`your limit of creditcard is  300 min. amount to pay via cash is 700`);
        text.innerHTML=700;
    }

})