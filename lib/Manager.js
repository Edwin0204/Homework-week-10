const TeamMember = require('./TeamMember');


class Manager extends TeamMember {
    constructor(name, id, email, officeNumber) {
        // call parent constructor here:
        super(name, id, email);
        this.officeNumber = officeNumber;

    }
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;