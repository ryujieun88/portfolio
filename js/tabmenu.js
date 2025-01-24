$(function(){
    $('.gallery-collection li').click(function(){
    $('.popup').show()
     $('.popup .item').hide()
 
     let idx = $(this).index() //클릭한 애 번호
     // console.log(idx)
     $('.popup .item').eq(idx).show()
    })
    $('.popup').click(function(){
        $(this).hide()
    })
 })