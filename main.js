let calc=document.getElementById("calc-btn")
calc.addEventListener("click",function(){
    calculate()
})
function calculate(){
    const billAmount=parseFloat(document.getElementById("billAmount").value)
    const tipPercentage=parseFloat(document.getElementById("tipPercentage").value)
    const sharing=document.getElementById("share").value;

    const tipAmount=(billAmount * tipPercentage) / 100;
    const totalAmount= billAmount + tipAmount;
    const sharingAmount=totalAmount / sharing;

    const totalAmountElement=document.getElementById("totalAmount")
    totalAmountElement.innerHTML="Total Amount : $ " + totalAmount
    const shareAmount=document.getElementById("sharingAmount")
    shareAmount.innerHTML="Sharing Amount : $ " + sharingAmount.toFixed(2);
}
