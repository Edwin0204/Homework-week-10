const Manager = require('../lib/Manager');
const manager = new Manager('Edwin', '1', 'test@gmail.com','2');

test('Manager object', () => {
    expect(manager.name).toBe('Edwin');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('test@gmail.com');
    expect(manager.officeNumber).toBe('2')
});

test('Name method', () => {
    expect(manager.getName()).toBe('Edwin');
});

test('Id method', () => {
    expect(manager.getId()).toBe('1');
});

test('Email method', () => {
    expect(manager.getEmail()).toBe('test@gmail.com');
});

test('Role method', () => {
    expect(manager.getRole()).toBe('Manager ');
});

test('OfficeNumber method', () => {
    expect(manager.getOfficeNumber()).toBe('2');
});
