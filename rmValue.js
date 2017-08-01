var removeElement = function(nums, val) {

    var position;
    

    while(position = nums.indexOf(val) !== -1){
        nums.splice(position, 1);
    }

    return nums;
};

console.log(removeElement([1,2,3,3,3,3,3,3,3,5,4,9], 3));

// Array.prototype.remove = function() {
//     var what, a = arguments, L = a.length, ax;
//     while (L && this.length) {
//         what = a[--L];
//         while ((ax = this.indexOf(what)) !== -1) {
//             this.splice(ax, 1);
//         }
//     }
//     return this;
// };

// console.log([1,2,3,4,4,4].remove(4));
