const TeamMember = require('../lib/TeamMember');

const member = new TeamMember('Edwin', '1', 'test@gmail.com');

test('Teammember object', () => {
    expect(employee.name).toBe('Edwin');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('test@gmail.com');
});

test('Name method', () => {
    expect(employee.getName()).toBe('Edwin');
});

test('Id method', () => {
    expect(employee.getId()).toBe('1');
});

test('Email method', () => {
    expect(employee.getEmail()).toBe('test@gmail.com');
});

test('Role method', () => {
    expect(employee.getRole()).toBe('TeamMember');
});