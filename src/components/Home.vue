<template>
  <div class="editorBox">
    <div class="inputBox clearfix">
      <label>标题</label>
      <el-input placeholder="请输入标题" v-model="title"></el-input>
    </div>
    <div class="inputBox clearfix">
      <label>副标题</label>
      <el-input placeholder="请输入副标题" v-model="sub_title"></el-input>
    </div>
    <div class="inputBox clearfix">
      <label>缩略图</label>
      <el-upload
        action=""
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
    <div class="inputBox clearfix">
      <label>正文</label>
      <CK></CK>
    </div>
  </div>
</template>

<script>
import CK from './CK'
export default {
  data () {
    return {
      title: '',
      sub_title: '',
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  components: {
    CK
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style>
  .inputBox {
    padding-left: 5em;
    position: relative;
  }

  .inputBox > * {
    display: block;
    line-height: 50px;
    min-height: 50px;
    margin-bottom: 10px;
  }

  .inputBox label {
    width: 4em;
    text-align: justify;
    position: absolute;
    left: 0;
  }

  .inputBox label::after {
    display: inline-block;
    content: '';
    width: 100%;
  }

  .inputBox .el-input {
    width: 100%;
    float: left;
  }

  .inputBox .thumbnail button span {
    color: #fff;
  }

  .inputBox .thumbnail .el-upload {
    float: left;
    margin-right: 1em;
  }

  .inputBox .thumbnail .el-upload__tip {
    float: left;
    margin-top: 0;
  }

  .inputBox .thumbnail .el-upload-list {
    padding-top: 60px;
  }
</style>
