export default {
    template: `<form @submit.prevent="add">
                <div class="border text-black flex">
                    <input v-model="newAssignment" placeholder="New assignment..." class="p2">
                    <button type="submit" class="bg-white p2 border-l">Add</button>
                </div>
            </form>`,

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add(){
            this.$emit('add', this.newAssignment);
            
            this.newAssignment = '';
        }
    },

}