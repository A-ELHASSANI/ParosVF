webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/home/home.component.html":
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<div class=\\\"row\\\"> <div class=\\\"col-md-3\\\"> <span class=\\\"hipster img-fluid rounded\\\"></span> </div> <div class=\\\"col-md-9\\\"> <h1 class=\\\"display-4\\\">Bienvenue sur le site Paros</h1> <p class=\\\"lead\\\">Gestion des visites immobilières</p> <div class=\\\"row\\\"> <div class=\\\"col-md-6\\\" [ngSwitch]=\\\"isAuthenticated()\\\"> <div class=\\\"alert alert-info\\\" *ngSwitchCase=\\\"true\\\"> <span *ngIf=\\\"account\\\"> Vous êtes connecté en tant que \\\"{{account.login}}\\\". </span> </div> <div> <p>Depuis 2000 ans, notre agence immobilière oeuvre en Suisse.</p> <p>Nous mettons à votre disposition notre réseau relationnel afin que vous puissiez aboutir, dans les meilleures conditions possibles, dans vos recherches immobilières. </p> <p> Venez trouver votre bien idéal grâce à nos annonces en ligne. <br> Nous sommes là pour vous conseiller, n'hésitez pas à nous contacter ! </p> <p [ngSwitch]=\\\"isAuthenticated()\\\" *ngSwitchCase=\\\"false\\\">Inscrivez-vous afin de pouvoir effectuer des visites rapidement sur des biens qui vous intéresse.</p> </div> <div [ngSwitch]=\\\"isAuthenticated()\\\" *ngSwitchCase=\\\"true\\\"> <span> Vous avez la possibilité de vous inscrire à une visite</span> <br> <br> </div> <div class=\\\"alert alert-secondary\\\" *ngSwitchCase=\\\"false\\\"> <a class=\\\"btn btn-light btn-rounded\\\" routerLink=\\\"register\\\"> Inscription</a> </div> </div> <div class=\\\"col-md-4\\\"> <ngb-carousel> <ng-template ngbSlide> <img class=\\\"imgCarousel\\\" src=\\\"\" + __webpack_require__(\"./src/main/webapp/content/images/maisonCarousel1.jpg\") + \"\\\" alt=\\\"Random first slide\\\" height=\\\"50%\\\" width=\\\"50%\\\"> <div class=\\\"carousel-caption\\\"> <h3>Belle maison spacieux</h3> <p>Avec un beau jardin</p> </div> </ng-template> <ng-template ngbSlide> <img class=\\\"imgCarousel\\\" src=\\\"\" + __webpack_require__(\"./src/main/webapp/content/images/maisonCarousel2.jpg\") + \"\\\" height=\\\"70%\\\" width=\\\"70%\\\" alt=\\\"Random second slide\\\"> <div class=\\\"carousel-caption\\\"> <h3></h3> <p>Avec des baies vitrées et un balcon</p> </div> </ng-template> <ng-template ngbSlide> <img class=\\\"imgCarousel\\\" src=\\\"\" + __webpack_require__(\"./src/main/webapp/content/images/maisonCarousel3.jpg\") + \"\\\" height=\\\"70%\\\" width=\\\"70%\\\" alt=\\\"Random third slide\\\"> <div class=\\\"carousel-caption\\\"> <h3>Une belle salle à manger</h3> <p></p> </div> </ng-template> </ngb-carousel> </div> </div> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbD8zNjE4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1jQUFtYyxlQUFlIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPiA8c3BhbiBjbGFzcz1cXFwiaGlwc3RlciBpbWctZmx1aWQgcm91bmRlZFxcXCI+PC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTlcXFwiPiA8aDEgY2xhc3M9XFxcImRpc3BsYXktNFxcXCI+QmllbnZlbnVlIHN1ciBsZSBzaXRlIFBhcm9zPC9oMT4gPHAgY2xhc3M9XFxcImxlYWRcXFwiPkdlc3Rpb24gZGVzIHZpc2l0ZXMgaW1tb2JpbGnDqHJlczwvcD4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiIFtuZ1N3aXRjaF09XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCI+IDxzcGFuICpuZ0lmPVxcXCJhY2NvdW50XFxcIj4gVm91cyDDqnRlcyBjb25uZWN0w6kgZW4gdGFudCBxdWUgXFxcInt7YWNjb3VudC5sb2dpbn19XFxcIi4gPC9zcGFuPiA8L2Rpdj4gPGRpdj4gPHA+RGVwdWlzIDIwMDAgYW5zLCBub3RyZSBhZ2VuY2UgaW1tb2JpbGnDqHJlIG9ldXZyZSBlbiBTdWlzc2UuPC9wPiA8cD5Ob3VzIG1ldHRvbnMgw6Agdm90cmUgZGlzcG9zaXRpb24gbm90cmUgcsOpc2VhdSByZWxhdGlvbm5lbCBhZmluIHF1ZSB2b3VzIHB1aXNzaWV6IGFib3V0aXIsIGRhbnMgbGVzIG1laWxsZXVyZXMgY29uZGl0aW9ucyBwb3NzaWJsZXMsIGRhbnMgdm9zIHJlY2hlcmNoZXMgaW1tb2JpbGnDqHJlcy4gPC9wPiA8cD4gVmVuZXogdHJvdXZlciB2b3RyZSBiaWVuIGlkw6lhbCBncsOiY2Ugw6Agbm9zIGFubm9uY2VzIGVuIGxpZ25lLiA8YnI+IE5vdXMgc29tbWVzIGzDoCBwb3VyIHZvdXMgY29uc2VpbGxlciwgbidow6lzaXRleiBwYXMgw6Agbm91cyBjb250YWN0ZXIgISA8L3A+IDxwIFtuZ1N3aXRjaF09XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIiAqbmdTd2l0Y2hDYXNlPVxcXCJmYWxzZVxcXCI+SW5zY3JpdmV6LXZvdXMgYWZpbiBkZSBwb3V2b2lyIGVmZmVjdHVlciBkZXMgdmlzaXRlcyByYXBpZGVtZW50IHN1ciBkZXMgYmllbnMgcXVpIHZvdXMgaW50w6lyZXNzZS48L3A+IDwvZGl2PiA8ZGl2IFtuZ1N3aXRjaF09XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIiAqbmdTd2l0Y2hDYXNlPVxcXCJ0cnVlXFxcIj4gPHNwYW4+IFZvdXMgYXZleiBsYSBwb3NzaWJpbGl0w6kgZGUgdm91cyBpbnNjcmlyZSDDoCB1bmUgdmlzaXRlPC9zcGFuPiA8YnI+IDxicj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXNlY29uZGFyeVxcXCIgKm5nU3dpdGNoQ2FzZT1cXFwiZmFsc2VcXFwiPiA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1saWdodCBidG4tcm91bmRlZFxcXCIgcm91dGVyTGluaz1cXFwicmVnaXN0ZXJcXFwiPiBJbnNjcmlwdGlvbjwvYT4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+IDxuZ2ItY2Fyb3VzZWw+IDxuZy10ZW1wbGF0ZSBuZ2JTbGlkZT4gPGltZyBjbGFzcz1cXFwiaW1nQ2Fyb3VzZWxcXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vY29udGVudC9pbWFnZXMvbWFpc29uQ2Fyb3VzZWwxLmpwZ1wiKSArIFwiXFxcIiBhbHQ9XFxcIlJhbmRvbSBmaXJzdCBzbGlkZVxcXCIgaGVpZ2h0PVxcXCI1MCVcXFwiIHdpZHRoPVxcXCI1MCVcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjYXJvdXNlbC1jYXB0aW9uXFxcIj4gPGgzPkJlbGxlIG1haXNvbiBzcGFjaWV1eDwvaDM+IDxwPkF2ZWMgdW4gYmVhdSBqYXJkaW48L3A+IDwvZGl2PiA8L25nLXRlbXBsYXRlPiA8bmctdGVtcGxhdGUgbmdiU2xpZGU+IDxpbWcgY2xhc3M9XFxcImltZ0Nhcm91c2VsXFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2NvbnRlbnQvaW1hZ2VzL21haXNvbkNhcm91c2VsMi5qcGdcIikgKyBcIlxcXCIgaGVpZ2h0PVxcXCI3MCVcXFwiIHdpZHRoPVxcXCI3MCVcXFwiIGFsdD1cXFwiUmFuZG9tIHNlY29uZCBzbGlkZVxcXCI+IDxkaXYgY2xhc3M9XFxcImNhcm91c2VsLWNhcHRpb25cXFwiPiA8aDM+PC9oMz4gPHA+QXZlYyBkZXMgYmFpZXMgdml0csOpZXMgZXQgdW4gYmFsY29uPC9wPiA8L2Rpdj4gPC9uZy10ZW1wbGF0ZT4gPG5nLXRlbXBsYXRlIG5nYlNsaWRlPiA8aW1nIGNsYXNzPVxcXCJpbWdDYXJvdXNlbFxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9jb250ZW50L2ltYWdlcy9tYWlzb25DYXJvdXNlbDMuanBnXCIpICsgXCJcXFwiIGhlaWdodD1cXFwiNzAlXFxcIiB3aWR0aD1cXFwiNzAlXFxcIiBhbHQ9XFxcIlJhbmRvbSB0aGlyZCBzbGlkZVxcXCI+IDxkaXYgY2xhc3M9XFxcImNhcm91c2VsLWNhcHRpb25cXFwiPiA8aDM+VW5lIGJlbGxlIHNhbGxlIMOgIG1hbmdlcjwvaDM+IDxwPjwvcD4gPC9kaXY+IDwvbmctdGVtcGxhdGU+IDwvbmdiLWNhcm91c2VsPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/home/home.component.html\n");

/***/ })

})