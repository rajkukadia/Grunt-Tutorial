module.exports = function(grunt){ /* -> 'grunt' parameter gives access to grunt api
                                    */

    grunt.initConfig({ /* -> Config object to initialize variables like 'greeting'
                          -> You can read JSON file too, like package.json
                        */
        greeting: 'Welcome',
        pkg: grunt.file.readJSON('package.json'),
        age: 'I am <%= 5 + 5 %>', /* -> Used Javascript code inside <%=  %> */
        today: 'today is <%= grunt.template.today("yyyy-mm-dd")%>'
    });

    //3 params: name, desc, to do function
    grunt.registerTask('greet', 'greet the user', function(){
        console.log('Grunt is running!'); /* -> command -> grunt greet -> it will display grunt is running */
        console.log(grunt.config('greeting'));
        console.log(grunt.config('pkg.name'));
        console.log(grunt.config('age'));
        console.log(grunt.config('today'));
    })

    grunt.registerTask('work', 'do some work', function(who, howmuch){
        console.log(who+' is working since '+howmuch); /* -> use command -> grunt greet work -> to do both tasks
                                                          -> command -> grunt work:Joe:5minutes -> to pass parameters to the function
                                                          -> to use spaces, write in quotes  grunt work:Joe:"5 min"
                                                        */
    })

    grunt.registerTask('default', ['greet', 'work:Joe:2 minutes']); /*  -> use 'default' task name to run grunt without passing any command line arguments
                                                                        -> It runs all the task names mentioned in sequence in the array
                                                                        -> command -> grunt
                                                                    */
};



