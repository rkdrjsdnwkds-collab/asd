// 버튼을 누른 횟수를 화면에 표시합니다.
let clickCount = 0;
const button = document.getElementById("hello-button");
const message = document.getElementById("message");
button.addEventListener("click", function () {
  clickCount += 1;
  message.textContent = `축하합니다! 버튼을 ${clickCount}번 눌렀어요 🎉`;
});
