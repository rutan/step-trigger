# StepTrigger

## install

```
npm install @rutan/step-trigger
```

## Usage

```javascript
import StepTrigger from '@rutan/step-trigger';

const trigger = new Steptrigger();
trigger.reserve(5, () => console.log('Hello, Trigger!'));

trigger.step();
trigger.step();
trigger.step();
trigger.step();
trigger.step();
// => Hello, Trigger!
```

