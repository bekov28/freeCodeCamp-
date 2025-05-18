// let total = 0,
//   count = 1;
// while (count <= 10) {
//   total += count;
//   count += 1;
// }
// console.log(count); //55

// const arrayList = [1, 8, 4, 3, 4, 2, 4, 5];
// const sortedArray = arrayList.sort(); //[1, 2, 3, 4, 4, 4, 5 ,8]
// console.log(sortedArray);

// const duplicateRemove = sortedArray.filter((num, index) => sortedArray.indexOf(num) === index);
// console.log(duplicateRemove);



// $('li input[type="checkbox"]').change(function() {
//     const $allItems = $('li');
//     const $currentItem = $(this).closest('li');
//     const currentIndex = $allItems.index($currentItem);
    
//     // Find first unchecked item
//     const $firstUnchecked = $allItems.filter(function() {
//       return !$(this).find('input[type="checkbox"]').is(':checked');
//     }).first();
  
//     // If current item is checked and there are earlier unchecked items
//     if ($(this).is(':checked') && $allItems.index($firstUnchecked) < currentIndex) {
//       // Scroll to first unchecked item
//       $firstUnchecked[0].scrollIntoView({ behavior: 'smooth' });
      
//       // Optional: Highlight it
//       $firstUnchecked.css('background', '#fff3cd').siblings().css('background', '');
      
//       // Optional: Focus the checkbox
//       $firstUnchecked.find('input').focus();
      
//       // Prevent checking (optional)
//       // $(this).prop('checked', false);
//     }
//   });

//Cloning and spread

//Yuzaki klonlash
//Chuqur klonlash

const person = {
  name: 'Berd',
  age: 33,
  hobbies: {
    games: 'chess',
    sport: 'boxing'
  }
}
//const secondPerson = person;
//console.log(secondPerson);
// secondPerson.name = 'Samar'
// secondPerson.age = 23

// console.log(person);  //{name: 'Samar', age: 23}
// console.log(secondPerson);  //{name: 'Samar', age: 23}

//#1. Iteratsiya yordamida klonlash:

// const copyObj = obj => {
//   const clone = {};

//   for(let key in obj) {
//     clone[key] = obj[key]
//   }
//   return clone;
// }
// const secondPerson = copyObj(person);
// secondPerson.hobbies.games = 'lanka';
// console.log(secondPerson)

//#2 Object assign

// const secondPerson = Object.assign({isMarried: false}, person);

// secondPerson.name = 'Samar',
// secondPerson.age = 23

// console.log(person); 
// console.log(secondPerson);  

//#3 Spread operatori:

// const secondPerson = {...person};
// console.log(secondPerson);

function spread(a, b, c) {
  console.log('First arg: ', a)
  console.log('Second arg: ', b)
  console.log('Third arg: ', c)
}

const arr = [1, 2, 3];
spread(...arr);