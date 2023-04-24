function slideshow() {
    const sliderrrr = document.querySelector('#container-pc');
    let sliderWidthhhhh = sliderrrr.offsetWidth / 2;
    const sliderlisttttt = document.querySelector('#ul_pc');
    let itemsssss = sliderlisttttt.querySelectorAll('#li_pc').length -2 ;
    let counts = 1;
    
    window.addEventListener('resize', function() {
      sliderWidthhhhh = sliderrrr.offsetWidth;
    });
    
    function abc() {
      if(counts > 1) {
        counts = counts - 2;
        sliderlisttttt.style.left = '-' + counts * sliderWidthhhhh + 'px';
        counts++;
      }else if(counts == 1) {
        counts = itemsssss - 1;
        sliderlisttttt.style.left = '-' + counts * sliderWidthhhhh + 'px';
        counts++;
      }
      
    }
    function xyz() {
      if(counts < itemsssss) {
        sliderlisttttt.style.left = '-' + counts * sliderWidthhhhh + 'px';
        counts++;
        
      }else if(counts == itemsssss) {
        sliderlisttttt.style.left = '0px';
        counts = 1;
        
      }
    }
    prev_pc.addEventListener('click', abc);
    next_pc.addEventListener('click', xyz);
    
  }slideshow();

