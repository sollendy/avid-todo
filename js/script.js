const {createApp} = Vue;
createApp({

    data() {
        return {
            agenda: this.loadFromLocalStorage() || [
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
            this.saveToLocalStorage();
          },
          addLi() {
            const newTodo = {
              text: this.newLi,
              done: false,
            };
            this.agenda.push(newTodo);
            this.newLi = "";
            this.saveToLocalStorage();
          },
          doneLi(index) {
            this.agenda[index].done = true;
            this.saveToLocalStorage();
          },
          saveToLocalStorage() {
            localStorage.setItem("agenda", JSON.stringify(this.agenda));
          },
          loadFromLocalStorage() {
            const storedAgenda = localStorage.getItem("agenda");
            return storedAgenda ? JSON.parse(storedAgenda) : this.agenda;
          },

    }

}).mount('#app')