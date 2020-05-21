import Recruitment from "./resources/Recruitment";
import SeniorApi from "./SeniorApi";

export default class HCMApi extends SeniorApi {
    _recruitment: Recruitment;
    
    get recruitment(): Recruitment {
        this._recruitment = this._recruitment || new Recruitment(this);
        return this._recruitment;
    }
}