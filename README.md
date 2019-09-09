# my-own-data-binding

My own data binding implementation

## Example

```html
<!DOCTYPE html>
<html>
<body>
    <span bind="test"></span>
    <input type="text" model="test">
</body>
<script src="../dist/index.js"></script>
<script>

const data = {
    test: "Works"
}

new binding(data);
</script>
</html>
```
