"use strict";

const docQS = function (selector) {
  return document.querySelector(selector);
};
const docQSA = function (selector) {
  return document.querySelectorAll(selector);
};

const beansModal = docQS(".beans-modal");
const cheeseModal = docQS(".cheese-modal");
const toastModal = docQS(".toast-modal");
const overlay = docQS(".overlay");
const btnCloseModal = docQS(".close-modal");
const btnsOpenModal = docQSA(".show-modal");

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click");
}
