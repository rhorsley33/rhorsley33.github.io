Vue.component('language-list', {
  data: function() {
    return {
      message: 'My Languages',
      skills:[
       {
          "id": 0,
          "active": false,         
          "name": "javascript",
          "img": "/img/javascript.png",
          "component": "javascript"  
       },
        {
          "id": 1,
          "active": false,          
          "name": "html",
          "img": "/img/html5.png",
          "component": "html",
        },
        {
          "id": 2,
          "active": false,
          "name": "css",
          "img": "/img/css3.png",
          "component": "css",
        },
        {
          "id": 3,
          "active": false,
          "name": "node",
          "img": "/img/node.png",
          "component": "node",
        },
        {
          "id": 4,
          "active": false,
          "name": "vue",
          "img": "/img/vue.png",
          "component": "vue",
        },
        {
          "id": 5,
          "active": false,
          "name": "react",
          "img": "/img/react.png",
          "component": "react",
        },
        {
          "id": 6,
          "active": false,
          "name": "php",
          "img": "/img/php.png",
          "component": "php",
        },
        {
          "id": 7,
          "active": false,
          "name": "cakephp",
          "img": "/img/cakephp.png",
          "component": "php",
        },
        {
          "id": 8,
          "active": false,
          "name": "angular",
          "img": "/img/angular.png",
          "component": "angular",
        },
        {
          "id": 9,
          "active": false,
          "name": "jquery",
          "img": "/img/jquery.png",
          "component": "javascript",
        },
      ]
    }
  },
  methods: {
    getImages: function() {
      const skillsArr = this.skills;
      let imgCounter = 3;

      for (const skill of skillsArr) {
        if(skill.id <= 2) {
          skill.active = true;
        }
      }
    }
  },
  created() {
    this.getImages();
  },
  template: '<ul><li v-for="skill in skills"><img v-if="skill.active" :src="skill.img" /></li></ul>',
})
Vue.component('about-me', {
  data: function() {
    return {
      message: 'You want to know about me?',
    }
  },
  template: '<p>{{message}}</p>',
})
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
});

function setWindowHeight(){
    var wHeight = window.innerHeight;
    document.body.style.maxHeight = wHeight + "px";
}

window.addEventListener("resize",setWindowHeight,false);