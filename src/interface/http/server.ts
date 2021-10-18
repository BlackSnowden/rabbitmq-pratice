import { serverConst } from '@app/constants'
import { app } from './index'

app.listen(serverConst.port, () => {
  console.log(`Server's running on port ${serverConst.port}`)
})
