Vue.component('language-list', {
  data: function() {
    return {
      message: 'My Languages',
      skills:[
       {
          "id": 0,
         "name": "javascript",
          "img": "/img/javascript.png",
          "component": "javascript"  
       },
        {
          "id": 1,
          "name": "html",
          "img": "/img/html5.png",
          "component": "html",
        },
        {
          "id" : 2,
          "name": "css",
          "img": "/img/css3.png",
          "component": "css",
        },
        {
          "id" : 3,
          "name": "node",
          "img": "/img/node.png",
          "component": "node",
        },
        {
          "id" : 4,
          "name": "vue",
          "img": "/img/vue.png",
          "component": "vue",
        },
        {
          "id" : 5,
          "name": "react",
          "img": "/img/react.png",
          "component": "react",
        },
        {
          "id" : 6,
          "name": "php",
          "img": "/img/php.png",
          "component": "php",
        },
        {
          "id" : 7,
          "name": "cakephp",
          "img": "/img/cakephp.png",
          "component": "php",
        },
        {
          "id" : 8,
          "name": "angular",
          "img": "/img/angular.png",
          "component": "angular",
        },
        {
          "id" : 9,
          "name": "jquery",
          "img": "/img/jquery.png",
          "component": "javascript",
        },
      ]
    }
  },
  template: '<ul><li v-for="skill in skills"><img :src="skill.img" /></li></ul>',
})
new Vue({
  el: '#app',
  // data: {
  //   message: 'Hello Vue!',
  //   skills:[
  //   	{
  //       "id": 0,
  //   	  "name": "javascript",
  //       "img": "/img/javascript.png",
  //       "component": "javascript"	
  //   	},
  //     {
  //       "id": 1,
  //       "name": "html",
  //       "img": "/img/html5.png",
  //       "component": "html",
  //     },
  //     {
  //       "id" : 2,
  //       "name": "css",
  //       "img": "/img/css3.png",
  //       "component": "css",
  //     },
  //     {
  //       "id" : 3,
  //       "name": "node",
  //       "img": "/img/node.png",
  //       "component": "node",
  //     },
  //     {
  //       "id" : 4,
  //       "name": "vue",
  //       "img": "/img/vue.png",
  //       "component": "vue",
  //     },
  //     {
  //       "id" : 5,
  //       "name": "react",
  //       "img": "/img/react.png",
  //       "component": "react",
  //     },
  //     {
  //       "id" : 6,
  //       "name": "php",
  //       "img": "/img/php.png",
  //       "component": "php",
  //     },
  //     {
  //       "id" : 7,
  //       "name": "cakephp",
  //       "img": "/img/cakephp.png",
  //       "component": "php",
  //     },
  //     {
  //       "id" : 8,
  //       "name": "angular",
  //       "img": "/img/angular.png",
  //       "component": "angular",
  //     },
  //     {
  //       "id" : 9,
  //       "name": "jquery",
  //       "img": "/img/jquery.png",
  //       "component": "javascript",
  //     },
  //   ],
  //   template: '<h1>{message}</h1>',
  // }
});

function setWindowHeight(){
    var wHeight = window.innerHeight;
    document.body.style.height = wHeight + "px";
}

window.addEventListener("resize",setWindowHeight,false);