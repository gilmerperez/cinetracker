import bcrypt from 'bcrypt';
import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  watchlist: number[];
  already_watched: number[];
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'watchlist' | 'already_watched'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public watchlist!: number[];
  public already_watched!: number[];

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public async setPassword(password: string) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);
  }
}

export function UserFactory(sequelize: Sequelize): typeof User {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      watchlist: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        defaultValue: []
      },
      already_watched: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        defaultValue: []
      },
    },
    {
      tableName: 'users',
      sequelize,
      hooks: {
        beforeCreate: async (user: User) => {
          await user.setPassword(user.password);
        },
        beforeUpdate: async (user: User) => {
          if (user.changed('password')) {
            await user.setPassword(user.password);
          }
        },
      }
    }
  );

  return User;
}
