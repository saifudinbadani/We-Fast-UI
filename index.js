const modalClose = document.querySelector(".modal-close");
const modal = document.querySelector('.modal');
const modalShow = document.querySelector('.modal-show');


const handleModalClose = () => {
        modal.style.display = 'none'
}
const handleModalShow = () => {
    modal.style.display = 'block'
  }

modalClose.addEventListener('click' , handleModalClose)  
modalShow.addEventListener('click', handleModalShow)

