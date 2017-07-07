let largeimage = document.createElement('img');
let websites= document.querySelector('.websites');

websites.appendChild(largeimage);



images.forEach(function (image) {

	 image.onmousemove =function hover(event){
	   let img = event.target;
	   largeimage.src = img.src;
	}

})