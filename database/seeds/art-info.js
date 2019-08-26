
exports.seed = function(knex) {
      return knex('art-data').insert([
        { image: 'https://www.edvardmunch.org/images/paintings/the-scream.jpg', description: 'The Scream, 1893 by Edvard Munch'},
        { image: 'https://wisetoast.com/wp-content/uploads/2015/10/Starry-Night-by-Vincent-Van-Gogh-painting.jpg', description: 'Starry Night, by Vincent Van Gogh'},
        { image: 'https://wisetoast.com/wp-content/uploads/2015/10/Water-lilies-by-Claude-Monet.jpg', description: 'Water lilies, by Claude Monet'},
      ]);
};
