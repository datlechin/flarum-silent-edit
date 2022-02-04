import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import PostControls from 'flarum/forum/utils/PostControls';
import Button from 'flarum/common/components/Button';

app.initializers.add('datlechin/flarum-silent-edit', () => {
  extend(PostControls, 'moderationControls', function (items, post) {
    const editedUser = post.editedUser();

    if (!editedUser) return;

    items.add(
      'clearLastEdit',
      <Button icon="fas fa-volume-mute" onclick={this.clearLastEdit.bind(post)}>
        {app.translator.trans('datlechin-silent-edit.forum.post_controls.clear_last_edit_button')}
      </Button>
    );
  });

  PostControls.clearLastEdit = function () {
    return this.save({ isEdited: false }).then(() => m.redraw());
  };
});
