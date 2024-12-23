export default {
    template: `
        <div class="flex gap-2">
                <button 
                    @click="$emit('update:modelValue', tag)"
                    :class="{
                        'border-blue-500 text-blue-500': tag === modelValue
                    }"
                    v-for="tag in tags" class="border rounded px-1 py-px text-xs">{{tag}}</button>
            </div>
    `,

    props: {
        initialTags: Array,
        modelValue: String
    },

    computed: {
        tags(){
            return ['all', ...new Set(this.initialTags)];
        }
    }


}