const quotes = [
	{
		quote:"Avoiding danger is no safer in the long run than outright exposure. The fearful are caught as often as the bold.",
		author:"Helen Keller",
	},
	{
		quote:"Passion kept one fully in the present, so that time became a series of mutually exclusive 'nows.'",
		author:"Sue Halpern",
	},
	{
		quote:"I don't think about risks much. I just do what I want to do. If you gotta go, you gotta go.",
		author:"Lillian Carter",
	},
	{
		quote:"Once you agree upon the price you and your family must pay for success, it enables you to ignore the minor hurts, the opponent's pressure, and the temporary failures.",
		author:"Vincent Lombardi",
	},
	{
		quote:"Nothing great in the world has been accomplished without passion.",
		author:"Georg Wilhelm",
	},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


//random 0~1 사이 수 랜덤
//round 반올림
//ceil 무조건 올림
//floor 내림

//paseFloat 문자를 실수로 변환
//paseInt 문자를 정수로 변환

