const app = new Vue({
    el: '#app',
    data: {
        title: "Hello World",
        newTodo: '',
        todos: []
    },
    methods: {
        addTodo() {
            this.todos.push({
                title: this.newTodo,
                done: false
            });
            this.newTodo = "";
        },
        removeTodo(todo) {
            const indexTodo = this.todos.indexOf(todo);
            this.todos.splice(indexTodo, 1);
        },
        allDone() {
            this.todos.forEach(todo => {
                todo.done = true;
            });
        }
    }
});