var fs = require('fs'),
	button = document.getElementsByTagName('button')[0],
	table = document.getElementById('docker')
	child = require('child_process')
	config = require('./config');


function dockerImages(){
var command = 'ssh -i '+ config.key +'  -l '+ config.user + ' ' +config.host + ' docker images';
console.log(command);
child.exec(command,
  function (error, stdout, stderr) {
	button.disabled="true";
	var rowArray = stdout.split("\n");
	for(var i=0; i<rowArray.length; i++){
		if(""!==rowArray [i]&&null!==rowArray [i]){
			var rows = table.insertRow(i);
			var cellArray = rowArray [i].split(/\s\s+/);
			for(var j=0; j<cellArray.length; j++){
				var cells = rows.insertCell(j);
				cells.id = cellArray[j];
				cells.innerHTML = cellArray[j];
			}
		}
	}
	
	console.log('stderr: ' + stderr);
    if (error !== null) {
		var errorRow = table.insertRow(0);
		var errorCell = rows.insertCell(0);
		errorCell.innerHTML="error";
    }
})};

/* document.getElementsByTagName("button")[0].onmouseover = function(){
	alert("teste");
} */