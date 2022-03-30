/* ============== 비만도 측정(BMI지수) =================
	BMI를 이용한 비만도 계산은 자신의 몸무게를 키의 제곱으로 
	나누는 것으로 공식은 kg/㎡. BMI가 18.5 이하면 
	저체중 ／ 18.5 ~ 22.9 사이면 정상 ／ 23.0 ~ 24.9 사이면 
	과체중 ／ 25.0 이상부터는 비만으로 판정.
	- https://www.oc.go.kr/health/contents.do?key=1487&
	- .prompt(message, default);
	- casting : 형변환, (1)암묵적   (2)명시적
	- 우선순위 : 산술연산자 --> *, /, %,+, -, 
*/
// 입력

// .querySelector() : CSS선택자 기준으로 선택하는 DOM Selector

// DOM 요소를 선택하는 과정!
const bmiFORM = document.querySelector("#bmi_form");
const yourHeight = bmiFORM.querySelector("#user_height"); // $("#user_height")
const yourWeight = bmiFORM.querySelector("#user_weight");
const msgField = document.querySelector("#result_msg");

// 이벤트 : 사용자가 클릭, 터치, 드래그...하는 행위
/*
	1) HTML 인라인 이벤트 :   <a href="#" onclick="alert('로그인페이지로 이동합니다')">로그인</a>
	2) 이벤트 핸들러    대상.on이벤트종류=function(){..어쩌구 저쩌구..할일..}
	3) 이벤트 리스너    대상.addEventListener("이벤트종류",핸들러메소드); 
*/
// 이벤트 핸들러 : 이벤트 발생하면, 처리하는 AGENT (1번에 1개만 처리)
// 이벤트 리스너 :                 "               (1번에 여러개 처리)

// bmiFORM에서 submit이벤트가 발생하면 bmiTest 함수를 호출해줘!
// form --> 데이터 전송 & 새로고침이 기본!!
bmiFORM.addEventListener("submit", bmiTest);

function bmiTest(e){ // e : event(=이벤트) 정보를 갖고있는 객체
	e.preventDefault(); // 이벤트 전파를 막는다! (새로고침 안되게~)	
	let height = yourHeight.value;
	let weight = yourWeight.value;
	let BMI = weight / ((height * height)/10000); // BMI 값
	let result = BMI >= 18.5 && BMI <= 22.9 ? okMsg(BMI):noMsg(BMI);
}

function okMsg(BMI){
	msgField.innerHTML = `<p>정상입니다. BMI지수는 ${BMI.toFixed(1)}kg/㎡ 입니다</p>`;
}
function noMsg(BMI){
	msgField.innerHTML = `<p>정상이 아닙니다. BMI지수는 ${BMI.toFixed(1)}kg/㎡ 입니다</p>`;
}

//document.write(yourName+", "+yourHeight+"cm, "+yourWeight+"kg");

//console.log(`BMI지수 : ${BMI}kg/㎡`);

// 소숫점 이하 첫째자리 : Math 객체 .round() , .ceil(), .floor()

// 조건비교
