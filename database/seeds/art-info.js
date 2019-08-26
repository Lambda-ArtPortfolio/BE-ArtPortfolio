
exports.seed = function(knex) {
      return knex('art-data').insert([
        { image: 'https://images.unsplash.com/photo-1566753911989-d7eb3e404d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', description: 'Picture of a snowy road in the mountains'},
        { image: 'https://images.unsplash.com/photo-1566763481174-454406f8c12e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', description: 'Row of houses by a canal'},
        { image: 'https://images.unsplash.com/photo-1566764527209-19190ead72f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', description: 'Tilted house on a hill'},
        { image: 'https://images.unsplash.com/photo-1566753992003-a20476267dc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', description: 'Long wooden bridge in the forest'},
        { image: 'https://images.unsplash.com/photo-1566754046630-05a262f1c60e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', description: 'Ocean picture taken from a cave'},
        { image: 'https://images.unsplash.com/photo-1566791468858-cfcb7e78cf5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', description: 'Hot air balloons at sunset'}
      ]);
};
