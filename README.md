# jp-en

jp-en is a super lightweight & fast direct translator from Japanese Katagana or Hiragana to English Romaji (Romanized Japanese), it aims at serving as a fundamental block of translation for Node.JS.

  - Discrete and distinct translation, no ambiquity
  - No Hepburn
  - Sit in range of [a-zA-Z], database friendly

### Usage

```javascript
const {toRomaji} = require('jp-en');
toRomaji("あるはってんとじょうこくへのとうしのるーるのじゅんしゅ"); 
// aruhattentojoukokuhenotoushinoruurunojunshu
```
### Remarks
This library will not take care of Kanji, spaces & punctuations, logics should be done on application layer before passing to this library.