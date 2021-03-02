$(document).ready(function(){


    $('.basket_menu').click(function(){
        $('.modal').show();
        $('.input_form').hide()
    })

        $('.close').click(function(){
            $('.modal').hide()
        })





let arr = []

$.get('https://frontend-test.idaproject.com/api/product',function(data){
    data.forEach(function (item) {

           var div = $("<div></div");
            div.append(`<div class="header" > <img src="./img/price.png" alt="">  <img class="nav_basket"   data-value=${item.id}  src="./img/nav_basket.png" alt="">  </div>`);
            div.append(`<img class="lyukzak" src="https:frontend-test.idaproject.com${item.photo}">`);
            div.append(`<p> ${item.name}</p>`)
            div.append(`<h3> ${item.price} </h3>`)
            div.appendTo(".catalog_products")
            arr.push(item)
           
            $(".header").css({
                "display":"flex",
                "justify-content":"space-between"
            })

            $(".img").css({
                "display":"flex",

            })

            $('.lyukzak').css({
                "max-width":"150px",
                "display":"block",
                "margin":"auto"
                
            })

            $('div').css({
                "background-color": "#fff",
                "padding":"0px 10px"
            })

            $('.nav_basket').css({
               "cursor":"pointer"
            })

            $('.price').css({
                "position": "relative",
                "bottom": "110px",
            })


})

 
$('.nav_basket').click(function(){
$('.input_form').show()
 var dataValue = $(this).attr('data-value');
 $('.footer').hide()


   arr.forEach(function(item){
       if(+item.id === +dataValue){
            var div = $(`<div  class='modal_div'></div`);
            div.append(`<img class='basket_img' src="https:frontend-test.idaproject.com${item.photo}">`);
            div.append(`<div>${item.name}</p> ${item.price}</div>`)
            div.append(` <img class="delete_prod"  src="./img/Vector.png" alt="">`)
            div.appendTo(".modal")

          
            
           
             $('.basket_img').css({
                'width': '80px',
            })

            $('.delete_prod').css({
                'position':'absolute',
                "right":'10px'
            })

            $('.delete_prod').click(function(){
                $(this).closest('.modal_div').remove();
            })


       }
         
   })



})

})
})

 

    








