class Loader {
  static displayLoading(loader) {
    loader.setAttribute('class', 'display');
    // to stop loading after some time
    setTimeout(() => {
      loader.classList.remove('display');
    }, 50000);
  }

  static hideLoading(loader) {
    loader.classList.remove('display');
  }
}

export default Loader;
