import mongoose, { Schema } from "mongoose";

export interface IToken {
  token_type: string;
  token_value: string;
}

const TokenSchema = new Schema<IToken>(
  {
    token_type: { type: String, enum: ["token", "refresh"], required: true },
  },
  {
    timestamps: true,
  }
);

const Token = mongoose.model<IToken>("Token", TokenSchema);
export default Token;
