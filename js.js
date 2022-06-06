function reverse() {
  var phrase = document.getElementById("phrase").value;
  var filter = document.getElementById("filter").value;

  arrPhrase = phrase.split(" ");
  arrFilter = filter.split(" ");

  // code to print backwards

  var sentence = "";
  arrToPrint = [];
  countFilter = 0;
  arrFilter.forEach((item) => {
    arrPhrase.forEach((element) => {
      if (element.search(item) !== -1) {
        // filter will remove any element that isnt equal to the search term
        arrToPrint = arrPhrase.filter((i) => i !== element);
        // everytime something is filtered the count increases
        countFilter++;
      } else {
        arrToPrint = arrPhrase;
      }
    });
  });

  // how to print contents of an array backwords
  for (let i = arrToPrint.length - 1; i >= 0; i--) {
    sentence += "<span>" + arrToPrint[i] + "</span> ";
  }

  document.getElementById("words").innerHTML = sentence;
  document.getElementById("count").innerHTML =
    countFilter + "word(s) filtered out";
}
