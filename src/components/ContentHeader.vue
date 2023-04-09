<template>
  <div class="section">
    <h3>{{ $attrs.title }}</h3>
    <div class="section-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentHeader"
};
</script>

<style lang="scss"
       scoped>
.section {
  margin-bottom: 28px;
}

.section-content {
  font-size: 16px;
  margin-left: 26px;
  line-height: 2;
}

h3 {
  margin: 0 0 14px 0;
  font-size: 26px;
  &:before{
    display: inline-block;
    vertical-align: middle;
    width: 12px;
    height: 12px;
    background: #2060BF;
    content: '';
    margin-right: 14px;
    margin-bottom: 4px;
  }
}
</style>
