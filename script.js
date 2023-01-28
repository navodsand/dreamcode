var TestData1 = [];
var TestData2 = [];
var Max = -1000;
var Min;

for(var x = 0; x <= 5; x++){
    TestData1[x] = prompt('Enter Temperature:');

    if (Max < TestData1[x]){

        Max = TestData1[x];
    }

    else{
        Min = TestData1[x];
    }

}


console.log("Temperature List Is: ",TestData1);
console.log("Max Temperature is: ",Max );
console.log("Min Temperature is: ",Min );