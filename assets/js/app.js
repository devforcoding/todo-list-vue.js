const todo = new Vue({
    el: '#todo',
    data: {
        tasks: []
    },
    methods: {
        addTask () {
            const taskName = document.querySelector('.task-name').value;
            if (!taskName) return;
            this.tasks.push(taskName)
        },
        removeTask (e) {
            const taskName = e.target.innerText;
            this.tasks.splice(this.tasks.indexOf(taskName), 1);
        }
    }
});