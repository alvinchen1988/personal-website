var removeDuplicates = function(nums) {
  
    nums.forEach(function(number, i){
        
        for(var j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                nums.splice(j, 1);
            }
        }
        
    });
    
    return nums;
};

var remove = function(nums){

    if(nums.length == 0) return 0;

    var i = 0;

    for(var j =1; j<nums.length; j++){
        if(nums[j] != nums[i]){
            i++;
            nums[i] = nums[j];
        }
    }

    return i+1;

};

// console.log(remove([2,2,3,3,3,3,3,3,4,4,1,1,0]));

console.log(remove([2,13,2,5,8,10,78]));