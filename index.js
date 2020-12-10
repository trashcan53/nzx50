const getData = () => 
{
	const fetchPromise = fetch('https://spreadsheets.google.com/feeds/cells/1dcZgBDx01ioeGJSABYKXCqKS9k53s7iQCavlR9D-HfY/od6/public/basic?alt=json',
	{
		headers:	{
			"Accept" : "application/json",
		},
	});

	const streamPromise = fetchPromise.then((response) => response.json());
	
	streamPromise.then((j) => showData(j));
	
}


const showData = (rawData) => { 
	for (i = 0;i<rawData.feed.entry.length;i++){
		console.log(rawData.feed.entry[i].content[1]);
	}
	
}

window.addEventListener('load', (event) => {
	getData();
});