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

use Datlechin\SilentEdit\Listeners\ClearLastEdit;
use Flarum\Extend;
use Flarum\Post\Event\Saving;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),

    new Extend\Locales(__DIR__ . '/locale'),

    (new Extend\Event())
        ->listen(Saving::class, ClearLastEdit::class),
];
