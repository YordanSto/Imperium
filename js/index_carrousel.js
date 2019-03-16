window.onload = function () {
  
var mijnSlider2 = new Siema({
    selector: '.maanden-container'
  });
var mijnSlider = new Siema({
    selector: '#maart',
    perPage: 3,
    loop: true
  });
var mijnSlider3 = new Siema({
    selector: '#april',
    perPage: 3,
    loop: true,
  });
  document.getElementsByClassName('vorigemaand')[0].onclick = function(){
    mijnSlider2.prev(1);
  };
  document.getElementsByClassName('volgendemaand')[0].onclick = function(){
    mijnSlider2.next(1);
  };
  document.getElementsByClassName('links')[0].onclick = function(){
    mijnSlider.prev(1);
    mijnSlider3.prev(1);

  };
  document.getElementsByClassName('rechts')[0].onclick = function(){
    mijnSlider.next(1);
    mijnSlider3.next(1);

  };

  
};