var gulp = require( "gulp" );
var watch = require( "gulp-watch" );

var watched = [
  "src/**/*.less",
  "src/**/i18n/*.yml",
  [
    "src/**/*.module.js",
    "src/**/*.js",
    "!src/**/specs/*.js"
  ],
  "src/index.html",
  [
    "src/**/*.html",
    "!src/index.html",
    "!src/**/fixtures/*.html"
  ]
];

gulp.task( "watch", function () {
  watched.forEach(function ( glob, i ) {
    watch( glob, {
      verbose: true,
      name: i
    }, function () {
      // noop
    });
  });
});
