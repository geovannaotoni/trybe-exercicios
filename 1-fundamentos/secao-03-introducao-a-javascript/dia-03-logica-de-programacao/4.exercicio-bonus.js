let n = 5;
let symbol = '*';
let space = '-';
let lineIndex = Math.ceil(n/2);
let result = '';


for (lineIndex; lineIndex > 0; lineIndex -= 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    result += symbol;
  }
  console.log(result);
  result = '';
}





//   *   - 2 spaces 1* 2 spaces (l0 c2) numero de *: 2l+1
//  ***  - 1 space 3* 1 space (l1 c1c2c3)
// ***** - 5 * (l2 c0c1c2c3c4)