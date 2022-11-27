# simple-xlsx2json-api
Webservice to convert Excel-Files to JSON

## Usage
Just send the .xlsx-file via POST to the service and use the field name "`excel`"

```
<form action="http://127.0.0.1:3000" method="POST" enctype="multipart/form-data">
    <input type="file" name="excel">
    <input type="submit">
</form>
```
## Example
The `test.xlsx` in the `examples` folder will be converted to:
```
{
	"sheet number one": [
		{
			"title A": "foo",
			"title B": "bar"
		},
		{
			"title A": "foo 2",
			"title B": "bar 2"
		}
	],
	"sheet number two": [
		{
			"title A": "FOO",
			"title B": "BAR"
		},
		{
			"title A": "FOO 2",
			"title B": "BAR 2"
		}
	]
}
```