

props 传递数据
slot 内容分发
events $emit @click 事件


使用:prop传递数据格式为 数字、布尔值或函数时，必须带:(兼容String除外，具体看组件文档)


prop默认规则

调用地方如  class-name='cls'
组件实现为  className

v-model

相当于

<input v-model="sth" />
<input v-bind:value="sth" v-on:input="sth = $event.target.value" />