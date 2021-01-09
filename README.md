
# Tharindu ThirdFort Code Challenge

### Dependencies
* node
* npm
* mongodb
* swagger


### How to run the backend code

* make sure that mongo db is running in your machine 


* install npm packages

```node
npm install
```

* run back end

```node
node index
```
* api will be served at

```node
localhost:[port]/api/
```


# APIS

## API  samples

UI/UX Team can check the API Documentation that are available on Swagger

```
localhost:4000/api-docs
```
You can find the Screen shot in Swagger

![alt text](https://www.mediafire.com/convkey/7880/bkk7cdsr98o72dr6g.jpg)
 
* Sample HTTP GET request in Swagger

![alt text](https://www.mediafire.com/convkey/9c9b/xp8gd1pxe3lxb2u6g.jpg)

### Sample Responses

#### 1. Create a note

* api

```node
localhost:4000/api/note
```

* sample body

```node
{
  "Title": "Meeting With Supervisor",
  "Description": "FYP Monthly Meeting",
  "archived": false
}
```

* sample response body

```node
{
  "message": "Note Created",
  "note": {
    "archived": false,
    "_id": "5ff97a663755b2049c87465a",
    "Title": "Meeting With Supervisor",
    "Description": "FYP Monthly Meeting",
    "__v": 0
  },
  "request": {
    "type": "GET",
    "url": "http://localhost:4000/api/note/5ff97a663755b2049c87465a"
  }
}
```

#### 2. Get a note

* api

```node
localhost:4000/api/note/:id
eg:-
localhost:4000/api/note/5ff97a663755b2049c87465a
```

* sample response body

```node
{
  "Title": "Meeting With Supervisor",
  "Description": "FYP Monthly Meeting",
  "archived": false,
  "_id": "5ff97a663755b2049c87465a",
  "request": {
    "type": "GET",
    "url": "http://localhost:4000/api/note/5ff97a663755b2049c87465a"
  }
}
```
#### 3. Get all notes

* api

```node
localhost:4000/api/notes
eg:-
localhost:4000/api/note/5ff97a663755b2049c87465a
```

* sample response body

```node
{
  "count": 3,
  "notes": [
    {
      "Title": "Batch Meeting",
      "Description": "Batch Meeting today 8.30 at lagaan",
      "archived": true,
      "_id": "5ff959c73755b2049c874659",
      "request": {
        "type": "GET",
        "url": "http://localhost:4000/api/note/5ff959c73755b2049c874659"
      }
    },
    {
      "Title": "Meeting With Supervisor",
      "Description": "FYP Monthly Meeting",
      "archived": false,
      "_id": "5ff97a663755b2049c87465a",
      "request": {
        "type": "GET",
        "url": "http://localhost:4000/api/note/5ff97a663755b2049c87465a"
      }
    },
    {
      "Title": "CM4120 Lecture",
      "Description": "Operational Model lecture on Tuesday evening. attendance complosry  ",
      "archived": false,
      "_id": "5ff9810f3755b2049c87465b",
      "request": {
        "type": "GET",
        "url": "http://localhost:4000/api/note/5ff9810f3755b2049c87465b"
      }
    }
  ]
}
```
#### 4. Update a note

* api

```node
localhost:4000/api/note/:id
```

* sample body

```node
{
  "Title": "Batch Meeting",
  "Description": "Batch Meeting today 8.30 at lagaan",
  "archived": true
}
```

* sample response body

```node
{
  "message": "Note Updated",
  "note": {
    "archived": true,
    "_id": "5ff959c73755b2049c874659",
    "Title": "Batch Meeting",
    "Description": "Batch Meeting today 8.30 at lagaan",
    "__v": 0
  }
}
```


#### 5. Get Archive note list

* api

```node
localhost:4000/api/archivednotes
```


* sample response body

```node
{
  "count": 1,
  "notes": [
    {
      "Title": "Batch Meeting",
      "Description": "Batch Meeting today 8.30 at lagaan",
      "archived": true,
      "_id": "5ff959c73755b2049c874659",
      "request": {
        "type": "GET",
        "url": "http://localhost:4000/api/note/5ff959c73755b2049c874659"
      }
    }
  ]
}
```
#### 6. Get UnArchive note list

* api

```node
localhost:4000/api/notarchivednotes
```


* sample response body

```node
{
  "count": 2,
  "notes": [
    {
      "Title": "Meeting With Supervisor",
      "Description": "FYP Monthly Meeting",
      "archived": false,
      "_id": "5ff97a663755b2049c87465a",
      "request": {
        "type": "GET",
        "url": "http://localhost:4000/api/note/5ff97a663755b2049c87465a"
      }
    },
    {
      "Title": "CM4120 Lecture",
      "Description": "Operational Model lecture on Tuesday evening. attendance complosry  ",
      "archived": false,
      "_id": "5ff9810f3755b2049c87465b",
      "request": {
        "type": "GET",
        "url": "http://localhost:4000/api/note/5ff9810f3755b2049c87465b"
      }
    }
  ]
}
```

#### 7. Delete a note

* api

```node
localhost:4000/api/note/:id
```

* sample body

```node
"id" : "5ff9810f3755b2049c87465b"
```

* sample response body

```node
{
  "message": "Note Deleted",
  "request": {
    "type": "POST",
    "url": "http://localhost:4000/api/note",
    "body": {
      "Title": "Title of Note",
      "Description": "Contents of Note"
    }
  }
}
```

### Assumptions

* Notes are contain only  strings
* When create a note by default it is unarchived 
* If user want to archive a note he can use edit option 


### Technology Stack

* Node.js 
I'm much familer with Node,js and it wcan be ensuring the speed and performance of the application.
* Mongo db
Mongodb is used to save notes and note status and work with non relational database like mongodb for this kind of application is easy

* Swagger 
Including swagger as a API documentation and that would be easy of UI UX team


### TODO List - Improvemnts

* Authentication

Using OAuth 2.0 autentication code grant type can be restrict users when access to the notes  