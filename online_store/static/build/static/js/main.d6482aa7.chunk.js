(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,t,a){e.exports=a.p+"static/media/footer_background.7e96c5e9.png"},3740:function(e,t,a){e.exports=a(3965)},3745:function(e,t,a){},3770:function(e,t,a){},3771:function(e,t,a){},3772:function(e,t,a){},3773:function(e,t,a){},3774:function(e,t,a){},3775:function(e,t,a){},3822:function(e,t,a){},3823:function(e,t,a){},3824:function(e,t,a){},3825:function(e,t,a){},3965:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(24),l=a.n(c),i=(a(3745),a(8)),o=a(9),s=a(11),m=a(10),u=a(12),p=a(18),d=a(34),h=a(50),E=a.n(h),g=function(e){return{type:"ADD_PRODUCT_TO_CART",payload:e}},f=function(e){return{type:"SEARCH_TERM_TO_FILTER",searchTerm:e}},b=a(55),v=a(19),y={products:[],cart:[]},N=function(){var e,t,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"RECEIVE_PRODUCTS":return t=r.payload,n.products=t,Object(v.a)({},n);case"INCREMENT_CART_ITEM_QUANTITY":a=(e=Object(b.a)(n.cart)).findIndex(function(e){return e.id===r.payload});var c=Object(v.a)({},e[a]);return c.quantity++,e[a]=c,Object(v.a)({},n,{cart:e});case"DECREMENT_CART_ITEM_QUANTITY":a=(e=Object(b.a)(n.cart)).findIndex(function(e){return e.id===r.payload});var l=Object(v.a)({},e[a]);return l.quantity--,e[a]=l,Object(v.a)({},n,{cart:e});case"ADD_PRODUCT_TO_CART":if((a=(e=Object(b.a)(n.cart)).findIndex(function(e){return e.id===r.payload.id}))<0)e.push(Object(v.a)({},r.payload,{quantity:1}));else{var i=Object(v.a)({},e[a]);i.quantity++,e[a]=i}return Object(v.a)({},n,{cart:e});case"REMOVE_PRODUCT_FROM_CART":return a=(e=Object(b.a)(n.cart)).findIndex(function(e){return e.id===r.payload}),e.splice(a,1),Object(v.a)({},n,{cart:e});default:return n}},O={perPage:12,currentPage:1,pagesToShow:3,totalItemsCount:0},j=Object(d.c)({shop:N,brandFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BRAND_TO_FILTER":return e.includes(t.brand)?e:e+t.brand;case"REMOVE_BRAND_FROM_FILTER":console.log("remove brand",t);var a=new RegExp(t.brand,"gi");return e.replace(a,"");default:return e}},searchFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_TERM_TO_FILTER":return e=t.searchTerm;default:return e}},orderBy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch((arguments.length>1?arguments[1]:void 0).type){case"ORDER_BY_ASC":return"asc";case"ORDER_BY_DESC":return"desc";case"CLEAR_ORDER_BY_PRICE":return"";default:return e}},pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PREV_PAGE":return 1===e.currentPage?e:Object(v.a)({},e,{currentPage:e.currentPage-1});case"NEXT_PAGE":return Object(v.a)({},e,{currentPage:e.currentPage+1});case"GO_PAGE":return Object(v.a)({},e,{currentPage:t.currentPage});case"COUNT_ITEM":return Object(v.a)({},e,{totalItemsCount:t.totalItemsCount});default:return e}}}),w=(a(3769),a(138)),C=a(3967),_=a(3969),k=a(147),P=a(3968),x=(a(3770),a(3771),["apple","huawei","meizu","samsung","vestel","xiaomi","asus"]),R=Object(p.b)(function(e){var t={};return e.shop.products.forEach(function(e){t[e.brand]=t[e.brand]+1||1}),{brandItemsCount:t}})(function(e){var t=e.dispatch,a=e.brandItemsCount,n=function(e){var a=e.target.name;e.target.checked,e.target.checked?t({type:"ADD_BRAND_TO_FILTER",brand:a}):t(function(e){return{type:"REMOVE_BRAND_FROM_FILTER",brand:e}}(a))};return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,"Brands")),r.a.createElement("ul",{className:"list-group flex-row flex-wrap"},x.map(function(e){return r.a.createElement("li",{className:"list-group-item flex-50"},r.a.createElement("label",{className:"custom-checkbox text-capitalize"}," ",e," (",a[e],")",r.a.createElement("input",{type:"checkbox",name:e,className:"custom-checkbox__input",onInput:n}),r.a.createElement("span",{className:"custom-checkbox__span"})))})))}),T=a(29),S=(a(3772),Object(p.b)()(function(e){var t,a=e.dispatch,c=Object(n.useState)(""),l=Object(T.a)(c,2),i=l[0],o=l[1],s=function(e){var t=e.target.value;o(t),a("ORDER_BY_ASC"===t?{type:"ORDER_BY_ASC"}:{type:"ORDER_BY_DESC"})};return i&&(t=r.a.createElement("span",{onClick:function(e){document.getElementsByName("orderByPrice").forEach(function(e){e.checked=!1}),a({type:"CLEAR_ORDER_BY_PRICE"}),o("")},className:"text-remove-selected text-right"},"Remove filter")),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,"Price ",t," ")),r.a.createElement("ul",{className:"list-group flex-row  flex-wrap"},r.a.createElement("li",{className:"list-group-item flex-fill"},r.a.createElement("label",{className:"custom-radio-btn"}," Low to high",r.a.createElement("input",{value:"ORDER_BY_ASC",type:"radio",onChange:s,name:"orderByPrice",className:"custom-radio-btn__input"}),r.a.createElement("span",{className:"custom-radio-btn__span"}))),r.a.createElement("li",{className:"list-group-item flex-fill"},r.a.createElement("label",{className:"custom-radio-btn"}," High to low",r.a.createElement("input",{value:"ORDER_BY_DESC",onChange:s,type:"radio",name:"orderByPrice",className:"custom-radio-btn__input"}),r.a.createElement("span",{className:"custom-radio-btn__span"})))))})),L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(R,null)),r.a.createElement("div",{className:"col-12"},r.a.createElement(S,null))))}}]),t}(n.Component),I=a(89),A=function(e){return e.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")},D=function(e){var t=0,a=0;do{t+=e.offsetTop||0,a+=e.offsetLeft||0,e=e.offsetParent}while(e);return{top:t,left:a}},M=(a(3773),a(3774),function(e){for(var t=e.len,a=e.activeItem,n=e.changeItem,c=[],l=function(e){var t="owl-dot";a===e&&(t+=" active"),c.push(r.a.createElement("button",{onClick:function(){n(e)},role:"button",className:t},r.a.createElement("span",null)))},i=0;i<t;i++)l(i);return r.a.createElement("div",{className:"owl-dots"},c)}),F=Object(p.b)()(function(e){var t=e.product,a=t.title,c=t.price,l=t.images,i=t.description,o=t.id,s=r.a.createRef(),m=Object(n.useState)(l[0]),u=Object(T.a)(m,2),p=u[0],d=u[1],h=Object(n.useState)(0),E=Object(T.a)(h,2),f=E[0],b=E[1],y=function(e){var t=("touchmove"===e.type?e.touches[0].clientX:e.clientX)-D(s.current).left,a=s.current.clientWidth/l.length,n=Math.ceil(t/a)-1;n<0&&(n=0),n>=l.length&&(n=l.length-1),b(n),d(l[n])},N=function(e){d(l[0]),b(0)};return r.a.createElement("div",{className:"card h-100 product"},r.a.createElement(I.a,{to:"/products/".concat(o),className:"product__link"},r.a.createElement("img",{onMouseMove:y,onMouseOut:N,onTouchMove:y,onTouchEnd:N,className:"card-img-top product__img",src:p,alt:a,ref:s}),r.a.createElement(M,{len:l.length,activeItem:f,changeItem:function(e){d(l[e]),b(e)}})),r.a.createElement("div",{className:"card-body product__text"},r.a.createElement("h4",{className:"card-title product__title"},r.a.createElement(I.a,{to:"/products/".concat(o)},a)),r.a.createElement("h5",{className:"product__price"},"$",A(c)),r.a.createElement("p",{className:"card-text product__description"},i),r.a.createElement("button",{onClick:function(){e.dispatch(g(Object(v.a)({},e.product)))},className:"btn btn-info product__add-to-cart"},"Add to cart")))}),B=(a(3775),function(e){var t=e.len,a=e.click,n=[],c="layout-mode__item";e.isActive&&(c+=" layout-mode__item--active");for(var l=0;l<t;l++)n.push(r.a.createElement("div",{className:c}));return r.a.createElement("div",{className:"layout-mode",onClick:function(){a(t)}},n)}),V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onPrev=function(){a.props.onPrevPage()},a.onNext=function(){a.props.onNextPage()},a.getPages=function(){var e=Math.ceil(a.props.totalItemsCount/a.props.perPage),t=a.props.currentPage||1,n=a.props.pagesToShow||9,r=[];r.push(t);for(var c=n-1,l=0;l<c;l++)r.length<n&&Math.min.apply(null,r)>1&&r.push(Math.min.apply(null,r)-1),r.length<n&&Math.max.apply(null,r)<e&&r.push(Math.max.apply(null,r)+1);return r.sort(function(e,t){return e-t}),r},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onPage",value:function(e){this.props.onGoPage(e)}},{key:"isOnLastPage",value:function(){return this.props.perPage*this.props.currentPage>=this.props.totalItemsCount}},{key:"totalPages",value:function(){return Math.ceil(this.props.totalItemsCount/this.props.perPage)||0}},{key:"getMin",value:function(){return this.props.perPage*this.props.currentPage-this.props.perPage+1}},{key:"getMax",value:function(){var e=this.props.perPage*this.props.currentPage;return e>this.props.totalItemsCount&&(e=this.props.totalItemsCount),e}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.getPages().map(function(t){var a="page-item";return t===e.props.currentPage&&(a+=" active"),r.a.createElement("li",{className:a,onClick:function(){e.onPage(t)}},r.a.createElement("button",{className:"page-link"},t))}),a="page-item";1===this.props.currentPage&&(a+=" disabled");var n=r.a.createElement("li",{className:a},r.a.createElement("button",{className:"page-link",onClick:this.onPrev,tabIndex:"-1"},"Previous")),c="page-item";this.isOnLastPage()&&(c+=" disabled");var l=r.a.createElement("li",{className:c},r.a.createElement("button",{disabled:this.isOnLastPage(),className:"page-link",onClick:this.onNext},"Next"));return r.a.createElement("nav",{"aria-label":"..."},r.a.createElement("ul",{className:"pagination"},n,t,l))}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={colValue:"col-lg-4",perPage:12,currentPage:1,pagesToShow:3,gridValue:3},a.changeLayout=function(e){var t;a.setState({gridValue:e}),t=4===e?3:4,a.setState({colValue:"col-lg-".concat(t)})},a.onPrev=function(){var e=Object(v.a)({},a.state);e.currentPage=a.state.currentPage-1,a.setState(e)},a.onNext=function(){a.setState(Object(v.a)({},a.state,{currentPage:a.state.currentPage+1}))},a.goPage=function(e){a.setState(Object(v.a)({},a.state,{currentPage:e}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;this.state.colValue[this.state.colValue.length-1];return r.a.createElement("div",{className:"col-lg-9"},r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col-12 d-none d-lg-block d-xl-block"},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header d-flex justify-content-end"},r.a.createElement("span",{className:"mr-3"},"Change Layout: "),r.a.createElement(B,{len:3,isActive:3===this.state.gridValue,click:this.changeLayout}),r.a.createElement(B,{len:4,isActive:4===this.state.gridValue,click:this.changeLayout}))))),r.a.createElement("div",{className:"row"},function(e,t){if(!t||!t.perPage||!t.currentPage)return e;var a=t.perPage*(t.currentPage-1)||0;return console.log(e),e.slice(a,a+t.perPage)}(this.props.products,this.state).map(function(t){var a="".concat(e.state.colValue," col-md-6 mb-4");return r.a.createElement("div",{className:a},r.a.createElement(F,{key:t.id,product:t}))})),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement(V,{totalItemsCount:this.props.products.length,currentPage:this.state.currentPage,perPage:this.state.perPage,pagesToShow:this.state.pagesToShow,onGoPage:this.goPage,onPrevPage:this.onPrev,onNextPage:this.onNext})))}}]),t}(n.Component),U=Object(p.b)(function(e){var t,a,n=e.brandFilter,r=e.orderBy,c=e.searchFilter,l=function(e,t){return console.log("Search Term",t),""==t.trim()?e:e.filter(function(e){return e.title.toLowerCase().startsWith(t.toLowerCase())})}(e.shop.products,c);return{products:function(e,t){return t?(console.log("orderbYmethod",t),"asc"===t?e.slice().sort(function(e,t){return e.price-t.price}):e.slice().sort(function(e,t){return t.price-e.price})):e}((t=l,(a=n)?t.filter(function(e){return a.includes(e.brand)}):t),r)}},null)(q),W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container",style:{paddingTop:"6rem"}},r.a.createElement("div",{className:"row"},r.a.createElement(L,null),r.a.createElement(U,null))))},Y=a(6),z=(a(3822),a(3823),Object(p.b)(function(e){var t={};return e.shop.products.forEach(function(e){t[e.brand]=t[e.brand]+1||1}),{brandItemsCount:t}})(function(e){var t=e.dispatch;return r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"d-flex justify-content-center h-100"},r.a.createElement("div",{className:"searchbar"},r.a.createElement("input",{className:"search_input",onChange:function(e){var a=e.target.value;t(f(void 0===a?"":a))},type:"text",name:"",placeholder:"Search..."}),r.a.createElement("a",{className:"search_icon"},r.a.createElement("i",{className:"fa fa-search"})))))})),G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggleCollapse=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(Y.k,{style:{backgroundColor:"#1e2434"},dark:!0,expand:"md"},r.a.createElement(Y.l,null,r.a.createElement(Y.j,{to:"/"},r.a.createElement("strong",{className:"white-text",style:{color:"white"}},"Online Store"))),r.a.createElement(Y.n,{onClick:this.toggleCollapse}),r.a.createElement(Y.b,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},r.a.createElement(Y.m,{left:!0},r.a.createElement(Y.i,{active:!0},r.a.createElement(Y.j,{to:"/"},"Home")),r.a.createElement(Y.i,null,r.a.createElement(Y.j,{to:"#!"},"Features")),r.a.createElement(Y.i,null,r.a.createElement(Y.j,{to:"#!"},"Pricing"))),r.a.createElement(Y.m,{right:!0},r.a.createElement(Y.i,null,r.a.createElement(z,null)),r.a.createElement(Y.i,null,r.a.createElement(Y.j,{className:"waves-effect waves-light",to:"#!"},r.a.createElement("i",{className:"fa fa-facebook-f"}))),r.a.createElement(Y.i,null,r.a.createElement(Y.j,{className:"waves-effect waves-light",to:"#!"},r.a.createElement("i",{className:"fa fa-whatsapp"}))),r.a.createElement(Y.i,null,r.a.createElement(Y.j,{className:"waves-effect waves-light",to:"#!"},r.a.createElement("i",{className:"fa fa-instagram"}))),r.a.createElement(Y.i,null,r.a.createElement(Y.j,{className:"nav-link",to:"/cart"},r.a.createElement("i",{className:"fa fa-shopping-cart mr-2","aria-hidden":"true"}),"Cart ",this.props.cartLength?"(".concat(this.props.cartLength,")"):"")),r.a.createElement(Y.i,null,r.a.createElement(Y.d,null,r.a.createElement(Y.g,{nav:!0,caret:!0},r.a.createElement(Y.h,{icon:"user"})),r.a.createElement(Y.f,{className:"dropdown-default",right:!0},r.a.createElement(Y.e,{href:"#!"},"Logout"),r.a.createElement(Y.e,{href:"#!"},"Profile")))))))}}]),t}(n.Component),H=Object(p.b)(function(e){return{cartLength:e.shop.cart.length}},null)(G),J=a(141),Q=a.n(J),X=function(){return r.a.createElement("div",{style:{backgroundColor:"#1e2434",backgroundSize:"cover",color:"white",width:"100%",position:"absolute",backgroundImage:"url(".concat(Q.a,")"),backgroundPosition:"center"}},r.a.createElement(Y.c,{fluid:!0,className:"text-center text-md-left stylish-color-dark pt-4"},r.a.createElement(Y.o,null,r.a.createElement(Y.a,{md:"6"},r.a.createElement("h5",{className:"mb-4 mt-3 font-weight-bold"},"Online Store"),r.a.createElement("p",null,"Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.")),r.a.createElement("hr",{className:"clearfix w-100 d-md-none"}),r.a.createElement(Y.a,{md:"2"},r.a.createElement("h5",{className:"text-uppercase mb-4 mt-3 font-weight-bold"},"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Link 1")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Link 2")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Link 3")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Link 4")))),r.a.createElement("hr",{className:"clearfix w-100 d-md-none"}),r.a.createElement(Y.a,{md:"2"},r.a.createElement("h5",{className:"text-uppercase mb-4 mt-3 font-weight-bold"},"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Link 1")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Link 2")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Link 3")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Link 4")))),r.a.createElement("hr",{className:"clearfix w-100 d-md-none"}),r.a.createElement(Y.a,{md:"2"},r.a.createElement("h5",{className:"text-uppercase mb-4 mt-3 font-weight-bold"},"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Link 1")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Link 2")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Link 3")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Link 4")))))),r.a.createElement("div",{className:"text-center"},r.a.createElement("ul",{className:"list-unstyled list-inline"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{className:"btn-floating btn-sm btn-fb mx-1"},r.a.createElement("i",{className:"fa fa-facebook-f"}," "))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{className:"btn-floating btn-sm btn-tw mx-1"},r.a.createElement("i",{className:"fa fa-twitter"}," "))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{className:"btn-floating btn-sm btn-gplus mx-1"},r.a.createElement("i",{className:"fa fa-google-plus"}," "))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{className:"btn-floating btn-sm btn-li mx-1"},r.a.createElement("i",{className:"fa fa-twitter"}," "))))),r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement(Y.c,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Copyright: ",r.a.createElement("a",{href:"#"},"Online Store"))))},$=Object(p.b)()(function(e){var t=e.product,a=t.title,n=(t.images,t.brand),c=t.price,l=t.cpu,i=t.camera,o=t.size,s=(t.weight,t.display),m=t.battery,u=t.memory,p=t.description;t.id;return r.a.createElement("aside",{className:"col-sm-7"},r.a.createElement("article",{className:"card-body p-5"},r.a.createElement("h3",{className:"title mb-3"},a),r.a.createElement("p",{className:"price-detail-wrap"},r.a.createElement("span",{className:"price h3 text-warning"},r.a.createElement("span",{className:"currency"},"$"),r.a.createElement("span",{className:"num"},A(c)))),r.a.createElement("dl",{className:"item-property"},r.a.createElement("dt",null,"Description"),r.a.createElement("dd",null,r.a.createElement("p",{className:"text-capitalize"},p))),r.a.createElement("dl",{className:"param param-feature"},r.a.createElement("dt",null,"Brand"),r.a.createElement("dd",{className:"text-capitalize"},n)),r.a.createElement("dl",{className:"param param-feature"},r.a.createElement("dt",null,"Size"),r.a.createElement("dd",null,o)),r.a.createElement("dl",{className:"param param-feature"},r.a.createElement("dt",null,"Camera"),r.a.createElement("dd",null,i)),r.a.createElement("dl",{className:"param param-feature"},r.a.createElement("dt",null,"CPU"),r.a.createElement("dd",null,l)),r.a.createElement("dl",{className:"param param-feature"},r.a.createElement("dt",null,"Memory"),r.a.createElement("dd",null,u)),r.a.createElement("dl",{className:"param param-feature"},r.a.createElement("dt",null,"Display"),r.a.createElement("dd",null,s)),r.a.createElement("dl",{className:"param param-feature"},r.a.createElement("dt",null,"Battery"),r.a.createElement("dd",null,m)),r.a.createElement("hr",null),r.a.createElement("hr",null),r.a.createElement("button",{onClick:function(){e.dispatch(g(e.product))},className:"btn btn-lg btn-outline-primary text-uppercase"},r.a.createElement("i",{className:"fa fa-shopping-cart"})," Add to cart")))}),K=(a(3824),function(e){var t=e.images,a=r.a.createRef(),c=Object(n.useState)(t[0]),l=Object(T.a)(c,2),i=l[0],o=l[1],s=Object(n.useState)(0),m=Object(T.a)(s,2),u=(m[0],m[1]);return r.a.createElement("aside",{className:"col-sm-5 border-right"},r.a.createElement("article",{className:"gallery-wrap"},r.a.createElement("div",{className:"img-big-wrap"},r.a.createElement("div",{style:{padding:"2rem"}},r.a.createElement("a",{href:"#"},r.a.createElement("img",{ref:a,onMouseMove:function(e){var n=e.clientX-D(a.current).left;console.dir(a.current);var r=a.current.clientWidth/t.length;console.log(Math.ceil(n/r)-1);var c=Math.ceil(n/r)-1;c<0&&(c=0),c>=t.length&&(c=t.length-1),u(c),o(t[c])},onMouseOut:function(e){o(t[0]),u(0)},src:i,style:{width:"100%",height:"100%"}})))),r.a.createElement("div",{className:"img-small-wrap"},t.map(function(e,a){return r.a.createElement("div",{className:"item-gallery",onClick:function(){!function(e){o(t[e]),u(e)}(a)}},r.a.createElement("img",{src:e}))}))))}),Z=Object(p.b)(function(e,t){return{product:e.shop.products.find(function(e){return e.id===+t.match.params.id})}},null)(function(e){return console.log(e),r.a.createElement("div",{className:"container",style:{padding:"6rem 0"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row"},r.a.createElement(K,{images:e.product.images}),r.a.createElement($,{product:e.product}))))}),ee=(a(3825),Object(p.b)()(function(e){var t=e.title,a=e.price,c=e.description,l=e.quantity,i=e.id,o=e.img,s=e.dispatch;console.log(i);var m=Object(n.useState)(l),u=Object(T.a)(m,2),p=u[0],d=u[1],h=function(e,t){var a=p;console.log(t,a),"inc"===t&&a<10&&(d(p+1),s({type:"INCREMENT_CART_ITEM_QUANTITY",payload:i})),"desc"===t&&a>1&&(d(p-1),s(function(e){return{type:"DECREMENT_CART_ITEM_QUANTITY",payload:e}}(i)))};return r.a.createElement("div",{className:"row align-items-center mb-3"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-2 text-center"},r.a.createElement("img",{className:"img-responsive",src:o,style:{height:"60%",width:"60%"},alt:c})),r.a.createElement("div",{className:"col-12 text-sm-center col-sm-12 text-md-left col-md-6"},r.a.createElement("h4",{className:"product-name"},r.a.createElement("strong",null,function(e){return e.split(" (")[0]}(t))),r.a.createElement("h4",null,r.a.createElement("small",{className:"product-description"},c))),r.a.createElement("div",{className:"col-12 col-sm-12 text-sm-center col-md-4 text-md-right row product-quantity-container align-items-center"},r.a.createElement("div",{className:"col-6 col-sm-6 col-md-6 text-md-right",style:{paddingTop:"5px"}},r.a.createElement("h6",null,r.a.createElement("strong",null,A(a),"$ ",r.a.createElement("span",{className:"text-muted"},"x")))),r.a.createElement("div",{className:"col-4 col-sm-4 col-md-4"},r.a.createElement("div",{className:"quantity"},r.a.createElement("input",{onClick:function(e){h(0,"inc")},type:"button",value:"+",className:"plus"}),r.a.createElement("input",{onChange:function(e){},type:"number",step:"1",max:"10",min:"1",value:p,title:"Qty",className:"qty",size:"4"}),r.a.createElement("input",{onClick:function(e){h(0,"desc")},type:"button",value:"-",className:"minus"}))),r.a.createElement("div",{className:"col-2 col-sm-2 col-md-2 text-right"},r.a.createElement("button",{onClick:function(){s({type:"REMOVE_PRODUCT_FROM_CART",payload:i})},type:"button",className:"btn btn-outline-danger btn-xs"},r.a.createElement("i",{className:"fa fa-trash"})))))})),te=a(142),ae=a.n(te),ne=Object(p.b)(function(e){return console.log(e,"state has changed"),{cartItems:e.shop.cart,cartItemCount:e.shop.cart.reduce(function(e,t){return e+t.quantity},0),totalPrice:e.shop.cart.reduce(function(e,t){return e+t.price*t.quantity},0)}},null)(function(e){return r.a.createElement(ae.a,{style:{width:"100px",height:"30px",marginTop:"12px"},label:"Pay Now",amount:e.price,billingAddress:!0,description:"Awesome Product",locale:"auto",name:"online ecommerce",stripeKey:"pk_test_2TvkwU5Pzw4AwhCoVAkwoEbf00p4EX8wb5",token:function(t){var a={amount:e.totalPrice,items:e.cartItems,token:t};E.a.post("api/get/orders",a).then(function(e){console.log(e),alert("Payment Success")}).catch(function(e){console.log("Payment Error: ",e),alert("Payment Error")})},zipCode:!0})}),re=Object(p.b)(function(e){return console.log(e,"state has changed"),{cartItems:e.shop.cart,cartItemCount:e.shop.cart.reduce(function(e,t){return e+t.quantity},0),totalPrice:e.shop.cart.reduce(function(e,t){return e+t.price*t.quantity},0)}},null)(function(e){return r.a.createElement("div",{className:"container",style:{paddingTop:"6rem"}},r.a.createElement("div",{className:"card shopping-cart"},r.a.createElement("div",{className:"card-header bg-dark text-light"},r.a.createElement("i",{className:"fa fa-shopping-cart pr-2","aria-hidden":"true"}),"Shipping cart",r.a.createElement("div",{className:"clearfix"})),r.a.createElement("div",{className:"card-body"},e.cartItemCount?e.cartItems.map(function(e){return r.a.createElement(ee,Object.assign({},e,{img:e.images[0]}))}):r.a.createElement("h1",{className:"display-4 mt-5 text-center"},"There is no product in your cart")),r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"pull-right",style:{margin:"10px"}},r.a.createElement("div",{className:"pull-right",style:{margin:"5px"}},"Total price: ",r.a.createElement("b",null,A(e.totalPrice),"\u20ac")),r.a.createElement("div",{className:"pull-left",style:{margin:"10px"}})),r.a.createElement(ne,{price:100*e.totalPrice}))))}),ce=a(71),le=a(23),ie=a(146),oe=a.n(ie),se=a(90),me=a.n(se),ue=a(145),pe=a.n(ue),de=a(88),he=a.n(de),Ee=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root,style:this.props.style},this.props.children)}}]),t}(n.Component),ge=Object(le.withStyles)(function(e){return{root:{padding:e.spacing.unit}}})(Ee),fe=a(51),be=a(148),ve=a(69),ye=a(42),Ne=a.n(ye),Oe=a(54),je={primary:"#24292e"},we={primary:"#3b5998"},Ce={primary:"#1da1f2"},_e={primary:"#4285F4"},ke=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){a.props.onClick&&a.props.onClick(a.props.provider)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.classes,n=t.providerIcon,c=t.providerLabel,l=t.login,i=t.register,o=(t.provider,Object(be.a)(t,["classes","providerIcon","providerLabel","login","register","provider"]));return e=l?"Log in with ".concat(c):i?"Register with ".concat(c):c,r.a.createElement(Ne.a,Object.assign({},o,{onClick:this.handleClick,classes:{root:a.root}}),r.a.createElement(n,{className:a.leftIcon}),e)}}]),t}(n.Component);function Pe(e,t,a,c){var l=Object(le.withStyles)(function(e){return{leftIcon:{marginRight:e.spacing.unit},root:{backgroundColor:t,"&:hover":{backgroundColor:Object(ve.darken)(t,.2)}}}})(ke);return function(t){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(u.a)(n,t),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(l,Object(v.a)({providerIcon:a,providerLabel:c,provider:e},this.props))}}]),n}(n.Component)}Pe("facebook",we.primary,Oe.a,"Facebook"),Pe("github",je.primary,Oe.b,"Github"),Pe("twitter",Ce.primary,Oe.d,"Twitter"),Pe("google",_e.primary,Oe.c,"Google");var xe=a(143),Re=a.n(xe);var Te=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){console.log("ya allah")},a.state={loginError:!1,redirect:!1},a.signup=a.signup.bind(Object(fe.a)(Object(fe.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=(t.login,t.register,t.providers,a.button,this.handleClick,function(t){console.log("google console"),console.log(t),e.signup(t,"google")});return r.a.createElement("div",{className:a.root},r.a.createElement(Re.a,{clientId:"1094067897150-86v77idjftcv24mhrnb48sjubdujc4d0.apps.googleusercontent.com",buttonText:"Login with Google",onSuccess:n,onFailure:n}))}},{key:"signup",value:function(e,t){var a,n=this;"google"===t&&e.w3.U3&&(a={name:e.w3.ig,provider:t,email:e.w3.U3,provider_id:e.El,token:e.Zi.access_token,provider_pic:e.w3.Paa}),a&&function(e,t){return new Promise(function(a,n){fetch("https://apipaypal.9lessons.info/apipaypal/"+e,{method:"POST",body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){a(e)}).catch(function(e){n(e)})})}("signup",a).then(function(e){var t=e;sessionStorage.setItem("userData",JSON.stringify(t)),n.setState({redirect:!0})})}}]),t}(n.Component),Se=Object(le.withStyles)(function(e){return{root:{display:"flex",flexDirection:"column","& > *+*":{marginTop:e.spacing.unit}}}})(Te),Le=a(43),Ie=a.n(Le),Ae=a(144),De=a.n(Ae),Me=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){a.props.setValue(e.target.value)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(De.a,Object.assign({},this.props,{value:this.props.getValue()||"",onChange:this.handleChange,required:this.props.showRequired(),error:this.props.showError(),helperText:this.props.getErrorMessage()}))}}]),t}(n.Component),Fe=Object(Le.withFormsy)(Me),Be=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.classes.root},this.props.message)}}]),t}(n.Component),Ve=Object(le.withStyles)(function(e){return{root:{color:e.palette.error.main,fontWeight:"bold",margin:[[e.spacing.unit,0]]}}})(Be),qe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).disableSubmit=function(){a.setState({canSubmit:!1})},a.enableSubmit=function(){a.setState({canSubmit:!0})},a.submit=function(e){fetch("api/login",{method:"post",body:JSON.stringify(e)})},a.state={canSubmit:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.loginFailed,n=this.state.canSubmit;return r.a.createElement("div",{className:t.root},r.a.createElement(Ie.a,{className:t.form,onValid:this.enableSubmit,onInvalid:this.disableSubmit,onValidSubmit:this.submit},r.a.createElement(Fe,{name:"username",autoComplete:"username",validations:"minLength:3",validationErrors:{minLength:"Too short"},required:!0,className:t.field,label:"Username"}),r.a.createElement(Fe,{type:"password",name:"password",autoComplete:"current-password",validations:"minLength:2",validationErrors:{minLength:"Too short"},required:!0,className:t.field,label:"Password"}),a&&r.a.createElement(Ve,{message:a}),r.a.createElement("div",{className:t.actions},r.a.createElement(Ne.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:!n},"Log in"))))}}]),t}(n.Component),Ue=Object(le.withStyles)(function(e){return{root:{},form:{display:"flex",flexDirection:"column"},field:{marginTop:e.spacing.unit},actions:{marginTop:2*e.spacing.unit}}})(qe),We=a(52),Ye=a.n(We),ze=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.onLogin,n=e.onLoginWithProvider,c=e.loginFailed,l=e.providers,i=e.disableLocal;return r.a.createElement("div",{className:t.root},!i&&r.a.createElement(Ue,{onLogin:a,loginFailed:c}),!i&&!Ye.a.isEmpty(l)&&r.a.createElement("div",{className:t.or},"or"),!Ye.a.isEmpty(l)&&r.a.createElement(Se,{login:!0,onChoice:n,providers:l}))}}]),t}(n.Component),Ge=Object(le.withStyles)(function(e){return{root:{"& > * + *":{marginTop:2*e.spacing.unit}},or:{textAlign:"center"}}})(ze),He=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).disableSubmit=function(){a.setState({canSubmit:!1})},a.enableSubmit=function(){a.setState({canSubmit:!0})},a.submit=function(e){fetch("api/register",{method:"post",body:JSON.stringify(e)})},a.state={canSubmit:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.registerFailed,n=this.state.canSubmit;return r.a.createElement("div",{className:t.root},r.a.createElement(Ie.a,{className:t.form,onValid:this.enableSubmit,onInvalid:this.disableSubmit,onValidSubmit:this.submit},r.a.createElement(Fe,{name:"username",autoComplete:"username",validations:"minLength:3",validationErrors:{minLength:"Too short"},required:!0,className:t.field,label:"Desired username"}),r.a.createElement(Fe,{type:"password",name:"password",autoComplete:"new-password",validations:"minLength:2",validationErrors:{minLength:"Too short"},required:!0,className:t.field,label:"Create a password"}),r.a.createElement(Fe,{type:"password",name:"repeated_password",autoComplete:"new-password",validations:"equalsField:password",validationErrors:{equalsField:"Needs to be the same password as above"},required:!0,className:t.field,label:"Enter password again"}),a&&r.a.createElement(Ve,{message:a}),r.a.createElement("div",{className:t.actions},r.a.createElement(Ne.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:!n},"Register"))))}}]),t}(n.Component),Je=Object(le.withStyles)(function(e){return{root:{},form:{display:"flex",flexDirection:"column"},field:{marginTop:e.spacing.unit},actions:{marginTop:2*e.spacing.unit}}})(He),Qe=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.onRegister,n=e.onRegisterWithProvider,c=e.registerFailed,l=e.providers,i=e.disableLocal,o=e.disableRegisterProviders,s=!Ye.a.isEmpty(l)&&!o,m=!i&&s;return r.a.createElement("div",{className:t.root},!i&&r.a.createElement(Je,{onRegister:a,registerFailed:c}),m&&r.a.createElement("div",{className:t.or},"or"),s&&r.a.createElement(Se,{register:!0,onChoice:n,providers:l}))}}]),t}(n.Component),Xe=Object(le.withStyles)(function(e){return{root:{"& > * + *":{marginTop:2*e.spacing.unit}},or:{textAlign:"center"}}})(Qe),$e=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleTabChange=function(e,t){a.setState({tab:t})},a.state={tab:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.classes,n=t.transitionTimeout,c=t.header,l=t.footer,i=t.onLogin,o=t.onLoginWithProvider,s=t.onRegister,m=t.onRegisterWithProvider,u=t.loginFailed,p=t.registerFailed,d=t.providers,h=t.disableLocal,E=t.disableRegister,g=t.disableRegisterProviders,f=this.state.tab;switch(f){case 0:e=r.a.createElement(ge,null,r.a.createElement(Ge,{onLogin:i,onLoginWithProvider:o,providers:d,loginFailed:u,disableLocal:h}));break;case 1:e=r.a.createElement(ge,null,r.a.createElement(Xe,{onRegister:s,onRegisterWithProvider:m,providers:d,registerFailed:p,disableLocal:h,disableRegisterProviders:g}))}return r.a.createElement("div",{className:a.root,style:{paddingTop:"60px"}},r.a.createElement(pe.a,{className:a.card},c&&r.a.createElement("div",null,c),!h&&!E&&r.a.createElement(oe.a,{value:this.state.tab,onChange:this.handleTabChange,indicatorColor:"primary",textColor:"primary",fullWidth:!0},r.a.createElement(me.a,{label:"Login"}),!E&&r.a.createElement(me.a,{label:"Register"})),n>0?r.a.createElement(he.a,{key:f,in:!0,timeout:n},e):e,l&&r.a.createElement("div",null,l)))}}]),t}(n.Component);$e.defaultProps={transitionTimeout:1e3,providers:["facebook","github","twitter","google"]};var Ke=Object(le.withStyles)(function(e){return{root:{display:"flex",flexDirection:"row",justifyContent:"center"},card:Object(ce.a)({flexGrow:1},e.breakpoints.up("sm"),{flexBasis:"25rem",flexGrow:0})}})($e),Ze=[w.a];var et=Object(d.d)(j,d.a.apply(void 0,Ze));et.dispatch(function(e){E.a.get("https://api.myjson.com/bins/hepme").then(function(t){console.log("My api response",t.data),e({type:"RECEIVE_PRODUCTS",payload:t.data})}).catch(function(t){e({type:"FETCH_PRODUCTS_ERROR",payload:t})})});var tt=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:et},r.a.createElement(C.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(_.a,null,r.a.createElement(k.a,{exact:!0,path:"/",render:function(){return r.a.createElement(P.a,{to:"/products"})}}),r.a.createElement(k.a,{exact:!0,path:"/products",component:W}),r.a.createElement(k.a,{exact:!0,path:"/authenticate",component:Ke}),r.a.createElement(k.a,{exact:!0,path:"/products/:id",component:Z}),r.a.createElement(k.a,{exact:!0,path:"/checkout",component:ne}),r.a.createElement(k.a,{exact:!0,patr:"/cart",component:re})),r.a.createElement(X,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(tt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[3740,1,2]]]);
//# sourceMappingURL=main.d6482aa7.chunk.js.map