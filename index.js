const jq = require("node-jq");
const pull = require("pull-stream");

module.exports = (filter) =>
  pull.asyncMap((val, cb) => {
    jq.run(filter, val, { input: "json", output: "json" }).then((res) =>
      cb(null, res)
    );
  });
