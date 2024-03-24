import { module, test } from 'qunit';
import { setupRenderingTest } from 'practice-todo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | global/logo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Global::Logo />`);

    assert
      .dom('[data-test-global-logo__container] [data-test-global-logo__link]')
      .hasText('Todo');

    assert
      .dom('[data-test-global-logo__container] [data-test-global-logo__link]')
      .hasAttribute('href', '/');
  });
});
