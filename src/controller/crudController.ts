import { Request, Response } from "express";
import { JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete, Res, HttpCode}  from 'routing-controllers';
// import { IWeapon } from "../models/Iweapons";
// import path from "path";
import { MongoHelper } from '../mongo.helper';
import { resolve } from "dns";
import { rejects } from "assert";
// import * as util from 'util';   //use for displaying circluar Json sample - // return util.inspect(db.databaseName);

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

    @HttpCode(201)
    @Post('/createList')
    // @OnUndefined(404)
    public CreateList(@Body() req: any,@Res() res: Response){
        try{
        let response: any;
        const db = MongoHelper.client.db('CRUD');
         const insertedOutput: Promise<any> =
         db.collection('weapon').insertMany(req);

        insertedOutput.then(resolvedPromise => {
            if(resolvedPromise.result.ok == 1){
               response =  {
                    'statusCode' : '200',
                    'count' : resolvedPromise.insertedCount,
                    'id' : resolvedPromise.insertedId
                }

                console.log('Response ' + JSON  .stringify(response));
                
            }
        })
        .catch(error => {
            console.log(error);
        });
        res.send(200).json(response);
        // console.log(res);
        
        }
        catch(e){
            console.log(e)
        }

        // insertedOutput.catch(error => {
        //     console.log(error);
        // });

        // console.log('outer '+ response);

        // insertedOutput.then(resolve => {console.log(resolve); return 1 }).catch(err => console.log(err));

        // return response =  {
        //                 'statusCode' : '200',
        //                 'count' : 'resolvedPromise.insertedCount',
        //                 'id' : 'resolvedPromise.insertedId'
        //             }
                // });
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