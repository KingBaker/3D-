const book = document.querySelector('.book');
const pages = document.querySelectorAll('.page');
let currentPage = 0;

book.addEventListener('click', () => {
  currentPage++;
  if (currentPage >= pages.length) {
    currentPage = 0;
  }
  pages.forEach((page, index) => {
    if (index === currentPage) {
      page.style.transform = 'rotateY(0deg)';
    } else if (index === currentPage - 1 || (currentPage === 0 && index === pages.length - 1)) {
      page.style.transform = 'rotateY(-180deg)';
    } else {
      page.style.transform = 'rotateY(180deg)';
    }
  });
});
