This is very simple client side translator for multilingual support.
just use it very simple.

===========================================================================

Install

Node
```bash
npm i simple-mus
```

CDN
```html
<script src="https://cdn.jsdelivr.net/npm/..."></script>
```

Download
link: ...
```html
<script src="/static/js/simple_mus.js"></script>
```

===========================================================================

Usage
```html
<h1 class="_translate"> Hello </h1>
```

===========================================================================
```js
const language_maps = {
	ko: {
		"Hello": "안녕하세요"
	},
	jp: { 
		"Hello": "こんにちは" 
	},
	cn: { 
		"Hello" : "你好" 
	}
};

const simple_ms = simpleMUS();

window.addEventListener("DOMContentLoaded", ()=>{
	setLanguageCode("ko");
	simple_ms.translate(language_maps);
});
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
