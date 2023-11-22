import RepairCenter from "../models/RepairCenter";


const createRepairCenter = async(param) =>{
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


export default createRepairCenter;