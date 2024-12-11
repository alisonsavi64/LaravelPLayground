import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
        Assignment,
        AssignmentTags
    },
    template: `
        <section v-show="assignments.length" class="w-60">
        <div class="flex justify-between items-start">
            <h2 class="font-bold mb-2">
                {{title}}
                <span>{{assignments.length}}</span>
            </h2>
            <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
        </div>
            <assignment-tags v-model="currentTag" :initialTags="assignments.map(a => a.tag)"></assignment-tags>

            <ul class="border divide-y mt-6">
               <assignment :assignment="assignment" v-for="assignment in filteredAssignments" :key="assignment.id"></assignment>
            </ul>

            <slot></slot>

        </section>`,
    props: {
        assignments: Array,
        title: String,
        canToggle: {type: Boolean, default: false}
    },

    data(){
        return {
            currentTag: 'all'
        }
    },

    computed: {
        filteredAssignments(){
          if(this.currentTag === 'all') return this.assignments;
          return this.assignments.filter(a => a.tag === this.currentTag);  
        },
    }
}