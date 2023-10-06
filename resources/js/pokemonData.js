let pokemonChar = [
  {
    name: "Dedenne",
    img: "./resources/images/Dedenne.png",
    species: "Antenna Pokémon",
    type: ["electric", "fairy"],
    stats: {
      HP: 67,
      Attack: 58,
      Defense: 57,
      "Sp.Atk": 81,
      "Sp.Def": 67,
      Speed: 101,
      Total: 431,
    },
  },
  {
    name: "Cinccino",
    img: "./resources/images/cinccino.png",
    species: "Scarf Pokémon",
    type: "normal",
    stats: {
      HP: 75,
      Attack: 95,
      Defense: 60,
      "Sp.Atk": 65,
      "Sp.Def": 60,
      Speed: 115,
      Total: 470,
    },
  },
  {
    name: "Charizard",
    img: "./resources/images/Charizard.png",
    species: "Flame Pokémon",
    type: ["fire", "flying"],
    stats: {
      HP: 78,
      Attack: 84,
      Defense: 78,
      "Sp.Atk": 109,
      "Sp.Def": 85,
      Speed: 100,
      Total: 534,
    },
  },
  {
    name: "Snivy",
    img: "./resources/images/Snivy.png",
    species: "Grass Snake Pokémon",
    type: "grass",
    stats: {
      HP: 45,
      Attack: 45,
      Defense: 55,
      "Sp.Atk": 45,
      "Sp.Def": 55,
      Speed: 63,
      Total: 308,
    },
  },
  {
    name: "Pikachu",
    img: "./resources/images/Pikachu.png",
    species: "Mouse Pokémon",
    type: "electric",
    stats: {
      HP: 35,
      Attack: 55,
      Defense: 40,
      "Sp.Atk": 50,
      "Sp.Def": 50,
      Speed: 90,
      Total: 320,
    },
  },
  {
    name: "Bulbasaur",
    img: "resources/images/Bulbasaur.png",
    species: "Seed Pokémon",
    type: ["grass", "poison"],
    stats: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      "Sp.Atk": 65,
      "Sp.Def": 65,
      Speed: 45,
      Total: 318,
    },
  },
  {
    name: "Charmander",
    img: "resources/images/Charmander.png",
    species: "Lizard Pokémon",
    type: "fire",
    stats: {
      HP: 39,
      Attack: 52,
      Defense: 43,
      "Sp.Atk": 60,
      "Sp.Def": 50,
      Speed: 65,
      Total: 309,
    },
  },
  {
    name: "Squirtle",
    img: "resources/images/squirtle.png",
    species: "Tiny Turtle Pokémon",
    type: "water",
    stats: {
      HP: 44,
      Attack: 48,
      Defense: 65,
      "Sp.Atk": 50,
      "Sp.Def": 64,
      Speed: 43,
      Total: 314,
    },
  },
  {
    name: "Jigglypuff",
    img: "resources/images/jigglypuff.png",
    species: "Balloon Pokémon",
    type: ["normal", "fairy"],
    stats: {
      HP: 115,
      Attack: 45,
      Defense: 20,
      "Sp.Atk": 45,
      "Sp.Def": 25,
      Speed: 20,
      Total: 270,
    },
  },
  {
    name: "Gastly",
    img: "resources/images/gastly.png",
    species: "Gas Pokémon",
    type: ["ghost", "poison"],
    stats: {
      HP: 30,
      Attack: 35,
      Defense: 30,
      "Sp.Atk": 100,
      "Sp.Def": 35,
      Speed: 80,
      Total: 310,
    },
  },
  {
    name: "Mew",
    img: "resources/images/mew.png",
    species: "New Species Pokémon",
    type: "Psychic",
    stats: {
      HP: 100,
      Attack: 100,
      Defense: 100,
      "Sp.Atk": 100,
      "Sp.Def": 100,
      Speed: 100,
      Total: 600,
    },
  },
  {
    name: "Glalie",
    img: "resources/images/glalie.webp",
    species: "Face Pokémon",
    type: "Ice",
    stats: {
      HP: 80,
      Attack: 80,
      Defense: 80,
      "Sp.Atk": 80,
      "Sp.Def": 80,
      Speed: 80,
      Total: 480,
    },
  },
  {
    name: "Swampert",
    img: "resources/images/swampert.png",
    species: "Mud Fish Pokémon",
    type: ["water", "ground"],
    stats: {
      HP: 100,
      Attack: 110,
      Defense: 90,
      "Sp.Atk": 85,
      "Sp.Def": 90,
      Speed: 60,
      Total: 535,
    },
  },
  {
    name: "Scizor",
    img: "resources/images/scizor.png",
    species: "Pincer Pokémon",
    type: ["bug", "steel"],
    stats: {
      HP: 70,
      Attack: 130,
      Defense: 100,
      "Sp.Atk": 55,
      "Sp.Def": 80,
      Speed: 65,
      Total: 500,
    },
  },
  {
    name: "Nidoqueen",
    img: "resources/images/nidoqueen.png",
    species: "Drill Pokémon",
    type: ["poison", "ground"],
    stats: {
      HP: 90,
      Attack: 92,
      Defense: 87,
      "Sp.Atk": 75,
      "Sp.Def": 85,
      Speed: 76,
      Total: 505,
    },
  },

  {
    name: "Sandslash",
    img: "resources/images/sandlash.png",
    species: "Mouse Pokémon",
    type: "ground",
    stats: {
      HP: 75,
      Attack: 100,
      Defense: 110,
      "Sp.Atk": 45,
      "Sp.Def": 55,
      Speed: 65,
      Total: 450,
    },
  },
  {
    name: "Oddish",
    img: "resources/images/oddish.png",
    species: "Weed Pokémon",
    type: ["grass", "poison"],
    stats: {
      HP: 45,
      Attack: 50,
      Defense: 55,
      "Sp.Atk": 75,
      "Sp.Def": 65,
      Speed: 30,
      Total: 320,
    },
    
  },
  {
    name: "Snorlax",
    img: "resources/images/snorlax.png",
    species: "Sleeping Pokémon",
    type: "normal",
    stats: {
      HP: 160,
      Attack: 110,
      Defense: 65,
      "Sp.Atk": 65,
      "Sp.Def": 110,
      Speed: 30,
      Total: 540,
    },
  },
  {
    name: "Poliwrath",
    img: "resources/images/poliwrath.png",
    species: "Tadpole Pokémon",
    type: ["water", "fighting"],
    stats: {
      HP: 90,
      Attack: 95,
      Defense: 95,
      "Sp.Atk": 70,
      "Sp.Def": 90,
      Speed: 70,
      Total: 510,
    },
  },
  {
    name: "Golem",
    img: "resources/images/Golem.png",
    species: "Megaton Pokémon",
    type: ["rock", "ground"],
    stats: {
      HP: 80,
      Attack: 120,
      Defense: 130,
      "Sp.Atk": 55,
      "Sp.Def": 65,
      Speed: 45,
      Total: 495,
    },
  },
  {
    name: "Articuno",
    img: "resources/images/Articuno.png",
    species: "Freeze Pokémon",
    type: ["ice", "flying"],
    stats: {
      HP: 90,
      Attack: 85,
      Defense: 100,
      "Sp.Atk": 95,
      "Sp.Def": 125,
      Speed: 85,
      Total: 580,
    },
  },
  {
    name: "Zapdos",
    img: "resources/images/Zapdos.png",
    species: "Electric Pokémon",
    type: ["electric", "flying"],
    stats: {
      HP: 90,
      Attack: 90,
      Defense: 85,
      "Sp.Atk": 125,
      "Sp.Def": 90,
      Speed: 100,
      Total: 580,
    },
  },
  {
    name: "Salamence",
    img: "resources/images/Salamence.png",
    species: "Dragon Pokémon",
    type: ["dragon", "flying"],
    stats: {
      HP: 95,
      Attack: 135,
      Defense: 80,
      "Sp.Atk": 110,
      "Sp.Def": 80,
      Speed: 100,
      Total: 600,
    },
  },
  {
    name: "Rayquaza",
    img: "resources/images/Rayquaza.png",
    species: "Sky High Pokémon",
    type: ["dragon", "flying"],
    stats: {
      HP: 105,
      Attack: 150,
      Defense: 90,
      "Sp.Atk": 150,
      "Sp.Def": 90,
      Speed: 95,
      Total: 680,
    },
  },
  {
    name: "Metang",
    img: "resources/images/metang.png",
    species: "Iron Claw Pokémon",
    type: ["steel", "psychic"],
    stats: {
      HP: 60,
      Attack: 75,
      Defense: 100,
      "Sp.Atk": 55,
      "Sp.Def": 80,
      Speed: 50,
      Total: 420,
    },
  },

  {
    name: "Torterra",
    img: "resources/images/torterra.png",
    species: "Continent Pokémon",
    type: ["grass", "ground"],
    stats: {
      HP: 95,
      Attack: 109,
      Defense: 105,
      "Sp.Atk": 75,
      "Sp.Def": 85,
      Speed: 56,
      Total: 525,
    },
  },
  {
    name: "Empoleon",
    img: "resources/images/empoleon.png",
    species: "Emperor Pokémon",
    type: ["water", "steel"],
    stats: {
      HP: 84,
      Attack: 86,
      Defense: 88,
      "Sp.Atk": 111,
      "Sp.Def": 101,
      Speed: 60,
      Total: 530,
    },
  },
  {
    name: "Combee",
    img: "resources/images/combee.png",
    species: "Tiny Bee Pokémon",
    type: ["bug", "flying"],
    stats: {
      HP: 30,
      Attack: 30,
      Defense: 42,
      "Sp.Atk": 30,
      "Sp.Def": 42,
      Speed: 70,
      Total: 244,
    },
  },
  {
    name: "Stunky",
    img: "resources/images/stunky.png",
    species: "Skunk Pokémon",
    type: ["poison", "dark"],
    stats: {
      HP: 63,
      Attack: 63,
      Defense: 47,
      "Sp.Atk": 41,
      "Sp.Def": 41,
      Speed: 74,
      Total: 329,
    },
  },
  {
    name: "Scolipede",
    img: "resources/images/scolipede.webp",
    species: "Megapede Pokémon",
    type: ["bug", "poison"],
    stats: {
      HP: ,
      Attack: ,
      Defense: ,
      "Sp.Atk": ,
      "Sp.Def": ,
      Speed: ,
      Total: ,
    },
  },
  {
    name: "Zoroark",
    img: "resources/images/Zoroark.png",
    species: "Illusion Fox Pokémon",
    type: "dark",
    stats: {
      HP: ,
      Attack: ,
      Defense: ,
      "Sp.Atk": ,
      "Sp.Def": ,
      Speed: ,
      Total: ,
    },
  },
  {
    name: "Escavalier",
    img: "resources/images/Escavalier.png",
    species: "Cavalry Pokémon",
    type: ["bug", "steel"],
    stats: {
      HP: ,
      Attack: ,
      Defense: ,
      "Sp.Atk": ,
      "Sp.Def": ,
      Speed: ,
      Total: ,
    },
  },
  {
    name: "Vanillish",
    img: "resources/images/Vanillish.png",
    species: "Icy Snow Pokémon",
    type: "ice",
    stats: {
      HP: ,
      Attack: ,
      Defense: ,
      "Sp.Atk": ,
      "Sp.Def": ,
      Speed: ,
      Total: ,
    },
  },
  {
    name: "Ferroseed",
    img: "resources/images/ferroseed.png",
    species: "Thorn Seed Pokémon",
    type: ["grass", "steel"],
    stats: {
      HP: ,
      Attack: ,
      Defense: ,
      "Sp.Atk": ,
      "Sp.Def": ,
      Speed: ,
      Total: ,
    },
  },

  {
    name: "Tyrunt",
    img: "resources/images/Tyrunt.png",
    species: "",
    type: "",
  },
  {
    name: "Klinklang",
    img: "resources/images/Klinklang.png",
    species: "",
    type: "",
    stats: {
      HP: ,
      Attack: ,
      Defense: ,
      "Sp.Atk": ,
      "Sp.Def": ,
      Speed: ,
      Total: ,
    },
  },
  {
    name: "Golurk",
    img: "resources/images/Golurk.png",
    species: "",
    type: "",
    stats: {
      HP: ,
      Attack: ,
      Defense: ,
      "Sp.Atk": ,
      "Sp.Def": ,
      Speed: ,
      Total: ,
    },
  },
  {
    name: "Zekrom",
    img: "resources/images/zekrom.png",
    species: "",
    type: "",
    stats: {
      HP: ,
      Attack: ,
      Defense: ,
      "Sp.Atk": ,
      "Sp.Def": ,
      Speed: ,
      Total: ,
    },
  },
  {
    name: "",
    img: "resources/images/zekrom.png",
    species: "",
    type: "",
    stats: {
      HP: ,
      Attack: ,
      Defense: ,
      "Sp.Atk": ,
      "Sp.Def": ,
      Speed: ,
      Total: ,
    },
  },
  {
    name: "",
    img: "resources/images/zekrom.png",
    species: "",
    type: "",
    stats: {
      HP: ,
      Attack: ,
      Defense: ,
      "Sp.Atk": ,
      "Sp.Def": ,
      Speed: ,
      Total: ,
    },
  },
  {
    name: "",
    img: "resources/images/zekrom.png",
    species: "",
    type: "",
    stats: {
      HP: ,
      Attack: ,
      Defense: ,
      "Sp.Atk": ,
      "Sp.Def": ,
      Speed: ,
      Total: ,
    },
  },
];

export default pokemonChar;
