<template>
    <div class="lxsFsFormwork3">
        <div class="box-bgd"></div>
        <div class="box_container">
            <div class="box_header space-around">
                <dv-decoration-3 style="width:250px;height:30px;" />
                <dv-decoration-11 style="width:45%;height:80%;">title 标题栏</dv-decoration-11>
                <dv-decoration-3 style="width:250px;height:30px;" />
            </div>

            <div class="box_main-body flex">
                <div class="box_left">
                    <dv-border-box-8 :reverse="true" class="item">
                        <div style="height: 10%;">
                            xxx指标
                        </div>
                        <dv-scroll-board class="text-align_center" :config="config" style="width:100%;height:90%;"
                            ref="scrollBoard" />
                    </dv-border-box-8>

                    <dv-border-box-8 :reverse="true" class="item">

                    </dv-border-box-8>

                    <dv-border-box-8 :reverse="true" class="item">
                        <el-carousel :interval="2000" style="width: 100%;height: 100%;" arrow="always">
                            <el-carousel-item v-for="(item, i) in 4" :key="item">
                                {{ i + 1 }}
                            </el-carousel-item>
                        </el-carousel>
                    </dv-border-box-8>
                </div>

                <div class="box_center">

                </div>

                <div class="box_right">
                    <div class="item">
                        <dv-border-box-8></dv-border-box-8>
                    </div>
                    <div class="item">
                        <dv-border-box-8></dv-border-box-8>
                    </div>
                    <div class="item">
                        <dv-border-box-8></dv-border-box-8>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'lxsFsFormwork3',
    props: ['lxsData'],
    data() {
        return {
            config: {
                header: ['列1', '列2', '列3'],//表头数据 Array<String>
                data: [
                    ['行1列1', '行1列2', '行1列3'],
                    ['行2列1', '行2列2', '行2列3'],
                    ['行3列1', '行3列2', '行3列3'],
                    ['行4列1', '行4列2', '行4列3'],
                    ['行5列1', '行5列2', '行5列3'],
                    ['行6列1', '行6列2', '行6列3'],
                    ['行7列1', '行7列2', '行7列3'],
                    ['行8列1', '行8列2', '行8列3'],
                    ['行9列1', '行9列2', '行9列3'],
                ],//表数据   Array<Array>
                align: ['center', 'center', 'center', 'center'],//对齐方式，每一个代表一列 Array<String>
                rowNum: 5,//表行数  Number
                index: true,//是否显示行号  Boolean
                indexHeader: 'ID',//行号表头 String
                headerHeight: 50,//表头高度 Number
                columnWidth: [50],//列宽度 Array<Number>	columnWidth: [50] 其余列宽度将自动计算
                carousel: "single",//轮播方式：single按行播  page按页播  String
                hoverPause: true,//鼠标悬浮暂停轮播  Boolean
                headerBGC: '#0e224a',//表头背景色   String
                oddRowBGC: '',//奇数行背景色        String
                evenRowBGC: '',//偶数背景色         String
                waitTime: 1 * 1000,//轮播时间间隔   Number
            },
        }
    },
    created() {
        console.log(this.lxsData)
    },
    methods: {
        doUpdate() {
            this.$refs['scrollBoard'].updateRows(rows, index)
        },
        updateRows(rows, index) {
            console.log(rows)
            // ...
        }
    }
}
</script>

<style scoped>
.lxsFsFormwork3 {
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
}

.lxsFsFormwork3 .box-bgd {
    width: 100vw;
    height: 100vh;
    background-color: #10112f;
}

.box_container {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    color: #fff;
    box-sizing: border-box;
    gap: .5rem;
}

.box_container .box_header {
    width: 100%;
    height: 10%;
    font-size: 3rem;
}

.box_container .box_main-body {
    width: 100%;
    height: 90%;
    padding: .6rem;
    box-sizing: border-box;
    gap: .5rem;
}

.box_container .box_main-body .box_left,
.box_container .box_main-body .box_right {
    width: 25%;
    height: 100%;
    box-sizing: border-box;
}

.box_container .box_main-body .box_center {
    width: 50%;
    height: 100%;
}

.box_container .box_main-body .box_left .item {
    padding: 1rem;
    box-sizing: border-box;
}

.box_container .box_main-body .item:nth-of-type(1) {
    height: 30%;
    margin-bottom: .5rem;
}

.box_container .box_main-body .item:nth-of-type(2) {
    height: calc(100% - 60% - 1rem);
}

.box_container .box_main-body .item:nth-of-type(3) {
    margin-top: .5rem;
    height: 30%;
}

.box_container .box_main-body .item:nth-of-type(1) {
    height: 30%;
    margin-bottom: .5rem;
}

.box_container .box_main-body .item:nth-of-type(2) {
    height: calc(100% - 60% - 1rem);
}

.box_container .box_main-body .item:nth-of-type(3) {
    margin-top: .5rem;
    height: 30%;
}


/* element */
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

/* element */


.flex {
    display: flex;
}

.a-j_center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.text-align_center {
    text-align: center;
}

.space-around {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>