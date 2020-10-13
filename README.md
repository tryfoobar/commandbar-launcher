# commandbar-launcher

[![npm package][npm-badge]][npm]

This component is a launcher to open Command Bar. It looks like a search bar and can be slotted into any react app. On click, it'll open the Command Bar. 

<p align="center">
  <img align="center" src="https://user-images.githubusercontent.com/1981738/95909815-f774b680-0d53-11eb-95e7-95b5a9d576d3.png">
</p>

## Installation

- Run `npm install commandbar-launcher`.

## API

| Name  | Type | Description | Default |
| ------------- | ------------- | ------------- | ------------- |
| text  | string or HTMLElement  | The element to render in the launcher  | Find anything [ctrl+k]  | 
| style  | CSSProperties  | Style overrides for the launcher  | {}  | 

## Examples
Default usage:
```
import Launcher from 'commandbar-launcher';

export const MyLauncher = () => {
  return <Launcher />;
}
```

Example with changed styles:
```
<Launcher style={{ fontWeight: 700, textAlign: "center", background: "black", color: "white" }} />
```

Example with changed text:
```
<Launcher text={<div style={{color:'purple'}}>Click to search in this app</div>} />
```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
