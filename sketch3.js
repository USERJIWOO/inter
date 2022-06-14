const headerTag = document.querySelector("header")

const imgTag= document.querySelector("div.ximg")
console.log('imgTag')
const imgTag2= document.querySelector("div.ximg2")

document.addEventListener("scroll",function(){

	const pixels=window.scrollY;

	if (pixels >= headerTag.getBoundingClientRect().height){
		headerTag.classList.add("scrolled");
	}
	 else{
		headerTag.classList.remove("scrolled")
	}
})


const h3Tags = document.querySelectorAll("h3")
const h2Tags = document.querySelectorAll("h2")
const pTags = document.querySelectorAll("p")

document.addEventListener("scroll",function(){

h3Tags.forEach(tag=>{
	const tagTop = tag.getBoundingClientRect().top;
	const tagBottom = tag.getBoundingClientRect().bottom;

	if (tagTop < window.innerHeight && tagBottom > 0){
		tag.style.animation = "fadeIn 1s 0.5s both"
	}else{
		tag.style.animation = "0";
	}})

h2Tags.forEach(tag=>{
	const tagTop = tag.getBoundingClientRect().top;
	const tagBottom = tag.getBoundingClientRect().bottom;

	if (tagTop < window.innerHeight && tagBottom > 0){
		tag.style.animation = "fadeIn 1s 0.25s both"
	}else{
		tag.style.animation = "0";
	}})

pTags.forEach(tag=>{
	const tagTop = tag.getBoundingClientRect().top;
	const tagBottom = tag.getBoundingClientRect().bottom;

	if (tagTop < window.innerHeight && tagBottom > 0){
		tag.style.animation = "fadeIn 1s 0.55s both"
	}else{
		tag.style.animation = "0";
	}})

const viewportMid = window.innerHeight/2;

let imgTagTop = imgTag.getBoundingClientRect().top;
const imgTagMid = imgTagTop + imgTag.getBoundingClientRect().height/2;
let imgTagBottom = imgTag.getBoundingClientRect().bottom;

const distance = viewportMid - imgTagMid;


	if (imgTagTop < window.innerHeight && imgTagBottom > 0){
		imgTag.style.transform = `translateX(${-distance}px)`
	}else{
		imgTag.style.animation = "0";
	}



})



