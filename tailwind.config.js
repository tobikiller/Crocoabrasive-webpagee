module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "Bebas": "bebas neue",
        "Jetbrain": "JetBrains Mono",
        "Public": "Public Sans",
        "Coda": "Coda",
        "Monument":"Monument Extended"
      },
      backgroundImage:{
        "bgFixed":"url('images/bgfixed.png') ",
        "Worker":"url('images/disc bg-header.png') "
      },
      backgroundSize:{
        '250px': "350px",
        '50px': "150px"
      }
    },
  },
  plugins: [],
}

