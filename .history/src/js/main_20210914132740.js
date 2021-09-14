document.querySelector('.open-search').addEventListener('click', function () {
    let parent = 
  if (this.classList.contains('search-opened')) {
    this.classList.remove('search-opened')
  } else {
    this.classList.add('search-opened')
  }
})
