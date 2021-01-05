
function home(){
    location.assign("index.html");
}

function bestselling(){
    location.assign("bestselling.html");
}

function newproduct(){
    location.assign("newproduct.html");
}

function category(){
	var x = document.getElementById("mySelect").value;
	switch(x){
		case "skincare":{
			location.assign("category/skincare.html");
			break;
		}
		case "makeup":{
			location.assign("category/makeup.html");
			break;
		}
		default: {
			location.assign("index.html");
			break;
		}
	}
}

function trademark(){
	var choose = document.getElementById("theSelect").value;
	switch(choose){
		case "nivea":{
			location.assign("trademark/nivea.html");
			break;
		}
		case "loreal":{
			location.assign("trademark/loreal.html");
			break;
		}
		default: {
			location.assign("index.html");
			break;
		}
	}
}
