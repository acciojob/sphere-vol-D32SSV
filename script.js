function volume_sphere() {
    //Write your code here
	let rad = parseFloat(document.getElementById("radius").value);

	let vol = (Math.PI *rad*rad*rad*4)/3 ;

	let update = document.getElementById("volume") ;
	update.value = vol.toFixed(4) ;  
} 

        document.getElementById('MyForm').onsubmit = function (event) {
            event.preventDefault(); // Prevent form submission
            volume_sphere();
        };

