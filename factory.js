function MemberFactory() {
  this.createMember = function(name, type) {
    let member;

    if (type === 'simple') {
      member = new simpleMembership(name);
    } else if (type === 'standard') {
      member = new standardMembership(name);
    } else if (type === 'super') {
      member = new superMembership(name);
    }
    member.type = type;
    member.define = function() {
      return `${this.name} (${this.type}): ${this.cost}`;
    };
    return member;
  };
}

const simpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
};

const standardMembership = function(name) {
  this.name = name;
  this.cost = '$15';
};

const superMembership = function(name) {
  this.name = name;
  this.cost = '$25';
};

const members = [];

const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Cris Norris', 'super'));
members.push(factory.createMember('Jane Smith', 'standard'));

members.forEach(member => {
  console.log(member.define());
});
