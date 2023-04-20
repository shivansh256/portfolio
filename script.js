
// $(document).ready(function(){
//     $(window).scroll(function(){
       
//         if(this.scrollY > 20){
//             $('.navbar').addClass("sticky");
//         }else{
//             $('.navbar').removeClass("sticky");
//         }
        
        
//         if(this.scrollY > 500){
//             $('.scroll-up-btn').addClass("show");
//         }else{
//             $('.scroll-up-btn').removeClass("show");
//         }
//     });

// const temp=document.querySelector(".mynav")

// const navscroll=(e)=>{
//     if(e.pageY>20)
//     {
//         temp.addClass("stickya")
//     }
//     else{
//         temp.removeClass("stickya")
//     }

// }

// document.addEventListener("onscroll",navscroll)

const text=document.getElementById("changing");

const textLoad=()=>{
    setTimeout(()=>{
      text.textContent="Engineer";
      text.className="text sec-text sec-texteng";
        
    },0)
    setTimeout(()=>{
        text.textContent="Web Developer";
        text.className="text sec-text sec-textwd";
    },4000)
    setTimeout(()=>{
        text.textContent="Competitive Programmer";
        text.className="text sec-text sec-textcp";
    },8000)
    setTimeout(()=>{
        text.textContent="Learner";
        text.className="text sec-text sec-textlearn";
    },12000)
}

textLoad();
setInterval(textLoad,16000);

const textb=document.getElementById("changingb");

const textLoadb=()=>{
    setTimeout(()=>{
      textb.textContent="Engineer";
      textb.className="textb secb-text secb-texteng";
        
    },0)
    setTimeout(()=>{
        textb.textContent="Web Developer";
        textb.className="textb secb-text secb-textwd";
    },4000)
    setTimeout(()=>{
        textb.textContent="Competitive Programmer";
        textb.className="textb secb-text secb-textcp";
    },8000)
    setTimeout(()=>{
        textb.textContent="Learner";
        textb.className="textb secb-text secb-textlearn";
    },12000)
}

textLoadb();
setInterval(textLoadb,16000);
