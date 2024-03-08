import { model, Schema, models } from "mongoose";

const repairSchema = new Schema(
  {
    repairItem: {
      type: String,
      required: true,
    },
    repairType: [{
      type: Map,
      required: true
    }]
    ,
    otherIssues: {
      type: String,
      required: true,
    },
    repairCenter: {
      type: Schema.Types.ObjectId,
      ref: "RepairCenter",
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
    customerDetail: {
      type: Object,
      required: true,
    },
    faceId: {
      type: String,
      required: true,
    },
    trueTone: {
      type: String,
      required: true,
    },
    phoneOpenedBefore: {
      type: String,
      required: true,
    },
    repairReport: {
      type: String,
    },
    repairClinicTagNum: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Repair = models.Repair || model('Repair', repairSchema); 

export default Repair;
