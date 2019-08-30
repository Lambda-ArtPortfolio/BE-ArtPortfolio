# BE-ArtPortfolio
Back End 

Link to the base URL: https://art-portfolio-bw.herokuapp.com/

# Routes

## POST auth/login -Login users  

Returns an object with a token:
```
{  
    "message": "Welcome to the app, user3",  
    "token": "token info"  
}  
```
If there's an error, the return will be an error object:   

#### 401 Invalid Credentials  
```
{  
    Error: 'Please enter correct user credentials to login.'   
}  
```
Or if there's another issue: 

#### 500 Error  
```
{  
    Error: 'Failed to login!'  
}
```
___
## POST auth/register -Register new users  

Returns an object of the new registered user:  
``` 
{  
    "userInfo":  {  
        "name": "name3",  
        "username": "user3"  
    },  
    "token": "token info"  
}  
```
If there's an error, an error object will be returned:

#### 500 Error  
```
{  
    Error: 'Failed to register user!'  
}
```
___
## POST /art -Adds a new art post  

Returns the added art post object:  
```
{  
  "id": 8,  
  "image": "https://images.unsplash.com/photo-1560291782-3938195af695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",    
  "description": "clock tower in the snowy mountains"  
}  
```

If there's an error, an error object will be returned: 

#### 500 Error  
```
{  
    Error: 'Failed to add post!'  
}
```
___
## GET /art - Grabs list of all art pictures  

Returns an array of art posts 
``` 
[  
  {  
    "id": 1,  
    "image": "https://images.unsplash.com/photo-1566753911989-d7eb3e404d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",  
    "description": "Picture of a snowy road in the mountains"  
  },    
  {  
   "id": 2,  
    "image": "https://images.unsplash.com/photo-1566763481174-454406f8c12e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",  
    "description": "Row of houses by a canal"  
  },
  {  
   "id": 3,  
    "image": "https://images.unsplash.com/photo-1566764527209-19190ead72f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",  
    "description": "Tilted house on a hill"  
  },  
]  
```

If there's an error, an error object will be returned:

#### 500 error  
```

{  
    Error: 'Could not retrieve list of art posts'  
}
```
___
## DELETE /art/:id - Deletes an art post with the given ID  

Returns the newly updated array:  
```
[  
  {  
   "id": 1,  
    "image": "https://images.unsplash.com/photo-1566753911989-d7eb3e404d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",  
    "description": "Picture of a snowy road in the mountains"  
  },    
  {  
   "id": 2,  
    "image": "https://images.unsplash.com/photo-1566763481174-454406f8c12e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",  
    "description": "Row of houses by a canal"  
  },
  {  
   "id": 3,  
    "image": "https://images.unsplash.com/photo-1566764527209-19190ead72f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",  
    "description": "Tilted house on a hill"  
  },  
]
```
If there's an error, an error object will be returned:

#### 404 Not Found  
```
{
    Error: 'Could not find the art post with given ID'
}
```
Or if there's another issue:
#### 500 error
```
{
    Error: 'Failed to delete art post'
}
```
___

## PUT /art/:id - Edits an art post with the given ID  

Returns an object with the updated information  
 ``` 
 {
    "image": "https://images.unsplash.com/photo-1566725129530-fffa7e36d07e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
    "description": "building at the end of a pier"  
}
```
If there's an error, an error object will be returned:

#### 404 Not Found
```
{
    Error: 'Could not find the art post with given ID'
}
```
Or if there's another issue: 
#### 500 error
```
{
    Error: 'Could not update art post'
}
```