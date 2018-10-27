<template>
  <div id="myheader" class="myheader">
    <Row>
      <Col span="2" class="header-card">

      <div>
        <div><b>BTC/USDT</b></div>
        <div class="label">市场行情</div>
      </div>

      </Col>
      <Col span="2" class="header-card">

      <div>

        <div>6432.9300</div>
        <div class="label">最新成交价</div>
      </div>

      </Col>
      <Col span="2" class="header-card">

      <div>

        <div>6432.9300</div>
        <div class="label">24 小时涨跌幅</div>
      </div>

      </Col>
      <Col span="2" class="header-card">

      <div>

        <div>6432.9300</div>
        <div class="label">24 小时最高</div>
      </div>

      </Col>
      <Col span="2" class="header-card">

      <div>

        <div>6432.9300</div>
        <div class="label">24 小时最低</div>
      </div>

      </Col>
      <Col span="2" class="header-card">

      <div>

        <div>6432.9300</div>
        <div class="label">24 小时成交量</div>
      </div>

      </Col>

      <Col span="12" class="header-card">

      <div>

        <ButtonGroup class="settings">
          <Button icon="md-grid" size="large" title="布局重置"></Button>
          <Button icon="md-settings" size="large" title="设置" @click="modal5 = true"></Button>

        </ButtonGroup>
      </div>

      </Col>
    </Row>
    <Modal v-model="modal5" title="设置" width="800" height="600" :mask-closable="false" draggable scrollable>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                Item 1
              </template>
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                Item 2
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                Item 3
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
          Content
        </Content>
      </Layout>

    </Modal>
  </div>
</template>

<script>
export default {
  name: 'myheader',
  props: {
    msg: String,
  },
  data() {
    return {
      modal5: false,
      theme3: 'light'
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
#myheader {
  background-color: #f0f2f9;
}
#myheader .header-card {
  height: 50px;
  border-right: 1px solid #ccc;
  padding-top: 8px;
  padding-left: 10px;
}

#myheader .header-card:last-child {
  height: 50px;
  border-right: none;
  text-align: right;
  padding-top: 1px;
  padding-right: 5px;
  vertical-align: middle;
}

#myheader .settings {
  margin-top: 5px;
}

.settings .ivu-icon {
  font-size: 16px !important;
  position: relative;
}
</style>
