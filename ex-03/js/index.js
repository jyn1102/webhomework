function fontRed() {
    let ele=document.querySelector("li:first-of-type")
    //let ele = document.getElementById("p1");
    ele.addEventListener("click",function(){
        //this.style.color = "red";
        this.style.color = "red"
    })  
}
fontRed();

function format() {
    var date = new Date()
    var yyyy = date.getFullYear()
    var mm = date.getMonth()
    var dd = date.getDate()
    let dt = document.querySelector("#date")
    let ele = document.querySelector("li:nth-child(2)")
    ele.addEventListener("click",function(){
        dt.innerHTML= yyyy+"-"+mm+"-"+dd 
    })
}
format()

function addClass() {
    let ele = document.querySelector("li:nth-child(3)")
    ele.addEventListener("click",function(){
        let lis = document.querySelectorAll("li")
    
        for(let i = 0; i<lis.length; i++){
            // addClass("fn-active",lis[i])  no
            // lis[i].addClass("fn-active")   no
            lis[i].classList.add("fn-active")
        }
        console.log(111)
    });
}
addClass()

function deleteOne() {
    let p4 = document.querySelector("li:nth-child(4)")
    p4.addEventListener("click",function(){
        let p8 = document.querySelector("li:nth-child(8)")
        if(p8 !== null){
            p8.parentNode.removeChild(p8)
        }
    })
    
}
deleteOne()

function newWindow() {
    let p5 =document.querySelector("li:nth-child(5")
    p5.addEventListener("click",function(){
        window.open('http://www.taobao.com')
    })
        
}
newWindow()

function addEle() {
    let p6 = document.querySelector("li:nth-child(6)")
    p6.addEventListener("click",function(){
        let p9 = document.createElement("li")
        p9.innerText = "p9"
        let ul = document.querySelector("ul")
        ul.appendChild(p9)

    })
}
addEle()

function alertLi() {
    let li = document.querySelectorAll("li")
    for (var i = 0, len = li.length; i < len; ++i) {
    
        li[i].index = i +1
        li[i].addEventListener("click",function(){
            var index = this.index
            confirm("序号是"+index) 
     
         })
        
      }
    }
alertLi()

function setWidths() {
    let p7 = document.querySelector("li:nth-child(7)")
    p7.addEventListener("click",function(){
        let div = document.querySelector(".m-box")
        div.style.width=(window.screen.availWidth)+"px"

    })
}
setWidths()








 


