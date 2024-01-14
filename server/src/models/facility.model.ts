import db from "../db";
import { ApiError } from "../utils/ApiError";
import logger from "../logger";
import { TFacility } from "../types/facility";

export default class FacilityModel {
  static async getAllFacilities() {
    return db("facilities").select("*");
  }

  static async addFacility(facilities: TFacility, id: number) {
    try {
      const result = await db("facilties")
        .returning("*")
        .insert({
          alltime_water: facilities.water,
          sunlight: facilities.sunlight,
          separate_washroom: facilities.separatewashroom,
          wifi: facilities.wifi,
          furniture: facilities.furniture,
          security: facilities.security,
          alltime_access: facilities.open247,
          parking: facilities.parking,
          house_id: id,
        });
      return result;
    } catch (err) {
      logger.error(err);
      throw new ApiError(
        400,
        "Database error. Error updating facilities. Please check your input and try again"
      );
    }
  }
}
