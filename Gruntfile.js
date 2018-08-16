module.exports = function(grunt){
  //grunt gives access to grunt api
    //3 params: name, desc, to do function
    grunt.registerTask('greet', 'greet the user', function(){
        console.log('1. grunt is running!'); //use command -> grunt greet -> it will display grunt is running
    })

    grunt.registerTask('work', 'do some work', function(who, howmuch){
        console.log('2. working!'); /* use -> grunt greet work -> to do both tasks
                                       -> command -> grunt work:Joe:5minutes ->
                                    */
    })
};