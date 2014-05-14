phifix
======

small js library to identify philippine mobile networks

usage
=====

Use find() to get the network name by its prefix

```javascript
var network = phifix.find('906'); 
// returns Globe

```

Retrieve supported network IDs
```javascript
var ids = phifix.getNetworkIds();
// returns ["sun", "smart", "globe"]
```

Retrieve prefixes by network ID
```javascript
var prefixes = phifix.getPrefixesByNetworkId('smart');
// returns ["813", "907", "908", "909", "910", "912", "918", "919", "920", "921", "928", "929", "930", "938", "939", "946", "947", "948", "949", "989", "998", "999"]
```

Override default naming
```javascript
phifix.setNetworkName('sun', 'SunCellPH');

var network = phifix.find('922');
// returns SunCellPH
```
