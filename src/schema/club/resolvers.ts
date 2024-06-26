import Club, { IClub } from  "../../models/club_model"
import Member from "../../models/member_model";

export const mutations = {
  createClub: async (_: IClub, args: { 
    name: string,
    phone_1: string,
    phone_2: string,
    email_1: string,
    email_2: string,
    address_1: string,
    address_2: string,
    address_3: string,
    location_picture: string
  }): Promise<IClub> => {
    const club: IClub = await Club.create({
      name: args.name,
      phone_1: args.phone_1,
      phone_2: args.phone_2,
      email_1: args.email_1,
      email_2: args.email_2,
      address_1: args.address_1,
      address_2: args.address_2,
      address_3: args.address_3,
      location_picture: args.location_picture,
    });
    return club;
  },
  // Delete club --------------------------------------------------------------------------------------
  deleteClub: async (_: IClub, args: { club_id: string }): Promise<number> => {
    const result = await Club.deleteOne({ _id: args.club_id });
    return result.deletedCount;
  },
  // Add member --------------------------------------------------------------------------------------
  addMemberToClub: async (_: IClub, args: { club_id: string, member_id: string }): Promise<IClub | null> => {
    const memberResult = await Member.findByIdAndUpdate(
      args.member_id,
      { $push: { clubs: args.club_id } },
      { new: true, useFindAndModify: false }
    );

    if(!memberResult) {
      return null;  
    }

    const clubResult = await Club.findByIdAndUpdate(
      args.club_id,
      { $push: { members: args.member_id } },
      { new: true, useFindAndModify: false }
    );
    return clubResult;
  }, 
};

export const queries = {
  club: async (_: IClub, args: { id: string }): Promise<IClub | null> => {
    const club: IClub | null = await Club.findById(args.id);
    return club;
  },
  clubs: async (): Promise<IClub[]> => {
    const clubs: Array<IClub> = await Club.find().populate('members');
    return clubs;
  },
};