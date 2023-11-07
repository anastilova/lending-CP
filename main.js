// Код jQuery, установливающий маску для ввода телефона элементу input
$(function () {
  $("#phone").mask("+7(999) 999-99-99");
});

// выпадающее элемента меню
function showDropdown() {
  var dropdown = document.getElementById("dropdown");
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

// прокрутка карточек ниже
function scrollToLeft() {
  const productsWrapper = document.querySelector(".products-wrapper");
  const firstItem = productsWrapper.firstElementChild;
  const lastItem = productsWrapper.lastElementChild;

  productsWrapper.removeChild(firstItem);
  productsWrapper.appendChild(firstItem);
}

function scrollToRight() {
  const productsWrapper = document.querySelector(".products-wrapper");
  const firstItem = productsWrapper.firstElementChild;
  const lastItem = productsWrapper.lastElementChild;

  productsWrapper.removeChild(lastItem);
  productsWrapper.insertBefore(lastItem, firstItem);
}

function scrollToRightt() {
  const listMultimedia = document.querySelector(".list-multimedia");
  const firstItem = listMultimedia.firstElementChild;
  const lastItem = listMultimedia.lastElementChild;

  listMultimedia.removeChild(lastItem);
  listMultimedia.insertBefore(lastItem, firstItem);
}
