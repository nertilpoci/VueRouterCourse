(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de167"],{"83c9":function(e,t,s){"use strict";s.r(t);var n=s("7a23"),r={class:"container"},o={class:"row g-3 justify-content-center"},a={class:"col"},c=Object(n["h"])("h2",null,"Login",-1),u={class:"mb-3"},l=Object(n["h"])("label",{for:"username",class:"form-label"},"Username",-1),i={class:"mb-3"},b=Object(n["h"])("label",{for:"password",class:"form-label"},"Password",-1),d=Object(n["h"])("div",{class:"mb-3"},[Object(n["g"])("Username/Password: "),Object(n["h"])("b",null,"test")],-1),m=Object(n["h"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1);function p(e,t,s,p,h,j){return Object(n["r"])(),Object(n["e"])("div",r,[Object(n["h"])("div",o,[Object(n["h"])("div",a,[Object(n["h"])("form",{onSubmit:t[3]||(t[3]=function(){return j.onSubmit&&j.onSubmit.apply(j,arguments)})},[c,Object(n["h"])("div",u,[l,Object(n["J"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return h.username=e}),required:"",class:"form-control",id:"username"},null,512),[[n["G"],h.username]])]),Object(n["h"])("div",i,[b,Object(n["J"])(Object(n["h"])("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return h.password=e}),required:"",class:"form-control",id:"password"},null,512),[[n["G"],h.password]])]),d,m],32)])])])}var h={name:"Login Component",data:function(){return{username:null,password:null}},methods:{onSubmit:function(e){e.preventDefault(),"test"==this.username&&"test"==this.password?(this.$store.commit("isLoggedIn",!0),this.$router.push("/")):alert("Invalid username or password")}}};h.render=p;t["default"]=h}}]);
//# sourceMappingURL=chunk-2d0de167.fd65e318.js.map