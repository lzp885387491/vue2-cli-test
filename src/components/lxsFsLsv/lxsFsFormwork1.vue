<template>
    <div class="view">
        <div class="lxs-fs-webcam" v-show="showView">
            <!-- 摄像头页面 -->
            <div class="left">
                <dv-border-box-8 class="lxs-main_body">
                    <!-- 这里放主要突出的主体摄像头画面 -->
                    <div class="dom" style="width: 100%; height: 100%;">
                        <video :id='video.idName' class="video-js vjs-fluid vjs-big-play-centered" autoplay="false">
                            <source :src=video.url type="application/x-mpegURL">
                        </video>
                    </div>
                </dv-border-box-8>
                <dv-border-box-8 class="lxs-main_body-bottom">
                    <!-- 这里放一些该页面的按钮啥的 -->
                    <div class="btm_box">
                        <div class="item" @click="navpreviousPage()">返回</div>
                        <div class="item">上一个</div>
                        <div class="item" @click="suspend()">暂停</div>
                        <div class="item">下一个</div>
                        <div class="item" @click="showView = !showView">全部</div>
                    </div>
                </dv-border-box-8>
            </div>
            <div class="right">
                <dv-border-box-8 class="lxs-nav flex-center">
                    <!-- 这里放3个其余摄像头画面 -->
                    <div class="item mb-05" :class="item.isActive ? 'active' : ''" v-for="(item, index) in rightVideo"
                        :key="index">
                        <video :id='item.idName' @click="cheage(item.id, rightVideo)"
                            class="video-js vjs-fluid vjs-big-play-centered" autoplay="false">
                            <source :src=item.url>
                        </video>
                    </div>
                </dv-border-box-8>
            </div>
        </div>
        <div class="view2">
            <dv-border-box-8 class="view2-box">
                <div style="width: 100%;height: 100%; overflow: hidden;">
                    <div class="view2-box-flex">
                        <div class="item" @click="cheage(item.id, videoList)" @dblclick="ondblclick(item)"
                            :class="item.isActive ? 'active' : ''" v-for="(item, index) in videoList" :key="index">
                            <video :id='item.idName' class="video-js vjs-fluid vjs-big-play-centered" autoplay="false">
                                <source :src=item.url type="application/x-mpegURL">
                            </video>
                        </div>
                    </div>
                </div>
            </dv-border-box-8>
        </div>
    </div>
</template>

