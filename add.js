var twoSum = function(nums, target) {
    
    var numbers = [];
    var indexes = [];
    
    nums.forEach(function(number){
        if(!numbers.includes(number)){
            numbers.push(number);
        }
    });
    
    for(var i = 0; i < numbers.length; i++){
        for(var j = i + 1; j < numbers.length; j++){
           if (numbers[i] + numbers[j] === target){
               indexes.push(numbers.indexOf(numbers[i]));
               indexes.push(numbers.indexOf(numbers[j]));
           } 
            
        }
    }
    
    return indexes;
    
};

console.log(twoSum([2,3,3,3,3,4,5,5], 6))