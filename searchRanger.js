var searchRange = function(nums, target) {
    var ary = [];
    while(nums.includes(target)){
        var position = nums.indexOf(target);
        ary.push(position);
        delete nums[position];
    }


    if(ary.length === 0){
        ary = [-1,-1];
    }else if(ary.length === 1){
        ary.push(ary[0]);
    }else if(ary.length > 2){
        ary.splice(1, ary.length - 2);
    }

    return ary;


};

console.log(searchRange([3,9,8,7,0,8,9], 9));