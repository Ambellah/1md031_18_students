/*html
<script src="https://vuejs.org/js/vue.js"></script>

<div v-bind:title="new Date()" v-model="headerTitle"  id="myID">
   <h1>{{ headerTitle }}</h1>
*/

var vm = new Vue({
  el: '#vueContent',
  data: {
    headerTitle: 'Welcome to BurgersOnline',
    burgerList:burgerList
  }
})

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

var burger4=new MenuItem('The Bold Burger,','Allergy friendly!','130:-,');
console.log( burger4.productinfo());

var burger5=new MenuItem('The Blue Burger,','Allergy friendly!','140:-,');
console.log( burger5.productinfo());

var burgerList=[burger1,burger2,burger3,burger4,burger5];

/*

        <!-- THE OLD TABLE
        <table id="BurgersTable">
        <thead>
        <tr>
        <th>The Best Burger</th>
        <th>The Beautiful Burger</th>
        <th>The Big Burger</th>
      </tr>
    </th>
  </thead>

  <tbody>
  <tr>
  <td><img src="https://images.unsplash.com/photo-1540265556701-ae209ac395cd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fd1a50c008e6d870e103603d5c7a294&auto=format&fit=crop&w=1868&q=80" alt="Bild på The Best Burger" title"The Best Burger by BurgersOnline" width=300px height=450px></td>
  <td><img src="https://images.unsplash.com/photo-1540981493580-8ea1113e9968?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4bf20320d674dc21ca858a01e16abe90&auto=format&fit=crop&w=1275&q=80" alt="Bild på The Big Burger" title"The Big Burger by BurgersOnline" width=300px height=450px></td>
  <td><img src="https://images.unsplash.com/photo-1504185945330-7a3ca1380535?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f2d35c4ea30a81e428e66c653748f91&auto=format&fit=crop&w=621&q=80" alt="Bild på The Beautiful Burger" title"The Beautiful Burger by BurgersOnline" width=300px height=450px></td>
</tr>

<tr class="Allergies"><u1>
<td><li> Contains gluten </li></td>
<td><li> Contains gluten and lactose</li></td>
<td><li> Allergy friendly!</li></td>
</u1></tr>

<tr><u1>
<td><li> 95:-</li></td>
<td><li> 100:-</li></td>
<td><li> 120:- </li></td>
</u1></tr>

</tbody>

<tfoot>
<tr><u2>
<td><br /><li> Include fries and beverage for + 30:-</li><br /></td>
</u2></tr>

</tfoot>
</table>
</section>
-->*/
