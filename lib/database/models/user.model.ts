import { Schema, model, models } from "mongoose";

interface IUser {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
}

const UserSchema = new Schema<IUser>({
  clerkId: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value: string) {
        // Check if the email address ends with "@univ-constantine2.dz"
        const regex = /@univ-constantine2\.dz$/i;
        return regex.test(value);
      },
      message: (props: { value: string }) => `${props.value} is not a valid email address for sign up. Only @univ-constantine2.dz addresses are allowed.`
    }
  },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
});

const User = models.User || model<IUser>('User', UserSchema);

export default User;
