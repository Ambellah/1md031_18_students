var socket = io();

var vm = new Vue({
  el: '#vueContent',
  data: {
    burgerList: food_menu,
    burgerdetails:{
      fullname:"",
      email:"",
      payment:"MasterCard",
      gender:"",
      chosen_burger:[]
    },

    orderId:0,
    orders:{},
    show:false,
    x:0,
    y:0
  },

  methods: {
    markDone: function() {
      this.show=true,
      console.log("klickat!");
    },

    getNext: function () {
      this.orderId = this.orderId+1;
      return this.orderId;
    
    },
    addOrder: function (event) {
      this.markDone();
      socket.emit("addOrder", { orderId: this.getNext(),
        details: { x:this.x,
                  y:this.y},
          orderItems: this.burgerdetails.chosen_burger,
          personalInfo: [this.burgerdetails.fullname, this.burgerdetails.email, this.burgerdetails.payment, this.burgerdetails.gender]
        });
      },
      displayOrder: function (event) {
        this.x=event.clientX-10 - event.currentTarget.getBoundingClientRect().left;
        this.y=event.clientY-10 - event.currentTarget.getBoundingClientRect().top;
        }
      }


    });
