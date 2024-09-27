
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// declare module '*.png';
// declare module '*.jpg';
// declare module '*.jpeg';
// declare module '*.mp4';
declare module '*.lottie';

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.mp4' {
  const value: string;
  export default value;
}

declare module "*.json" {
  const value: never;
  export default value;
}
