import { Ip } from "./models/Ip";

export const resolvers = {
    Query: {
        hello: () => "hi",
        ips: () => Ip.find()
    },
    Mutation: {
        createIp: async (_, { name }) => {
            const ip = new Ip({ name });
            await ip.save();
            return ip;
        }
    }
};
