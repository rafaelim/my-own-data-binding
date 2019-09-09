const resolve = require("rollup-plugin-node-resolve");

export default [
    {
        input: "src/index",
        output: {
            name: "binding",
            file: "dist/index.js",
            format: "umd",
        },
        plugins: [
            resolve()
        ]
    }
]