/* global module*/
module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: [
        './**/*.js',
        '!./node_modules/**/*.js',
        '!./03-third-part-widget/mathquill/*.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['css/*.css', '0?-*/*.css','**/*.css']
    },
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      src: ['*.html', '0?-*/*.html','**/*.html']
    },
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        expand: true,
        src: ['*.html', '??-*/*.html', '??-*/??-*/*.html','**/*.html'],
        dest: 'dist/'
      }
    },
    cssmin: {
      files:{
        expand: true,
        src: ['css/*.css', '??-*/*.css', '??-*/??-*/*.css', '??-*/css/*.css','**/*.css','**/css/*.css'],
        dest: 'dist/'
      }
    },
    uglify: {
      main:{
        files: [{
          expand: true,
          src: ['js/*.js', '??-*/*.js', '??-*/0?-*/*.js', '??-*/js/*.js','**/js/*.js'],
          dest: 'dist/'
        }]
      }
    },
    imagemin: {                               
      files: {
        expand: true,
        src: ['**/*.{png,jpg,gif}','**/img/*.{png,jpg,gif}'],
        dest: 'dist/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('lint', ['htmlhint','csslint','eslint']);
  grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify','imagemin']);
};
