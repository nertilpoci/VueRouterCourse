(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4591ec4"],{"13c9":function(e,t,c){"use strict";c("c6cd3")},1986:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),l=Object(a["L"])("data-v-01ddef8d");Object(a["u"])("data-v-01ddef8d");var n={class:"row g-0"},s={class:"col-2"},i={class:"col-10"},r={class:"row g-0  justify-content-md-center"},b={class:"col"},o={class:"col child-outlet"};Object(a["s"])();var d=l((function(e,t,c,d,u,j){var O=Object(a["z"])("Labels"),f=Object(a["z"])("Notes"),v=Object(a["z"])("AnimatedTransition"),p=Object(a["z"])("router-view");return Object(a["r"])(),Object(a["e"])("div",n,[Object(a["h"])("div",s,[Object(a["h"])(O)]),Object(a["h"])("div",i,[Object(a["h"])("div",r,[Object(a["h"])("div",b,[Object(a["h"])(f)]),Object(a["h"])("div",o,[Object(a["h"])(p,null,{default:l((function(e){var t=e.Component,c=e.route;return[Object(a["h"])(v,{mode:"out-in",name:c.meta.transition},{default:l((function(){return[(Object(a["r"])(),Object(a["e"])(Object(a["A"])(t)))]})),_:2},1032,["name"])]})),_:1})])])])])})),u=Object(a["L"])("data-v-ddf32228");Object(a["u"])("data-v-ddf32228");var j={class:"row g-0"},O={class:"col-12"},f=Object(a["h"])("i",{class:"fa fa-th"},null,-1),v=Object(a["h"])("i",{class:"fa fa-list"},null,-1),p=Object(a["h"])("i",{class:"fa fa-plus"},null,-1),h={class:"col-12"},m={key:0,class:"row g-0"},g={key:1,class:"list-group m-1 p-3"};Object(a["s"])();var y=u((function(e,t,c,l,n,s){var i=Object(a["z"])("router-link"),r=Object(a["z"])("NoteItemCard"),b=Object(a["z"])("NoteItemList");return Object(a["r"])(),Object(a["e"])("div",j,[Object(a["h"])("div",O,[n.displayMode!=n.displayModes.card?(Object(a["r"])(),Object(a["e"])("button",{key:0,onClick:t[1]||(t[1]=function(e){return n.displayMode=n.displayModes.card}),type:"button",class:"float-end btn btn-link"},[f])):Object(a["f"])("",!0),n.displayMode!=n.displayModes.list?(Object(a["r"])(),Object(a["e"])("button",{key:1,onClick:t[2]||(t[2]=function(e){return n.displayMode=n.displayModes.list}),type:"button",class:"float-end btn btn-link"},[v])):Object(a["f"])("",!0),Object(a["h"])(i,{to:{name:"newnote"},class:"float-end btn btn-link"},{default:u((function(){return[p]})),_:1})]),Object(a["h"])("div",h,[n.displayMode==n.displayModes.card?(Object(a["r"])(),Object(a["e"])("div",m,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(e.$store.getters.allNotes,(function(e){return Object(a["r"])(),Object(a["e"])("div",{class:"col",key:e.id},[Object(a["h"])(r,{onDelete:function(t){return s.deleteNote(e.id)},onClick:function(t){return s.editNote(e.id)},class:"m-1 note-card",value:e},null,8,["onDelete","onClick","value"])])})),128))])):(Object(a["r"])(),Object(a["e"])("div",g,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(e.$store.getters.allNotes,(function(e){return Object(a["r"])(),Object(a["e"])(i,{key:e.id,to:{name:"editnote",params:{id:e.id}},custom:""},{default:u((function(t){var c=t.navigate;return[Object(a["h"])(b,{onClick:function(t){return c(e.id)},onDelete:function(t){return s.deleteNote(e.id)},class:"m-2",value:e},null,8,["onClick","onDelete","value"])]})),_:2},1032,["to"])})),128))]))])])})),k=Object(a["L"])("data-v-964a39dc");Object(a["u"])("data-v-964a39dc");var C={class:"card "},L=Object(a["h"])("img",{class:"card-img-top",src:"https://i.picsum.photos/id/20/1200/300.jpg?hmac=8rrSN6gcVsYYzYJs87AlbxZVnO0M38r6eD9kKJq1P3Q",alt:"Card image cap"},null,-1),w={class:"card-body"},_={class:"card-title"},N={class:"card-subtitle mb-2"},x={class:"card-text"},M={key:0,class:"badge badge-pill badge-success bg-danger"},z={key:1,class:"badge badge-pill badge-success bg-success"},I=Object(a["h"])("i",{class:"fa fa-trash"},null,-1),$={key:0,class:"card-footer"};Object(a["s"])();var A=k((function(e,t,c,l,n,s){return Object(a["r"])(),Object(a["e"])("div",C,[L,Object(a["h"])("div",w,[Object(a["h"])("h5",_,Object(a["C"])(c.value.title),1),Object(a["h"])("h6",N,Object(a["C"])(c.value.createdOn),1),Object(a["h"])("p",x,Object(a["C"])(c.value.note),1),c.value.done?(Object(a["r"])(),Object(a["e"])("span",z,"Done")):(Object(a["r"])(),Object(a["e"])("span",M,"Unfinished")),Object(a["h"])("a",{href:"javascript:;",class:"card-link text-danger float-end",onClick:t[1]||(t[1]=Object(a["K"])((function(t){return e.$emit("delete")}),["stop"]))},[I])]),c.value.labels&&c.value.labels.length>0?(Object(a["r"])(),Object(a["e"])("div",$,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(c.value.labels,(function(e){return Object(a["r"])(),Object(a["e"])("span",{key:e.id,class:"m-1 badge badge-pill badge-primary bg-primary"},Object(a["C"])(e.title),1)})),128))])):Object(a["f"])("",!0)])})),D={name:"TodoItemCart",props:{value:Object}};D.render=A,D.__scopeId="data-v-964a39dc";var J=D,S=Object(a["L"])("data-v-26f85ce4");Object(a["u"])("data-v-26f85ce4");var T={href:"javascript:;",class:"list-group-item list-group-item-action list-group-item-light","aria-current":"true"},E={class:"d-flex w-100 justify-content-between"},K={class:"mb-1"},U={class:"mb-1"},V={class:"float-end"},Y=Object(a["h"])("i",{class:"fa fa-trash"},null,-1);Object(a["s"])();var q=S((function(e,t,c,l,n,s){return Object(a["r"])(),Object(a["e"])("a",T,[Object(a["h"])("div",E,[Object(a["h"])("h5",K,Object(a["C"])(c.value.title),1),Object(a["h"])("small",null,Object(a["C"])(c.value.createdOn),1)]),Object(a["h"])("p",U,Object(a["C"])(c.value.note),1),Object(a["h"])("small",V,[Object(a["h"])("a",{href:"javascript:;",class:"card-link text-danger",onClick:t[1]||(t[1]=Object(a["K"])((function(t){return e.$emit("delete")}),["stop"]))},[Y])])])})),G={name:"TodoItemList",props:{value:Object}};G.render=q,G.__scopeId="data-v-26f85ce4";var P=G,Q=c("41cb"),Z={name:"Notes",components:{NoteItemCard:J,NoteItemList:P},data:function(){return{displayModes:{card:"cards",list:"list"},displayMode:"list"}},props:{},methods:{editNote:function(e){Q["a"].push({name:"editnote",params:{id:e}})},deleteNote:function(e){this.$store.commit("deleteNote",e)}}};c("13c9");Z.render=y,Z.__scopeId="data-v-ddf32228";var B=Z,F=Object(a["L"])("data-v-60566840");Object(a["u"])("data-v-60566840");var H={class:"row"},R={class:"col-12"},W=Object(a["h"])("i",{class:"fa fa-plus"},null,-1),X={class:"col-12"},ee={class:"list-group"},te={class:"d-flex w-100 justify-content-between"},ce=Object(a["h"])("small",null,null,-1),ae=Object(a["h"])("i",{class:"fa fa-trash"},null,-1);Object(a["s"])();var le=F((function(e,t,c,l,n,s){var i=Object(a["z"])("AddEditLabel"),r=Object(a["z"])("h7");return Object(a["r"])(),Object(a["e"])("div",H,[Object(a["h"])("div",R,[n.editingLabel?Object(a["f"])("",!0):(Object(a["r"])(),Object(a["e"])("button",{key:0,onClick:t[1]||(t[1]=function(){return s.createLabel&&s.createLabel.apply(s,arguments)}),type:"button",class:"btn btn-sm"},[W])),n.editingLabel?(Object(a["r"])(),Object(a["e"])(i,{key:1,onClose:t[2]||(t[2]=function(e){return n.editingLabel=null}),value:n.editingLabel},null,8,["value"])):Object(a["f"])("",!0)]),Object(a["h"])("div",X,[Object(a["h"])("div",ee,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(e.$store.getters.allLabels,(function(e){return Object(a["r"])(),Object(a["e"])("a",{key:e.id,href:"javascript:;",class:"list-group-item list-group-item-action flex-column align-items-start"},[Object(a["h"])("div",te,[Object(a["h"])(r,{class:"mb-1"},{default:F((function(){return[Object(a["g"])(Object(a["C"])(e.title),1)]})),_:2},1024),ce,Object(a["h"])("a",{href:"javascript:;",class:"text-danger float-end",style:{"font-size":"10px"},onClick:Object(a["K"])((function(t){return s.deleteLabel(e.id)}),["stop"])},[ae],8,["onClick"])])])})),128))])])])})),ne=Object(a["L"])("data-v-221a31f4");Object(a["u"])("data-v-221a31f4");var se={class:"card"},ie={class:"card-body"},re={class:"form-group"},be=Object(a["h"])("label",{for:"title-label"},"Title",-1),oe=Object(a["h"])("hr",null,null,-1),de={class:"float-end"},ue={type:"submit",class:"btn btn-sm btn-primary m-1"};Object(a["s"])();var je=ne((function(e,t,c,l,n,s){var i=Object(a["z"])("h7");return Object(a["r"])(),Object(a["e"])("div",se,[Object(a["h"])("div",ie,[Object(a["h"])(i,{class:"card-title"},{default:ne((function(){return[Object(a["g"])(Object(a["C"])(n.label.id?"Update Label":"Create New Label"),1)]})),_:1}),Object(a["h"])("form",{onSubmit:t[3]||(t[3]=function(){return s.onSubmit&&s.onSubmit.apply(s,arguments)})},[Object(a["h"])("div",re,[be,Object(a["J"])(Object(a["h"])("input",{type:"text",class:"form-control form-control-sm",id:"title",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.label.title=e}),placeholder:"Enter title"},null,512),[[a["G"],n.label.title]])]),oe,Object(a["h"])("div",de,[Object(a["h"])("button",ue,Object(a["C"])(n.label.id?"Update":"Create"),1),Object(a["h"])("button",{class:"btn btn-sm btn-danger",onClick:t[2]||(t[2]=function(t){return e.$emit("close")})},"Cancel")])],32)])])})),Oe={name:"AddEditLabel",components:{},props:{value:Object},data:function(){return{label:null}},mounted:function(){},created:function(){this.label=this.value||{id:null,title:"",color:""}},methods:{onSubmit:function(e){e.preventDefault(),console.log("note",this.label),this.$store.commit("saveLabel",this.label),this.$emit("close")}}};Oe.render=je,Oe.__scopeId="data-v-221a31f4";var fe=Oe,ve={name:"Labels",components:{AddEditLabel:fe},data:function(){return{editingLabel:null}},props:{},methods:{deleteLabel:function(e){this.$store.commit("deleteLabel",e)},createLabel:function(){this.editingLabel={id:null,title:"",color:""}}}};c("7b52");ve.render=le,ve.__scopeId="data-v-60566840";var pe=ve,he=c("56d7"),me={components:{Notes:B,Labels:pe,AnimatedTransition:he["a"]}};c("9124");me.render=d,me.__scopeId="data-v-01ddef8d";t["default"]=me},"3ae5":function(e,t,c){},"7b52":function(e,t,c){"use strict";c("3ae5")},9124:function(e,t,c){"use strict";c("9b34")},"9b34":function(e,t,c){},c6cd3:function(e,t,c){}}]);
//# sourceMappingURL=chunk-d4591ec4.3f1083f9.js.map