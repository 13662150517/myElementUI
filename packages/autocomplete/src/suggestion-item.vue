<template>
  <div class="el-suggestion-item" @mouseenter="toShowPopover" @mouseleave="toHidePopover">
    <div class="el-suggestion-item__text" v-popover:itemDetail>
      <slot>
        {{ item[valueKey] }}
      </slot>
    </div>
    <el-popover v-if="showOverflowTooltip" v-model="showPopover" ref="itemDetail" placement="right" trigger="manual">
      <span v-html="content"></span>
    </el-popover>
  </div>
</template>

<script>
  import ElPopover from 'element-ui/packages/popover';

  export default {
    componentName: 'ElSuggestionItem',
    props: {
      item: {
        type: Object,
        required: true
      },

      valueKey: {
        type: String,
        default: 'value'
      },

      showOverflowTooltip: Boolean
    },

    data() {
      return {
        showPopover: false,
        content: ''
      };
    },

    methods: {
      toShowPopover() {
        if (!this.showOverflowTooltip) {
          return;
        }
        const contentEl = this.$el.querySelector('.el-suggestion-item__text');
        const range = document.createRange();
        range.setStart(contentEl, 0);
        range.setEnd(contentEl, contentEl.childNodes.length);
        const rangeWidth = range.getBoundingClientRect().width;
        if (contentEl.clientWidth >= rangeWidth) {
          return;
        }

        const content = contentEl.innerHTML;
        this.content = content;
        this.showPopover = true;
      },

      toHidePopover() {
        if (!this.showOverflowTooltip) {
          return;
        }
        this.showPopover = false;
      }
    },

    components: {
      ElPopover
    }
  };
</script>