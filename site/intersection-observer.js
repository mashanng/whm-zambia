

window.addEventListener('DOMContentLoaded', setup);

function setup (){
    const options = {
        rootMargin:' 0px 0px -100px 0px'
    };
    const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            } else {
               return;
            }
        });
    },options);



    const h3 = document.querySelector('h3');
    observer.observe(h3);

    const img = document.querySelectorAll('img');
   img.forEach(img=> observer.observe(img));

    const paras = document.querySelectorAll('p');
    paras.forEach(p=>observer.observe(p));
}
