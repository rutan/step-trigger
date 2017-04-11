# StepTrigger

[![npm version](https://badge.fury.io/js/%40rutan%2Fstep-trigger.svg)](https://badge.fury.io/js/%40rutan%2Fstep-trigger)

## install

```
npm install @rutan/step-trigger
```

## Usage

```javascript
import StepTrigger from '@rutan/step-trigger';

const trigger = new StepTrigger();
trigger.reserve(5, () => console.log('Hello, Trigger!'));

trigger.step();
trigger.step();
trigger.step();
trigger.step();
trigger.step();
// => Hello, Trigger!
```

