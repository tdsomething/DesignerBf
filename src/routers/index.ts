import { SwaggerRouter } from 'koa-swagger-decorator'
import { resolve } from 'path/posix'

const router = new SwaggerRouter()

router.swagger({
  title: 'Designer Bf',
  description: 'api doc',
  swaggerHtmlEndpoint: '/swagger',
  swaggerJsonEndpoint: '/swagger-json'
})
router.mapDir(resolve(__dirname, '../controllers/'))

export default router