import AssignmentCreate from "./AssignmentCreate.js"
import AssignmentList from "./AssignmentList.js"

export default {

    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In progress"><assignment-create @add="add"></assignment></assignment-list>
            <assignment-list v-show="showCompleted" :assignments="filters.completed" title="Complete Assignments" can-toggle @toggle="showCompleted = !showCompleted"></assignment-list>
        </section>
        `,

    data() {
        return {
            assignments: [],
            showComplete: true
        }
    },

    created() {
        fetch('http://localhost:3001/assignments').then(response => response.json()).then(assignments => {
            this.assignments = assignments;
        })
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },
    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            })
        }
    },
}