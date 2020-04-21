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

const MalwaresType = new GraphQLObjectType({
    name:"malwaretests",
    fields: {
        id: {type: GraphQLID},
        scans: { type:GraphQLList},
            Bkav: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            TotalDefence: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            MicroWorld_eScan: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            CMC: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            CAT_QuickHeal: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            McAfee: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            MalwareBytes: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Zillya: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            SUPERAntiSpyware: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            K7AntiVirus: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            K7GW: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Baidu: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            F_Prot: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Symantec: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            ESET_NOD32: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            TrendMicro_HouseCall: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Avast: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            ClamAV: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Kaspersky: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            BitDefender: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            NANO_Antivurus: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            ViRobot: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Rising: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Ad_Aware: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Sophos: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Comodo: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            F_Secure: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            DrWeb: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            VIPRE: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            TrendMicro: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            McAfee_GQ_Edition: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            FireEye: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Emsisoft: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Ikarus: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Cyren: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Jiangmin: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Avira: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Fortinet: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Antiy_AVL: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Kingsoft: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Arcabit: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            AegisLab: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            ZoneAlarm: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Avast_Mobile: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Microsoft: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            AhnLab_v3: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            ALYac: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            MAX: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            VBA32: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Zoner: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Tencent: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Yandex: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            TACHYON: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            GData: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            AVG: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Panda: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            },
            Qihoo_360: {
                detected: {type: GraphQLString},
                version: {type: GraphQLString},
                result: {type: GraphQLBoolean},
                update: {type: GraphQLString}
            }
        }

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
               type:GraphQLList(MalwaresType),
               resolve:(root, args, context, info) => {
                   return MalwareModel.find().exec();
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
