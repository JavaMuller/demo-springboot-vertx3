The webapp folder has been created using the generator-gulp-angular from https://github.com/Swiip/generator-gulp-angular

It requires nodejs to build.

To regenerate the folder, delete the existing one, then use the commands:

npm install -g yo gulp bower
npm install -g generator-gulp-angular

create a new folder, enter intoit and then execute

yo gulp-angular webapp


OTHER STEPS
- add bower to the devDependency section of package.json:
  "bower": "~1.3.12"




