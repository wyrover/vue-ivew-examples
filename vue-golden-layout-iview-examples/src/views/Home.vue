<template>
  <div>
    <myheader />
    <div class="w-full h-screen" id="golden"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import GoldenLayout from 'golden-layout'
import MyHeader from '@/components/MyHeader'

export default {
  name: 'home',
  components: {
    myheader: MyHeader
  },
  mounted() {
    let config = {
      settings: {
        showPopoutIcon: false,
        showCloseIcon: true

      },
      dimensions: { borderWidth: 4 },
      content: [
        {

          type: 'row',
          height: 90,
          content: [{
            type: 'column',
            width: 15,
            content: [{
              type: 'stack',
              content: [{
                type: 'component',
                title: 'USDT',
                componentName: 'component01',
                componentState: { exchange: '' },
                isClosable: true
              }, {
                type: 'component',
                title: 'BTC',
                componentName: 'component01',
                componentState: { exchange: '' },
                isClosable: true
              }, {
                type: 'component',
                title: 'ETH',
                componentName: 'component01',
                componentState: { exchange: '' },
                isClosable: true
              }, {
                type: 'component',
                title: 'EOS',
                componentName: 'component01',
                componentState: { exchange: '' },
                isClosable: true
              }, {
                type: 'component',
                title: '自选',
                componentName: 'component01',
                componentState: { exchange: '' },
                isClosable: true
              }]

            }, {
              type: 'component',
              title: '实时成交',
              componentName: 'component01',
              componentState: { exchange: '' },
              isClosable: true
            }]

          }, {
            type: 'column',
            width: 20,
            content: [{
              type: 'component',
              title: '最新价',
              componentName: 'component01',
              componentState: { exchange: '' },
              isClosable: true
            }, {
              type: 'stack',
              content: [{
                type: 'component',
                title: '现时交易',
                componentName: 'myform',
                componentState: { exchange: '' },
                isClosable: true
              }, {
                type: 'component',
                title: '市价交易',
                componentName: 'myform',
                componentState: { exchange: '' },
                isClosable: true
              }]

            }]
          }, {
            type: 'column',
            width: 65,
            content: [{
              type: 'component',
              height: 70,
              //componentName: 'tradingview',
              componentName: 'component01',
              title: 'K 线图',
              componentState: { exchange: '' },
              isClosable: true
            }, {
              type: 'stack',
              height: 30,
              content: [{
                type: 'component',
                title: '我的资产',
                componentName: 'component01',
                componentState: { exchange: '' },
                isClosable: true
              }, {
                type: 'component',
                title: '我的持仓',
                componentName: 'component01',
                componentState: { exchange: '' },
                isClosable: true

              }, {
                type: 'component',
                title: '当前委托',
                componentName: 'component01',
                componentState: { exchange: '' },
                isClosable: true
              }, {
                type: 'component',
                title: '历史委托',
                componentName: 'component01',
                componentState: { exchange: '' },
                isClosable: true
              }]

            }]

          }]

        }




      ]
    }
    const self = this
    let savedState = localStorage.getItem('savedState')
    savedState = null // 测试
    config = savedState !== null ? JSON.parse(savedState) : config
    const myLayout = new GoldenLayout(config, $('#golden'))
    function registerComp(name, componentName, data) {
      myLayout.registerComponent(componentName, function (container, state) {
        container.getElement().html(`<div id="${name}"></div>`)
        setTimeout(() => {
          const ExchangeListConstructor = Vue.component(name).extend({
            store: self.$store
          })

          const vm = new ExchangeListConstructor({
            propsData: {
              lastState: container.getState() || {},
              goldenlayoutContainer: container,
              rowData: data

            }
          })
          vm.$mount(`#${name}`)
        })
      })
    }


    registerComp('component01', 'component01', null)
    registerComp('myform', 'myform', null)

    myLayout.init()
    myLayout.on('stateChanged', function () {
      console.log('state changed!!!!!!!!!')
      const stateToSave = myLayout.toConfig()
      var state = JSON.stringify(stateToSave)
      localStorage.setItem('savedState', state)

      //self.modify_golden_layout()
    })



    myLayout.on('stackCreated', (stack) => {

      stack.on('activeContentItemChanged', function (contentItem) {


        let content_list = _.takeWhile(stack.config.content, { "componentName": "prices" });
        if (content_list.length === 0) {
          stack.header.controlsContainer.find("li#tool_01").remove();
          stack.header.controlsContainer.find("li#tool_02").remove();
          stack.header.controlsContainer.find("li#tool_03").remove();
        }

        if (contentItem.componentName === "prices" && stack.header.controlsContainer.find("li#tool_01").length === 0) {
          stack.header.controlsContainer.prepend('<li title="11111111111111" id="tool_01"></li>');
          stack.header.controlsContainer.prepend('<li title="22222222222222" id="tool_02"></li>');
          stack.header.controlsContainer.prepend('<li title="33333333333333" id="tool_03"></li>');

          stack.header.controlsContainer.find("li#tool_01").click(function () {
            self.tool_01_clicked()
          })

          stack.header.controlsContainer.find("li#tool_02").click(function () {
            self.tool_02_clicked()
          })

          stack.header.controlsContainer.find("li#tool_03").click(function () {
            self.tool_03_clicked()
          })
        }
      });






    })





    window.addEventListener('resize', (e) => {
      $('#golden').css({ height: window.innerHeight - $('#myheader').height() - 2 + 'px' })
      myLayout.updateSize()
    })


    $('#golden').css({ height: window.innerHeight - $('#myheader').height() - 2 + 'px' })


  },
};
</script>

<style lang="less">
.h-screen {
  height: 100vh;
}

.lm_goldenlayout {
  background: #e1e8ed !important;
}

.lm_splitter {
  background: #e1e8ed !important;
}

.lm_tab:hover,
.lm_tab.lm_active {
  background: #5c67b8;
  color: #fff;
}

.lm_content {
  background: #fff !important;
}
</style>