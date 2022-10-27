# Django showcase - playground
Showcasing django features <br>
and <br>
different flavors of frontends:


Started with next.js, but weird concept with frontend providing the application server <br>
So, starting of with React first

## Backend
Build with poetry, so poetry needs to be installed locally
### Installation
```sh
$ poetry install
```

### Development mode
```sh
$ python manage.py runserver
```

### Testing
```sh
$ pytest tests
```

## Frontend
### Installation
```sh
$ npm install
```

### Development mode
```sh
$ npm start
```

### Building for production
```sh
$ npm run build
```

### Testing
```sh
$ npm test -- --watchAll=false
```


## CD/CI
For continous deployment and integration Github actions are used.<br>
The workflow configuration can be found in the root under: <br>
.github/workflows <br>
directory
