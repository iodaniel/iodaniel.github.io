const lazyImagen = document.querySelectorAll('[data-src]');

function preLoadImagen(img){
    const src = img.getAttribute('data-src');
        if(!src){
            return;
        }
    img.src=src;
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
  };
  

const imageObserver = new IntersectionObserver((items,
imageObserver) => {
    items.forEach((items) => {
          if(!items.isIntersecting){
              return;
          }else{
              preLoadImagen(items.target);
              imageObserver.unobserve(items.target);
          }
        });
    }, imgOptions);

    lazyImagen.forEach(image => {
        imageObserver.observe(image);
    });
        