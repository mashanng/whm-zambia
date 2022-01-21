

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

/*---------------contact us ---------*/

$('.contact-form').find('.form-control').each(function() {
    var targetItem = $(this).parent();
    if ($(this).val()) {
      $(targetItem).find('label').css({
        'top': '10px',
        'fontSize': '14px'
      });
    }
  })
  $('.contact-form').find('.form-control').focus(function() {
    $(this).parent('.input-block').addClass('focus');
    $(this).parent().find('label').animate({
      'top': '10px',
      'fontSize': '14px'
    }, 300);
  })
  $('.contact-form').find('.form-control').blur(function() {
    if ($(this).val().length == 0) {
      $(this).parent('.input-block').removeClass('focus');
      $(this).parent().find('label').animate({
        'top': '25px',
        'fontSize': '18px'
      }, 300);
    }
  })