'use strict'
$(document).ready(initGame);


function initGame() {
    createProjs();
    renderPortfolio();

}

function renderPortfolio() {
    var strHtmlAcc = `<div class="container">
     <div class="row">
       <div class="col-lg-12 text-center">
         <h2 class="section-heading">My Projects</h2>
         <h3 class="section-subheading text-muted">Here you can see The main projects that I created</h3>
       </div>
     </div>
     <div class="row">`
    var projs = getProjs()
    var strHTML = projs.reduce(function (acc, proj) {
        var strHtml = `
           <div class="col-md-4 col-sm-6 portfolio-item" id="${proj.id}">
             <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
               <div class="portfolio-hover">
                 <div class="portfolio-hover-content">
                   <i class="fa fa-plus fa-3x"></i>
                 </div>
               </div>
               <img class="img-fluid" src="img/portfolio/${proj.id}.png" alt="">
             </a>
             <div class="portfolio-caption">
               <h4>${proj.name}</h4>
               <p class="text-muted">${proj.lables[0]}</p>
             </div>
           </div> `
        acc += strHtml;
        return acc;
    }, strHtmlAcc)
    strHTML+='</div>'
    $('#portfolio').html(strHTML);
}
