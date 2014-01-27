## Getting Started

### 1. Install gulp globally:

```
npm install -g gulp
```

### 2. Install project devDependencies:

```
npm install
```

### 3. Create a `gulpfile.js` at the root of your project:

```javascript
var gulp = require('gulp');
var gutil = require('gulp-util');
var roole = require('gulp-roole');

gulp.task('test', function() {
    return gulp.src("./src/*.roo")
    .pipe(roole())
    .pipe(gulp.dest("./dist"));
});

gulp.task('default', ['test']);
```

### 4. Run gulp

```
gulp
```

The default task will run and do nothing.

To run individual tasks, use `gulp <task> <othertask>`

## License

Copyright 2014 Christopher EnyTC

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
