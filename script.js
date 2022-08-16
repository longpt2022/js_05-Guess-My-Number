"use strict";

//------------- Xử lý Click Events
// - Xử lý dự kiện click nút '.check'. Nhận giá trị guess khi nhấn
// - Nếu chưa nhập số in ra lỗi "if (!guess) {}"

// trong addEventListener() function() xử lý khi có sự kiện click
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // Nếu chưa nhập số nào mà click
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";
  }
});
