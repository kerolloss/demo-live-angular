"use strict";(self.webpackChunkFreshCart=self.webpackChunkFreshCart||[]).push([[937],{937:(m,n,i)=>{i.r(n),i.d(n,{CategoriesComponent:()=>_});var c=i(6814),g=i(1120),t=i(4769),s=i(0);const p=function(o){return["/categoryDetails",o]};function r(o,u){if(1&o&&(t.TgZ(0,"div",3)(1,"div")(2,"div",4),t._UZ(3,"img",5),t.TgZ(4,"div",6)(5,"h6",7),t._uU(6),t.qZA()()()()()),2&o){const e=u.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(5,p,e._id)),t.xp6(1),t.Q6J("src",e.image,t.LSH)("alt",e.name)("title",e.name),t.xp6(3),t.Oqu(e.name)}}function l(o,u){if(1&o&&(t.TgZ(0,"section")(1,"h2"),t._uU(2,"All Categories"),t.qZA(),t.TgZ(3,"div",1),t.YNc(4,r,7,7,"div",2),t.qZA()()),2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.categories)}}let _=(()=>{class o{constructor(e){this._ProductService=e,this.categories=[]}ngOnInit(){this.getAllCategoriesId=this._ProductService.getAllCategories().subscribe({next:e=>{this.categories=e.data},error:e=>{console.log(e)}})}ngOnDestroy(){this.getAllCategoriesId&&this.getAllCategoriesId.unsubscribe()}static#t=this.\u0275fac=function(a){return new(a||o)(t.Y36(s.M))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-categories"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[1,"row","g-4"],["class","product col-md-3",4,"ngFor","ngForOf"],[1,"product","col-md-3"],["role","button",3,"routerLink"],["height","300px",1,"w-100","object-fit-fill",3,"src","alt","title"],[1,"desc","p-2","mt-3","text-center"],[1,"text-main"]],template:function(a,d){1&a&&t.YNc(0,l,5,1,"section",0),2&a&&t.Q6J("ngIf",d.categories)},dependencies:[c.ez,c.sg,c.O5,g.rH]})}return o})()},0:(m,n,i)=>{i.d(n,{M:()=>t});var c=i(4769),g=i(9862);let t=(()=>{class s{constructor(r){this._HttpClient=r}getAllProduct(r=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${r}`)}getSpecificProduct(r){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${r}`)}getAllCategories(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")}getSpecificCategory(r){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${r}`)}getSubCategoryInCategory(r){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${r}/subcategories`)}getAllBrands(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands")}getSpecificBrand(r){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${r}`)}static#t=this.\u0275fac=function(l){return new(l||s)(c.LFG(g.eN))};static#e=this.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()}}]);