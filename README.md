# BE-ArtPortfolio
Back End 

Link to the base URL: https://art-portfolio-bw.herokuapp.com/

# Routes

### POST auth/login -Login users  

Returns an object with a token:
>{  
>>"message": "Welcome to the app, user3",  
  "token": "token info"  
}
___
### POST auth/register -Register new users  

Returns an object of the new registered user:   
> {  
>>"userInfo":  
>>{  
>>"name": "name3",  
    "username": "user3"  
    },  
  "token": "token info"  
}
___
### POST /art -Adds a new art post  

Returns the added art post object:  
> {  
  >>"id": 8,  
  "image": "https://images.unsplash.com/photo-1560291782-3938195af695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",  
  "description": "clock tower in the snowy mountains"  
}
___
### GET /art - Grabs list of all art pictures  

Returns an array of art posts  
> [  
  >>{  
   >>> "id": 1,  
    "image": "https://images.unsplash.com/photo-1566753911989-d7eb3e404d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "description": "Picture of a snowy road in the mountains"  
  },    
  >>{  
   >>> "id": 2,  
    "image": "https://images.unsplash.com/photo-1566763481174-454406f8c12e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "description": "Row of houses by a canal"
  },
  >>{  
   >>> "id": 3,  
    "image": "https://images.unsplash.com/photo-1566764527209-19190ead72f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "description": "Tilted house on a hill"  
  },  
]
___
### DELETE /art/:id - Deletes an art post with the given ID  

Returns the newly updated array:  
> [  
  >>{  
   >>> "id": 1,  
    "image": "https://images.unsplash.com/photo-1566753911989-d7eb3e404d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "description": "Picture of a snowy road in the mountains"  
  },    
  >>{  
   >>> "id": 2,  
    "image": "https://images.unsplash.com/photo-1566763481174-454406f8c12e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "description": "Row of houses by a canal"
  },
  >>{  
   >>> "id": 3,  
    "image": "https://images.unsplash.com/photo-1566764527209-19190ead72f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "description": "Tilted house on a hill"  
  },  
]
___
### PUT /art/:id - Edits an art post with the given ID  

Returns an object with the updated information  
> {  
  >>"image": "https://images.unsplash.com/photo-1566725129530-fffa7e36d07e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "description": "building at the end of a pier"  
}
___