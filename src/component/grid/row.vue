<template>

    <div class="view-row row" :class="classes" :style="styles">
        <slot></slot>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    export default {
        name: 'Row',
        props: {
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
            align: {
                validator (value) {
                    return oneOf(value, ['top', 'center', 'bottom'], true);
                }
            },
            gutter: {
                type: Number,
                default: 0
            },
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`row-${this.align}`]: !!this.align,
                        [`${this.color}`]: !!this.color,
                        [`${this.bgColor}-bg`]: !!this.bgColor,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            styles () {
                let style = {};
                if (this.gutter !== 0) {
                    style = {
                        marginLeft: this.gutter / -2 + 'px',
                        marginRight: this.gutter / -2 + 'px'
                    };
                }

                return style;
            }
        },
        methods: {
            updateGutter (val) {
                this.$children.forEach((child) => {
                    if (val !== 0) {
                        child.gutter = val;
                    }
                });
            }
        },
        watch: {
            gutter (val) {
                this.updateGutter(val);
            }
        }
    }
</script>
