<template>
    <Form id="prices" :model="formItem" :label-width="50">
        <div class="buy_panel">
            <div data-v-23b2b6c0="" class="my-ivu-form-item"><label class="my-ivu-form-item-label" style="width: 50px;">可用</label>
                <div class="my-ivu-form-item-content" style="margin-left: 50px;">
                    <div data-v-23b2b6c0="" class="ivu-row">
                        <div data-v-23b2b6c0="" class="ivu-col ivu-col-span-23">
                            0.00000000 USDT
                        </div>
                    </div>
                    <!---->
                </div>
            </div>

            <div data-v-23b2b6c0="" class="my-ivu-form-item"><label class="my-ivu-form-item-label" style="width: 50px;">交易额</label>
                <div class="my-ivu-form-item-content" style="margin-left: 50px;">
                    <div data-v-23b2b6c0="" class="ivu-row">
                        <div data-v-23b2b6c0="" class="ivu-col ivu-col-span-23">
                            0.00 USDT
                        </div>
                    </div>
                    <!---->
                </div>
            </div>

            <div data-v-23b2b6c0="" class="my-ivu-form-item"><label class="my-ivu-form-item-label" style="width: 50px;">手续费</label>
                <div class="my-ivu-form-item-content" style="margin-left: 50px;">
                    <div data-v-23b2b6c0="" class="ivu-row">
                        <div data-v-23b2b6c0="" class="ivu-col ivu-col-span-23">
                            0.00000000 USDT
                        </div>
                    </div>
                    <!---->
                </div>
            </div>

            <FormItem label="买入价">

                <Input>
                <span slot="append">USDT</span>
                </Input>

            </FormItem>

            <FormItem label="交易额">

                <Input>
                <span slot="append">USDT</span>
                </Input>

            </FormItem>

            <Row>
                <Col>
                <Slider :step="25" show-stops></Slider>
                </Col>
            </Row>

            <Row>
                <Col>
                <Button type="success" long>买入 BTC</Button>
                </Col>
            </Row>
        </div>
        <div class="sell_panel">
            <div data-v-23b2b6c0="" class="my-ivu-form-item"><label class="my-ivu-form-item-label" style="width: 50px;">可用</label>
                <div class="my-ivu-form-item-content" style="margin-left: 50px;">
                    <div data-v-23b2b6c0="" class="ivu-row">
                        <div data-v-23b2b6c0="" class="ivu-col ivu-col-span-23">
                            0.00000000 USDT
                        </div>
                    </div>
                    <!---->
                </div>
            </div>

            <div data-v-23b2b6c0="" class="my-ivu-form-item"><label class="my-ivu-form-item-label" style="width: 50px;">交易额</label>
                <div class="my-ivu-form-item-content" style="margin-left: 50px;">
                    <div data-v-23b2b6c0="" class="ivu-row">
                        <div data-v-23b2b6c0="" class="ivu-col ivu-col-span-23">
                            0.00 USDT
                        </div>
                    </div>
                    <!---->
                </div>
            </div>

            <div data-v-23b2b6c0="" class="my-ivu-form-item"><label class="my-ivu-form-item-label" style="width: 50px;">手续费</label>
                <div class="my-ivu-form-item-content" style="margin-left: 50px;">
                    <div data-v-23b2b6c0="" class="ivu-row">
                        <div data-v-23b2b6c0="" class="ivu-col ivu-col-span-23">
                            0.00000000 USDT
                        </div>
                    </div>
                    <!---->
                </div>
            </div>

            <FormItem label="卖出价">
                <Row>

                    <Input>
                    <span slot="append">USDT</span>
                    </Input>

                </Row>
            </FormItem>

            <FormItem label="交易额">
                <Row>

                    <Input>
                    <span slot="append">USDT</span>
                    </Input>

                </Row>
            </FormItem>

            <Row>
                <Col span="24">
                <Slider :step="25" show-stops></Slider>
                </Col>
            </Row>

            <Row>
                <Col span="24">
                <Button type="warning" long>卖出 BTC</Button>
                </Col>
            </Row>

            <FormItem label="">

            </FormItem>
        </div>
    </Form>
</template>
<script>
export default {
    data() {
        return {
            formItem: {
                input: '',
                select: '',
                radio: 'male',
                checkbox: [],
                switch: true,
                date: '',
                time: '',
                slider: [20, 50],
                textarea: ''
            }
        }
    }
}
</script>

<style scoped lang="less">
#prices {
  padding: 10px 20px 0 20px;
}

.sell_panel {
  margin-top: 10px;
}

.my-ivu-form-item {
  margin-bottom: px;
  vertical-align: top;
  zoom: 1;
}

.ivu-form .my-ivu-form-item-label {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 12px;
  color: #515a6e;
  line-height: 1;
  padding: 4px 12px 4px 0;
  box-sizing: border-box;
}

.my-ivu-form-item-content {
  position: relative;
  line-height: 20px;
  font-size: 12px;
}
</style>
