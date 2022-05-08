declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.vert" {
  const content: any;
  export default content;
}
declare module "*.frag" {
  const content: any;
  export default content;
}

declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}
