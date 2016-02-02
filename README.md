easy proxy server with grunt-connect
```
    connect: {
      server: {
        options: {
          ...

          middleware: function (connect, options, defaultMiddleware) {


             return [
                // Include the proxy first

                modRewrite([
                  '^/ http://0.0.0.0:3000/ [P]'

                ])


             ].concat(defaultMiddleware);
          }

        }
```
