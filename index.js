// Write your algorithm here

function hasTargetSum(array, target) {
   const complementsArith = new Set()
   for (let num of array) {
     if (complementsArith.has(num)) {
       return true;
     }
     complementsArith.add(target - num)
   }
   return false
} 



/* 
  Write the Big O time complexity of your function here



  
*/

/* 
  Add your pseudocode here
  1. create hasTargetSum function
  2. create array and target parameter
  3. step through array and for each index that we are on, we will run pair addition sequence onm the
  rest of the list
  4. if sum is equal to target then return true
  5. if not true, keep running


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
