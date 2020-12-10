var FatalityRate = 0;
var RecoveryRate = 0;
var maxNewCase = 0;
var newCaseData = [];

const getData = () => 
{
	const fetchPromise = fetch('https://sheets.googleapis.com/v4/spreadsheets/1dhd1FU0VmBB0DnqCyM7X2VEpONIWf8MkNJcYklJG-WY/values/Sheet1',
	{
		headers:	{
			"Accept" : "application/json",
		},
	});

	const streamPromise = fetchPromise.then((response) => response.json());
	
	streamPromise.then((j) => console.log(j);

}

window.addEventListener('load', (event) => {
	getData();
});