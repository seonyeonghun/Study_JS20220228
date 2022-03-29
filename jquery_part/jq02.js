$(function(){
	// p.475 
	
	// $ : (모두) 찾아라~
	// .click() : 클릭 이벤트 발생시 처리할 이벤트 핸들러
	/*
		-------------- 선택자 ------------------
		1) 직접 선택자 : $("#idName"), $(".className"), $("tagName")
		2) 인접 관계 선택자
		------------- CSS 선택자 활용 ----------
		3) 탐색 선택자 : jQuery만의 탐색 메소드
	*/
	$("#b1").click(function(){
		// 아이디 선택자
		$("#pic1").hide(200); // .hide() - 숨김 메소드 vs .show() - 드러냄
	});
	$("#b2").click(function(){
		// 클래스 선택자
		$(".c1").hide("slow");
	});
	$("#b3").click(function(){
		// 태그 선택자
		$("img").hide("fast");
	});
	$("#b4").click(function(){
		$("img").show(1000); // .hide() vs .show() : 숨김 vs 드러냄
	})
	
	
})