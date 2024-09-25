
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.css';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.mp4';
declare module '*.lottie';

declare module "*.json" {
  const value: never;
  export default value;
}
