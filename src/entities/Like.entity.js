import { sequelize as database } from "../database/connection.js";
import { UserEntity } from "./User.entity.js";
import { MensagemEntity } from "./mensagens.entity.js";


export const LikeEntity = database.define('Like', {});


UserEntity.belongsToMany(MensagemEntity, { through: LikeEntity, as: 'Likes', foreignKey: 'userid' });
MensagemEntity.belongsToMany(UserEntity, { through: LikeEntity, as: 'Likes', foreignKey: 'messageid' });
