<template>
  <div class="addEdit-block">
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
	  :style="{backgroundColor:addEditForm.addEditBoxColor}"
    >
      <el-row>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="电影名称" prop="dianyingmingcheng">
          <el-input v-model="ruleForm.dianyingmingcheng" 
              placeholder="电影名称" clearable  :readonly="ro.dianyingmingcheng"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="电影名称" prop="dianyingmingcheng">
              <el-input v-model="ruleForm.dianyingmingcheng" 
                placeholder="电影名称" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="电影类型" prop="dianyingleixing">
          <el-select v-model="ruleForm.dianyingleixing" placeholder="请选择电影类型">
            <el-option
                v-for="(item,index) in dianyingleixingOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="电影类型" prop="dianyingleixing">
	      <el-input v-model="ruleForm.dianyingleixing"
                placeholder="电影类型" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="24">  
        <el-form-item class="upload" v-if="type!='info' && !ro.haibao" label="海报" prop="haibao">
          <file-upload
          tip="点击上传海报"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.haibao?ruleForm.haibao:''"
          @change="haibaoUploadChange"
          ></file-upload>
        </el-form-item>
        <div v-else>
          <el-form-item v-if="ruleForm.haibao" label="海报" prop="haibao">
            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.haibao.split(',')" :src="item" width="100" height="100">
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="导演" prop="daoyan">
          <el-input v-model="ruleForm.daoyan" 
              placeholder="导演" clearable  :readonly="ro.daoyan"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="导演" prop="daoyan">
              <el-input v-model="ruleForm.daoyan" 
                placeholder="导演" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="主演" prop="zhuyan">
          <el-input v-model="ruleForm.zhuyan" 
              placeholder="主演" clearable  :readonly="ro.zhuyan"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="主演" prop="zhuyan">
              <el-input v-model="ruleForm.zhuyan" 
                placeholder="主演" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="制片地区" prop="zhipiandiqu">
          <el-input v-model="ruleForm.zhipiandiqu" 
              placeholder="制片地区" clearable  :readonly="ro.zhipiandiqu"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="制片地区" prop="zhipiandiqu">
              <el-input v-model="ruleForm.zhipiandiqu" 
                placeholder="制片地区" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="语言" prop="yuyan">
          <el-input v-model="ruleForm.yuyan" 
              placeholder="语言" clearable  :readonly="ro.yuyan"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="语言" prop="yuyan">
              <el-input v-model="ruleForm.yuyan" 
                placeholder="语言" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="date" v-if="type!='info'" label="上映日期" prop="shangyingriqi">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.shangyingriqi" 
                type="date"
                placeholder="上映日期">
            </el-date-picker> 
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.shangyingriqi" label="上映日期" prop="shangyingriqi">
              <el-input v-model="ruleForm.shangyingriqi" 
                placeholder="上映日期" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="片长" prop="pianzhang">
          <el-input v-model="ruleForm.pianzhang" 
              placeholder="片长" clearable  :readonly="ro.pianzhang"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="片长" prop="pianzhang">
              <el-input v-model="ruleForm.pianzhang" 
                placeholder="片长" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="评分" prop="pingfen">
          <el-input v-model="ruleForm.pingfen" 
              placeholder="评分" clearable  :readonly="ro.pingfen"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="评分" prop="pingfen">
              <el-input v-model="ruleForm.pingfen" 
                placeholder="评分" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="24">  
        <el-form-item class="upload" v-if="type!='info'" label="电影播放" prop="dianyingbofang">
          <file-upload
          tip="点击上传电影播放"
          action="file/upload"
          :limit="1"
          :multiple="true"
          :fileUrls="ruleForm.dianyingbofang?ruleForm.dianyingbofang:''"
          @change="dianyingbofangUploadChange"
          ></file-upload>
        </el-form-item> 
        <div v-else>
          <el-form-item v-if="ruleForm.dianyingbofang" label="电影播放" prop="dianyingbofang">
            <el-button type="text" size="small" @click="download(ruleForm.dianyingbofang)">预览</el-button>
          </el-form-item>
        </div>
      </el-col>
      </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item v-if="type!='info'"  label="电影介绍" prop="dianyingjieshao">
                <editor 
                    style="min-width: 200px; max-width: 600px;"
                    v-model="ruleForm.dianyingjieshao" 
                    class="editor" 
                    action="file/upload">
                </editor>
              </el-form-item>
              <div v-else>
                <el-form-item v-if="ruleForm.dianyingjieshao" label="电影介绍" prop="dianyingjieshao">
                    <span v-html="ruleForm.dianyingjieshao"></span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
      <el-form-item class="btn">
        <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
        <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
        <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
  data() {
    let self = this
    var validateIdCard = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!checkIdCard(value)) {
        callback(new Error("请输入正确的身份证号码"));
      } else {
        callback();
      }
    };
    var validateUrl = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isURL(value)) {
        callback(new Error("请输入正确的URL地址"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isPhone(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isEmail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isNumber(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    var validateIntNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isIntNumer(value)) {
        callback(new Error("请输入整数"));
      } else {
        callback();
      }
    };
    return {
	  addEditForm: {"btnSaveFontColor":"#fff","selectFontSize":"14px","btnCancelBorderColor":"#DCDFE6","inputBorderRadius":"4px","inputFontSize":"14px","textareaBgColor":"#fff","btnSaveFontSize":"14px","textareaBorderRadius":"4px","uploadBgColor":"#fff","textareaBorderStyle":"solid","btnCancelWidth":"88px","textareaHeight":"120px","dateBgColor":"#fff","btnSaveBorderRadius":"20px","uploadLableFontSize":"14px","textareaBorderWidth":"1px","inputLableColor":"#606266","addEditBoxColor":"#fff","dateIconFontSize":"14px","btnSaveBgColor":"rgba(0, 150, 136, 1)","uploadIconFontColor":"#8c939d","textareaBorderColor":"#DCDFE6","btnCancelBgColor":"#ecf5ff","selectLableColor":"#606266","btnSaveBorderStyle":"solid","dateBorderWidth":"1px","dateLableFontSize":"14px","dateBorderRadius":"4px","btnCancelBorderStyle":"solid","selectLableFontSize":"14px","selectBorderStyle":"solid","selectIconFontColor":"#C0C4CC","btnCancelHeight":"44px","inputHeight":"40px","btnCancelFontColor":"#606266","dateBorderColor":"#DCDFE6","dateIconFontColor":"#C0C4CC","uploadBorderStyle":"solid","dateBorderStyle":"solid","dateLableColor":"#606266","dateFontSize":"14px","inputBorderWidth":"1px","uploadIconFontSize":"28px","selectHeight":"40px","inputFontColor":"#606266","uploadHeight":"148px","textareaLableColor":"#606266","textareaLableFontSize":"14px","btnCancelFontSize":"14px","inputBorderStyle":"solid","btnCancelBorderRadius":"20px","inputBgColor":"#fff","inputLableFontSize":"14px","uploadLableColor":"#606266","uploadBorderRadius":"4px","btnSaveHeight":"44px","selectBgColor":"#fff","btnSaveWidth":"88px","selectIconFontSize":"14px","dateHeight":"40px","selectBorderColor":"#DCDFE6","inputBorderColor":"#DCDFE6","uploadBorderColor":"#DCDFE6","textareaFontColor":"#606266","selectBorderWidth":"1px","dateFontColor":"#606266","btnCancelBorderWidth":"1px","uploadBorderWidth":"1px","textareaFontSize":"14px","selectBorderRadius":"4px","selectFontColor":"#606266","btnSaveBorderColor":"#409EFF","btnSaveBorderWidth":"1px"},
      id: '',
      type: '',
      ro:{
	dianyingmingcheng : false,
	dianyingleixing : false,
	haibao : false,
	daoyan : false,
	zhuyan : false,
	zhipiandiqu : false,
	yuyan : false,
	shangyingriqi : false,
	pianzhang : false,
	pingfen : false,
	dianyingjieshao : false,
	dianyingbofang : false,
	clicktime : false,
	clicknum : false,
      },
      ruleForm: {
        dianyingmingcheng: '',
        dianyingleixing: '',
        haibao: '',
        daoyan: '',
        zhuyan: '',
        zhipiandiqu: '',
        yuyan: '',
        shangyingriqi: '',
        pianzhang: '',
        pingfen: '',
        dianyingjieshao: '',
        dianyingbofang: '',
        clicktime: '',
      },
          dianyingleixingOptions: [],
      rules: {
          dianyingmingcheng: [
                { required: true, message: '电影名称不能为空', trigger: 'blur' },
          ],
          dianyingleixing: [
                { required: true, message: '电影类型不能为空', trigger: 'blur' },
          ],
          haibao: [
          ],
          daoyan: [
          ],
          zhuyan: [
          ],
          zhipiandiqu: [
          ],
          yuyan: [
          ],
          shangyingriqi: [
          ],
          pianzhang: [
          ],
          pingfen: [
          ],
          dianyingjieshao: [
          ],
          dianyingbofang: [
          ],
          clicktime: [
          ],
          clicknum: [
                { validator: validateIntNumber, trigger: 'blur' },
          ],
      }
    };
  },
  props: ["parent"],
  computed: {
  },
  created() {
	this.addEditStyleChange()
	this.addEditUploadStyleChange()
  },
  methods: {
    // 下载
    download(file){
      window.open(`${file}`)
    },
    // 初始化
    init(id,type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if(this.type=='info'||this.type=='else'){
        this.info(id);
      }else if(this.type=='cross'){
        var obj = this.$storage.getObj('crossObj');
        for (var o in obj){
          if(o=='dianyingmingcheng'){
            this.ruleForm.dianyingmingcheng = obj[o];
	    this.ro.dianyingmingcheng = true;
            continue;
          }
          if(o=='dianyingleixing'){
            this.ruleForm.dianyingleixing = obj[o];
	    this.ro.dianyingleixing = true;
            continue;
          }
          if(o=='haibao'){
            this.ruleForm.haibao = obj[o];
	    this.ro.haibao = true;
            continue;
          }
          if(o=='daoyan'){
            this.ruleForm.daoyan = obj[o];
	    this.ro.daoyan = true;
            continue;
          }
          if(o=='zhuyan'){
            this.ruleForm.zhuyan = obj[o];
	    this.ro.zhuyan = true;
            continue;
          }
          if(o=='zhipiandiqu'){
            this.ruleForm.zhipiandiqu = obj[o];
	    this.ro.zhipiandiqu = true;
            continue;
          }
          if(o=='yuyan'){
            this.ruleForm.yuyan = obj[o];
	    this.ro.yuyan = true;
            continue;
          }
          if(o=='shangyingriqi'){
            this.ruleForm.shangyingriqi = obj[o];
	    this.ro.shangyingriqi = true;
            continue;
          }
          if(o=='pianzhang'){
            this.ruleForm.pianzhang = obj[o];
	    this.ro.pianzhang = true;
            continue;
          }
          if(o=='pingfen'){
            this.ruleForm.pingfen = obj[o];
	    this.ro.pingfen = true;
            continue;
          }
          if(o=='dianyingjieshao'){
            this.ruleForm.dianyingjieshao = obj[o];
	    this.ro.dianyingjieshao = true;
            continue;
          }
          if(o=='dianyingbofang'){
            this.ruleForm.dianyingbofang = obj[o];
	    this.ro.dianyingbofang = true;
            continue;
          }
          if(o=='clicktime'){
            this.ruleForm.clicktime = obj[o];
	    this.ro.clicktime = true;
            continue;
          }
          if(o=='clicknum'){
            this.ruleForm.clicknum = obj[o];
	    this.ro.clicknum = true;
            continue;
          }
        }
      }
      // 获取用户信息
      this.$http({
        url: `${this.$storage.get('sessionTable')}/session`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          var json = data.data;
        } else {
          this.$message.error(data.msg);
        }
      });
            this.$http({
              url: `option/dianyingleixing/dianyingleixing`,
              method: "get"
            }).then(({ data }) => {
              if (data && data.code === 0) {
                this.dianyingleixingOptions = data.data;
              } else {
                this.$message.error(data.msg);
              }
            });
         
    },
    // 多级联动参数
    info(id) {
      this.$http({
        url: `dianyingxinxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
	//解决前台上传图片后台不显示的问题
	let reg=new RegExp('../../../upload','g')//g代表全部
	this.ruleForm.dianyingjieshao = this.ruleForm.dianyingjieshao.replace(reg,'../../../springbootmts92/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    // 提交
    onSubmit() {
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}














      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.$http({
            url: `dianyingxinxi/${!this.ruleForm.id ? "save" : "update"}`,
            method: "post",
            data: this.ruleForm
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.parent.showFlag = true;
                  this.parent.addOrUpdateFlag = false;
                  this.parent.dianyingxinxiCrossAddOrUpdateFlag = false;
                  this.parent.search();
                  this.parent.contentStyleChange();
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.dianyingxinxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    haibaoUploadChange(fileUrls) {
	this.ruleForm.haibao = fileUrls;
			this.addEditUploadStyleChange()
    },
    dianyingbofangUploadChange(fileUrls) {
	this.ruleForm.dianyingbofang = fileUrls;
			this.addEditUploadStyleChange()
    },
	addEditStyleChange() {
	  this.$nextTick(()=>{
	    // input
	    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputFontColor
	      el.style.fontSize = this.addEditForm.inputFontSize
	      el.style.borderWidth = this.addEditForm.inputBorderWidth
	      el.style.borderStyle = this.addEditForm.inputBorderStyle
	      el.style.borderColor = this.addEditForm.inputBorderColor
	      el.style.borderRadius = this.addEditForm.inputBorderRadius
	      el.style.backgroundColor = this.addEditForm.inputBgColor
	    })
	    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputLableColor
	      el.style.fontSize = this.addEditForm.inputLableFontSize
	    })
	    // select
	    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectFontColor
	      el.style.fontSize = this.addEditForm.selectFontSize
	      el.style.borderWidth = this.addEditForm.selectBorderWidth
	      el.style.borderStyle = this.addEditForm.selectBorderStyle
	      el.style.borderColor = this.addEditForm.selectBorderColor
	      el.style.borderRadius = this.addEditForm.selectBorderRadius
	      el.style.backgroundColor = this.addEditForm.selectBgColor
	    })
	    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectLableColor
	      el.style.fontSize = this.addEditForm.selectLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
	      el.style.color = this.addEditForm.selectIconFontColor
	      el.style.fontSize = this.addEditForm.selectIconFontSize
	    })
	    // date
	    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateFontColor
	      el.style.fontSize = this.addEditForm.dateFontSize
	      el.style.borderWidth = this.addEditForm.dateBorderWidth
	      el.style.borderStyle = this.addEditForm.dateBorderStyle
	      el.style.borderColor = this.addEditForm.dateBorderColor
	      el.style.borderRadius = this.addEditForm.dateBorderRadius
	      el.style.backgroundColor = this.addEditForm.dateBgColor
	    })
	    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateLableColor
	      el.style.fontSize = this.addEditForm.dateLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
	      el.style.color = this.addEditForm.dateIconFontColor
	      el.style.fontSize = this.addEditForm.dateIconFontSize
	      el.style.lineHeight = this.addEditForm.dateHeight
	    })
	    // upload
	    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
	    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
	      el.style.width = this.addEditForm.uploadHeight
	      el.style.height = this.addEditForm.uploadHeight
	      el.style.borderWidth = this.addEditForm.uploadBorderWidth
	      el.style.borderStyle = this.addEditForm.uploadBorderStyle
	      el.style.borderColor = this.addEditForm.uploadBorderColor
	      el.style.borderRadius = this.addEditForm.uploadBorderRadius
	      el.style.backgroundColor = this.addEditForm.uploadBgColor
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.uploadHeight
	      el.style.color = this.addEditForm.uploadLableColor
	      el.style.fontSize = this.addEditForm.uploadLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
	      el.style.color = this.addEditForm.uploadIconFontColor
	      el.style.fontSize = this.addEditForm.uploadIconFontSize
	      el.style.lineHeight = iconLineHeight
	      el.style.display = 'block'
	    })
	    // 多文本输入框
	    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
	      el.style.height = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaFontColor
	      el.style.fontSize = this.addEditForm.textareaFontSize
	      el.style.borderWidth = this.addEditForm.textareaBorderWidth
	      el.style.borderStyle = this.addEditForm.textareaBorderStyle
	      el.style.borderColor = this.addEditForm.textareaBorderColor
	      el.style.borderRadius = this.addEditForm.textareaBorderRadius
	      el.style.backgroundColor = this.addEditForm.textareaBgColor
	    })
	    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
	      // el.style.lineHeight = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaLableColor
	      el.style.fontSize = this.addEditForm.textareaLableFontSize
	    })
	    // 保存
	    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
	      el.style.width = this.addEditForm.btnSaveWidth
	      el.style.height = this.addEditForm.btnSaveHeight
	      el.style.color = this.addEditForm.btnSaveFontColor
	      el.style.fontSize = this.addEditForm.btnSaveFontSize
	      el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
	      el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
	      el.style.borderColor = this.addEditForm.btnSaveBorderColor
	      el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnSaveBgColor
	    })
	    // 返回
	    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
	      el.style.width = this.addEditForm.btnCancelWidth
	      el.style.height = this.addEditForm.btnCancelHeight
	      el.style.color = this.addEditForm.btnCancelFontColor
	      el.style.fontSize = this.addEditForm.btnCancelFontSize
	      el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
	      el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
	      el.style.borderColor = this.addEditForm.btnCancelBorderColor
	      el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnCancelBgColor
	    })
	  })
	},
	addEditUploadStyleChange() {
		this.$nextTick(()=>{
		  document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
			el.style.width = this.addEditForm.uploadHeight
			el.style.height = this.addEditForm.uploadHeight
			el.style.borderWidth = this.addEditForm.uploadBorderWidth
			el.style.borderStyle = this.addEditForm.uploadBorderStyle
			el.style.borderColor = this.addEditForm.uploadBorderColor
			el.style.borderRadius = this.addEditForm.uploadBorderRadius
			el.style.backgroundColor = this.addEditForm.uploadBgColor
		  })
	  })
	},
  }
};
</script>
<style lang="scss">
.editor{
  height: 500px;
  
  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}
</style>
