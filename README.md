[jsrsasign](https://github.com/kjur/jsrsasign/) | [npm](https://www.npmjs.com/package/jsrsasign-oid-all) | [OIDs](https://github.com/kjur/jsrsasign-oid-all/blob/main/lib/index.js) | [Other AddOn](https://github.com/kjur/jsrsasign/wiki/jsrsasign-Add-On)

# jsrsasign-oid-ru
jsrsasign add-on to add all of registered object identifier definitions.

## How to use add-on
```JavaScript
var jsrsasign = require("jsrsasign");
require("jsrsasign-oid-all").addon(jsrsasign);
```

## OID definitions
As for registered OIDs, please see [jsrsasign add-on](https://github.com/kjur/jsrsasign/wiki/jsrsasign-Add-On) wiki page.

## Example
```JavaScript
var jsrsasign = require("jsrsasign");
require("jsrsasign-oid-all").addon(jsrsasign);

...snip...

h = "<<<sample certificate hexadecimal data>>>";
console.log(JSON.stringify(jsrsasign.ASN1HEX.parse(h), null, " "));
```

## Reference
none
