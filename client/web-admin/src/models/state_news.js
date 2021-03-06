import { DataTypes, Deferrable } from './_helpers'

const fields = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    field: 'id',
    primaryKey: true,
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
  datePosted: {
    type: DataTypes.DATE,
    field: 'date_posted',
    allowNull: false,
  },
  caption: {
    type: DataTypes.TEXT,
    field: 'caption',
    allowNull: false,
  },
  url: {
    type: DataTypes.TEXT,
    field: 'url',
    allowNull: false,
  },
  summary: {
    type: DataTypes.TEXT,
    field: 'summary',
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
}

export default fields
