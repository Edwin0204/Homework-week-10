const TeamMember = require('../lib/TeamMember');

const member = new TeamMember('Edwin', '1', 'test@gmail.com');

test('Teammember object', () => {
    expect(member.name).toBe('Edwin');
    expect(member.id).toBe('1');
    expect(member.email).toBe('test@gmail.com');
});

test('Name method', () => {
    expect(member.getName()).toBe('Edwin');
});

test('Id method', () => {
    expect(member.getId()).toBe('1');
});

test('Email method', () => {
    expect(member.getEmail()).toBe('test@gmail.com');
});

test('Role method', () => {
    expect(member.getRole()).toBe('TeamMember');
});