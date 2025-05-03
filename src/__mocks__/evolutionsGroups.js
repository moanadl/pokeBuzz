const mockEvolutionsGroups = [
    {
      "first": "bulbasaur",
      "second": "ivysaur",
      "third": "venusaur"
    },
    {
      "first": "charmander",
      "second": "charmeleon",
      "third": "charizard"
    },
    {
      "first": "squirtle",
      "second": "wartortle",
      "third": "blastoise"
    },
    {
      "first": "caterpie",
      "second": "metapod",
      "third": "butterfree"
    },
    {
      "first": "weedle",
      "second": "kakuna",
      "third": "beedrill"
    },
    {
      "first": "pidgey",
      "second": "pidgeotto",
      "third": "pidgeot"
    },
    {
      "first": "rattata",
      "second": "raticate",
      "third": null
    },
    {
      "first": "spearow",
      "second": "fearow",
      "third": null
    },
    {
      "first": "ekans",
      "second": "arbok",
      "third": null
    },
    {
      "first": "pichu",
      "second": "pikachu",
      "third": "raichu"
    },
    {
      "first": "sandshrew",
      "second": "sandslash",
      "third": null
    },
    {
      "first": "nidoran-f",
      "second": "nidorina",
      "third": "nidoqueen"
    },
    {
      "first": "nidoran-m",
      "second": "nidorino",
      "third": "nidoking"
    },
    {
      "first": "cleffa",
      "second": "clefairy",
      "third": "clefable"
    },
    {
      "first": "vulpix",
      "second": "ninetales",
      "third": null
    },
    {
      "first": "igglybuff",
      "second": "jigglypuff",
      "third": "wigglytuff"
    },
    {
      "first": "zubat",
      "second": "golbat",
      "third": "crobat"
    },
    {
      "first": "oddish",
      "second": "gloom",
      "third": "vileplume"
    },
    {
      "first": "paras",
      "second": "parasect",
      "third": null
    },
    {
      "first": "venonat",
      "second": "venomoth",
      "third": null
    },
    {
      "first": "diglett",
      "second": "dugtrio",
      "third": null
    },
    {
      "first": "meowth",
      "second": "persian",
      "third": null
    },
    {
      "first": "psyduck",
      "second": "golduck",
      "third": null
    },
    {
      "first": "mankey",
      "second": "primeape",
      "third": "annihilape"
    },
    {
      "first": "growlithe",
      "second": "arcanine",
      "third": null
    },
    {
      "first": "poliwag",
      "second": "poliwhirl",
      "third": "poliwrath"
    },
    {
      "first": "abra",
      "second": "kadabra",
      "third": "alakazam"
    },
    {
      "first": "machop",
      "second": "machoke",
      "third": "machamp"
    },
    {
      "first": "bellsprout",
      "second": "weepinbell",
      "third": "victreebel"
    },
    {
      "first": "tentacool",
      "second": "tentacruel",
      "third": null
    },
    {
      "first": "geodude",
      "second": "graveler",
      "third": "golem"
    },
    {
      "first": "ponyta",
      "second": "rapidash",
      "third": null
    },
    {
      "first": "slowpoke",
      "second": "slowbro",
      "third": null
    },
    {
      "first": "magnemite",
      "second": "magneton",
      "third": "magnezone"
    },
    {
      "first": "farfetchd",
      "second": "sirfetchd",
      "third": null
    },
    {
      "first": "doduo",
      "second": "dodrio",
      "third": null
    },
    {
      "first": "seel",
      "second": "dewgong",
      "third": null
    },
    {
      "first": "grimer",
      "second": "muk",
      "third": null
    },
    {
      "first": "shellder",
      "second": "cloyster",
      "third": null
    },
    {
      "first": "gastly",
      "second": "haunter",
      "third": "gengar"
    },
    {
      "first": "onix",
      "second": "steelix",
      "third": null
    },
    {
      "first": "drowzee",
      "second": "hypno",
      "third": null
    },
    {
      "first": "krabby",
      "second": "kingler",
      "third": null
    },
    {
      "first": "voltorb",
      "second": "electrode",
      "third": null
    },
    {
      "first": "exeggcute",
      "second": "exeggutor",
      "third": null
    },
    {
      "first": "cubone",
      "second": "marowak",
      "third": null
    },
    {
      "first": "tyrogue",
      "second": "hitmonlee",
      "third": null
    },
    {
      "first": "lickitung",
      "second": "lickilicky",
      "third": null
    },
    {
      "first": "koffing",
      "second": "weezing",
      "third": null
    },
    {
      "first": "rhyhorn",
      "second": "rhydon",
      "third": "rhyperior"
    },
    {
      "first": "happiny",
      "second": "chansey",
      "third": "blissey"
    },
    {
      "first": "tangela",
      "second": "tangrowth",
      "third": null
    },
    {
      "first": "kangaskhan",
      "second": null,
      "third": null
    },
    {
      "first": "horsea",
      "second": "seadra",
      "third": "kingdra"
    },
    {
      "first": "goldeen",
      "second": "seaking",
      "third": null
    },
    {
      "first": "staryu",
      "second": "starmie",
      "third": null
    },
    {
      "first": "mime-jr",
      "second": "mr-mime",
      "third": "mr-rime"
    },
    {
      "first": "scyther",
      "second": "scizor",
      "third": null
    },
    {
      "first": "smoochum",
      "second": "jynx",
      "third": null
    },
    {
      "first": "elekid",
      "second": "electabuzz",
      "third": "electivire"
    },
    {
      "first": "magby",
      "second": "magmar",
      "third": "magmortar"
    },
    {
      "first": "pinsir",
      "second": null,
      "third": null
    },
    {
      "first": "tauros",
      "second": null,
      "third": null
    },
    {
      "first": "magikarp",
      "second": "gyarados",
      "third": null
    },
    {
      "first": "lapras",
      "second": null,
      "third": null
    },
    {
      "first": "ditto",
      "second": null,
      "third": null
    },
    {
      "first": "eevee",
      "second": "vaporeon",
      "third": null
    },
    {
      "first": "porygon",
      "second": "porygon2",
      "third": "porygon-z"
    },
    {
      "first": "omanyte",
      "second": "omastar",
      "third": null
    },
    {
      "first": "kabuto",
      "second": "kabutops",
      "third": null
    },
    {
      "first": "aerodactyl",
      "second": null,
      "third": null
    },
    {
      "first": "munchlax",
      "second": "snorlax",
      "third": null
    },
    {
      "first": "articuno",
      "second": null,
      "third": null
    },
    {
      "first": "zapdos",
      "second": null,
      "third": null
    },
    {
      "first": "moltres",
      "second": null,
      "third": null
    },
    {
      "first": "dratini",
      "second": "dragonair",
      "third": "dragonite"
    }
];

export default mockEvolutionsGroups;
