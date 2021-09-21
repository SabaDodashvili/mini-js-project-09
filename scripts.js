const ball = document.querySelector('.container__ball');
const discountItems = document.querySelectorAll('.discounts__item');

ball.addEventListener('dragstart', dragStart);
ball.addEventListener('dragend', dragEnd);

for (const discountItem of discountItems) {
  discountItem.addEventListener('dragover', dragOver);
  discountItem.addEventListener('dragenter', dragEnter);
  discountItem.addEventListener('dragleave', dragLeave);
  discountItem.addEventListener('drop', dragDrop);
}

function dragStart(e) {
  e.target.classList.add('hold');
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
}

function dragEnd(e) {
  e.target.className = 'container__ball';
}

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.target.classList.add('hovered');
}
function dragLeave(e) {
  e.target.classList.remove('hovered');
}
function dragDrop(e) {
  e.target.append(ball);
  setTimeout(() => {
    e.target.classList.add('selected');
  }, 100);
}
