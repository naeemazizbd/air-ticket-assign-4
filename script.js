// count function code
function handleTicketChange(ticket, isIncrease){
    const ticketCount=getInputValue(ticket);
    let ticketNewCount=ticketCount;
    if (isIncrease==true){
       ticketNewCount=ticketCount+1;
    }
    if (isIncrease == false && ticketCount>0){
       ticketNewCount = ticketCount-1; 
    }
   document.getElementById(ticket+'-count').value=ticketNewCount;

    //ticket condition code
    let ticketTotal=0; 
    if(ticket=='ticket-1'){
       ticketTotal=ticketNewCount*150;
    }
    if(ticket=='ticket-2'){
       ticketTotal=ticketNewCount*100;
    }
    document.getElementById(ticket + '-total').innerText='$'+ticketTotal;
    calculateTotal();
 };
 
 // ticket input function total math solve 
 function calculateTotal(){
    const ticket1Count=getInputValue('ticket-1');
    const ticket2Count=getInputValue('ticket-2');
    
    const totalPrice=ticket1Count*150 + ticket2Count*100;
    document.getElementById('total-price').innerText='$'+ totalPrice;
 
    const text=Math.round(totalPrice*0.1);
    document.getElementById('text-amount').innerText='$'+text;
 
    const grandTotal=totalPrice+text;
    document.getElementById('grand-total').innerText='$'+grandTotal;
 
 }
 function getInputValue(ticket){
    const ticketInput=document.getElementById(ticket +'-count');
    const ticketCount=parseInt(ticketInput.value);
    return ticketCount;
 };

// ticket book submit success massage
 const loginBtn=document.getElementById('final-submit-button');
 loginBtn.addEventListener('click', function(){
     const loginArea = document.getElementById('full-ticket-form');
     loginArea.style.display='none';
      const transactionArea=document.getElementById('success-page');
      transactionArea.style.display='block';
      
 }); 
 