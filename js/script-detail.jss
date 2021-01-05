var count = 0;

function up() {
	if (count < 10) {
		count++;
		document.getElementById('up').innerHTML = count;
	}
}	
function down() {
	if (count > 0) {
		count--;
		document.getElementById('up').innerHTML = count;
	}
}



