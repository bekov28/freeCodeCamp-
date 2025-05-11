// let total = 0,
//   count = 1;
// while (count <= 10) {
//   total += count;
//   count += 1;
// }
// console.log(count); //55

const arrayList = [1, 8, 4, 3, 4, 2, 4, 5];
const sortedArray = arrayList.sort(); //[1, 2, 3, 4, 4, 4, 5 ,8]
console.log(sortedArray);

const duplicateRemove = sortedArray.filter((num, index) => sortedArray.indexOf(num) === index);
console.log(duplicateRemove);

