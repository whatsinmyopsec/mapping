import { downloads } from "./models/downloads";

export const resolvers = {
    Query: {
        src_ip: () => downloads.find()
    }
};
