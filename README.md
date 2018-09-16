# bharyang-cli
Sort and group imports in node application. This is a CLI interface for [bharyang](https://github.com/pratishshr/bharyang).

## Installation

Install from npm:

```sh
npm install -g bharyang-cli
```

## Usage

This CLI is geared towards use from text editor plugins. The import lines are
passed to the CLI as stdin stream, and the sorted lines are returned in stdout.

```sh
$ echo "
import * as userService from '../../services/user';
import CONST from '../../constans/common';
" | bharyang
```

The different sorting modes can be provided as arguments:

```sh
bharyang --asc
bharyang --desc
bharyang --group
```

Grouping the imports is the default case.
