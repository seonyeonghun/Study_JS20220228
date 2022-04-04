// 1. 첫번째 .item에 .active를 추가해서 1번이 먼저 보이게
const carouselWrap = document.querySelector(".carousel-wrap") 
const carousel = document.querySelector("#carousel")
const firstSlide = carousel.querySelector(".item:first-child")
firstSlide.classList.add("active")

// setTimeout() vs clearTimeout() : 정해진 시간 후 실행
// setInterval()  vs  clearInterval() : 매 시간마다 실행
function slide() {
	// 사진을 계속 바꾸게 하는 코드
	const currentSlide = document.querySelector(".active")
	if (currentSlide) {
		currentSlide.classList.remove("active")
		const nextSlide = currentSlide.nextElementSibling;
		if (nextSlide) {
			nextSlide.classList.add("active")
		} else {
			firstSlide.classList.add("active")
		}
	}
}
const intervalID = setInterval(slide, 3000); // 3초마다 slide 함수를 호출
// 취소 단추를 누르면 clearInterval() 처리하면 캐러셀 멈춤

carouselWrap.addEventListener("mouseenter",holdCarousel)
//carouselWrap.addEventListener("mouseleave", function(){
//	intervalID = setInterval(slide, 3000);
//})

function holdCarousel(){
	clearInterval(intervalID)
}












