function listProcessor(input){
    let result = [];

    let stringProcess = innerProcessor()
    
    for(let line of input){
        let [command, str] = line.split(' ');
        stringProcess[command](str)
    }

    function innerProcessor(){
        
        function add(str){
            result.push(str);
        }

        function remove(str){
          result = result.filter(x => x !== str);
            
        }

        function print(){
            console.log(result.join(','));
        }
        return {
            add,
            remove,
            print
        }
    }
}



listProcessor(['add hello', 'add again', 'add hello', 'add hello', 'add hello', 'add hello', 'remove hello', 'add again', 'print'])
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])