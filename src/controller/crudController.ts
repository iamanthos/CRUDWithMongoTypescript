import { Express, Request, Response, response } from "express";
import { JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete}  from 'routing-controllers';
import { IWeapon } from "../models/Iweapons";
import path from "path";
import { MongoHelper } from '../mongo.helper';
import * as util from 'util';   //use for displaying circluar Json sample - // return util.inspect(db.databaseName);

// const machine = require(path.resolve("/DevSpace/NodeCRUDApp/src/models/weapon"));

@JsonController()
export class CRUDController {
    private documentResult: any;
    // private shop: any;
    constructor(){
    }

    @Get('/getList')
    @OnUndefined(404)
    public async GetList() {
        let db = MongoHelper.client.db('CRUD');
        return db.collection('weapon').find({}).toArray();
    }

    @Post('/createList')
    @OnUndefined(404)
    public CreateList(){

    }

    @Delete('/deleteList')
    @OnUndefined(404)
    public DeleteList(){

    }

    @Put('/updateList')
    @OnUndefined(404)
    public UpdateList(){

    }

}