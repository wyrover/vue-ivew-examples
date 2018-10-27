<template>
  <div>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>

    <br><br>

    <Button type="default" ghost>Default</Button>
    <Button type="primary" ghost>Primary</Button>
    <Button type="dashed" ghost>Dashed</Button>
    <Button type="text" ghost>Text</Button>
    <Button type="info" ghost>Info</Button>
    <Button type="success" ghost>Success</Button>
    <Button type="warning" ghost>Warning</Button>
    <Button type="error" ghost>Error</Button>

    <br><br>

    <CheckboxGroup v-model="fruit">
      <Checkbox label="香蕉"></Checkbox>
      <Checkbox label="苹果"></Checkbox>
      <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>

    <br><br>

    <div>
      <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
        <Icon type="ios-paper" />
        内容管理
        </MenuItem>
        <MenuItem name="2">
        <Icon type="ios-people" />
        用户管理
        </MenuItem>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-stats" />
            统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
        <MenuItem name="4">
        <Icon type="ios-construct" />
        综合设置
        </MenuItem>
      </Menu>
      <br>
      <p>Change theme</p>
      <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
      </RadioGroup>
    </div>

    <br><br>
    <div>
      <Row>
        <Col span="8">
        <Menu :theme="theme2">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper" />
              内容管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people" />
              用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats" />
              统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
        </Col>
        <Col span="8">
        <Menu :theme="theme2" active-name="1-2" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper" />
              内容管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people" />
              用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats" />
              统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
        </Col>
        <Col span="8">
        <Menu :theme="theme2" :open-names="['1']" accordion>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper" />
              内容管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people" />
              用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats" />
              统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
        </Col>
      </Row>
      <br>
      <p>Change theme</p>
      <RadioGroup v-model="theme2">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
      </RadioGroup>
    </div>
    <br><br>
    <div>
      <Menu :theme="theme3" active-name="1">
        <MenuGroup title="内容管理">
          <MenuItem name="1">
          <Icon type="md-document" />
          文章管理
          </MenuItem>
          <MenuItem name="2">
          <Icon type="md-chatbubbles" />
          评论管理
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="统计分析">
          <MenuItem name="3">
          <Icon type="md-heart" />
          用户留存
          </MenuItem>
          <MenuItem name="4">
          <Icon type="md-leaf" />
          流失用户
          </MenuItem>
        </MenuGroup>
      </Menu>
      <br>
      <p>Change theme</p>
      <RadioGroup v-model="theme3">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
      </RadioGroup>
    </div>
    <br><br>
    <div>
      <Tabs value="name1">
        <TabPane label="标签一" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
      </Tabs>
    </div>
    <br><br>
    <div>
      <Steps :current="1">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
      </Steps>
    </div>
    <div>
      <Input v-model="value1" size="large" placeholder="large size" />
      <br>
      <Input v-model="value2" placeholder="default size" />
      <br>
      <Input v-model="value3" size="small" placeholder="small size" />
    </div>
    <div>
      <RadioGroup v-model="vertical" vertical>
        <Radio label="apple">
          <Icon type="social-apple"></Icon>
          <span>Apple</span>
        </Radio>
        <Radio label="android">
          <Icon type="social-android"></Icon>
          <span>Android</span>
        </Radio>
        <Radio label="windows">
          <Icon type="social-windows"></Icon>
          <span>Windows</span>
        </Radio>
      </RadioGroup>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      social: ['facebook', 'github'],
      fruit: ['苹果'],
      theme1: 'light',
      theme2: 'light',
      theme3: 'light',
      value1: '',
      value2: '',
      value3: '',
      vertical: 'apple'
    }
  }
}
</script>


<style scoped lang="scss">
.ivu-btn {
  margin: 5px;
}
</style>
