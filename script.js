const { createApp } = Vue;

  createApp({
    data() {
      return {
        todolist: [],
        todo: "",
      };
    },
    methods: {
      add() {
        this.todo = this.todo.trim();

        if (!this.todo.length) return;

        this.todolist.push(this.todo);
        this.todo = "";
      },
    },
  }).mount("#app");