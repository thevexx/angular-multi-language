
# Angular8 Multi Language project

  

this project is done to show a dynamic way to integrate multiple languages using a pipe and a service.
  
Tested on Angular 6/7/8

* [demo](#demo)
* [Install](#install)
* [Usage](#usage)

## Demo
[Example Application](https://angular-multi-language.stackblitz.io)

[StackBlitz Demo](https://stackblitz.com/edit/angular-multi-language)
## Install
##### clone and install npm dependencies:

    npm install

##### Run the project with:

	npm start	

## Usage
If your take a look at the shared folder, you would see  the <b> i18n Module </b> 
which implements only the i18n Service. That's because I have no idea how to get the component and pipe all together in the same service while using the ModuleWithProviders :) (todo).
So this module exposes a forRoot method, in <b> app.module.ts </b> the i18n module is being important with passing the following array : 

``` 
import  *  as  enI18n  from  './shared/en.i18n';
import  *  as  frI18n  from  './shared/fr.i18n';

const languages = [ { lang:  'EN', flag:  'assets/img/en.i18n.png', file:  enI18n },
{ lang:  'FR', flag:  'assets/img/fr.i18n.png', file:  frI18n }] 

@NgModule({
imports: [
...
I18nModule.forRoot(languages)
...
```

 The service receive this array (thanks for the ModuleWithProviders), and load the languages files imported, calling the pipe in the html will get the values of the selected language :

```
<h1>{{'homeMainMessage' | i18n:i18nService.currentLanguage}}</h1>
```

>**Note:** I used a naming convention here, componentPositionType (homeMainMessage)

You can check DEMO [here](https://angular-multi-language.stackblitz.io) 

## Contribution

You can fork project from github. Pull requests are kindly accepted.
1. npm install
3. Run demo: ng serve / npm start
