var express = require('express');
var router = express.Router();


const pageContent = {
	'about':{
			title: 'About Us',
			content: 'This is the about us page boi'
	},
	'contact':{
		title: 'Contact Us',
		content: `
				<form>
					<input type="text" name="name" placeholder="Your Name" />
					<br><br>
					<input type="text" name="email" placeholder="Email" />
					<br><br>
					<textarea name="message" rows="4" cols="50" maxlength="1000"></textarea>
					<br><br>
					<input type="submit" value="Submit">
				</form>
				`
	},
	'404':{
		title: 'Page Not Found',
		content: 'If this was a page, this is where the content would be'
	}
}




/* GET users listing. */
router.get('/:pageHandle', function(req, res, next) {
	//console.log(pageContent[req.params.pageHandle])
  if(pageContent[req.params.pageHandle]){
	res.send(pageContent[req.params.pageHandle]);
  } else {
	  res.send(JSON.stringify(pageContent['404']));
  }
  
});

module.exports = router;
