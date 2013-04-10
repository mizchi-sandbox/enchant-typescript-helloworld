module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-typescript'

  grunt.initConfig
    connect:
      server:
        options:
          port: 8888
          base: '.'

    watch:
      ts:
        files: "src/**/*.ts",
        tasks: ["typescript"]

    typescript:
      base:
        src: ['src/**/*.ts']
        dest: 'dist/all.js'
        options:
          module: 'amd'
          target: 'es5'
          base_path: 'path/to/typescript/files'
          sourcemap: true
          declaration: true

    concat:
      dist:
        src: [
          'components/enchant/enchant.min.js'
        ]
        dest: 'dist/vendor.js'

  grunt.registerTask "build", ["concat", "typescript"]
  grunt.registerTask "run", ["build", "connect", "watch"]
