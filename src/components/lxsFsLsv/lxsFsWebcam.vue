<template>
    <div class="lxs-fs-webcam" v-if="view == 1">
        <!-- 摄像头页面 -->
        <div class="left">
            <dv-border-box-8 class="lxs-main_body">
                <!-- 这里放主要突出的主体摄像头画面 -->
                <video id='myvideo1' class="video-js vjs-fluid vjs-big-play-centered" autoplay="false">
                    <source :src=video.url1>
                </video>
            </dv-border-box-8>
            <dv-border-box-8 class="lxs-main_body-bottom">
                <!-- 这里放一些该页面的按钮啥的 -->
                <div class="btm_box">

                </div>
            </dv-border-box-8>
        </div>
        <div class="right">
            <dv-border-box-8 class="lxs-nav">
                <!-- 这里放3个其余摄像头画面 -->
            </dv-border-box-8>
        </div>
    </div>

    <div class="lxs-fs-webcam2" v-else-if="view == 2">
        111
    </div>
</template>

<script>
import videojs from 'video.js';
export default {
    name: 'lxsFsWebcam',
    props: ['lxsData'],
    data() {
        return {
            view: 1,
            video: {
                vid: '',
                url1: 'https://cmgw-vpc.lechange.com:8890/LCO/7C0C9C9RAZ1C0AF/0/1/20220330T143454/5e7ed935e38989a507d1bfcf0d6016ee.m3u8?proto=https'
            },
            videoInstance: null
        }
    },
    created() {
        console.log('当前页面的数据：', this.lxsData.data.length == 0 ? '默认的' : 'props传的' + this.lxsData.data);
    },
    mounted() {
        this.$nextTick(() => {
            this.videoInstance = videojs('myvideo1', {
                controls: true, // 是否显示控制条
                preload: 'auto',
                autoplay: false,
                fluid: true, // 自适应宽高
                language: 'zh-CN', // 设置语言
                muted: true, // 是否静音
                inactivityTimeout: false,
                controlBar: { // 设置控制条组件
                    //  设置控制条里面组件的相关属性及显示与否
                    // 'currentTimeDisplay': true,
                    // 'playToggle': true,
                    // 'timeDivider': true,
                    // 'durationDisplay': true,
                    // 'remainingTimeDisplay': true,
                    // volumePanel: {
                    //     inline: false,
                    // },
                    /* 使用children的形式可以控制每一个控件的位置，以及显示与否 */
                    children: [
                        { name: 'playToggle' }, // 播放按钮
                        { name: 'currentTimeDisplay' }, // 当前已播放时间
                        { name: 'progressControl' }, // 播放进度条
                        { name: 'durationDisplay' }, // 总时间
                        {
                            name: 'volumePanel', // 音量控制
                            inline: false, // 不使用水平方式
                        },
                        { name: 'FullscreenToggle' }, // 全屏
                    ]
                }
            }, () => {
                console.log('videojs播放器初始化成功')
                this.videoInstance.play();
            });
        })
    },
    methods: {}
}
</script>

<style scoped>
.lxs-fs-webcam {
    width: 100vw;
    height: 100vh;
    background-color: #060d25;
    color: #fff;
    display: flex;
    box-sizing: border-box;
    padding: .5rem;
    gap: .5rem;
}

.lxs-fs-webcam .left {
    flex: 0 1 80%;
}

.lxs-fs-webcam .left .lxs-main_body {
    height: 95%;
    box-sizing: border-box;
    padding: .5rem;
}

.lxs-fs-webcam .left .lxs-main_body .video-js {
    width: 100%;
    height: 100%;
    padding: 0 !important;
    margin: 0 !important;
}

.lxs-fs-webcam .left .lxs-main_body-bottom {
    height: calc(5% - .5rem);
    margin-top: .5rem;
    box-sizing: border-box;
    padding: 1rem;
}

.lxs-fs-webcam .left .lxs-main_body-bottom .btm_box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}

.btm {
    box-sizing: border-box;
    padding: .3rem 1rem;
    border-radius: .5rem;
    cursor: pointer;
    border: .1rem solid #fff;
    /* background-color: #fff; */
}

.lxs-fs-webcam .right {
    flex: 0 1 20%;
}
</style>