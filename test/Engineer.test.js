const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Edwin', '1', 'test@gmail.com','github');

test('Engineer object', () => {
    expect(engineer.name).toBe('Edwin');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('test@gmail.com');
    expect(engineer.github).toBe('github')
});

test('Name method', () => {
    expect(engineer.getName()).toBe('Edwin');
});

test('Id method', () => {
    expect(engineer.getId()).toBe('1');
});

test('Email method', () => {
    expect(engineer.getEmail()).toBe('test@gmail.com');
});

test('Role method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

test('OfficeNumber method', () => {
    expect(engineer.getGithub()).toBe('github');
});