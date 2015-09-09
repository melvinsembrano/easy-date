module.exports = (grunt) ->
  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    uglify:
      options:
        banner: '/*!\n <%= pkg.name %> <%= pkg.version %>\n Description: <%= pkg.description %> \n Author: <%= pkg.author %> \n*/\n'
      build:
        src: '<%= pkg.name %>.js'
        dest: '<%= pkg.name %>.min.js'
      build_light:
        src: '<%= pkg.name %>-light.js'
        dest: '<%= pkg.name %>-light.min.js'
    coffee:
      compile:
        options:
          bare: false
        files:
          '<%= pkg.name %>-light.js': ['src/easy-date.coffee']
          '<%= pkg.name %>.js': ['src/easy-date.coffee', 'src/date-format.coffee']

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

    exec:
      tagRelease: 'git tag v<%= pkg.version %>'
      publish: 'git push origin master && git push --tags && npm publish'
      commitRelease: 'git commit bower.json easy-date.min.js easy-date-light.min.js package.json -m "Release v<%= pkg.version %>"'

    bump:
      options:
        files: ['package.json', 'bower.json']
        updateConfigs: ['pkg']
        pushTo: 'remote'

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-karma'
  grunt.loadNpmTasks 'grunt-contrib-jasmine'
  grunt.loadNpmTasks 'grunt-exec'
  grunt.loadNpmTasks 'grunt-bump'

  grunt.registerTask 'test', [ 'jasmine' ]
  grunt.registerTask 'dev', [ 'coffee', 'jasmine', 'watch' ]
  grunt.registerTask 'default', [ 'test' ]

  grunt.registerTask 'build', [ 'test', 'bump-only', 'uglify']
  grunt.registerTask 'release', ['exec:commitRelease', 'exec:tagRelease', 'exec:publish']

  return
