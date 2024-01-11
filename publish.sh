#!/bin/bash

set -eu

eval $(op signin my)

vsce publish $@

OPEN_VSX_TOKEN=$(op get item MY_ITEM --fields notesPlain)

npx ovsx publish --pat $OPEN_VSX_TOKEN
