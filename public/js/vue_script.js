/*var vm = new Vue({
  el: '#vueContent',
  data: {
    //headerTitle: 'Welcome to BurgersOnline',
    burgerList: food_menu },
  methods: {
      markDone: function() {
        //var myButton = document.getElementbyId('myButtonID');
          console.log("klickat på knappen!");
      }
  }
});
*/



var vm = new Vue({
  el: '#vueContent',
  data: {
    burgerList: food_menu,
      burgerdetails:{
      fullname:"",
      email:"",
      payment:"MasterCard",
      gender:"",
      chosen_burger:[],
    },

  methods: {
      markDone: function() {
          console.log("klickat på knappen!");
      }
    }
  }});







/*

var vm = new Vue({
   el: '#dots',
   data: {
     orders: {},
   },
   created: function () {
     socket.on('initialize', function (data) {
       this.orders = data.orders;
     }.bind(this));

     socket.on('currentQueue', function (data) {
       this.orders = data.orders;
     }.bind(this));
   },
   methods: {
     getNext: function () {
       var lastOrder = Object.keys(this.orders).reduce( function (last, next) {
         return Math.max(last, next);
       }, 0);
       return lastOrder + 1;
     },
     addOrder: function (event) {
       socket.emit("addOrder", { orderId: this.getNext(),
                                 details: { x: event.clientX-10 - event.currentTarget.getBoundingClientRect().left,
                                            y: event.clientY-10 - event.currentTarget.getBoundingClientRect().top},
                                 orderItems: ["Beans", "Curry"]
                               });
     }
   }
 });

/*
function MenuItem(prod_name, allergy, price){
this.productName=prod_name;
this.allergy=allergy;
this.price=price;
this.productinfo=function(){
return this.productName + ' ' + this.allergy + ' ' + this.price};
}

var burger1=new MenuItem('The Best Burger,', 'Contains gluten,', '95:-,');
console.log( burger1.productinfo());

var burger2=new MenuItem('The Beautiful Burger,', 'Contains gluten and lactose','100:-,');
console.log( burger2.productinfo());

var burger3=new MenuItem('The Big Burger,','Allergy friendly!','120:-,');
console.log( burger3.productinfo());
/*
var burger4=new MenuItem('The Bold Burger,','Allergy friendly!','130:-,');
console.log( burger4.productinfo());

var burger5=new MenuItem('The Blue Burger,','Allergy friendly!','140:-,');
console.log( burger5.productinfo());

var burgerList=[burger1,burger2,burger3];
*/
/*
new Vue({
    el: '#orders',
    methods: {
        markDone: function() {
            //Add some functionality
        }
    }
});*/
