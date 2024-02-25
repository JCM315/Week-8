
class MenuItem {
    constructor(name, price, description) {
      this.name = name;
      this.price = price;
      this.description = description;
    }
  }
  

  class Menu {
    constructor() {
      this.items = [];
    }
  
 
    /* he code creates a new instance of the MenuItem class with the specified name, price, and description,
    and then adds it to the items array using the push method. 
    This creates a new MenuItem object that can be accessed and used by other methods in the class.*/
    
     createItem(name, price, description) {
      let newItem = new MenuItem(name, price, description);
      this.items.push(newItem);
    }
  
/* The code uses string concatenation (${item.name} - $${item.price}) to print the item name and price. It also uses string concatenation to print the item description, followed by a separator line */


    viewItems() {

      for (let item of this.items) {
        console.log(`${item.name} - $${item.price}`);
        console.log(`${item.description}`);
        console.log("--------------------");
      }
    }
  
    /*The this keyword in the function refers to the current element in the array being processed. In this case, the current element is an instance of the MenuItem class, so the name property can be accessed.
    By using the filter method, the original array is not modified, and a new array is created with only the elements that match the specified criteria. */ 
    deleteItem(name) {
      this.items = this.items.filter(item => item.name !== name);
    }
  }
  
  
  let menu = new Menu();

  menu.createItem("Dodger Dogs", 13, "It is a 10-inch pork wiener wrapped in a steamed bun.");
  menu.createItem("BBQ", 50, "The BBQ platter comes with a half rack of smoked pork ribs, smoked half chicken, smoked brisket, mac and cheese, cornbread, fresh corn and baked beans.");
  menu.createItem("Greek Loaded Fries", 15, "crinkle-cut fries with gyro meat, feta cream sauce, tomatoes, Kalamata olives, sliced red onions, pepperoncini, and feta cheese");
  
  menu.viewItems();
  menu.deleteItem("BBQ");
  menu.viewItems();