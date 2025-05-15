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

$('li input[type="checkbox"]').change(function() {
    const $allItems = $('li');
    const $currentItem = $(this).closest('li');
    const currentIndex = $allItems.index($currentItem);
    
    // Find first unchecked item
    const $firstUnchecked = $allItems.filter(function() {
      return !$(this).find('input[type="checkbox"]').is(':checked');
    }).first();
  
    // If current item is checked and there are earlier unchecked items
    if ($(this).is(':checked') && $allItems.index($firstUnchecked) < currentIndex) {
      // Scroll to first unchecked item
      $firstUnchecked[0].scrollIntoView({ behavior: 'smooth' });
      
      // Optional: Highlight it
      $firstUnchecked.css('background', '#fff3cd').siblings().css('background', '');
      
      // Optional: Focus the checkbox
      $firstUnchecked.find('input').focus();
      
      // Prevent checking (optional)
      // $(this).prop('checked', false);
    }
  });