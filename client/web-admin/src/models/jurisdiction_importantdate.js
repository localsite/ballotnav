import { Deferrable } from './_helpers'

const fields = {
  // id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   autoIncrement: true,
  //   field: 'id',
  //   primaryKey: true,
  // },
  // wipJurisdictionId: {
  //   type: DataTypes.INTEGER,
  //   field: 'wip_jurisdiction_id',
  //   allowNull: false,
  //   onDelete: 'restrict',
  //   onUpdate: 'cascade',
  //   references: {
  //     model: 'wip_jurisdiction',
  //     key: 'id',
  //     deferrable: Deferrable.INITIALLY_DEFERRED,
  //   },
  //   unique: 'wip_jurisdiction_id-importantdatetype_id',
  // },
  importantDateTypeId: {
    type: {
      type: 'select',
      options: [
        { value: 1, display: 'Voter Registration Deadline' },
        { value: 2, display: 'Absentee Ballot Application Deadline' },
        { value: 3, display: 'Polls Open' },
        { value: 4, display: 'Absentee Ballot Return Deadline' },
      ]
    },
    field: 'importantdatetype_id',
    allowNull: false,
    onDelete: 'restrict',
    onUpdate: 'cascade',
    references: {
      model: 'importantdatetype',
      key: 'id',
      deferrable: Deferrable.INITIALLY_DEFERRED,
    },
    unique: 'wip_jurisdiction_id-importantdatetype_id',
  },
  beginDate: {
    type: 'date',
    field: 'begin_date',
    allowNull: true,
  },
  beginTime: {
    type: 'time',
    field: 'begin_time',
    allowNull: true,
  },
  endDate: {
    type: 'date',
    field: 'end_date',
    allowNull: false,
  },
  endTime: {
    type: 'time',
    field: 'end_time',
    allowNull: false,
  },
  note: {
    type: 'textarea',
    field: 'note',
    allowNull: true,
  },
  // createdAt: {
  //   type: DataTypes.DATE,
  //   field: 'created_at',
  //   allowNull: true,
  // },
  // updatedAt: {
  //   type: DataTypes.DATE,
  //   field: 'updated_at',
  //   allowNull: true,
  // },
  // deletedAt: {
  //   type: DataTypes.DATE,
  //   field: 'deleted_at',
  //   allowNull: true,
  // },
}

export default fields
