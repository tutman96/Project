var express = require('express');
var app = express();

const xmlDocument = 
`<Person><FirstName>John</FirstName>
<LastName>Smith</LastName><Contact>
<Address><Street>1000 East St
</Street><City>Atlanta</City>
<Zip>30330</Zip><Phone><Home>
1234567890</Home><Work>1234567890
</Work></Phone></Address></Contact>
</Person>`

app.get("/xml", (req, res) => {
	res.contentType('xml').status(200).end(xmlDocument);
})

app.listen(8080);
