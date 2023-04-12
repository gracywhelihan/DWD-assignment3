
let number = 205;
//  let url =`https://api.isevenapi.xyz/api/iseven/${number}`
let url =`https://api.math.tools/numbers/pi`
let pi;

function getData(){
	const options = {
		method: 'GET',
		headers: {
			// 'X-RapidAPI-Key': 'your-rapidapi-key',
			// 'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
		},
	};
	fetch(
		url,
		options
	)
		.then(response => response.json())
		.then(response => {
      pi = response.cotents.result;
      console.log(pi);
      document.getElementById("pi").innerHTML = pi;
    })
		.catch(err => console.error(err));
  }

console.log(pi);