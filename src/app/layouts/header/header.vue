<template>
    <div class='kids_layout-header'>
        <slot></slot>
    </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.kids_layout-header {
    height: 44px;
    position: fixed;
    display: inline-block;
    vertical-align: middle;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: none;
    max-width: 600px;
    margin: 0 auto;
    transition: height 0.2s;

    background-color: #FFFFFF;
    box-shadow: 0 1px 2px rgba(204, 204, 204, 0.5);
}
</style>
