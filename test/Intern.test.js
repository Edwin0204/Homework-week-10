const Intern = require('../lib/Intern');
const intern = new Intern('Edwin', '1', 'test@gmail.com','school');

test('intern object', () => {
    expect(intern.name).toBe('Edwin');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('test@gmail.com');
    expect(intern.school).toBe('school')
});

test('Name method', () => {
    expect(intern.getName()).toBe('Edwin');
});

test('Id method', () => {
    expect(intern.getId()).toBe('1');
});

test('Email method', () => {
    expect(intern.getEmail()).toBe('test@gmail.com');
});

test('Role method', () => {
    expect(intern.getRole()).toBe('Intern');
});

test('OfficeNumber method', () => {
    expect(intern.getSchool()).toBe('school');
});