console.log('js is working')
dropDown = document.querySelectorAll('.down')
console.log(dropDown)
list = document.querySelectorAll('.list')

dropDown.forEach((drop)=>{
    drop.addEventListener('click', (e)=>{
       console.log('hi')
        })
    })



list.forEach((li)=>{
    console.log(li)

})

