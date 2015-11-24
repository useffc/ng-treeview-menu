module.exports = function (grunt) {
  grunt.initConfig({
    global: {
      root: './',
      dist: './dist',
      views: 'views',
      src: 'src',
      styles: 'src/stylesheets',
      fonts: 'src/fonts'
    },
    copy: {
      dist:{
        files: [
          // fonts
          {
            expand: true,
            cwd: '<%= global.fonts %>/bootstrap',
            src: '**',
            dest: '<%= global.dist %>/fonts/bootstrap'
          },
          {
            expand: true,
            cwd: '<%= global.fonts %>/ionicons',
            src: '**',
            dest: '<%= global.dist %>/fonts'
          },
          //images
          {
            expand: true,
            cwd: 'src/img',
            src: '**',
            dest: '<%= global.dist %>/img'
          },
          //vendor images
          {
            expand: true,
            flatten: true,
            src: [
              'node_modules/ion-rangeslider/img/*',
            ],
            dest: '<%= global.dist %>/img'
          },
          //vendor js
          {
            expand: true,
            flatten: true,
            src: [
              'node_modules/angular/angular.js',
              'node_modules/angular-animate/angular-animate.js'
            ],
            dest: '<%= global.dist %>/js/vendor'
          },
          //data
          {
            expand: true,
            flatten: true,
            src: [
              '<%= global.src %>/data/**/*'
            ],
            dest: '<%= global.dist %>/data'
          },
          {
            expand: true,
            flatten: true,
            src: [
              '<%= global.src %>/templates/*.html'
            ],
            dest: '<%= global.dist %>/templates'
          }
         ]
       }
    },
    compass: {
      everything: {
        options: {
          sassDir: '<%= global.styles %>',
          cssDir: '<%= global.dist %>/css',
          environment: 'development',
          noLineComments: true
        }
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      main: {
        src: [
          '<%= global.src %>/app.js',
          '<%= global.src %>/services/appStateService.js',
          '<%= global.src %>/controllers/navController.js',
          '<%= global.src %>/directives/treeview.js'
        ],
        dest: '<%= global.dist %>/js/app.js'
      }
    },
    watch: {
      sass: {
        files: '<%= global.styles %>/**/*.scss',
        tasks: ['compass']
      },
      js: {
        files: '<%= global.src %>/**/*.js',
        tasks: ['copy', 'concat']
      },
      markup: {
        files: '<%= global.src %>/templates/*.html',
        tasks: ['copy']
      },
      grunt: {
        files: './Gruntfile.js',
        tasks: 'default'
      }
    },
    connect: {
      server: {
        options: {
          port: 10901,
          base: './'
        }
      }
    },
  });

  // Load all grunt tasks

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['copy', 'concat', 'compass', 'connect', 'watch']);
};
