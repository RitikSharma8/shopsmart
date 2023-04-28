function Slider() {
    const sliderr = document.querySelector('#container-electronic');
    let sliderWidth = sliderr.offsetWidth / 2;
    const sliderlist = document.querySelector('#ul_elec');
    let itemss = sliderlist.querySelectorAll('#li_elec').length -2 ;
    let count = 1;
    
    window.addEventListener('resize', function() {
      sliderWidth = sliderr.offsetWidth;
    });
    
    function prev() {
      if(count > 1) {
        count = count - 2;
        sliderlist.style.left = '-' + count * sliderWidth + 'px';
        count++;
      }else if(count == 1) {
        count = itemss - 1;
        sliderlist.style.left = '-' + count * sliderWidth + 'px';
        count++;
      }
      
    }
    function next() {
      if(count < itemss) {
        sliderlist.style.left = '-' + count * sliderWidth + 'px';
        count++;
        
      }else if(count == itemss) {
        sliderlist.style.left = '0px';
        count = 1;
        
      }
    }
    prev_elec.addEventListener('click', prev);
    next_elec.addEventListener('click', next);
    
  }
  
  Slider();







  function Sliderpc() {
    const sliderrr = document.querySelector('#container-pc');
    let sliderWidthpc = sliderrr.offsetWidth / 2;
    const sliderlistpc = document.querySelector('#ul_pc');
    let itemspc = sliderlistpc.querySelectorAll('#li_pc').length -2 ;
    let countpc = 1;
    
    window.addEventListener('resize', function() {
        sliderWidthpc = sliderrr.offsetWidth;
    });
    
    function prev_pcslide() {
      if(countpc > 1) {
        countpc = countpc - 2;
        sliderlistpc.style.left = '-' + countpc * sliderWidthpc + 'px';
        countpc++;
      }else if(countpc == 1) {
        countpc = itemspc - 1;
        sliderlistpc.style.left = '-' + countpc * sliderWidthpc + 'px';
        countpc++;
      }
      
    }
    function next_pcslide() {
      if(countpc < itemspc) {
        sliderlistpc.style.left = '-' + countpc * sliderWidthpc + 'px';
        countpc++;
        
      }else if(countpc == itemspc) {
        sliderlistpc.style.left = '0px';
        countpc = 1;
        
      }
    }
    prev_pc.addEventListener('click', prev_pcslide);
    next_pc.addEventListener('click', next_pcslide);
    
  }
  
  Sliderpc();


  function scrollToTop(){


    window.scrollTo({


      top:0,
    behavior:"smooth"
    })
  }