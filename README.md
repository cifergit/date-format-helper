# format-date-helper
This is a simple log format component

## Install

```
npm install --save form-data
```

## Usage

ES Modules
```javascript
import { dateFormat } from 'format-date-helper'
```
CommonJS
```javascript
const { dateFormat } = require('format-date-helper')
```

Html in Browser that support ES Modules
```html
<script type="module" >
    import { formatDate } from 'https://github.com/cifergit/date-format-helper/src/module.js'
</script>
```
Html in IE
```html
<script src="https://github.com/cifergit/date-format-helper/index.js"></script>
<script>
   var dateFormat = window['date-format-helper'].dateFormat
</script>
```
### Props
| Props        | Options           | Default  | Description |
| ------------- |-------------| -----| -------- |
| t | Date,Number,String |0| Any date that JS can recognize |
| format | String | 'YYYY-MM-DD hh:mm:ss' | YYYY=year<br>MM=month<br>DD=day<br>hh=hours<br>mm=minutes<br> ss=seconds<br>SSS=milliseconds<br><br>you can free combination in any order |
| unit | String |'ms'| if value is 's' mean number is seconds |

##### Notice: t,format,unit are optional. Normally the 'Props' is object, but 't' instead of 'Props' is allowed.

## Demo
```javascript
dateFormat() // 1970-01-01 08:00:00
dateFormat(1601373600000 ) // 2020-09-29 18:00:00
dateFormat('Tue Sep 29 2020 18:00:00 GMT+0800 (China Standard Time)') // 2020-09-29 18:00:00
dateFormat({t: new Date(), format: 'MM-DD-YYYY hh:mm:ss.SSS'}) // 09-29-2020 18:00:00.000
dateFormat({t: 1601373600, unit: 's'}) // 2020-09-29 18:00:00
```
