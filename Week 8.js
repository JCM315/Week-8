class OfficeMember {
  constructor(name = "Unknown", position = "Unknown") {
    this.name = name;
    this.position = position;
  }

  /* the code defines a simple class that represents an office member, with a name and position, and provides a method for describing the member.
  */
  describe() {
    return `${this.name} works as a ${this.position}`;
  }
}

class Company {
  constructor(name = "Unknown") {
    this.name = name;
    this.members = [];
  }

  /*The selected code is part of a JavaScript class that defines a menu for managing a list of companies. The addMember() method defines a conditional statement that checks whether the provided member is an instance of the OfficeMember class. If the member is valid, the method adds it to the list of members. 
  If the member is not valid, the method logs an error message to the console. */
  addMember(member) {
    if (member instanceof OfficeMember) {
      this.members.push(member);
    } else {
      console.error(`Invalid member: ${member}`);
    }
  }

  /*The selected code is part of a JavaScript class that defines a menu for managing a list of companies. The start() method defines a loop that displays the main menu options and processes user input until the user selects the exit option.*/
  describe() {
    return `${this.name} has ${this.members.length} members.`;
  }
}

class Menu {
  constructor() {
    this.companies = [];
  }

  
  /*The selected code is part of a JavaScript class that defines a menu for managing a list of companies. The start() method defines a loop that displays the main menu options and processes user input until the user selects the exit option.
  */ 
  start() {
    let selection;
    do {
      selection = this.showMainMenuOptions();
      switch (selection) {
        case "1":
          this.companies.push(new Company(prompt("Enter name for new company: ")));
          break;
        case "2":
          const company = this.companies[prompt("Enter the index of the company that you want to view:")];
          if (company) {
            company.addMember(new OfficeMember(prompt("Enter name for new member: "), prompt("Enter position for new member: ")));
          }
          break;
        case "3":
          this.companies.splice(prompt("Enter the index of the company that you wish to delete: "), 1);
          break;
        case "4":
          alert(this.companies.map((company, index) => `${index}) ${company.describe()}`).join('\n'));
          break;
      }
    } while (selection != 0)
    alert("Goodbye!");
  }

  /*The function uses a prompt to display the menu options and to collect input from the user. The options are numbered from 0 to 4, with 0 being the exit option. The function returns the selected option as a number.
  */
  showMainMenuOptions() {
    return prompt(`
0) exit
1) create a new company
2) add a new member to a company
3) delete a company
4) display all companies
`);
  }
}

new Menu().start();
