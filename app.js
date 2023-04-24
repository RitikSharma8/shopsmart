// Code goes here
// Code goes here



const wishlistButtons = document.querySelectorAll('#wishlist');
var test1=document.getElementsByClassName("item_table")
const wishlistItems = [];
var food_count=document.getElementById("food-items-count")
wishlistButtons.forEach(button => {
  button.addEventListener('click', () => {
    const itemName = button.getAttribute('data-name');
    wishlistItems.push(itemName);
    food_count.innerText="Wishlist : "+ wishlistItems
    



    // elec_count.innerHTML="Whishlist : "+wishlistItems
  });
});







const xyz = document.querySelectorAll('#wishlist_elec');
const wishlistItemss_elec = [];
var elec=document.getElementById("electronic-count")
xyz.forEach(f => {
  f.addEventListener('click', () => {
    const itemName_elec = f.getAttribute('data-name');
    wishlistItemss_elec.push(itemName_elec);
    elec.innerText="Wishlist : "+ wishlistItemss_elec
    console.log(wishlistItemss_elec)
    // elec_count.innerHTML="Whishlist : "+wishlistItems
  });
});



const abc = document.querySelectorAll('#wishlist_clothing');

const wishlistItems_clothing = [];
var clothes=document.getElementById("clothing-count")
abc.forEach(i => {
  i.addEventListener('click', () => {
    const itemName_clothing = i.getAttribute('data-name');
    wishlistItems_clothing.push(itemName_clothing);
    clothes.innerText="Wishlist : "+ wishlistItems_clothing
    console.log(wishlistItems_clothing)
  });
});




const cad = document.querySelectorAll('#wishlist_household');
const wishlistItemss_house = [];
var housee=document.getElementById("household-count")
cad.forEach(g => {
  g.addEventListener('click', () => {
    const itemName_house = g.getAttribute('data-name');
    wishlistItemss_house.push(itemName_house);
    housee.innerText="Wishlist : "+ wishlistItemss_house
    console.log(wishlistItemss_house)
    // elec_count.innerHTML="Whishlist : "+wishlistItems
  });
});








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




function slide_clothing() {
  const sliderrr = document.querySelector('#container-clothing');
  let sliderWidthhh = sliderrr.offsetWidth / 2
  const sliderListtt = document.querySelector('#ul-clothing');
  let items = sliderListtt.querySelectorAll('#li-clothing').length -2 ;
  let counttt = 1;
  
  window.addEventListener('resize', function() {
    sliderWidthhh = sliderrr.offsetWidth;
  });
  
  function p_Slide() {
    if(counttt > 1) {
      counttt = counttt - 2;
      sliderListtt.style.left = '-' + counttt * sliderWidthhh + 'px';
      counttt++;
    }else if(counttt == 1) {
      counttt = items - 1;
      sliderListtt.style.left = '-' + counttt * sliderWidthhh + 'px';
      counttt++;
    }
    
  }
  function n_Slide() {
    if(counttt < items) {
      sliderListtt.style.left = '-' + counttt * sliderWidthhh + 'px';
      counttt++;
      
    }else if(counttt == items) {
      sliderListtt.style.left = '0px';
      counttt = 1;
      
    }
  }
  prev_clothing.addEventListener('click', p_Slide);
  next_clothing.addEventListener('click', n_Slide);
  
}


  slide_clothing();

// HouseHold Slider

function household_slide() {
  const sliderHouse = document.querySelector('#container-household');
  let sliderWidthHouse = sliderHouse.offsetWidth / 2
  const sliderListHouse = document.querySelector('#ul-household');
  let items_house = sliderListHouse.querySelectorAll('#li-household').length -2 ;
  let num = 1;
  
  window.addEventListener('resize', function() {
    sliderWidthHouse = sliderHouse.offsetWidth;
  });
  
  function housep_Slide() {
    if(num > 1) {
      counttt = num - 2;
      sliderListHouse.style.left = '-' + num * sliderWidthHouse + 'px';
      num++;
    }else if(num == 1) {
      num = items_house - 1;
      sliderListHouse.style.left = '-' + num * sliderWidthHouse + 'px';
      num++;
    }
    
  }
  function housen_Slide() {
    if(num < items_house) {
      sliderListHouse.style.left = '-' + num * sliderWidthHouse + 'px';
      num++;
      
    }else if(count == items_house) {
      sliderListHouse.style.left = '0px';
      num = 1;
      
    }
  }
  prev_household.addEventListener('click', housep_Slide);
  next_household.addEventListener('click', housen_Slide);
  
}


  household_slide();


function responsiveSlider() {
  const slider = document.querySelector('#container');
  let sliderWidth = slider.offsetWidth / 2;
  const sliderList = document.querySelector('#ul');
  let items = sliderList.querySelectorAll('#li').length -2 ;
  let count = 1;
  
  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });
  
  function prevSlide() {
    if(count > 1) {
      count = count - 2;
      sliderList.style.left = '-' + count * sliderWidth + 'px';
      count++;
    }else if(count == 1) {
      count = items - 1;
      sliderList.style.left = '-' + count * sliderWidth + 'px';
      count++;
    }
    
  }
  function nextSlide() {
    if(count < items) {
      sliderList.style.left = '-' + count * sliderWidth + 'px';
      count++;
      
    }else if(count == items) {
      sliderList.style.left = '0px';
      count = 1;
      
    }
  }
  prev.addEventListener('click', prevSlide);
  next.addEventListener('click', nextSlide);
  
}
 responsiveSlider();




// Scroll To Top

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}







