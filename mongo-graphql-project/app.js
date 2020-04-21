const Express = require("express");
const ExpressGraphQL = require("express-graphql");
const Mongoose = require("mongoose")
const {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLNonNull
} = require("graphql");

var app = Express();

const x = Mongoose.createConnection("mongodb://root:example@localhost:27017/mlogs?authSource=admin", {
    useNewUrlParser: true
});

const y = Mongoose.createConnection("mongodb://root:example@localhost:27017/ip?authSource=admin", {
    useNewUrlParser: true
});

const z = Mongoose.createConnection("mongodb://root:example@localhost:27017/malwaredumps?authSource=admin", {
    useNewUrlParser: true
});

const DownloadsModel = x.model("downloads",{
    _id: String,
    destfile: String,
    duplicate: Boolean,
    eventid: String,
    message: String,
    outfile: String,
    sensor: String,
    session: String,
    shasum: String,
    src_ip: String,
    timestamp: String,
    url: String
});

const MalwareModel = z.model("malwaretests",{
    _id: String,
    scans:{
        Bkav:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        TotalDefence:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        'MicroWorld-eScan':{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        CMC:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        'CAT-QuickHeal':{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        McAfee:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        MalwareBytes:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Zillya:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        SUPERAntiSpyware:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        K7AntiVirus:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        K7GW:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Baidu:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        'F-Prot':{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Symantec:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        'ESET-NOD32':{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        'TrendMicro-HouseCall':{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Avast:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        ClamAV:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Kaspersky:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        BitDefender:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        'NANO-Antivurus':{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        ViRobot:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Rising:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        'Ad-Aware':{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Sophos:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Comodo:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        'F-Secure':{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        DrWeb:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        VIPRE:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        TrendMicro:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        'McAfee-GQ-Edition':{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        FireEye:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Emsisoft:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Ikarus:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Cyren:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Jiangmin:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Avira:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Fortinet:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        'Antiy-AVL':{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Kingsoft:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Arcabit:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        AegisLab:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        ZoneAlarm:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        'Avast-Mobile':{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Microsoft:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        'AhnLab-v3':{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        ALYac:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        MAX:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        VBA32:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Zoner:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Tencent:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Yandex:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        TACHYON:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        GData:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        AVG:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        Panda:{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
        'Qihoo-360':{
            detected:String,
            version:String,
            result:Boolean,
            update:String
        },
    scan_id:String,
    sha1: String,
    resource:String,
    response_code:Number,
    scan_date:String,
    permalink:String,
    verbose_msg:String,
    total:Number,
    positives:Number,
    sha256:String,
    md5:String
    }
});
// let ScanObjectType = new GraphQLObjectType({
//     name: 'res',
//     fields:{
//         detected: {type: GraphQLBoolean},
//         version: {type: GraphQLString},
//         result: {type: GraphQLString},
//         update: {type: GraphQLString}
//     }
// });
//
// let ScanType = new GraphQLObjectType({
//     name: 'Scans',
//     fields:()=> ({
//         scans: {type: GraphQLList(ScanObjectType)}
//     })
// });

let ScanType = new GraphQLObjectType({
    name: 'Scan',
    fields: {
        name: {type: GraphQLNonNull(GraphQLString)},
        detected: {type: GraphQLString},
        version: {type: GraphQLString},
        result: {type: GraphQLBoolean},
        update: {type: GraphQLString},
    }
});
let scansType = new GraphQLObjectType({
    name:'scanNames',
    fields:{
        Bkav: {type: ScanType},
        TotalDefence: {type: ScanType},
        MicroWorld_eScan: {type: ScanType},
        CMC: {type: ScanType},
        CAT_QuickHeal: {type: ScanType},
        McAfee: {type: ScanType},
        MalwareBytes: {type: ScanType},
        Zillya: {type: ScanType},
        SUPERAntiSpyware: {type: ScanType},
        K7AntiVirus: {type: ScanType},
        K7GW: {type: ScanType},
        Baidu: {type: ScanType},
        F_Prot: {type: ScanType},
        Symantec: {type: ScanType},
        ESET_NOD32: {type: ScanType},
        TrendMicro_HouseCall: {type: ScanType},
        Avast: {type: ScanType},
        ClamAV: {type: ScanType},
        Kaspersky: {type: ScanType},
        BitDefender: {type: ScanType},
        NANO_Antivurus: {type: ScanType},
        ViRobot: {type: ScanType},
        Rising: {type: ScanType},
        Ad_Aware: {type: ScanType},
        Sophos: {type: ScanType},
        Comodo: {type: ScanType},
        F_Secure: {type: ScanType},
        DrWeb: {type: ScanType},
        VIPRE: {type: ScanType},
        TrendMicro: {type: ScanType},
        McAfee_GQ_Edition: {type: ScanType},
        FireEye: {type: ScanType},
        Emsisoft: {type: ScanType},
        Ikarus: {type: ScanType},
        Cyren: {type: ScanType},
        Jiangmin: {type: ScanType},
        Avira: {type: ScanType},
        Fortinet: {type: ScanType},
        Antiy_AVL: {type: ScanType},
        Kingsoft: {type: ScanType},
        Arcabit: {type: ScanType},
        AegisLab: {type: ScanType},
        ZoneAlarm: {type: ScanType},
        Avast_Mobile: {type: ScanType},
        Microsoft: {type: ScanType},
        AhnLab_v3: {type: ScanType},
        ALYac: {type: ScanType},
        MAX: {type: ScanType},
        VBA32: {type: ScanType},
        Zoner: {type: ScanType},
        Tencent: {type: ScanType},
        Yandex: {type: ScanType},
        TACHYON: {type: ScanType},
        GData: {type: ScanType},
        AVG: {type: ScanType},
        Panda: {type: ScanType},
        Qihoo_360: {type: ScanType}
    }
});

const MalwaresType = new GraphQLObjectType({
    name:"malwaretests",
    fields: () => ({
        id: {type: GraphQLID},
        scans: { type:GraphQLList(scansType)},
    })
});

const DownloadsType = new GraphQLObjectType({
    name: "Download",
    fields: {
        id: { type: GraphQLID },
        destfile: { type: GraphQLString },
        duplicate: { type: GraphQLBoolean },
        eventid: { type: GraphQLString },
        message: { type: GraphQLString },
        outfile: { type: GraphQLString },
        session: { type: GraphQLString },
        shasum: { type: GraphQLString },
        src_ip: { type: GraphQLString },
        timestamp: { type: GraphQLString },
        url: { type: GraphQLString }
    }
});

const schema = new GraphQLSchema({
   query: new GraphQLObjectType({
       name: "Query",
       fields: {
           downloads: {
               type:GraphQLList(DownloadsType),
               resolve: (root, args, context, info) => {
                   return DownloadsModel.find().exec();
               }
           },
           download: {
               type: DownloadsType,
               args: {
                   id: { type: GraphQLNonNull(GraphQLID)}
               },
               resolve: (root, args, context, info) => {
                   return DownloadsModel.findById(args.id).exec();
               }
           },
           malwaretests:{
               type: GraphQLList(MalwaresType),
               resolve:(root, args, context, info) => {
                   return MalwareModel.find().exec()
               }
           }
       }
   })
});

app.use("/graphql", ExpressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(3000, () => {
   console.log("listening at :3000...");
});
