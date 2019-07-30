<template>
  <div class="name">
    <el-button v-print="'#printTest'">
      打印
    </el-button>
    <div id="printTest">
      <table border="1" cellspacing="0" cellpadding="0" >
        <tr>
            <td style="text-align:center;width:9.6cm; height:2cm" colspan="6">
                <img src="https://firebird.oss-cn-shanghai.aliyuncs.com/images/bar/barcode1.png" style="width: 9cm;height: 1.8cm" />
            </td>
        </tr>
        <tr>
        	<td style="width:0.7cm;height:1.2cm;" rowspan="2">始发地</td>
            <td style="width:4.1cm;border-bottom:0;"><b>上海浦东分拨中心</b></td>
            <td style="width:0.7cm;" rowspan="2">目的地</td>
            <td style="width:4.1cm;border-bottom:0;" colspan="3"><b>上海松江分拨中心</b></td>
        </tr>
		<tr>
			<td style="text-align:center;border-top:0;"><b style="font-size:20px;">2-AA</b></td>
			<td style="text-align:center;border-top:0;" colspan="3"><b style="font-size:20px;">2-C-57</b></td>
		</tr>
        <tr>
            <td style="width:0.7cm; height:0.6cm"></td>
            <td style="width:4.1cm;font-size:18px;" colspan="2">上海江月营业部</td>
            <td style="width:1cm;font-size:18px;" colspan="2">17</td>
            <td style="width:3.8cm;font-size:18px;">1/1</td>
        </tr>
        <tr>
            <td style="width:0.7cm;" rowspan="2">客户信息</td>
            <td style="width:5.1cm;" rowspan="2"  colspan="3">北京市海淀区交通大学<br />test 15559887888</td>
            <td style="width:1cm; height:0.8cm">客户签字</td>
            <td style="width:2.8cm; height:0.8cm">啦啦啦</td>
        </tr>
        <tr>
            <td style="width:1cm; height:0.8cm">应收金额</td>
            <td style="width:2.8cm; height:0.8cm">￥1000.56</td>
        </tr>
    </table>
    <span style="display:inline-block; text-align:center;margin-left: 47%;font-size:8px;">2019-07-04</span><br />

	<table  cellspacing="0" cellpadding="0">
        <tr>
            <td  style="text-align:center;width:9.6cm; height:0.7cm" colspan="4"><p style="text-align:center">运单号:VB52464783604</p></td>
        </tr>
        <tr>
            <td style="width:5.8cm; height:1.6cm;font-size:8px;" colspan="2">
                客户信息：测试  155555874585 <br /> 
                <img src="https://firebird.oss-cn-shanghai.aliyuncs.com/images/bar/barcode.png"  style="width: 5cm;height: 1cm" />
            </td>
            <td style="width:3.8cm" colspan="2">备注</td>
        </tr>
        <tr>
            <td style="width:2.4cm; height:0.7cm"></td>
            <td style="width:3.4cm"></td>
            <td style="width:2.2cm"></td>
            <td style="width:1.6cm"></td>
        </tr>
        <tr>
            <td style="height:0.7cm; width:5.8cm;font-size:8px;" colspan="2">
                寄方信息:上海市杨浦区荆州路162号安联大厦
                <br />test &nbsp; 15553923158
            </td>
            <td style="width:3.8cm;font-size:8px;" colspan="2">
                
                    商家id: 021K398624 <br />
                    商家订单号: order1561977083
                
            </td>
        </tr>
        <tr>
            <td style="height:0.7cm; width:5.8cm;font-size:8px;" colspan="2"><span class="allText">请您确认包裹完好，保留此包裹时，代表您已经正常签收并确认外包裹完好 &nbsp;&nbsp; http://www.jdwl.com &nbsp;&nbsp;&nbsp;客服电话:400-603-3600</span></td>
            <td style="width:3.8cm;;font-size:10px;" colspan="2">始发城市：XX</td>
        </tr>
    </table>
    <span style="display:inline-block; text-align:center;margin-left: 47%;font-size:8px;" class = "twotable">2019-07-04</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#printTest {
	font-family:"SimHei";
	margin: 0;
	padding: 0;
	/* width: 110mm;
	height: 130mm; */
  font-size:12px;
}
table{
  width: 100%;
}
@font-face{font-family: "SimHei";}
@media print
{
.twotable {page-break-after:always;}
}
table,table td,table th{border:1px solid #000;border-collapse:collapse;}

</style>
