"use strict";(self.webpackChunkFreshCart=self.webpackChunkFreshCart||[]).push([[953],{7953:(p,h,r)=>{r.r(h),r.d(h,{WishListComponent:()=>L});var _=r(6814),u=r(1120),m=r(7444),t=r(4769),a=r(8806),v=r(6286),i=r(2425);function n(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"i",17),t.NdJ("click",function(){t.CHM(e);const c=t.oxw().$implicit,d=t.oxw(2);return t.KtG(d.removeWishList(c._id))}),t.qZA()}}const g=function(o){return["/productDetails",o]};function C(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",5)(1,"div",6),t.YNc(2,n,1,0,"i",7),t.TgZ(3,"header",8),t._UZ(4,"img",9),t.TgZ(5,"div",10)(6,"h6",11),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.ALo(10,"cutText"),t.qZA(),t.TgZ(11,"div",12)(12,"span"),t._uU(13),t.ALo(14,"currency"),t.qZA(),t.TgZ(15,"span"),t._UZ(16,"i",13),t._uU(17),t.qZA()()()(),t.TgZ(18,"footer",14)(19,"button",15,16),t.NdJ("click",function(){const d=t.CHM(e).$implicit,W=t.MAs(20),x=t.oxw(2);return t.KtG(x.addProduct(d._id,W))}),t._uU(21," +Add to Cart "),t.qZA()()()()}if(2&o){const e=l.$implicit,s=t.oxw(2);t.xp6(2),t.Q6J("ngIf",s.whishListData.includes(e._id)),t.xp6(1),t.Q6J("routerLink",t.VKq(12,g,e._id)),t.xp6(1),t.Q6J("src",e.imageCover,t.LSH),t.xp6(3),t.Oqu(e.category.name),t.xp6(2),t.Oqu(t.lcZ(10,7,e.title)),t.xp6(4),t.Oqu(t.xi3(14,9,e.price,"E\xa3")),t.xp6(4),t.Oqu(e.ratingsAverage)}}function f(o,l){if(1&o&&(t.TgZ(0,"section")(1,"h2",1),t._uU(2,"Shop Products:"),t.qZA(),t.TgZ(3,"div",2),t.YNc(4,C,22,14,"div",3),t.qZA(),t._UZ(5,"footer",4),t.qZA()),2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.products)}}let L=(()=>{class o{constructor(e,s,c,d){this._WishListService=e,this._Renderer2=s,this._CartService=c,this._ToastrService=d,this.products=[],this.whishListData=[]}ngOnInit(){this.getList()}getList(){this.getWishlistId=this._WishListService.getWishlist().subscribe({next:e=>{this.products=e.data;for(let s=0;s<e.data.length;s++)this.whishListData.push(e.data[s]._id)},error:e=>{console.log(e)}})}addProduct(e,s){this._Renderer2.setAttribute(s,"disabled","true"),this.addProductId=this._CartService.addToCart(e).subscribe({next:c=>{this._Renderer2.removeAttribute(s,"disabled"),this._ToastrService.success(c.message),this._CartService.cartNumber.next(c.numOfCartItems)},error:c=>{this._Renderer2.removeAttribute(s,"disabled"),this._ToastrService.error(c.message),console.log(c)}})}removeWishList(e){this.removeFromWishlistId=this._WishListService.removeFromWishlist(e).subscribe({next:s=>{this.getList(),this.whishListData=s.data,this._WishListService.whishNum.next(s.data.length),this._ToastrService.success("Product Remove Successfully From Wish List ")},error:s=>{console.log(s)}})}ngOnDestroy(){this.getWishlistId&&this.getWishlistId.unsubscribe(),this.addProductId&&this.addProductId.unsubscribe(),this.removeFromWishlistId&&this.removeFromWishlistId.unsubscribe()}static#t=this.\u0275fac=function(s){return new(s||o)(t.Y36(a.i),t.Y36(t.Qsj),t.Y36(v.N),t.Y36(i._W))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-wish-list"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[1,"h6"],[1,"row","g-4"],["class","product col-md-2",4,"ngFor","ngForOf"],[1,"mt-4","text-center"],[1,"product","col-md-2"],[1,"position-relative","overflow-hidden"],["class","fa-solid fa-heart heart",3,"click",4,"ngIf"],["role","button",3,"routerLink"],["alt","",1,"w-100",3,"src"],[1,"desc"],[1,"font-sm","text-main"],[1,"d-flex","justify-content-between","align-items-center"],[1,"fas","fa-star","rating-color"],[1,"button"],[1,"add-btn","main-btn","w-100",3,"click"],["btnAdd",""],[1,"fa-solid","fa-heart","heart",3,"click"]],template:function(s,c){1&s&&t.YNc(0,f,6,1,"section",0),2&s&&t.Q6J("ngIf",c.products.length>0)},dependencies:[_.ez,_.sg,_.O5,_.H9,u.rH,m.Q]})}return o})()},6286:(p,h,r)=>{r.d(h,{N:()=>t});var _=r(5619),u=r(4769),m=r(9862);let t=(()=>{class a{constructor(i){this._HttpClient=i,this.cartNumber=new _.X(0)}addToCart(i){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:i})}getCart(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart")}removeItem(i){return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${i}`)}removeCart(){return this._HttpClient.delete("https://ecommerce.routemisr.com/api/v1/cart")}updateCart(i,n){return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${n}`,{count:i})}checkOut(i,n){return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${i}?url=https://abdulhamidsameh.github.io/fresh_cart/`,{shippingAddress:n})}getAllOrders(i){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${i}`)}cashOrder(i,n){return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/${i}`,{shippingAddress:n})}static#t=this.\u0275fac=function(n){return new(n||a)(u.LFG(m.eN))};static#e=this.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);