const pull = require("pull-stream");
const pullJq = require("./");
const crypto = require("crypto");

const createValues = (n) =>
  [...Array(n)].map((x, i) => ({
    seq: n,
    text: crypto.randomBytes(32).toString("hex"),
  }));

pull(
  pull.values(createValues(8)),
  pullJq(".text"),
  pull.collect((err, val) => {
    if (err) throw err;
    console.log(val);
  })
);
