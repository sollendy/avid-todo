const {createApp} = Vue;
createApp({

    data() {
        return {
            agenda: [
                {
                    text: "andare dal dottore",
                    done: false,
                },

                {
                    text: "fare una ricarica telefonica",
                    done: true,
                },

                {
                    text: "scrivere il resto delle commissioni tramite il bottone",
                    done: false,
                },
                
            ],

            index: 0,
            newLi: "",
            
        }
    },
    
    methods: {

        //  changeDone() {
        //    if (this.agenda.done = true) {

        //    }
        //  }

        // toggleDone(agenda) {
        //     console.log(agenda);
        // }

        deleteLi(index) {
            this.agenda.splice(index, 1);
        },

        addLi(){
            const newTodo = {
                text: this.newLi,
                done: false
            }
            this.agenda.push(newTodo);
            this.newLi = "";
        },

        doneLi(index){
            this.agenda[index].done = true;
        }

    }

}).mount('#app')