import * as mocha from 'mocha';
import * as assert from 'power-assert';
import StepTrigger from '../src/index';

describe('StepTrigger', () => {
    context('reserve', () => {
        it('reserve(1)', () => {
            const trigger = new StepTrigger();
            let value = false;
            trigger.reserve(1, () => value = true);
            trigger.step();
            assert.ok(value);
        });

        it('reserve(2)', () => {
            const trigger = new StepTrigger();
            let value = false;
            trigger.reserve(2, () => value = true);
            trigger.step();
            assert.ok(!value);
            trigger.step();
            assert.ok(value);
        });
    });
});

