<template>

    <div class="view-check-list">
        <div class="view-check-title item item-divider" v-if="title">{{title}}</div>
        <div class="view-check-item item item-checkbox"
             v-for="(option, index) in options" :key="index" :class="item_classes">
            <label class="view-check-label checkbox" :for="index">
                <input class="view-check" :class="classes" type="checkbox"
                       :name="check_id" :value="option.value" v-model="val"
                       :readonly="readonly" :disabled="disabled"/>
            </label>
            {{option.name}}
        </div>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    export default {
        name: 'Check',
        props: {
            options: {
                type: Array,
                required: true
            },
            value: {
                type: Array,
            },
            disabled: [Boolean, String],
            readonly: [Boolean, String],
            color: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            bgColor: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            title: [String, Number],
            itemClassName: String,
            className: String
        },
        data() {
            return {
                check_id: 'view-check-' + Math.random().toString(36).substring(3, 6),
            }
        },
        mounted: function() {
            console.log('mounted');
        },
        computed: {
            classes () {
                return [
                    {
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            item_classes () {
                return [
                    {
                        [`${this.color}`]: !!this.color,
                        [`${this.bgColor}-bg`]: !!this.bgColor,
                        [`${this.itemClassName}`]: !!this.itemClassName
                    }
                ];
            },
            val: {
                get:function() {
                    return this.value;
                },
                set:function(val) {
                    this.$emit('input', val);
                }
            },
        }
    }
</script>
