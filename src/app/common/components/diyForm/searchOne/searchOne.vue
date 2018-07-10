<template>
    <div class='kids_searchOne'>
        <div class='kid_service-box'>
            <div class='kid_admin-btn'>
                <!-- <img src='' alt='' /> -->
                <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83ervDVc4BACK36c5mAMfb3TXjzLumUxniahh09tWNictaJds38oZtTXTh33q3apa0L8RRe21zdqsopqg/132" lazy="loaded" />
            </div>
        </div>
        <div class='kid_search-box'>
            <form onsubmit='return false;' action=''>
                <div class='kid_searchOne-input kid_searchOne-active'>
                    <input type='search' class='kid_icon' :placeholder='placeholderIcon + " " + placeholderText' />
                    <span class='kid_icon kid_clear-icon'></span>
                    <span class='kid_icon kid_search-icon'></span>
                </div>
            </form>
        </div>
        <div class='kid_service-box'>
            <div class='kid_icon kid_service-btn'>&#xe62d;</div>
        </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    props: {
        placeholderIcon: { // 底纹显示的图标
            type: String,
            default: '\ue622'
        },
        placeholderText: { // 底纹显示的字
            type: String,
            default: '搜索'
        }
    }
})
export default class KidSearchOne extends Vue {

}
</script>

<style lang='less'>
@import '../../../../../css/_search/_kidSearchOne.less';

.kidSearchOneWrap();
.kidSearchOne();
</style>
