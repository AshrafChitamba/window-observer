# React Window Observer

> React window observer is a library build to facilitate the process of matching the media of your device and check the scroll direction for other purposes like showing the navbar accordingly.

### Installation

```
 npm i react-window-observer
```

### Usage 

```javascript
import { useScrollDirection, useWindowMedia } from "react-window-observer"

const MyComponent = () => {
  const direction = useScrollDirection();
  const isTrue = useWindowMedia(540); // It defaults to 640 if no parameter is given

  console.log(direction);
  console.log(isTrue)

  return <div>My Component</div>
};

export default MyComponent

```




