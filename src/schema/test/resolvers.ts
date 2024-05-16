import { GraphQLResolveInfo } from 'graphql';

export interface IReturnData {
  data: string;
}

export interface IArgs {
  param1: string;
}

export const mutations = {}

export const queries = {
  testEndpoint: (parent: any, args: { data: IArgs }, contextValue: any, info: GraphQLResolveInfo): IReturnData => {
    console.log("**** dummy:");
    console.log("**** args:", args);
    console.log("**** contextValue:", contextValue);
    console.log("");

    console.log("data:", args.data);
    const returnData: IReturnData = {
      data: args.data.param1
    };
    return returnData;
  },
};