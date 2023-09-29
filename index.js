/* დავალება 1. 
შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;   
მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
დაბეჭდეთ მასივისი ახალი ელემენტები.
 */
console.log("Task 1");
let arrNumbers = [5, 25, 89, 120, 36];
console.log(arrNumbers);
arrNumbers.push("javascript", "python");
arrNumbers.unshift("html", "css");
console.log(arrNumbers);
arrNumbers.shift();
arrNumbers.pop();
console.log(arrNumbers);

/* დავალება 2. 
შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;   
გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;
 */
console.log("Task 2");
let arrFruits = ["orange", "banana", "pear"];
console.log(arrFruits);
arrFruits.push("apple", "pineapple");
arrFruits.unshift("watermelon");
console.log(arrFruits);
arrFruits.splice(2, 0, "mango");
console.log(arrFruits);
arrFruits.shift();
arrFruits.pop();
console.log(arrFruits);

/* დავალება 3. 
მოცემულია მასივი let array =[1, 2, 3, 4, 5]. 
splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].
 */
console.log("Task 3");
let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, "a", "b", "c");
console.log(arr);

/* დავალება 4. 
მოცემულია მასივი: let arr = [1, 2, 3, 4, 5]. foreach საშუალებით გამოთვალეთ რიცხვების ჯამი.
 */
console.log("Task 4");
let array = [1, 2, 3, 4, 5];
let sum = 0;
array.forEach((elem) => (sum += elem));
console.log(sum);

/* დავალება 5. 
ციკლის საშუალებით გამოიტანეთ რიცხვების სვეტი 100 დან 1 მდე.
 */
console.log("Task 5");
for (let i = 100; i > 1; i--) {
  console.log(i);
}

/* დავალება 6. 
მოცემულია მასივი: let array=[2,15,10,24], წაშალეთ ამ მასივიდან რიცხვი 10. 
 */
console.log("Task 6");
let arrayNums = [2, 15, 10, 24];
arrayNums.splice(2, 1);
console.log(arrayNums);

/* დავალება 7. 
მოცემულია მასივი: let array = [12, 25, 3, 6, 8, 14, 7, 23], 
map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან 
თითოეული ელემენტი იქნება 3-ზე გაყოფილი; 
 */
console.log("Task 7");
let arrNums = [12, 25, 3, 6, 8, 14, 7, 23];
let modifiedArrNums = arrNums.map((elem) => {
  let modifiedElem = elem / 3;
  return modifiedElem.toFixed(0);
});
console.log(modifiedArrNums);

/* დავალება 8. 
მოცემულია მასივი: let languages = ['html', 'css', 'javascript', ‘python’, 'php'], 
ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომელთა სიმბოლოების 
რაოდენობა იქნება 3-ზე მეტი; 
 */
console.log("Task 8");
let languages = ["html", "css", "javascript", "python", "php"];
let languagesNewArr = languages.filter((elem) => {
  return elem.length > 3;
});
console.log(languagesNewArr);

/* დავალება 9. 
მოცემულია მასივი: let words = ['madrid', 'rome', 'milan', 'berlin'], 
filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი 
სიტყვებისგან რომელიც შეიცავს ასო m-ს; 
 */
console.log("Task 9");
let words = ["madrid", "rome", "milan", "berlin"];
let filterItems = (arr, criteria) => {
  return arr.filter((el) => el.toLowerCase().includes(criteria.toLowerCase()));
};
console.log(filterItems(words, "m"));

/* დავალება 10. 
მოცემულია სამი მასივი: let arr1 = [1, 2]; let arr2 = [3, 4]; let arr3 = [5, 6];
concat მეთოდის საშუალებით გაერთიანეთ ეს სამი მასივი ერთ მასივში  
 */
console.log("Task 10");
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let arrNew = arr1.concat(arr2, arr3);
console.log(arrNew);

/* დავალება 11. 
შეამოწმეთ მოცემულ მასივში let arr = [-1, -2, -3, 4] არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთოდით   
 */
console.log("Task 11");
let arr4 = [-1, -2, -3, 4];
let even = (elem) => elem > 0;
console.log(arr4.some(even));

/* დავალება 12. 
მოცემულია მასივი let array =[23, 45, 32, 5, 87, 7, 3 ,98]. sort მეთოდის საშუaლებით დაალაგეთ ელემენტები
კლებადობის მიხედვით და ამოიღეთ მინიმალური რიცხვი;   
 */
console.log("Task 12");
let arr5 = [23, 45, 32, 5, 87, 7, 3, 98];
let sorted = arr5.sort((a, b) => a - b);
console.log(sorted);
console.log(sorted[0]);

