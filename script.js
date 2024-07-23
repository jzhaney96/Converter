function convert(conversionType) {
    const inputValue = document.getElementById("userInput").value;
    let result = 0;
    
    if (conversionType === 'milesToKm') {
      result = inputValue * 1.60934;
    } else if (conversionType === 'kmToMiles') {
      result = inputValue / 1.60934;
    } else if (conversionType === 'fToC') {
      result = (inputValue - 32) * 5 / 9;
    }
    
    document.getElementById('resultElement').innerHTML = result;
  }