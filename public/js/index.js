// function sibiling(elem){
//   var el=[];
//   var p = elem.parentElement.children;
//   for(var i =0;i<p.length;i++) {
//    if(p[i] !== elem) a.push(p[i]);
//   }
//   return el;
// }


var navs=document.querySelectorAll(".headline>.nav>[data-click=navs]")
// console.log(navs)
for(var nav of navs){
  nav.onclick=function(){
    var items=this.parentNode.children;
    for(var item of items){
      item.classList.remove("active")
      // nav.classList.remove('active')
      // console.log(item)
    }
    this.classList.add('active')
    var id=this.getAttribute('data-id')
    // console.log(this.getAttribute('data-id'))
    var div=document.getElementById(id)
    console.log(id,div)
    var actives=document.getElementById(id).parentElement.children;
    for(var active of actives){
      active.style.display='none'
    }
    div.style.display='flex'
  }
}