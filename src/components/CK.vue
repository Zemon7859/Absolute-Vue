<template>
  <div>
    <div id="toolbar-container"></div>
    <!-- 编辑器容器 -->
    <div id="editor">
      <p></p>
    </div>
    <el-button type="primary">保存</el-button>
  </div>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn'
export default {
  name: 'c-k',
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    this.initCKEditor()
  },
  methods: {
    initCKEditor () {
      CKEditor.create(document.querySelector('#editor'), {
        language: 'zh-cn',
        ckfinder: {
          uploadUrl: 'http://192.168.88.165:8000/test'
        }
      }).then(
        editor => {
          const toolbarContainer = document.querySelector('#toolbar-container')
          toolbarContainer.appendChild(editor.ui.view.toolbar.element)
          this.editor = editor
        }
      ).catch(error => {
        console.error(error)
      })
    },
    getData: function () {
      console.log(this.editor.getData())
    }
  }
}
</script>

<style>
  #editor {
    border: 1px solid var(--ck-color-toolbar-border);
    min-height: 600px;
    max-width: 980px;
    margin-bottom: 1em;
  }

  #toolbar-container {
    max-width: 980px;
  }
</style>
