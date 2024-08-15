const  domBuilder = (function(){
    let data;




    return {
        set data(newData) {
            data = newData;
        },
        get data() {
            return data;
        }
    }

})();

export default domBuilder;