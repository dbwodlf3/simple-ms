This is very simple client side translator for multilingual support.
just use it very simple.

===========================================================================

Install

Node
```bash
npm i simple-ms
```

CDN
```html
<script src="https://cdn.jsdelivr.net/npm/..."></script>
```

Download
link: ...
```html
<script src="/static/js/simple-ms.js"></script>
```

===========================================================================

Usage
```html
<h1>translate("Hello")</h1>

<script src="https://cdn.jsdelivr.net/npm/..."> 
const language_maps = {
	"ko": "안녕하세요",
	"en": "Hello",
	"jp": "こんにちは",
	"cn": "你好"
}

translate(language_maps);
</script>
```

```html
<!-- en -->
<h1>Hello</h1>
```

```html
<!-- ko -->
<h1>안녕하세요</h1>
```

```html
<!-- jp -->
<h1>こんにちは</h1>
```

```html
<!-- cn -->
<h1>你好</h1>
```
