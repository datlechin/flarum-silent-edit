import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Button from 'flarum/common/components/Button';
import PostControls from 'flarum/forum/utils/PostControls';

app.initializers.add('datlechin/flarum-silent-edit', () => {
  extend(PostControls, 'moderationControls', function (items, post) {
    if (!post.attribute('canClearLastEdit') || !post.editedUser()) return;

    items.add(
      'clearLastEdit',
      <Button icon="fas fa-volume-mute" onclick={() => clearLastEdit(post)}>
        {app.translator.trans('datlechin-silent-edit.forum.post_controls.clear_last_edit_button')}
      </Button>
    );
  });
});

function clearLastEdit(post) {
  return post.save({ isEdited: false }).then(() => m.redraw());
}
