'use strict'
const { Model, Deferrable } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class WipStateImportantDate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.WipStateImportantDate.belongsTo(models.WipState, {
        foreignKey: 'wip_state_id',
        onDelete: 'restrict',
        onUpdate: 'cascade',
      })
    }
  }
  WipStateImportantDate.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        field: 'id',
        primaryKey: true,
        unique: 'id-importantdatetype_id',
      },
      wipStateId: {
        type: DataTypes.INTEGER,
        field: 'wip_state_id',
        allowNull: false,
        onDelete: 'restrict',
        onUpdate: 'cascade',
        references: {
          model: 'wip_state',
          key: 'id',
          deferrable: Deferrable.INITIALLY_DEFERRED,
        },
      },
      importantDateTypeId: {
        type: DataTypes.INTEGER,
        field: 'importantdatetype_id',
        allowNull: false,
        onDelete: 'restrict',
        onUpdate: 'cascade',
        references: {
          model: 'importantdatetype',
          key: 'id',
          deferrable: Deferrable.INITIALLY_DEFERRED,
        },
        unique: 'id-importantdatetype_id',
      },
      beginDate: {
        type: DataTypes.DATE,
        field: 'begin_date',
        allowNull: true,
      },
      beginTime: {
        type: DataTypes.TEXT,
        field: 'begin_time',
        allowNull: true,
      },
      endDate: {
        type: DataTypes.DATE,
        field: 'end_date',
        allowNull: false,
      },
      endTime: {
        type: DataTypes.TEXT,
        field: 'end_time',
        allowNull: false,
      },
      note: {
        type: DataTypes.TEXT,
        field: 'note',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'WipStateImportantDate',
      tableName: 'wip_state_importantdate',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  )
  return WipStateImportantDate
}
