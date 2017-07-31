angular.module('amlakApp')
    .service('dataService', ['$window', function($window) {
        this.indexData = {};

        this.indexData.ServerAddress = 'http://176.9.220.131/';
        this.indexData.ImagesForUpload = [];
        this.indexData.AddNew = false;
        this.indexData.netError = false;
        this.indexData.EditId = 0;
        this.indexData.SearchForm = false;
        this.indexData.searchArr = {};
        this.indexData.TableOrder = 'id';
        this.indexData.newPro = {
            id: ""
        };
        this.indexData.cellNames = {
            id: {
                name: 'id',
                searchable: false
            },
            name: {
                name: 'نام',
                searchable: true
            },
            area: {
                name: 'توضیحات',
                searchable: true
            },
            price: {
                name: 'قیمت',
                searchable: true
            }
        };
        this.indexData.options = [];
        this.indexData.options.columns = [];
        this.indexData.options.HomePaging = [5, 25, 50, 100];
        this.indexData.options.ProCurrentPage = 1;
        this.indexData.options.HomePrinted = 0;
        this.indexData.defaultImage = '';



        this.oneData = {};

        this.oneData.defaultImage = this.indexData.defaultImage;
        this.oneData.ServerAddress = this.indexData.ServerAddress;
        this.oneData.netError = false;
        this.oneData.options = [];
        this.oneData.options.keyNames = {
            show:{
                id: false,
                h_id: false,
                desc: false,
                name: false,

                age: true,
                parking: true,
                lift: true,
                store: true,
                floor: true,
                allfloor: true,
                allunit: true,
                bedroom: true,
                price: true,
                area: true
            },
            age: {
                name: 'سال ساخت'
            },
            parking: {
                name: 'پارکنیگ'
            },
            lift: {
                name: 'آسانسور'
            },
            store: {
                name: 'انباری'
            },
            floor: {
                name: 'طبقه'
            },
            allfloor: {
                name: 'تعداد طبقات ساختمان'
            },
            allunit: {
                name: 'تعداد واحدهای ساختمان'
            },
            bedroom: {
                name: 'تعداد اتاق خواب'
            },
            price: {
                name: 'قیمت'
            },
            area: {
                name: 'متراژ'
            }
        };



        this.oneDataDefault = {};

        this.oneDataDefault.defaultImage = this.indexData.defaultImage;
        this.oneDataDefault.ServerAddress = this.indexData.ServerAddress;
        this.oneDataDefault.netError = false;
        this.oneDataDefault.options = [];
        this.oneDataDefault.options.keyNames = {
            show:{
                id: false,
                h_id: false,
                desc: false,
                name: false,

                age: true,
                parking: true,
                lift: true,
                store: true,
                floor: true,
                allfloor: true,
                allunit: true,
                bedroom: true,
                price: true,
                area: true
            },
            age: {
                name: 'سال ساخت'
            },
            parking: {
                name: 'پارکنیگ'
            },
            lift: {
                name: 'آسانسور'
            },
            store: {
                name: 'انباری'
            },
            floor: {
                name: 'طبقه'
            },
            allfloor: {
                name: 'تعداد طبقات ساختمان'
            },
            allunit: {
                name: 'تعداد واحدهای ساختمان'
            },
            bedroom: {
                name: 'تعداد اتاق خواب'
            },
            price: {
                name: 'قیمت'
            },
            area: {
                name: 'متراژ'
            }
        };
    }]);