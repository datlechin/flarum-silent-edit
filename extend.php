<?php

/*
 * This file is part of datlechin/flarum-silent-edit.
 *
 * Copyright (c) 2022 Ngo Quoc Dat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Datlechin\SilentEdit;

use Flarum\Api\Context;
use Flarum\Api\Resource\PostResource;
use Flarum\Api\Schema;
use Flarum\Extend;
use Flarum\Post\Post;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/locale'),

    (new Extend\ApiResource(PostResource::class))
        ->fields(fn () => [
            Schema\Boolean::make('canClearLastEdit')
                ->get(fn (Post $post, Context $context) => $context->getActor()->can('canClearLastEdit', $post)),
            Schema\Boolean::make('isEdited')
                ->writable(fn (Post $post, Context $context) => $context->getActor()->can('canClearLastEdit', $post))
                ->set(function (Post $post, bool $value) {
                    if (! $value) {
                        $post->edited_at = null;
                        $post->edited_user_id = null;
                    }
                }),
        ]),
];
