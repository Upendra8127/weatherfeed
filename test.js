var promise= new Promise(function(resolve,reject)
{
	var x=2
	var y=0
	if(x>y)
		resolve(x/y);
	if(x<y)
		reject("reject has been invoked ");
})


promise.then((msg)=>{
	console.log(msg);
						}	
	 					,(error)=>{
	 	console.log( error);
	  })
//.catch(function(showError)
	 // {
	 // 	console.log(showError);
	 // })