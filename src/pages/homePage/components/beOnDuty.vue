<template>
  <div class="beOnDuty">
    <div>
      <span>
        <svg-icon name='substation' size='35'></svg-icon>
      </span>
      <div>
        <strong>雁塔分局</strong>
        <p>邮政编码：</p>
        <p>地址</p>
      </div>
    </div>
    <div>
      <span>
        <svg-icon name='orgPhone' size='35'></svg-icon>
      </span>
      <div>
        <p>总机：</p>
        <p>15094052913
          <span style="background:#4372B0;padding: 0 5px 5px 5px;border-radius: 5px">
            <svg-icon name='callInfo'></svg-icon>
          </span>
        </p>
      </div>
    </div>
    <div>
      <span>
        <svg-icon name='report' size='35'></svg-icon>
      </span>
      <div>
        <p>值班电话：</p>
        <p>值班人员：</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	name: 'beOnDuty',
	data() {
		return {}
	},
	methods: {},
	mounted() {},
}
</script>
<style lang='less'>
.beOnDuty {
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 20px 0;
  background: white;
	& > div {
		width: 25%;
		display: flex;
    align-items: center;
    &>span{
      display: inline-block;
      margin-right: 20px;
      width: 75px;
      height: 75px;
      border-radius: 50%;
      background: #4372B0;
      text-align: center;
      line-height: 90px;
    }
	}
}
</style>
