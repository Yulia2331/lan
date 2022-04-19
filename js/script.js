
document.addEventListener("DOMContentLoaded", function() {

window.addEventListener('load', () => {
  const screenWidth = getComputedStyle(document.querySelector('body')).width;
   doSmthIfEqual(screenWidth);
})

window.addEventListener('resize', () => {
  const screenWidth = getComputedStyle(document.querySelector('body')).width;
  doSmthIfEqual(screenWidth);
});

function doSmthIfEqual(size) {
  try{
  let num = Number(size.replace('px',""));
  const navLink = document.querySelectorAll('.page-nav__link'),
  pageNav = document.querySelector('.page-nav'),
  navSelect = document.querySelector('.page-nav__select'),
  navSelectBody = navSelect.querySelector('.select__body');
   if (num < 1120) {
      navLink.forEach((i) => {
        i.classList.add('select__item');
        navSelectBody.append(i);
      }); 
  } else {
      navLink.forEach((i) => {
        i.classList.remove('select__item');
        pageNav.append(i);
      }); 
  }
} catch (e) {}
}



//   const mediaQuery = window.matchMedia('(max-width: 688px)');

//   try{
//   const evCardPer = document.querySelector('.main-events'),
//   appBlock = document.querySelector('.main-events__sm-slider'),
//   evCard = evCardPer.querySelectorAll('.picture-card');
//   if(mediaQuery.matches){
//       evCard.forEach((i) => {
//         appBlock.append(i);
//       });    
//   }
// } catch (e) {}

    try{
    var $slider = $('.slider');
    var $paging = $('.slider-nav');

  $slider.each(function( index ) {

    $slider.eq(index).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
     
        var i = (currentSlide ? currentSlide : 0) + 1;
        $paging.eq(index).html(i + '<span class="slider-nav__count"></span>' + '/' + slick.slideCount + '</span>');
});
  });

  $('.proj-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 1,
    arrows: true,
    responsive: [
      {
          breakpoint: 1120,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 688,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
  ]
  });
 
  $('.main-events__sm-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  });

      $('.three-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 1,
        arrows: true,
        responsive: [
          {
              breakpoint: 1120,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 688,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
      ]
      });

      $('.two-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 1,
        arrows: true,
        responsive: [
          {
              breakpoint: 688,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
      ]
      });
      $('.slider-two-rows').slick({
        infinite: true,
        slidesPerRow: 3,
        rows: 2,
        arrows: true,
        responsive: [
          {
              breakpoint: 1120,
              settings: {
                slidesPerRow: 2,
              }
            },
            {
              breakpoint: 520,
              settings: {
                slidesPerRow: 1,
              }
            }
      ]
      });

    } catch (e) {}
    try{
      const selectHeader = document.querySelectorAll('.select__header'),
          selectItem = document.querySelectorAll('.select__item');
    
          document.addEventListener('click', (e) => {
                      if (e.target.classList.contains('select__header')) {
                          e.target.closest('.select').classList.remove('is-active');
                      }  else {
                           document.querySelectorAll('.select').forEach((i) => {
                              i.classList.add('is-active');
                          });
                      }
          });
    
          selectItem.forEach((item) => {
              item.addEventListener('click', selectChoose)
          });
    
          function selectChoose() {
              const text = this.innerText,
              select = this.closest('.select'),
              currentText = select.querySelector('.select__current');
          currentText.innerText = text;
          select.classList.add('is-active');
          }
        } catch (e) {}
          try{
            const ac = document.querySelectorAll('.accordion__header');
    
        ac.forEach((i) => {
          i.addEventListener('click', (e) => {
              e.preventDefault();
              let self = e.target.closest('.accordion');
              let selfTarg = self.querySelector('.accordion__body');
              selfTarg.classList.toggle('hide');
              ac.forEach((i) => {
                let per = i.closest('.accordion');
                let accBody = per.querySelector('.accordion__body');
                if(i !== e.target) {
                  accBody.classList.add('hide');
                }
               })
                $('.slick-slider').slick('setPosition');
                i.scrollIntoView({behavior: "smooth"});
            })
        })
          } catch (e) {}

          try{
          const burgerTrig = document.querySelector('.burger-menu__trig'),
          burger = document.querySelector('.burger-menu'),
          burgerClose = document.querySelector('.burger-menu__close');

          burgerTrig.addEventListener('click', (e) => {
            e.preventDefault();
            burger.classList.remove('hide');
            document.body.style.overflow = 'hidden';
          })

            burgerClose.addEventListener('click', (e) => {
              e.preventDefault();
              burger.classList.add('hide');
              document.body.style.overflow = ''; 
            })
          } catch (e) {}
          try{

            const tabHead = document.querySelectorAll('.tab-head__item'),
            backLink = document.querySelector('.burger-menu__back'),
            tabBody = document.querySelectorAll('.tab-body__item');

            tabHead.forEach((i) => {
              i.addEventListener('click', (e) => {
                try{
                  let per = i.closest('.burger-menu__item'),
                  child = per.querySelector('.tab-body__item');
                  if(per.contains(child)){
                    child.classList.remove('hide');
                    backLink.classList.remove('hide');
                    tabHead.forEach((i) => {
                        i.classList.add('hide');
                    })
                  }
                } catch (e) {}
              })
            })

            backLink.addEventListener('click', (e) => {
              e.preventDefault();
              tabHead.forEach((i) => {
                i.classList.remove('hide');
              })
              tabBody.forEach((i) => {
                i.classList.add('hide');
              })
              backLink.classList.add('hide')

            })
          } catch (e) {}

  });
