# layer-orm

> Wrapper to easily switch between orms

## Install

```sh
npm install --save layer-orm
```

## Usage

```js
const layerOrm = require('layer-orm')

const settings = {
  modelsDir: './path/to/models'
  adapter: {
    name: 'sequelize', // currently sequelize is supported
    config: { // orm configuration
      username: 'my database username',
      password: 'my database password',
      host: 'localhost'
      dialect: 'mysql', // currently postgres and mysql are supported
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
    }
  }
}

const db = layerOrm.setup(settings)

db.services.ModelName.create({
  modelField: 'My Fullname'

}).then(created => {
  // do something with created created
}).catch(err => {
  // do something with error
})
```

## API
>

### layerOrm
>

#### layerOrm#setup(settings: Object) -> db: Object

### db
>

#### db#services
>

##### db#services#ModelName#create
##### db#services#ModelName#findOne
##### db#services#ModelName#findAll
##### db#services#ModelName#query
##### db#services#ModelName#update
##### db#services#ModelName#delete

#### db#models
>

##### db#models#ModelName


## License

MIT © [Guillermo Lopez](http://www.guillermolopez.net)