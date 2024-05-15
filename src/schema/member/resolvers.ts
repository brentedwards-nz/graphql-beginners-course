import Member, { IMember } from  "../../models/member_model"

export const mutations = {
  createMember: async (_: IMember, args: {
    email_1: string;
    password: string;
    first_name: string;
    second_name: string;
    preferred_name: string;
  }): Promise<IMember> => {
    const member: IMember = await Member.create({
      email_1: args.email_1,
      hashed_password: args.password,
      first_name: args.first_name,
      second_name: args.second_name,
      preferred_name: args.preferred_name,
    });
    return member;
  },
  deleteMember: async (_: IMember, args: { id: string }): Promise<number> => {
    const post = await Member.deleteOne({ _id: args.id });
    return post.deletedCount;
  }
};

export const queries = {
  member: async (_: IMember, args: { id: string }): Promise<IMember | null> => {
    console.log("*** member", args.id)
    const member: IMember | null = await Member.findById(args.id);
    return member;
  },
  members: async (): Promise<IMember[]> => {
    console.log("*** members")
    const members: Array<IMember> = await Member.find();
    return members;
  },
};