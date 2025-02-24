//Ejecutar el proyecto (Leventarlo)

      //Desestructurar
      import { initServer } from './configs/apps.js'
      import { config } from 'dotenv'
      import { connect } from './configs/mongo.js'
      import { createAdminUser } from './configs/apps.js'   
       
      config()
      connect()
      initServer()
      createAdminUser()