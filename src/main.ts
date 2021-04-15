import { helloword } from "./lib/utils.ts";
import log from "./lib/log.ts";
const str: string = helloword();
log.debug(str);
log.info(str);
log.warning(str);
log.error(str);
log.critical(str);
