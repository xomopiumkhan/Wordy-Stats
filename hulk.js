const input = document.querySelector(".txtarea");
var displayWord = document.querySelector(".display-word");
var displayChar = document.querySelector(".display-char");
var displaySentence = document.querySelector(".display-sentence");
var displayPara = document.querySelector(".display-para");
var displayRTime = document.querySelector(".display-rtime");
var displaySTime = document.querySelector(".display-stime");

input.addEventListener("input", function(){
	displayChar.innerHTML = input.value.length;
	displayWord.innerHTML = input.value.split(" ").length;


//sentence count start
	var array = input.value.split(". ");
	displaySentence.innerHTML = array.length - 1;
//sentence count end


//Paragrah Count Starts
	var para = input.value.split(/\n/g);
	var fil2 = para.filter(function(value){
		return value === '';
	})
	displayPara.innerHTML = para.length - fil2.length;
//Paragrah Count Ends


//Reading Time
	var numberOfWords = input.value.split(" ").length;
	var rMinutes = (numberOfWords / 200).toFixed(0);
	var rSeconds = Math.abs((((numberOfWords / 200) - rMinutes)*100).toFixed(0))
	displayRTime.innerHTML = rMinutes + " min " + rSeconds + " sec";
//Reading Time

//Reading Time
	var sMinutes = (numberOfWords / 175).toFixed(0);
	var sSeconds = Math.abs((((numberOfWords / 200) - sMinutes)*100).toFixed(0))
	displaySTime.innerHTML = sMinutes + " min " + sSeconds + " sec";
//Reading Time

/*const occurrences = (input.value.split(" ")).reduce(function (acc, curr) {
  return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc

}, {});

  console.log(acc[curr] ? ++acc[curr] : acc[curr] = 1, acc)*/

  function myhg(istrue) {
  	return(5 ? '20' : '30')
  }
  console.log(myhg(4))

})

	



