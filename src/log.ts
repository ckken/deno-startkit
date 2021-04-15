import * as log from 'https://deno.land/std@0.93.0/log/mod.ts'
await log.setup({
  handlers: {
    stringFmt: new log.handlers.ConsoleHandler("DEBUG", {
      formatter: "[{levelName}] {level} {datetime} {msg}"
    }),

    functionFmt: new log.handlers.ConsoleHandler("DEBUG", {
      formatter: logRecord => {
        let msg = `${logRecord.level} ${logRecord.msg}`;

        logRecord.args.forEach((arg, index) => {
          msg += `, arg${index}: ${arg}`;
        });

        return msg;
      }
    }),

    anotherFmt: new log.handlers.ConsoleHandler("DEBUG", {
      formatter: "[{loggerName}] - {levelName} {msg}"
    }),
  },

  loggers: {
     default: {
       level: "DEBUG",
       handlers: ["stringFmt", "functionFmt"],
     },
     dataLogger: {
       level: "INFO",
       handlers: ["anotherFmt"],
     }
  }
})
export default log