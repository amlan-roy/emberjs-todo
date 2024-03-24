import { module, test } from 'qunit';
import { setupRenderingTest } from 'practice-todo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | global/navbar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Global::Navbar />`);

    assert
      .dom('[data-test-navbar__container] [data-test-global-logo__container]')
      .exists();
  });
});
