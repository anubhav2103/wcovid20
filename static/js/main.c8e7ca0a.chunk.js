(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),i=n.n(c),l=n(3),o=n(4),s=n(6),u=n(5),p=(n(12),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={articles:[]},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-13&sortBy=publishedAt&apiKey=e61ed2d9c64744d39d1031e4d60c5a62").then((function(e){return e.json()})).then((function(t){e.setState({articles:t.articles})}))}},{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",{className:"app"},this.state.articles.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("h2",null,e.title),r.a.createElement("img",{src:e.urlToImage,style:{width:"50vh"}}),r.a.createElement("a",{href:e.url},"Read more"),r.a.createElement("p",null,e.content))})))}}]),n}(a.Component));i.a.render(r.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.c8e7ca0a.chunk.js.map