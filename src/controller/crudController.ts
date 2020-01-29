import { Request, Response } from "express";
import { JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete, Res, HttpCode}  from 'routing-controllers';
// import { IWeapon } from "../models/Iweapons";
// import path from "path";
import { MongoHelper } from '../mongo.helper';
import { Util } from '../util';
// import * as util from 'util';   //use for displaying circluar Json sample - // return util.inspect(db.databaseName);

// const machine = require(path.resolve("/DevSpace/NodeCRUDApp/src/models/weapon"));
const util = new Util();
let response: any;

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

    @HttpCode(200)
    @Post('/createList')
    // @OnUndefined(404)
    public async CreateList(@Body() req: any,@Res() res: any){
        
        const db = MongoHelper.client.db('CRUD');
        let promisedDB = db.collection('weapon').insertMany(req);
        response =  await this.ExecutePromise(promisedDB);
        return res.send(response.insertedIds)
    }

    @Delete('/deleteList')
    @OnUndefined(404)
    public DeleteList(){

    }

    @Put('/updateList')
    @OnUndefined(404)
    public UpdateList(){

    }

    private async ExecutePromise(value){
        let resolvedPromise: any;
        await value.then((data) => {
                resolvedPromise = data;
        });
        return resolvedPromise;
    }
}