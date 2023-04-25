
const Banana = 15.678;
const Apple = 123.965;
const Orange = 90.2345;


const maxPrice = Math.max(Banana, Apple, Orange);
export const minPrice = Math.min(Banana, Apple, Orange);


const sum = Banana + Apple + Orange;

const floorSum = Math.floor(Banana) + Math.floor(Apple) + Math.floor(Orange);

const roundedToHundreds = Math.round(sum/100)*100

let isEvenNumber = true;

if(floorSum % 2 == 0){
    isEvenNumber = true;
} else {
    isEvenNumber = false;
}

const change = 500 - sum;

const averagePrice = (sum/3).toFixed(2);

const randomDiscount = Math.random().toFixed(2);

const sumWithDiscount = (sum - sum*randomDiscount).toFixed(2);

const profit = sum/2 - sum*randomDiscount;

const result = "Максимальна ціна: " + maxPrice + "\nМінімальна ціна: " + minPrice + "\nСума покупки: " + sum + "\nЦіла частина вартості: " + 
floorSum + "\nОкруглення до сотень: " + roundedToHundreds + "\nЧи парна число: " + isEvenNumber + "\nЗдача з 500: " + change + "\nСередня ціна: " + averagePrice + "\nЗнижка: " 
+ randomDiscount*100 + "%" + "\nЦіна зі знижкою: " + sumWithDiscount + "\nПрофіт: " + profit.toFixed(2);

console.log(result)