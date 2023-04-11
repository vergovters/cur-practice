function getRandomChinese(length) {
    new Promise((resolve, reject) => {
      let сhineseResult = '';
      let counter = 0;
      if(length<0){
        reject('Error!');
      }
      while (counter < length) {
        const sign = Date.now().toString().slice(-5);
        counter++;
        setTimeout(function() {
            сhineseResult += String.fromCharCode(sign);
          if (сhineseResult.length === length) {
            resolve(сhineseResult);
          }}, 50 * counter);
      }
    }).then((сhineseResult) => console.log(сhineseResult))
    .catch((error) => {console.error(error)});

}
  
getRandomChinese(-5);
getRandomChinese(14);