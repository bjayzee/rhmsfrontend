import { ApiError } from "next/dist/server/api-utils";
import RepairCenter from "../models/repair/RepairCenter";
import { itemRepairValidation } from "../utils/validation";
import httpStatus from "http-status";
import { ItemRepair } from "../models";


export const createRepairCenter = async (param) => {
    try {

        const repairCenter = await RepairCenter.create({
            email: param.email,
            address: param.address,
            phoneNumbers: param.phoneNumbers
        });

        return repairCenter;
    } catch (error) {
        throw new Error("Error creating RepairCenter");
    }
}


//repair item

export const createRepairItem = async (req, res) => {

    const { error } = await itemRepairValidation.validateAsync(req.body);
    if (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, error.message);
    }
    const repairItemObj = req.body;
    const repair_item = await ItemRepair.create(repairItemObj)

    return repair_item;
}