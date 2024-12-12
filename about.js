var one =document.querySelectorAll('.tirer1');
var two=document.querySelectorAll('.service');
var thre =document.querySelectorAll('.ri-add-fill');
var four =document.querySelectorAll('.tirer1 h2');

one.forEach((title,index) => {
   title.addEventListener('click' ,() =>{
        var isactive =two[index].classList.contains('ActiveDescrption');

    two.forEach((desc) => {
        desc.classList.remove('ActiveDescrption');
    });
    thre.forEach((icon) => {
        icon.classList.remove('ri-subtract-line');
    });
    four.forEach((Heading) => {
        Heading.classList.remove('ActiveHeading');
    });
    if(!isactive){
        two[index].classList.add('ActiveDescrption');
        thre[index].classList.toggle('ri-subtract-line');
        four[index].classList.toggle('ActiveHeading');
    }
   })
    

})
