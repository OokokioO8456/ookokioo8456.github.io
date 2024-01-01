// DOM
const day = document.querySelector('.day h2')
const hour = document.querySelector('.hour h2')
const minute = document.querySelector('.minute h2')
const second = document.querySelector('.second h2')

const main = document.querySelector('main')
const wrapper = document.querySelector('.wrapper')

// const currentTime = new Date().getTime()
const targetTime = new Date("2025/01/01 00:00:00").getTime()

const updateTime = () =>{
    let currentTime = new Date().getTime()
    let timeSub = targetTime-currentTime
    let d = Math.floor(timeSub/1000/60/60/24)
    let h = Math.floor(timeSub/1000/60/60)%24
    let m = Math.floor(timeSub/1000/60)%60
    let s = Math.floor(timeSub/1000)%60

    // console.log(d,h,m,s);
    // console.log(Math.ceil(d));
    // console.log(Math.floor(d));

    day.innerHTML = d
    hour.innerHTML = h
    minute.innerHTML = m
    second.innerHTML = s
}

setInterval(updateTime,1000)

const afterLoading = new Promise((res,rej)=>{
    setTimeout(function(){
        wrapper.remove()
        res()
    },2500)
})

afterLoading.then(()=>{
   main.classList.remove('hidden')
})