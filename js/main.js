'use strict'
$(document).ready(initGame);


function initGame() {
    createProjs();
    renderPortfolio();
    $('.portfolio-link').click(onPortfolioLink);
    $('#submit').click(onContact);

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
           <div class="col-md-4 col-sm-6 portfolio-item">
             <a class="portfolio-link" data-toggle="modal" id="${proj.id}" href="#portfolioModal">
               <div class="portfolio-hover">
                 <div class="portfolio-hover-content">
                   <i class="fa fa-plus fa-3x"></i>
                 </div>
               </div>
               <img class="img-fluid rounded" src="img/portfolio/${proj.id}-thumbnail.jpg" alt="">
             </a>
             <div class="portfolio-caption">
               <h4>${proj.name}</h4>
               <p class="text-muted">${proj.lables[0]}</p>
             </div>
           </div> `
        acc += strHtml;
        return acc;
    }, strHtmlAcc)
    strHTML += '</div>'
    $('#portfolio').html(strHTML);
}

function onPortfolioLink() {
    renderModal(this.id)
}

function renderModal(id) {
    var proj=getProj(id);
    var lablesStr=proj.lables.reduce(function(acc,lable){acc+=' #'+lable;return acc},'');
    console.log(lablesStr);
    var strHtml = `
    <h2>${proj.name}</h2>
    <p class="item-intro text-muted">${proj.title}</br>Click the picture to play</p>
    <a href="${proj.url}">
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.png" alt="">
    </a>
    <p>${proj.desc}</p>
<ul class="list-inline">
  <li>Date: ${proj.publishedAt}</li>
  <li>Category: ${lablesStr}</li>
</ul>
<button class="btn btn-primary" data-dismiss="modal" type="button">
  <i class="fa fa-times"></i>
  Close Project</button>
  `
  $('.modal-body').html(strHtml);
}
// {/* <div class="form-group">
// <label for="email">Your E-mail</label></br>
// <input type="email" class="form-control form-control-lg" id="email"></br>
// </div>
// <div class="form-group">
// <label for="subject">Subject</label></br>
// <input type="text" id="subject" class="form-control form-control-lg" placeholder="Type subject here">
// </div>
// <div class="form-group">
//   <label for="msg-body">Message Body</label>
// <textarea id="msg-body" rows="10"  form="contactForm"  class="form-control ">
// </textarea>
// </div>
// <div class="form-group">
// <button type="button" class="btn btn-primary" id="submit">Submit</button>
// </div> */}
// // </form>

function onContact(){
    var mail=$('#email').val();
    var subject=$('#subject').val();
    var msgBody=$('#msg-body').val();
    window.open(getUrl(mail,subject,msgBody),"_blank");

}