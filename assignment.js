




// kilometerToMeter

function kilometerToMeter(num){
  return num*1000;
}

var meter=kilometerToMeter(3);
console.log(meter);


budgetCalculator

function budgetCalculator(item1,item2,item3){
  var clock=item1*50;
  var phone=item2*100;
  var laptop=item3*500;
  var totalCost=clock+phone+laptop;
  return totalCost;
}

console.log(budgetCalculator(2,2,1));

// hotelCost

function hotelCost(stay){
 
  if (stay<=10){
    return stay*100
  }
  else if(stay<=17){
    var first10=10;
    var second7=stay-first10;
    first10=first10*100;
    second7=second7*80;
    return first10+second7;
  }
  else{
        var first10=10;
    var second7=7;
    var furtherStay=stay-17;
    first10=first10*100;
    second7=second7*80;
    furtherStay=furtherStay*50;
    return first10+second7+furtherStay;
  }
}


var totalCost=hotelCost(12);
console.log(totalCost);


// megaFriend

function megaFriend(arr){
    var largeName="";
  
    for(var i=0; i<arr.length; i++){
      if(arr[i].length>largeName.length){
        largeName=arr[i];
      }
    
    }
   
    return largeName;
  
  }
  
  var friendNames=["Shishir", "Niloy", "Imran", "Azhar", "Shuvo"];
  console.log(megaFriend(friendNames));
  