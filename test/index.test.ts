import * as assert from 'power-assert';
import StepTrigger from '../src/index';

describe('StepTrigger', () => {
  describe('reserve', () => {
    test('reserve(1)', () => {
      const trigger = new StepTrigger();
      let value = false;
      trigger.reserve(1, () => (value = true));
      trigger.step();
      assert.ok(value);
    });

    test('reserve(2)', () => {
      const trigger = new StepTrigger();
      let value = false;
      trigger.reserve(2, () => (value = true));
      trigger.step();
      assert.ok(!value);
      trigger.step();
      assert.ok(value);
    });

    test('reserve in reserve', () => {
      const trigger = new StepTrigger();
      let value = false;
      trigger.reserve(2, () => trigger.reserve(2, () => (value = true)));
      trigger.step();
      assert.ok(!value);
      trigger.step();
      assert.ok(!value);
      trigger.step();
      assert.ok(!value);
      trigger.step();
      assert.ok(value);
    });
  });
});
