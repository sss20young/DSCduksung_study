// script.js

var button = document.getElementById('button-addon2'); // button-addon2이라는 id값을 가진 요소를 가져와 button이라는 변수에 저장
var input = document.getElementById('input'); // input이라는 id값을 가진 요소를 가져와 input이라는 변수에 저장
var list = document.getElementById('list'); // list라는 id값을 가진 요소를 가져와 input이라는 변수에 저장

var cnt = 1; // list들의 id값을 부여하기 위해 count를 세는 변수 (li1, li2, li3 ... 이런식으로 부여할 예정)

button.addEventListener('click', clickButton); // button을 click하면 clickButton이라는 함수를 호출할 수 있도록 이벤트를 추가

function clickButton() {
	var li = document.createElement('li'); // li라는 태그를 생성해 li라는 변수에 저장
 	li.setAttribute("class", "list-group-item"); // 생성한 li에 class 속성 부여
	li.setAttribute("id", "li"+cnt); // 생성한 li에 id 속성 부여
	li.innerHTML = input.value; // 생성한 li에 input의 value값을 넣겠다.
	li.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary rm' type='button' onclick='remove("+cnt+")'>삭제</button><button style='float: right;' class='btn btn-outline-secondary md' type='button' onclick='modify("+cnt+")'>수정</button>";
  	list.appendChild(li); // list의 자식노드로 li를 추가
  	cnt++; // cnt = cnt + 1; 과 같은 코드로 cnt값을 1 증가시킴
  	input.value = ""; // input의 값을 초기화
}

// 입력 내용 삭제
function remove(cnt) {
  	var li = document.getElementById('li'+cnt);
  	list.removeChild(li); // list에서 li라는 자식노드를 제거
}

// 입력 내용 수정
function modify(cnt) {
	var li = document.getElementById('li'+cnt);
	var text = prompt("수정할 내용을 입력해주세요", li.innerText);
	if (!text || text == "" || text == " ")
		return false;
	li.innerText = text;
	li.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary rm' type='button' onclick='remove("+cnt+")'>삭제</button>";
	li.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary md' type='button' onclick='modify("+cnt+")'>수정</button>";
}

// 엔터키가 눌렸을 때 clickButton() 실행
function enterkey() {
	if (window.event.keyCode == 13) {
		 clickButton();
	}
}