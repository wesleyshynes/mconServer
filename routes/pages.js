var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/:pageHandle', function(req, res, next) {
	//console.log(pageContent[req.params.pageHandle])
	let data = JSON.parse(fs.readFileSync('D://node/mconServer/public/data/pages.json','utf8'))
	//console.log(data)
	if(data[req.params.pageHandle]){
		res.send(data[req.params.pageHandle]);
	} else {
		res.send(JSON.stringify(data['404']));
	}  
});

router.post('/create-page',(req,res,next)=>{
	let data = JSON.parse(fs.readFileSync('D://node/mconServer/public/data/pages.json','utf8'))
	console.log(req.body)
	data[req.body.handle] = {...req.body}
	fs.writeFileSync('D://node/mconServer/public/data/pages.json', JSON.stringify(data));
	res.send('page created/updated')
})

module.exports = router;
