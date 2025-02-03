

(function(){
    //텍스트 작성
    const spanEl = document.querySelector('main h2 .introduce')
    const txtarr = ['Jieun','Web Deisigner']
    console.log(txtarr)
    let index = 0; 
    let currentTxt = txtarr[index].split('')
    
    // 작성
    function writeTxt(){
        spanEl.textContent += currentTxt.shift()
    if(currentTxt.length !==0){
        //아직 출력할게 남았다
        setTimeout(writeTxt, Math.floor(Math.random()*100))
    }else {
        //출력다했다
        currentTxt = spanEl.textContent.split('')
        setTimeout(deleteTxt, 3000)
    }
    }
    //삭제
    function deleteTxt(){
        currentTxt.pop()
        spanEl.textContent = currentTxt.join('')
        if(currentTxt.length !==0){
            //덜 지워졌다
            setTimeout(deleteTxt, Math.floor(Math.random()*100))
        }else {
            //다음 문장으로 넘어가기
            index = (index + 1) % txtarr.length
            //배열에 다시 접근하여 숫자를 1 증가시켜 새로운 문장으로 가져오기
            currentTxt = txtarr[index].split('')
            writeTxt()
        }
    }
    writeTxt()
    })()

    //스크롤 발생했을 때 header 클래스 추가

const headerEl = document.querySelector('header')

window.addEventListener('scroll', function(){
    this.requestAnimationFrame(scrollCheck)
    // 좀 더 부드럽게 애니메이션 효과를 주기 위해 (jquery = animate)




    function scrollCheck(){
        let bsy = window.scrollY
        if(bsy > 0){
            //0보다 크면 스크롤 했다! active 추가
            headerEl.classList.add('active')
        }else {
            headerE1.classList.remove('active')
        }
    }
})

// 스크롤했을 때 해당영역으로 이동
// 위치값

const animationMove = function(selector){
    const targetEl = document.querySelector(selector)
    const bsy = window.scrollY //현재 브라우저 스크롤 정보
    const targetsy = targetEl.getBoundingClientRect().top + bsy //이동할 대상의 위치 정보
    // getBoundingClientRect : 엘리먼트의 크기와 뷰포트 상대적인 위치 정보
    window.scrollTo({
        top : targetsy,
        behavior : 'smooth'
})
}

//스크롤이벤트 연결시키기
const scrollMove = document.querySelectorAll('[data-animation-scroll="true"]')

for(let i = 0; i<scrollMove.length; i++){
    scrollMove[i].addEventListener('click',function(){
        const target = this.dataset.target
        animationMove(target)
    })
}



$(function(){
    $('#jieun').fullpage({
        anchors: ['page1','page2','page3','page4','page5'],
        sectionsColor: ['','','#ccc','#ddd','#eee'],
        navigation : true,
        navigationPosition : 'right',
        navigationTooltips : ['Main','About','Portfolio(개인)','Portfolio(팀)','Contact'],
        slidesNavigation : true,
        keyboardScrolling : true,
        responsiveWidth: 1000,
        normalScrollElements: ".item",
        afterLoad: function(anchorLink, index){
            console.log('현재 영역의 번호는' + index)
            if(index==6){
                alert('마지막 입니다')
            }
        }
    })
    $('.gallery-collection .private').click(function(){
    $('.popup').show()
     $('.popup .item').hide()
 
     let idx = $(this).index() //클릭한 애 번호
     // console.log(idx)
     $('.popup .item').eq(idx).show()
    })
    $('.popup').click(function(){
        $(this).hide()
    })
    $('.gallery-collection .team').click(function(){
     $('.popup1').show()
     $('.popup1 .item').hide()
 
     let idx = $(this).index() //클릭한 애 번호
     // console.log(idx)
     $('.popup1 .item').eq(idx).show()
    })
    $('.popup1').click(function(){
        $(this).hide()
    })
 })


