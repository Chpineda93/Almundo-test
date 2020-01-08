
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hotels').del()
    .then(function () {
      // Inserts seed entries
      return knex('hotels').insert([
        {
          id: 1,
          name: 'Hotel Gold Coast',
          stars: 3,
          price: "60USD",
          image: "https://img.blogs.es/anexom/wp-content/uploads/2016/08/hoteles-w-920x515.jpg" ,
          ubication: "Sydney",
          ubicationImage: "https://cde.laprensa.e3.pe/ima/0/0/2/2/7/227018.jpg"
        },
        {
          id: 2,
          name: 'Le Belleval',
          stars: 5,
          price: "15 USD",
          image: "https://img.blogs.es/anexom/wp-content/uploads/2016/08/hoteles-w-920x515.jpg" ,
          ubication: "Paris",
          ubicationImage: "https://cde.laprensa.e3.pe/ima/0/0/2/2/7/227018.jpg"
        },
        {
          id: 3,
          name: 'Akasaka',
          stars: 2,
          price: "12 USD",
          image: "https://img.blogs.es/anexom/wp-content/uploads/2017/11/ptk-landing-leaderboard-1280.jpg" ,
          ubication: "Tokyo",
          ubicationImage: "https://cde.laprensa.e3.pe/ima/0/0/2/2/7/227018.jpg"
        },
        {
          id: 4,
          name: 'Hilton Hotel',
          stars: 1,
          price: "16 USD",
          image: "https://www.espanol.skyscanner.com/wp-content/uploads/2018/05/hilton-1.jpg?fit=1048,638" ,
          ubication: "Las Vegas",
          ubicationImage: "https://cde.laprensa.e3.pe/ima/0/0/2/2/7/227018.jpg"
        }



      ]);
    });
};
