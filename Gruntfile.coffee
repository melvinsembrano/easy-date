module.exports = (grunt) ->
  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      build:
        src: '<%= pkg.name %>.js'
        dest: '<%= pkg.name %>.min.js'

    coffee:
      compile:
        options:
          bare: false
        files:
          '<%= pkg.name %>.js': 'src/easy-date.coffee'

    jasmine:
      tests:
        src: 'easy-date.js'
        options:
          specs: 'test/**/*Spec.js'
          helpers: 'test/helpers/*.js'

    karma:
      unit:
        configFile: 'karma.conf.js'
        logLevel: 'INFO'

    watch:
      source:
        files: ['src/*.coffee']
        tasks: ['coffee:compile', 'jasmine']

      tests:
        files: ['test/**/*Spec.js']
        tasks: ['jasmine']


  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-karma'
  grunt.loadNpmTasks 'grunt-contrib-jasmine'

  grunt.registerTask 'test', [ 'jasmine' ]
  grunt.registerTask 'dev', [ 'coffee', 'jasmine', 'watch' ]
  grunt.registerTask 'default', [ 'test' ]

  return
