<template>

    <div class="view-page page" :class="classes">
        <div class="view-page-content page-content" :class="content_classes">
            <slot></slot>
        </div>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    export default {
        name: 'Page',
        props: {
            hasNavbar: Boolean,
            hasTabbar: Boolean,
            isPadding: Boolean,
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`has-navbar`]: !!this.hasNavbar,
                        [`has-tabbar`]: !!this.hasTabbar,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            content_classes () {
                return [
                    {
                        [`padding-top`]: this.hasNavbar && this.isPadding,
                        [`padding-bottom`]: this.hasTabbar && this.isPadding,
                    }
                ];
            },
        }
    }

</script>
