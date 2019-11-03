$('.about-btn').on('click',function(event){
    event.preventDefault();
    window.location.href = '#about';
})

$('.page-links').on('click', 'li', function(){
    console.log(this.getAttribute('data-scroll'));
})