<script>
import videojs from 'video.js';
export default {
    name: 'lxsFsFormwork1',
    props: ['lxsData'],
    data() {
        return {
            showView: true,
            video: {
            },
            rightVideo: [],
            videoList: [],
            videoInstance: null,
        }
    },
    created() {
        let giveTacitConsentTodata = [
            {
                id: 1,
                isActive: true,
                idName: 'lxs_myvideo1',
                url: 'https://cmgw-vpc.lechange.com:8890/LCO/7C0C9C9RAZ1C0AF/0/1/20220330T143454/5e7ed935e38989a507d1bfcf0d6016ee.m3u8?proto=https'
            },
            {
                id: 2,
                isActive: false,
                idName: 'lxs_myvideo2',
                url: 'https://cmgw-vpc.lechange.com:8890/LCO/7C0C9D0PAZA5DDA/0/1/20220330T143518/55d0d87f67c0f0225c97aec0b3eb4fa6.m3u8?proto=https'
            },
            {
                id: 3,
                isActive: false,
                idName: 'lxs_myvideo3',
                url: 'https://cmgw-vpc.lechange.com:8890/LCO/7C0C9C9RAZ53814/0/1/20220330T143455/0d365f3d47ca04c359b83b945d5d8162.m3u8?proto=https'
            },
            {
                id: 4,
                isActive: false,
                idName: 'lxs_myvideo4',
                url: 'http://cmgw-vpc.lechange.com:8888/LCO/7C0C9D0PAZCBF04/0/1/20220330T143522/4ca74d947c6632a68d6098cdb81edccc.m3u8'
            },
            {
                id: 5,
                isActive: false,
                idName: 'lxs_myvideo5',
                url: 'http://cmgw-vpc.lechange.com:8888/LCO/7C0C9D0PAZF9E52/0/1/20220330T143525/ffaf69b9650e206129e66a51764bf46e.m3u8'
            },
            {
                id: 6,
                isActive: false,
                idName: 'lxs_myvideo6',
                url: 'http://cmgw-vpc.lechange.com:8888/LCO/7C0C9D0PAZF8534/0/1/20220330T143525/290fab874d979672ebc970f4f9124df6.m3u8'
            },
            {

                id: 7,
                isActive: false,
                idName: 'lxs_myvideo7',
                url: 'http://cmgw-vpc.lechange.com:8888/LCO/7C0C9D0PAZ7BBB3/0/1/20220330T143511/919e3bd8f434af588d83d801c22280d7.m3u8'
            },
            {
                id: 8,
                isActive: false,
                idName: 'lxs_myvideo8',
                url: 'http://cmgw-vpc.lechange.com:8888/LCO/7C0C9D0PAZCBF04/0/1/20220330T143522/4ca74d947c6632a68d6098cdb81edccc.m3u8'
            },
            {
                id: 9,
                isActive: false,
                idName: 'lxs_myvideo9',
                url: 'http://cmgw-vpc.lechange.com:8888/LCO/7C0C9C7RAZF87CB/0/1/20220330T143454/224a3a865ea07949de88c6ebc6ae451b.m3u8'
            },
        ];
        let data = JSON.parse(JSON.stringify(this.lxsData.data ? this.lxsData.data : giveTacitConsentTodata));

        if (this.lxsData.data) {
            console.log('用户传的', this.lxsData.data)
        } else {
            console.log('默认值', data)
        }
        let videoData = JSON.parse(JSON.stringify(data[0]))
        videoData.idName = 'lxs_major';
        this.video = videoData;

        let rightData = [
            JSON.parse(JSON.stringify(data[0])),
            JSON.parse(JSON.stringify(data[1])),
            JSON.parse(JSON.stringify(data[2])),
        ];
        rightData.forEach((item, i) => {
            item.idName = 'lxs_right' + (i + 1);
        })
        this.rightVideo = rightData;
        this.videoList = data;
    },
    mounted() {
        this.initVideoDom()
    },
    methods: {
        // 初始化video的配置
        initVideo(id) {
            let init;
            if (id == 'lxs_major') {
                init = {
                    controls: true, // 是否显示控制条
                    preload: 'auto',
                    autoplay: false,
                    fluid: true, // 自适应宽高
                    language: 'zh-CN', // 设置语言
                    muted: true, // 是否静音
                    inactivityTimeout: false,
                    controlBar: { // 设置控制条组件
                        /* 使用children的形式可以控制每一个控件的位置，以及显示与否 */
                        children: [
                            { name: 'playToggle' }, // 播放按钮
                            {
                                name: 'volumePanel', // 音量控制
                                inline: false, // 不使用水平方式
                            },
                            { name: 'FullscreenToggle' } // 全屏
                        ]
                    }
                }
            } else {
                init = {
                    controls: false, // 是否显示控制条
                    preload: 'auto',
                    muted: true, // 是否静音
                }
            }
            this.videoInstance = videojs(id, init, () => {
                this.videoInstance.play();
            });
        },
        // 初始化渲染video的dom
        initVideoDom() {
            this.$nextTick(() => {
                this.initVideo('lxs_major');
                this.rightVideo.forEach((item) => {
                    this.initVideo(item.idName);
                })
                this.videoList.forEach(element => {
                    this.initVideo(element.idName);
                });
            })
        },
        // 添加选中状态
        cheage(id, data) {
            data.forEach(element => {
                element.isActive = false;
                if (element.id == id) {
                    element.isActive = true;
                }
            });
        },
        ondblclick(data) {
            console.log(data);
            this.showView = !this.showView
            console.log('双击事件触发')
        },
        // 暂停主视角摄像头画面
        suspend() {

        },
        // 返回上一页
        navpreviousPage() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.view {
    position: relative;
}

.lxs-fs-webcam {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
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
    width: 60%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.lxs-fs-webcam .left .lxs-main_body-bottom .btm_box .item {
    padding: .2rem 2rem;
    border: .1rem solid #fff;
    border-radius: .5rem;
    cursor: pointer;
    font-weight: 900;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image:
        linear-gradient(90deg,
            #fc8600,
            #df3053,
            #f529b1,
            #a083ed,
            #1396fa,
            #6f4ccf,
            #ef7ac8,
            #e04665,
            #a86416);
    background-size: 200%;
}

.lxs-fs-webcam .left .lxs-main_body-bottom .btm_box .item:hover {
    animation: streamer 1s linear infinite;
    border: .1rem solid #df3053;
}

.lxs-fs-webcam .right {
    flex: 0 1 20%;
    box-sizing: border-box;
}

.lxs-fs-webcam .right .lxs-nav {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: .5rem;
    border-radius: 1rem;
}

.lxs-fs-webcam .right .lxs-nav .item {
    width: 100%;
    height: calc(100vh / 3.1);
    color: red;
    border-radius: 1rem;
    box-sizing: border-box;
}

.lxs-fs-webcam .right .lxs-nav .item .video-js {
    width: 100%;
    height: 100%;
    padding: 0 !important;
    margin: 0 !important;
    box-sizing: border-box;
    border-radius: 1rem;
}

.active {
    animation: moveLine 5s infinite linear;
}

.mb-05 {
    margin-bottom: .5rem;
}

.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.view2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: .5rem;
    background-color: #060d25;
    color: #fff;
    box-sizing: border-box;
}

.view2 .view2-box {
    padding: .8rem;
    box-sizing: border-box;
}

.view2 .view2-box-flex {
    width: 100%;
    max-width: 260rem;
    height: 100%;
    overflow-y: scroll;
    display: grid;
    grid-template: repeat(3, auto)/repeat(3, auto);
    grid-gap: 2rem;
    justify-content: center;
}

.view2 .view2-box .item {
    width: 60rem;
    height: 50rem;
    box-sizing: border-box;
}

.view2 .view2-box .item .video-js {
    width: 100%;
    height: 100%;
}

@keyframes moveLine {
    0% {
        border: .2rem solid Red;
    }

    20% {
        border: .2rem solid orange;
    }

    40% {
        border: .2rem solid yellow;
    }

    60% {
        border: .2rem solid green;
    }

    80% {
        border: .2rem solid blue;
    }

    100% {
        border: .2rem solid purple;
    }
}

@keyframes streamer {
    0% {
        background-position: 0%;
    }

    100% {
        background-position: 200%;
    }
}
</style>