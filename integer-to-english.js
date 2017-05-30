/* eslint-disable */
/* 
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 2^31 - 1 (2,147,483,647)

For example,
123 -> "One Hundred Twenty Three"
12345 -> "Twelve Thousand Three Hundred Forty Five"
1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
*/

var numberToWords = function(num) {

  if (num === 0) {
    return 'Zero';
  }

    const formatNumber = (numberReversed) => {
      const result = [];
      for (let i = 0; i < numberReversed.length; i += 3) {
        let slice = numberReversed.slice(i, i + 3).reverse().join('');
        result.push(slice);
      }
      return result.reverse();
    }

    const wordifyNumber = (number, commas) => {
      let numberString = number.split('').reverse().join('');
      let result = [];
      let hundreds = numberString[2] || '0';
      let tens = numberString[1] || '0';
      let ones = numberString[0] || '0';
      let teens = false;

      if (hundreds !== '0') {
        result.push(dict.ones[hundreds] + ' Hundred');
      }

      if (tens !== '0') {
        if (tens === '1') {
          teens = true;
          result.push(dict.teens[ones]);
        } else {
          result.push(dict.tens[tens]);
        }
      }

      if (ones !== '0' && !teens) {
        result.push(dict.ones[ones]);
      }

      if (commas > 0 && result.length > 0) {
        result.push(dict.commas[commas]);
      }

      return (result.length > 0) ? result.join(' ') : false;
    }

    const dict = {
      commas: ['', 'Thousand', 'Million', 'Billion'],
      ones: ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
      tens: ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'],
      teens: ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
    };

    const result = [];
    const numberReversed = num.toString().split('').reverse();
    const numberArray = formatNumber(numberReversed);

    numberArray.forEach((number, idx) => {
      let commaPlaces = numberArray.length - idx - 1;
      let numberResult = wordifyNumber(number, commaPlaces);
      if (numberResult !== false) {
        result.push(numberResult);
      }
    });
    return result.join(' ');
};

console.log(numberToWords(1000000))