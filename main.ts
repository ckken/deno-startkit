import {helloword} from './src/utils.ts'
import log from './src/log.ts'
const str:string = helloword()
log.debug(str)
log.info(str);
log.warning(str);
log.error(str);
log.critical(str);