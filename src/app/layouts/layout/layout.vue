<template>
    <kid-layout-box>
        <kid-header slot='hookHd'>
            <slot name='hookHd'></slot>
        </kid-header>
        <kid-body>
            <slot></slot>
        </kid-body>
        <kid-footer slot='hookFt'>
            <slot name='hookFt'></slot>
        </kid-footer>
    </kid-layout-box>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class KidLayout extends Vue {
}
</script>

<style lang='less' scoped>

</style>
