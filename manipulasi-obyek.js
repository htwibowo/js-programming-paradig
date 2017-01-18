var hero = {
  name: "Teenage Mutant Ninja Turtle",
  occupation: "Turn back crime",
  talk: function(value) {
    console.log("Woohooyy ... I am " + value);
  },
  address: {
    street: 'Jl. Ir. H. Juanda',
    city: 'Bandung'
  }
}

var a = hero

console.log(a.name)



console.log(hero.name);
console.log(hero['name']);
console.log(hero.address.street);
console.log(hero['address']['street']);
console.log(hero.talk(hero.name));

hero.name = "Superboy";
console.log(hero.name);
console.log(hero.talk(hero.name));

console.log(a.name)


