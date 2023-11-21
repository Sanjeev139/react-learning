Q: What is NPM?
Ans: NPM does not have full form, basically NPM manages the packages.

Q: What is package.json?
Ans: Configuration file for NPM.

Q: Why do we need package.json file?
Ans: 

# Two types of dpendencies, one is dev dependencies and another one is normal dependencies.
    = Dev Dependencies is responsible for development and normal dependencies can be deploy on production server.

Q: What is the difference between ~ and ^ in package.json file.
Ans: When we use ^ with version, it'll automatically installed the minor release, and when we use ~, It'll automatically installed the
    major release version.

Q: What's package-lock.json file?
Ans: Keep a track of exact version of dependencies is installed.

Q: What is node module?
Ans: Node Modules is a collection of dependecies.

Q: What is parcel?
Ans: Parcel used for create dev build, create server and automatically refresh your page HMR(Hot Module Replacement).
    - Parcel using File Watching Algorithm. 
    - Parcel is also caching the things for you. 
    - Parcel also do the image optimization.
    - If we create the prod build, Parcel will minification of the file.
    - Parcel will compress the file as well.
    - Parcel do consistent hashing.
    - It'll do code splitting for you.
    - Differential Building - support older browsers
    - Parcel gives you the feature where you can host your website on https.
    - Give us Tree shaking. - Parcel will remove unused code.
    - It created different dev and prod bundles

- To create production build, run command `npx parcel build index.html`

Q: What is JSX?
Ans: JSX is a convention, where we can merge our html and javascript together.
    - JSX code converted into react.CreateElement code.

Q: What is Babel.
Ans : Bable is JS compiler. It comiles the JS code which browser understands.
      Bable basically converts your jsx code into React.CreateEelement.
      If you need to give properties like class or tabindex, inside jsx, you need to give it in camel-case like className, tabIndex.

Q: What type of component in React?
Ans: Class based component - Old way to write the component - It uses JS classes to create component
     Functional based component : New way to write the component - It uses JS function to create component

Q: What's the functional component ?
Ans: Functional component is a normal JS functions, which returns the JSX code or react element.

Q: What is component composition ?
Ans: When more than one component combined into each other, called component composition.
