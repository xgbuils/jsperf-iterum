install dependencies

``` bash
npm install
```

create cdn package builder:

``` bash
npm run build -- --package=<package> --version=<version> --globalName=<globalName>
```
Example:
``` bash
npm run build -- --package=iterum --version=1.0.2 --globalName=Iterum
```

Then, go to package builder subdirectory and install:
``` bash
cd <package>/<version>
npm install
```

Example:
``` bash
cd iterum/1.0.2
npm install
```

And finally, build cdn file:
``` bash
npm run bundle
```

A file `cdn.js` will be created.

