/*const faders=document.querySelectorAll('.about-section');

const appearOptions={
    threshold:1,
    rootMargin:"0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry=>{
        if (!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
},appearOptions);

faders.forEach(fader=>{
    appearOnScroll.observe(fader);
});    */

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

    const h2 = document.querySelector('h2');
    observer.observe(h2);

    const h3 = document.querySelector('h3');
    observer.observe(h3);

    const img = document.querySelectorAll('img');
   img.forEach(img=> observer.observe(img));

    const paras = document.querySelectorAll('p');
    paras.forEach(p=>observer.observe(p));
}
