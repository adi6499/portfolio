let table = document.querySelector(".table")
let links = [
    {
        
        link:"https://adi6499.github.io/uicolor/",
        name:"UI COLORS",
    },
    {
        
        link:"https://adi6499.github.io/colorgenerator/",
        name:"COLOR GENERATOR",
    },
    {
        
        link:"https://adi6499.github.io/slider/",
        name:"SLIDER",
    },
    {
        
        link:"https://adi6499.github.io/tabs/",
        name:"TABS",
    },
    {
        
        link:"https://adi6499.github.io/menucard/",
        name:"MENU CARD",
    },
    {
        
        link:"https://adi6499.github.io/birthdaycards/",
        name:"BIRTHDAY CARDS",
    },
    {
        
        link:"https://adi6499.github.io/weatherapp/",
        name:"WEATHER APP",
    },
    {
        
        link:"https://adi6499.github.io/timing/",
        name:"TIMING",
    },
    {
        
        link:"https://adi6499.github.io/googlekeep/",
        name:"GOOGLE KEEP",
    },
    {
        
        link:"https://adi6499.github.io/mouseevent/",
        name:"MOUSE EVENT",
    },
    {
        
        link:"https://adi6499.github.io/counter/",
        name:"COUNTER",
    },
  
    


]

links.forEach((linked,i)=>{
    let {link,name} = linked
    table.innerHTML +=`
    <tr>
    <td>${i}</td>
    <td>  ${name}   </td>
    <td><a href=${link} target="_blank">${name}</a> </td>
    </tr>
                    
                        `
})
   
     
   
let card= document.querySelector(".card")
let previous = document.querySelector("#previous")
let next = document.getElementById("next")
let i=0
next.addEventListener("click",()=>{
card.style.transform=`rotateY(${i}deg)`
    i+=90

  
})
previous.addEventListener("click",()=>{
    card.style.transform=`rotateY(${i}deg)`
    i-=90;
})