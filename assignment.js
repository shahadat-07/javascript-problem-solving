
//---------- kilometerToMeter Converter

function kilometerToMeter(input){
    var input = input * 1000;
    return input;
}



//---------- hotelCost Calculator

function hotelCost(days){
    var totalCost = 0;
    if(days <= 10){
        totalCost = days * 100;
    }
    else if(days <= 20){
        var firstPart = 10* 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        totalCost = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        totalCost = firstPart + secondPart + thirdPart;
    }
    return  totalCost;
}


// ---- megaFriend Finder

function megaFriend (friendName){
var maxValue = friendName [0];
for(var i = 0; i < friendName.length; i++){
var element= friendName [i];
if( element.length > maxValue.length){
    maxValue = element;
}
}
return maxValue;
}



//---------- budgetClaculator Machine

function budgetCalculator(watch,mobile,laptop){
    if(watch < 0|| mobile < 0|| laptop < 0){
        totalPrice = "Put a valid input";
    }

    else if(watch > 0 && mobile == 0 && laptop == 0){
         watchPrice = watch * 50;
         totalPrice = watchPrice;
        }

    else if(mobile > 0 && watch > 0 && laptop == 0){
        watchPrice = watch * 50;
        mobilePrice = mobile * 100;
        totalPrice = watchPrice + mobilePrice;
    }

    else{
         watchPrice = watch * 50;
         mobilePrice = mobile * 100;
         laptopPrice = laptop * 500;
         totalPrice = watchPrice + mobilePrice + laptopPrice;
        

    }
    return totalPrice;
}