const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, role, officeNumber) {
    super(name, id, email, role);
    this.officeNumber = officeNumber;
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Manager;