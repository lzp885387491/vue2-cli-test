<template>
  <div class="home">
    <lxs-components :lxsData="lxsData"></lxs-components>
  </div>
</template>

<script>
import lxsComponents from '@/components/lxsComponents.vue';
export default {
  name: 'home',
  data() {
    return {
      // lxsData: {
      //   type: 1,
      //   data: [
      //     {
      //       id: 1,
      //       isActive: true,
      //       idName: 'lxs_myvideo1',
      //       url: 'https://cmgw-vpc.lechange.com:8890/LCO/7C0C9C9RAZ1C0AF/0/1/20220330T143454/5e7ed935e38989a507d1bfcf0d6016ee.m3u8?proto=https'
      //     },
      //     {
      //       id: 2,
      //       isActive: false,
      //       idName: 'lxs_myvideo2',
      //       url: 'https://cmgw-vpc.lechange.com:8890/LCO/7C0C9D0PAZA5DDA/0/1/20220330T143518/55d0d87f67c0f0225c97aec0b3eb4fa6.m3u8?proto=https'
      //     },
      //     {
      //       id: 3,
      //       isActive: false,
      //       idName: 'lxs_myvideo3',
      //       url: 'https://cmgw-vpc.lechange.com:8890/LCO/7C0C9C9RAZ53814/0/1/20220330T143455/0d365f3d47ca04c359b83b945d5d8162.m3u8?proto=https'
      //     },
      //     {
      //       id: 4,
      //       isActive: false,
      //       idName: 'lxs_myvideo4',
      //       url: 'http://cmgw-vpc.lechange.com:8888/LCO/7C0C9D0PAZCBF04/0/1/20220330T143522/4ca74d947c6632a68d6098cdb81edccc.m3u8'
      //     },
      //     {
      //       id: 5,
      //       isActive: false,
      //       idName: 'lxs_myvideo5',
      //       url: 'http://cmgw-vpc.lechange.com:8888/LCO/7C0C9D0PAZF9E52/0/1/20220330T143525/ffaf69b9650e206129e66a51764bf46e.m3u8'
      //     },
      //     {
      //       id: 6,
      //       isActive: false,
      //       idName: 'lxs_myvideo6',
      //       url: 'http://cmgw-vpc.lechange.com:8888/LCO/7C0C9D0PAZF8534/0/1/20220330T143525/290fab874d979672ebc970f4f9124df6.m3u8'
      //     },
      //     {

      //       id: 7,
      //       isActive: false,
      //       idName: 'lxs_myvideo7',
      //       url: 'http://cmgw-vpc.lechange.com:8888/LCO/7C0C9D0PAZ7BBB3/0/1/20220330T143511/919e3bd8f434af588d83d801c22280d7.m3u8'
      //     },
      //     {
      //       id: 8,
      //       isActive: false,
      //       idName: 'lxs_myvideo8',
      //       url: 'http://cmgw-vpc.lechange.com:8888/LCO/7C0C9D0PAZCBF04/0/1/20220330T143522/4ca74d947c6632a68d6098cdb81edccc.m3u8'
      //     },
      //     {
      //       id: 9,
      //       isActive: false,
      //       idName: 'lxs_myvideo9',
      //       url: 'http://cmgw-vpc.lechange.com:8888/LCO/7C0C9C7RAZF87CB/0/1/20220330T143454/224a3a865ea07949de88c6ebc6ae451b.m3u8'
      //     },
      //   ],
      // },
      lxsData: {
        type: 2,
        announcement: [
          {
            id: 1,
            title: "企业状态",
            data: [
              {
                id: 1,
                txt: "生产装置（19）套，其中运行（14）套，停产（5）套，检修（0）套；"
              },
              {
                id: 2,
                txt: "特殊作业：特级动火（0）处;一级动火（0）处;二级动火（0）处；进入受限空间作业（0）处；"
              },
              {
                id: 3,
                txt: "是否处于试生产（否）"
              },
              {
                id: 4,
                txt: "是否处于开停车状态（是）"
              },
              {
                id: 5,
                txt: "重大危险源是否处于安全状态（是）"
              },
            ]
          },
          {
            id: 1,
            title: "企业承诺",
            data: [
              {
                id: 1,
                txt: "生产装置（19）套，其中运行（14）套，停产（5）套，检修（0）套；"
              },
              {
                id: 2,
                txt: "特殊作业：特级动火（0）处;一级动火（0）处;二级动火（0）处；进入受限空间作业（0）处；"
              },
              {
                id: 3,
                txt: "是否处于试生产（否）"
              },
              {
                id: 4,
                txt: "是否处于开停车状态（是）"
              },
              {
                id: 5,
                txt: "重大危险源是否处于安全状态（是）"
              },
            ]
          },
          {
            id: 1,
            title: "企业。。。",
            data: [
              {
                id: 1,
                txt: "生产装置（19）套，其中运行（14）套，停产（5）套，检修（0）套；"
              },
              {
                id: 2,
                txt: "特殊作业：特级动火（0）处;一级动火（0）处;二级动火（0）处；进入受限空间作业（0）处；"
              },
              {
                id: 3,
                txt: "是否处于试生产（否）"
              },
              {
                id: 4,
                txt: "是否处于开停车状态（是）"
              },
              {
                id: 5,
                txt: "重大危险源是否处于安全状态（是）"
              },
            ]
          },
        ],
        swiperData: [
          [
            {
              id: 1,
              icon: "el-icon-help",
              num: 11,
              text: "高危工艺"
            },
            {
              id: 2,
              icon: "el-icon-s-home",
              num: 16,
              text: "储罐信息"
            }
          ],
          [
            {
              id: 1,
              icon: "el-icon-help",
              num: 11,
              text: "高危工艺"
            },
            {
              id: 2,
              icon: "el-icon-s-home",
              num: 16,
              text: "储罐信息"
            }
          ],
        ],
        navList: [
          {
            id: 1,
            title: '风险四色图',
            nav: 1,
            isActive: false,
          },
          {
            id: 2,
            title: '危险作业分布图',
            nav: 2,
            isActive: false,
          },
          {
            id: 3,
            title: '风险分布图',
            nav: 3,
            isActive: false,
          },
          {
            id: 4,
            title: '风险清单',
            nav: 4,
            isActive: false,
          },
          {
            id: 5,
            title: '两单三卡',
            nav: 5,
            isActive: false,
          },
        ],
        isShowView: 5,// 1风险四色图  2危险作业分布图  3风险分布图   4风险清单   5两单三卡
        isActive: true,
      },
    };
  },
  components: {
    lxsComponents
  }
}
</script>

<style scoped></style>