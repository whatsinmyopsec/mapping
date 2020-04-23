const Express = require("express");
const ExpressGraphQL = require("express-graphql");
const Mongoose = require("mongoose");
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

const IPModel = y.model("ipinfos", {
    _id: String,
    info: [{
        ip: String,
        hostname: String,
        city: String,
        region: String,
        country: String,
        loc: String,
        org: String,
        postal: String,
        timezone: String,
        country_name: String,
        latitude: String,
        longitude: String
    }]
});


const DownloadsModel = x.model("downloads", {
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

const MalwareModel = z.model("malwaretests", {
    _id: String,
    scans: [{
        Bkav: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        TotalDefence: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        'MicroWorld-eScan': [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        CMC: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        'CAT-QuickHeal': [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        McAfee: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        MalwareBytes: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Zillya: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        SUPERAntiSpyware: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        K7AntiVirus: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        K7GW: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Baidu: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        'F-Prot': [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Symantec: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        'ESET-NOD32': [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        'TrendMicro-HouseCall': [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Avast: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        ClamAV: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Kaspersky: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        BitDefender: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        'NANO-Antivurus': [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        ViRobot: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Rising: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        'Ad-Aware': [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Sophos: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Comodo: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        'F-Secure': [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        DrWeb: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        VIPRE: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        TrendMicro: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        'McAfee-GQ-Edition': [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        FireEye: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Emsisoft: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Ikarus: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Cyren: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Jiangmin: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Avira: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Fortinet: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        'Antiy-AVL': [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Kingsoft: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Arcabit: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        AegisLab: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        ZoneAlarm: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        'Avast-Mobile': [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Microsoft: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        'AhnLab-v3': [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        ALYac: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        MAX: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        VBA32: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Zoner: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Tencent: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Yandex: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        TACHYON: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        GData: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        AVG: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        Panda: [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }],
        'Qihoo-360': [{
            detected: Boolean,
            version: String,
            result: String,
            update: String
        }]
    }],
    scan_id: String,
    sha1: String,
    resource: String,
    response_code: Number,
    scan_date: String,
    permalink: String,
    verbose_msg: String,
    total: Number,
    positives: Number,
    sha256: String,
    md5: String
});


let ScanType = new GraphQLObjectType({
    name: 'scan',
    description: 'what was returned by those scans',
    fields: {
        detected: {type: GraphQLBoolean},
        version: {type: GraphQLString},
        result: {type: GraphQLString},
        update: {type: GraphQLString},
    }
});
let scansType = new GraphQLObjectType({
    name: 'scanNames',
    description: 'list of malware scanners',
    fields: {
        Bkav: {type: GraphQLList(ScanType)},
        TotalDefence: {type: GraphQLList(ScanType)},
        MicroWorld_eScan: {type: GraphQLList(ScanType)},
        CMC: {type: GraphQLList(ScanType)},
        McAfee: {type: GraphQLList(ScanType)},
        MalwareBytes: {type: GraphQLList(ScanType)},
        Zillya: {type: GraphQLList(ScanType)},
        SUPERAntiSpyware: {type: GraphQLList(ScanType)},
        K7AntiVirus: {type: GraphQLList(ScanType)},
        K7GW: {type: GraphQLList(ScanType)},
        Baidu: {type: GraphQLList(ScanType)},
        Symantec: {type: GraphQLList(ScanType)},
        Avast: {type: GraphQLList(ScanType)},
        ClamAV: {type: GraphQLList(ScanType)},
        Kaspersky: {type: GraphQLList(ScanType)},
        BitDefender: {type: GraphQLList(ScanType)},
        ViRobot: {type: GraphQLList(ScanType)},
        Rising: {type: GraphQLList(ScanType)},
        Sophos: {type: GraphQLList(ScanType)},
        Comodo: {type: GraphQLList(ScanType)},
        DrWeb: {type: GraphQLList(ScanType)},
        VIPRE: {type: GraphQLList(ScanType)},
        TrendMicro: {type: GraphQLList(ScanType)},
        FireEye: {type: GraphQLList(ScanType)},
        Emsisoft: {type: GraphQLList(ScanType)},
        Ikarus: {type: GraphQLList(ScanType)},
        Cyren: {type: GraphQLList(ScanType)},
        Jiangmin: {type: GraphQLList(ScanType)},
        Avira: {type: GraphQLList(ScanType)},
        Fortinet: {type: GraphQLList(ScanType)},
        Kingsoft: {type: GraphQLList(ScanType)},
        Arcabit: {type: GraphQLList(ScanType)},
        AegisLab: {type: GraphQLList(ScanType)},
        ZoneAlarm: {type: GraphQLList(ScanType)},
        Microsoft: {type: GraphQLList(ScanType)},
        ALYac: {type: GraphQLList(ScanType)},
        MAX: {type: GraphQLList(ScanType)},
        VBA32: {type: GraphQLList(ScanType)},
        Zoner: {type: GraphQLList(ScanType)},
        Tencent: {type: GraphQLList(ScanType)},
        Yandex: {type: GraphQLList(ScanType)},
        TACHYON: {type: GraphQLList(ScanType)},
        GData: {type: GraphQLList(ScanType)},
        AVG: {type: GraphQLList(ScanType)},
        Panda: {type: GraphQLList(ScanType)}
    }
});

const MalwaresType = new GraphQLObjectType({
    name: "malwaretests",
    description: "First layer of malware exports",
    fields: {
        id: {type: GraphQLID},
        scans: {type: GraphQLList(scansType)},
        total: {type: GraphQLString},
        positives: {type: GraphQLString},
        scan_date: {type: GraphQLString}
    }
});

const DownloadsType = new GraphQLObjectType({
    name: "Download",
    description: "Honeypot data",
    fields: {
        id: {type: GraphQLID},
        destfile: {type: GraphQLString},
        duplicate: {type: GraphQLBoolean},
        eventid: {type: GraphQLString},
        message: {type: GraphQLString},
        outfile: {type: GraphQLString},
        sensor: {type: GraphQLString},
        session: {type: GraphQLString},
        shasum: {type: GraphQLString},
        src_ip: {type: GraphQLString},
        timestamp: {type: GraphQLString},
        url: {type: GraphQLString}
    }
});
let ipInnerType = new GraphQLObjectType({
    name: "info",
    description: "what do you want to know?",
    fields: {
        ip: {type: GraphQLString},
        hostname: {type: GraphQLString},
        city: {type: GraphQLString},
        region: {type: GraphQLString},
        country: {type: GraphQLString},
        loc: {type: GraphQLString},
        org: {type: GraphQLString},
        postal: {type: GraphQLString},
        timezone: {type: GraphQLString},
        country_name: {type: GraphQLString},
        latitude: {type: GraphQLString},
        longitude: {type: GraphQLString}
    }
});

const IpType = new GraphQLObjectType({
    name: "ipinfos",
    description: "data from ipinfo",
    fields: {
        id: {type: GraphQLID},
        info: {type: GraphQLList(ipInnerType)}
    }
});

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        description: 'root',
        fields: {
            downloads: {
                type: GraphQLList(DownloadsType),
                resolve: (root, args, context, info) => {
                    return DownloadsModel.find().exec();
                }
            },
            download: {
                type: DownloadsType,
                args: {
                    id: {type: GraphQLNonNull(GraphQLID)}
                },
                resolve: (root, args, context, info) => {
                    return DownloadsModel.findById(args.id).exec();
                }
            },
            malwaretests: {
                type: GraphQLList(MalwaresType),
                resolve: (root, args, context, info) => {
                    return MalwareModel.find().exec()
                }
            },
            ipinfos: {
                type: GraphQLList(IpType),
                resolve: (root, args, context, info) => {
                    return IPModel.find().exec()
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
