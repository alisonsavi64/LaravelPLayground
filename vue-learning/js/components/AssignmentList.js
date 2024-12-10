import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
        Assignment,
        AssignmentTags
    },
    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
                {{title}}
                <span>{{assignments.length}}</span>
            </h2>

            <assignment-tags :current-tag="currentTag" :initialTags="assignments.map(a => a.tag)" @change="currentTag = $event"></assignment-tags>

            <ul class="border divide-y mt-6">
               <assignment :assignment="assignment" v-for="assignment in filteredAssignments" :key="assignment.id"></assignment>
            </ul>

        </section>`,
    props: {
        assignments: Array,
        title: String
    },

    data(){
        return {
            currentTag: ''
        }
    },

    computed: {
        filteredAssignments(){
          if(this.currentTag === 'all') return this.assignments;
          return this.assignments.filter(a => a.tag === this.currentTag);  
        },
    }
}