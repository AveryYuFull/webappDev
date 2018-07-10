<template>
    <div class='kids_layout-box'>
        <slot name='hookHd'></slot>
        <slot></slot>
        <slot name='hookFt'></slot>
    </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
    .kids_layout-box {
        width: 100%;
        height: 100%;
    }
</style>
