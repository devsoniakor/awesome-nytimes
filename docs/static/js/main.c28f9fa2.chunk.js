(this["webpackJsonpawsome-nytimes"]=this["webpackJsonpawsome-nytimes"]||[]).push([[0],{44:function(e,t,a){e.exports=a(77)},50:function(e,t,a){},51:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(15),l=a.n(c),i=(a(49),a(50),a(51),a(10)),o=a(3),s=a(9);a(56);var u=Object(s.b)((function(e){return{query:e.query}}),{})((function(e){var t=Object(o.f)();return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-lg-8"},r.a.createElement("div",{className:"card bg-searchbar mb-4"},r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("form",{className:"needs-validation",onSubmit:function(a){return function(a){a.preventDefault(),"/"!==t.location.pathname&&t.push("/"),""===a.target.query.value?a.target.classList.add("was-validated"):(e.searchArticle(a.target.query.value),a.target.classList.remove("was-validated"))}(a)}},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"input-group input-group-lg d-inline-flex"},r.a.createElement("input",{type:"text",placeholder:"Search Articles",className:"form-control",name:"query",defaultValue:e.query,required:!0}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"submit",className:"btn btn-sm btn-outline-lovo",title:"\uac80\uc0c9",formNoValidate:!0},r.a.createElement(i.c,null)),r.a.createElement("button",{className:"btn btn-sm btn-outline-lovo",title:"\uc990\uaca8\ucc3e\uae30",onClick:function(e){return e.preventDefault(),void("/favorite"!==t.location.pathname&&t.push("/favorite"))}},r.a.createElement(i.d,null))),r.a.createElement("div",{className:"invalid-feedback"},"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694"))))))))}));a(58);var m,d=function(e){var t=function(t,a){e.onFavouritesClicked(t,a)};return r.a.createElement("div",{className:"container-sm justify-content-center"},r.a.createElement("div",{className:"card mb-3 news-card"},r.a.createElement("div",{className:"row no-gutters"},function(t){if(t.multimedia.length>0){var a=t.multimedia.filter((function(e){return e.subtype.includes("smallSquare252")})),n="//placehold.it/150";return n=a.length>0?"https://www.nytimes.com/".concat(a[0].url):"https://www.nytimes.com/".concat(t.multimedia[0].url),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("a",{href:e.item.web_url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:n,className:"img-fluid d-block h-100 w-100",alt:"article media"})))}}(e.item),r.a.createElement("div",{className:e.item.multimedia.length?"col-md-8":"col"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("h5",{className:"card-title flex-grow-1"},e.item.headline.main),e.isFavourite?r.a.createElement(i.d,{className:"favourit-icon ml-3 mr-0 my-0 text-lovo",title:"\uc990\uaca8\ucc3e\uae30 \ucde8\uc18c",onClick:function(a){return t(e.item,!0)}}):r.a.createElement(i.b,{className:"favourit-icon ml-3 mr-0 my-0 text-lovo",title:"\uc990\uaca8\ucc3e\uae30\uc5d0 \ucd94\uac00\ud558\uae30",onClick:function(a){return t(e.item,!1)}})),function(e,t){var a=new RegExp("(\\S+\\s+){".concat(t,"}")),n=e.abstract,c=n.match(a);return null!==c?r.a.createElement("p",{className:"card-text"},c[0],r.a.createElement("a",{href:e.web_url,target:"_blank",rel:"noopener noreferrer",className:"text-info stretched-link"},". . .more")):r.a.createElement("p",{className:"card-text"},r.a.createElement("a",{href:e.web_url,target:"_blank",rel:"noopener noreferrer",className:"stretched-link text-decoration-none text-reset"},n))}(e.item,30))))))},E=a(39),v=a(14),f=a.n(v),p=a(23);!function(e){e[e.LOADING_IN_PROGRESS=0]="LOADING_IN_PROGRESS",e[e.FINDING_IN_PROGRESS=1]="FINDING_IN_PROGRESS",e[e.FETCHING_DONE=2]="FETCHING_DONE"}(m||(m={}));var N=function(e,t,a){return{type:"FIND_ARTICLES_SUCCESS",payload:{articles:e,query:t,page:a}}},S=function(e,t,a){return{type:"LOAD_ARTICLES_SUCCESS",payload:{articles:e,query:t,page:a}}},_=function(e){return{type:"REMOVE_FAVOURITE",payload:{id:e}}},h=a(24),y=a.n(h),I="wTwRh7Blb0nUPWPWvHQCWVupJSoQBqeu",A="https://api.nytimes.com/svc/search/v2/articlesearch.json",g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{params:{q:e,"api-key":I,page:t,fq:'source:("The New York Times")',sort:"relevance"}}},b=a(25),R=Object(s.b)((function(e){return{articles:e.articles,page:e.page,query:e.query,fetchingStatus:e.fetchingStatus,favouriteArticles:e.favourites}}),(function(e){return{loadMoreArticle:function(t,a){return e(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){var a=Object(p.a)(f.a.mark((function a(n){var r,c;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:"LOAD_ARTICLES_IN_PROGRESS"}),r=g(e,t),a.next=5,y.a.get(A,r).then((function(e){return e.data.response.docs}));case 5:c=a.sent,n(S(c,e,t)),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:"LOAD_ARTICLES_FAILED"});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(t,a))},addToFavourite:function(t){return e(function(e){return{type:"ADD_TO_FAVOURITES",payload:{article:e}}}(t))},removeFavourite:function(t){return e(_(t))}}}))((function(e){var t=function(t,a){a?e.removeFavourite(t._id):e.addToFavourite(t)},a=r.a.createElement("div",{className:"list-wrapper"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-lg-8 text-center my-3 text-lovo"},r.a.createElement(b.a,{className:"m-3 text-lovo",animation:"border"}),r.a.createElement("br",null),r.a.createElement("strong",null,"\uae30\uc0ac\ub97c \ubd88\ub7ec\uc624\ub294 \uc911\uc785\ub2c8\ub2e4")))),n=r.a.createElement("div",{className:"list-wrapper"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-lg-8"},function(){var a=[],n=e.favouriteArticles.map;return e.articles.map((function(e){a.push(r.a.createElement(d,{key:e._id,item:e,isFavourite:n[e._id],onFavouritesClicked:t}))})),a}(),function(){switch(e.fetchingStatus){case m.LOADING_IN_PROGRESS:return r.a.createElement("div",{className:"d-flex justify-content-center my-3 text-lovo"},r.a.createElement(b.a,{className:"m-3",animation:"border"}));case m.FETCHING_DONE:return e.articles.length>0?r.a.createElement("div",{className:"d-flex justify-content-center my-3"},r.a.createElement("button",{type:"button",className:"btn btn-outline-lovo mx-auto my-3",onClick:function(t){return function(t){t.preventDefault(),e.loadMoreArticle(e.query,e.page)}(t)}},r.a.createElement(E.a,null)," \uae30\uc0ac \ub354 \ubd88\ub7ec\uc624\uae30")):void 0;default:return}}())));switch(e.fetchingStatus){case m.FINDING_IN_PROGRESS:return a;case m.LOADING_IN_PROGRESS:default:return n}})),O=a(17),C=a(40),L=Object(s.b)((function(e){return{favouriteArticles:e.favourites,articles:e.articles}}),(function(e){return{removeFavourite:function(t){return e(_(t))}}}))((function(e){var t=Object(o.f)(),a=function(t){e.removeFavourite(t._id)},n=function(e){t.goBack()},c=function(){return e.articles.length>0?r.a.createElement("button",{type:"button",className:"btn btn-outline-lovo mt-4",onClick:n},r.a.createElement(i.a,null)," \uac80\uc0c9\uacb0\uacfc\ub85c \ub3cc\uc544\uac00\uae30"):r.a.createElement("p",null,"\uac80\uc0c9\ucc3d\uc5d0 \ud0a4\uc6cc\ub4dc\ub97c \ub123\uace0 \uae30\uc0ac\ub97c \uac80\uc0c9 \ud574 \uc8fc\uc138\uc694")},l=r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8 text-center py-5 text-lovo"},r.a.createElement("h1",{className:"pb-3 display-2"},r.a.createElement(C.a,null)),r.a.createElement("h4",{className:"pt-3"}," \uc990\uaca8\ucc3e\uae30 \ub41c \uae30\uc0ac\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"),r.a.createElement("div",{className:"mt-4 p-2"},c()))),s=r.a.createElement("div",{className:"list-wrapper"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"text-right align-top pt-2 pb-4"},c()),function(){var t=[],n=e.favouriteArticles.map;return e.favouriteArticles.articles.map((function(e){t.push(r.a.createElement(d,{key:e._id,item:e,isFavourite:n[e._id],onFavouritesClicked:a}))})),t}())));return e.favouriteArticles.articles.length>0?s:l})),w=Object(s.b)((function(e){return{articles:e.articles,page:e.page,query:e.query}}),(function(e){return{loadArticles:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){var a=Object(p.a)(f.a.mark((function a(n){var r,c;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:"FIND_ARTICLES_IN_PROGRESS"}),r=g(e,t),a.next=5,y.a.get(A,r).then((function(e){return e.data.response.docs}));case 5:c=a.sent,n(N(c,e,t)),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:"LOAD_ARTICLES_FAILED"});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(t))}}}))((function(e){return r.a.createElement("span",null,r.a.createElement("h1",{className:"text-center py-5 header mb-2"},"Awesome NY Times"),r.a.createElement("div",{className:"container"},r.a.createElement(O.a,null,r.a.createElement(u,{searchArticle:e.loadArticles}),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/favorite",component:L}),r.a.createElement(o.a,{path:"/",component:R})))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(11),T=a(41),F=a(42),x=a(18),G=a(43),k={articles:[],map:{}},j=Object(D.combineReducers)({articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_ARTICLES_SUCCESS":return e.concat(t.payload.articles);case"FIND_ARTICLES_SUCCESS":return t.payload.articles;case"LOAD_ARTICLES_IN_PROGRESS":case"LOAD_ARTICLES_FAILED":default:return e}},fetchingStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.FETCHING_DONE,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_ARTICLES_IN_PROGRESS":return m.LOADING_IN_PROGRESS;case"FIND_ARTICLES_IN_PROGRESS":return m.FINDING_IN_PROGRESS;case"FIND_ARTICLES_SUCCESS":case"LOAD_ARTICLES_SUCCESS":case"LOAD_ARTICLES_FAILED":return m.FETCHING_DONE;default:return e}},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FIND_ARTICLES_SUCCESS":return 1;case"LOAD_ARTICLES_SUCCESS":return++t.payload.page;case"LOAD_ARTICLES_IN_PROGRESS":case"LOAD_ARTICLES_FAILED":default:return e}},query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FIND_ARTICLES_SUCCESS":case"LOAD_ARTICLES_SUCCESS":return t.payload.query;case"LOAD_ARTICLES_IN_PROGRESS":case"LOAD_ARTICLES_FAILED":default:return e}},favourites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_FAVOURITES":return{articles:e.articles.concat(t.payload.article),map:Object(G.a)({},e.map,Object(x.a)({},t.payload.article._id,!0))};case"REMOVE_FAVOURITE":return delete e.map[t.payload.id],{articles:e.articles.filter((function(e){return e._id!==t.payload.id})),map:e.map};default:return e}}});l.a.render(r.a.createElement(s.a,{store:function(){var e=[T.a],t=D.applyMiddleware.apply(void 0,e);return Object(D.createStore)(j,Object(F.composeWithDevTools)(t))}()},r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.c28f9fa2.chunk.js.map