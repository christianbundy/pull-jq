# Pull-JQ

```sh
npm install pull-jq
```

## Example

```javascript
const pullJq = require("pull-jq");
const pull = require("pull-stream");

pull(
  pull.values([
    { seq: 0, text: "hello" },
    { seq: 1, text: "world" },
    { seq: 2, text: "!" },
  ]),
  pullJq(".text"),
  pull.drain(console.log)
);
```

## License

AGPL-3.0
