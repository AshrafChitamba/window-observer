### Thank you for using this library

> React window observer is a library build to facilitate the process of matching the media of your device and check the scroll direction for other purposes like showign the navbar accordingly.

### Installation

```
npm i react-window-observer
```
### Basic usage 

```javascript
import { useScrollDirection } from "react-window-observer";

const MyComponent = () => {
  const direction = useScrollDirection();

  console.log(direction) 

  return <div>My Component</div>
};

export default MyComponent;
```




