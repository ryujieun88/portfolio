const items = document.querySelectorAll('.gallery-collection li')

const close = document.querySelector('button'
)

const popup = document.querySelector('.popup')

items.forEach((el, index)=>{
    el.addEventListener('mouseenter',()=>{
        el.querySelector('video').play()
    })
    el.addEventListener('mouseleave',()=>{
        el.querySelector('video').pause()
        el.querySelector('video').currentTime='0'
    })
    el.addEventListener('click',(e)=>{
        let title = el.querySelector('h3').innterText
        let text = el.querySelector('p').innerText
        let videoSrc = e.currentTarget.querySelector('video').getAttribute('src')

        popup.querySelector('.txt h2').innerText = title
        popup.querySelector('.txt p').innerText = text
        popup.querySelector('video').setAttribute('src', videoSrc)
        popup.classList.add('on')
        popup.querySelector('video').play()
    })
})

close.addEventListener('click',function(){
    popup.classList.remove('on')
    popup.querySelector(video).pause()
})

$('html,body').animate({
    scrollTop : 0
},200)
