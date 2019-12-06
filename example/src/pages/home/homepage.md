## Features
- An UI system for web applications.
- Base on React
- Easy to use for web develop

## Environment Support

- Chrome

## Install

- npm install (note: this install can only install the last version publish on npm [link](https://www.npmjs.com/package/react-x-component))

```
npm install react-x-component
```

- npm install from github address (this way can set tag/branch)

    install from branch:release-1.0.1
    ```
    npm install git+https://github.com/xrcoder/react-x-component.git#release-1.0.1
    ```

    install from tag:dev-2.2
    ```
    npm install git+https://github.com/xrcoder/react-x-component.git#dev-2.2
    ```

## Usage

```javascript
import {Box, Input} from 'react-x-component';
ReactDOM.render(<Box><Input/></Box>, mountNode);
```

and import style manually（scss）:
```
@import "~react-x-component/dist/react-x-component.min.css";
```

## Development

```
$ git clone git@github.com:xrcoder/react-x-component.git
$ cd react-x-component
$ npm install
$ npm start
```
