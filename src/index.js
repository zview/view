//
import './style/index.scss';

//
import Vue from 'vue';

//Basic
import Icon from './component/icon';
import Button from './component/button';

//View
import Badge from './component/badge';

//Form
import Input from './component/input';
import Radio from './component/radio';
import Check from './component/check';
import Toggle from './component/toggle';
import Select from './component/select';
import Slider from './component/slider';
import Search from './component/search';

//Layout
import { List, Item } from './component/list';
import { Row, Col } from './component/grid';

//Navigation
import { Navbar } from './component/navbar';
import { Tabbar } from './component/tabbar';
import { Page, Content, Header, Footer, SubHeader, SubFooter } from './component/container';
import ButtonBar from './component/buttonbar';
import Tabs from './component/tabs';

//Other
import Editor from './component/editor';


//Directive
import dragable from './directive/dragable';
import focusable from './directive/focusable';

//Filter
import formatdate from './filter/formatdate';
import formattime from './filter/formattime';

//
const _VERSION = '0.0.1';

//
export default {
  install: function (Vue, options) {

    //Basic
    Vue.component('Icon', Icon);
    Vue.component('Button', Button);


    //View
    Vue.component('Badge', Badge);


    //Layout
    Vue.component('List', List);
    Vue.component('Item', Item);
    Vue.component('Row', Row);
    Vue.component('Col', Col);


    //Form
    Vue.component('Input', Input);
    Vue.component('Radio', Radio);
    Vue.component('Check', Check);
    Vue.component('Toggle', Toggle);
    Vue.component('Select', Select);
    Vue.component('Slider', Slider);
    Vue.component('Search', Search);


    //Navigation
    Vue.component('Navbar', Navbar);
    Vue.component('Tabbar', Tabbar);
    Vue.component('Page', Page);
    Vue.component('Content', Content);
    Vue.component('Header', Header);
    Vue.component('Footer', Footer);
    Vue.component('SubHeader', SubHeader);
    Vue.component('SubFooter', SubFooter);
    Vue.component('ButtonBar', ButtonBar);
    Vue.component('Tabs', Tabs);


    //Other
    Vue.component('Editor', Editor);


    //Directive
    Vue.directive("drag", dragable);
    Vue.directive("focus", focusable);


    //Filter
    Vue.filter('formatdate', formatdate);
    Vue.filter('formattime', formattime);


    //Service
    Vue.prototype.$version  = _VERSION;
    Vue.prototype.$debug    = false;
    Vue.prototype.$alert    = function (message) {
      console.log('----' + message);
    };


  }
};
