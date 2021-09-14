document.querySelector('.open-search').addEventListener('click', function () {
  if (this.classList.contains('search-opened')) {
    console.log(this)
    this.classList.remove('search-opened')
  } else {
    this.closest('search').classList.add('search-opened')
  }
})
