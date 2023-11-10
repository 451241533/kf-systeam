<template>
    <div class="btnWrap">
       
        <div class="btn">
            确定
        </div>
        
    </div>
</template>
<script>
{/* <div class="btn" :style="{ color: dataValue > 10 ? 'red' : 'black' }" >  */}
export default {
    name: 'footerBtn',
    // setup(props){
    //     const data = reactive({

    // });
    // return{
    //     ...data
    // }
    // }
}
</script>
<style lang="less" scoped>
.btnWrap {
    background: #262960;
    position: absolute;
    min-height: 56px;
    bottom: 1px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .btn {
        display: flex;
        align-items: center;
        background: linear-gradient(90deg, rgba(241, 107, 171, 1) 0%, rgba(241, 107, 171, 1) 0%, rgba(237, 63, 137, 1) 100%, rgba(237, 63, 137, 1) 100%);
        justify-content: center;
        border-radius: 100px;
        color: #fff;
        font-size: 16px;
        min-width: 350px;
        min-height: 34px;
    }
}
</style>