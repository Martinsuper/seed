/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'markdown-it'
declare module '@kangc/v-md-editor/lib/theme/vuepress.js';
declare module '@kangc/v-md-editor';
declare module '@kangc/v-md-editor/lib/plugins/katex/cdn';
declare module '@kangc/v-md-editor/lib/plugins/mermaid/cdn';
declare module '@kangc/v-md-editor/lib/plugins/copy-code/index';