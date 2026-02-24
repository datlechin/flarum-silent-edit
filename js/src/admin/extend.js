import Extend from 'flarum/common/extenders';
import app from 'flarum/admin/app';

export default [
  new Extend.Admin().permission(
    () => ({
      icon: 'fas fa-volume-mute',
      label: app.translator.trans('datlechin-silent-edit.admin.permissions.clearLastEdit'),
      permission: 'discussion.clearLastEdit',
    }),
    'moderate'
  ),
];
