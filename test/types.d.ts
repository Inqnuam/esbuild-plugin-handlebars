declare module "*.hbs" {
  const template: (...args: any[]) => string;

  export default template;
}
