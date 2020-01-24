// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint

request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send();


request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
for (var i in data)
{
var i;
var val=data[i];
for( i in val){
	


	var v =val[i];
		if(i=="flag")
		{
			console.log(i+":"+v);
		}
		
}
}
}


	



