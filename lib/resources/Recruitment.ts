import VacanciesIn from "../model/recruitment/VacanciesIn";
import HCMApi from "../HCMApi";
import VacancyDetailsIn from "../model/recruitment/VacancyDetailsIn";
import RequestClient from "@seniorsistemas/senior-core/dist/lib/base/RequestClient";
import { VacancyDetailsSummaryIn, SearchPersonsIn } from "../..";
import { HttpMethod } from "@seniorsistemas/senior-core/dist/lib/model/HttpMethod";

export default class Recruitment extends RequestClient {
  private _client: RequestClient;
  seniorApi: any;

  constructor(hcmApi: HCMApi) {
    super(hcmApi, "hcm", "recruitment");
  }

  listVacancies = (vacanciesIn: VacanciesIn) => {
    const vacanciesJSON = JSON.parse(vacanciesIn.toJsonString());
    const clientOptions = {
      url: "/rest/hcm/recruitment/queries/listVacancies",
      method: HttpMethod.POST,
      data: vacanciesJSON,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  };

  vacancyDetails = (vacancyDetailsIn: VacancyDetailsIn) => {
    const vacancyDetailsInJSON = JSON.parse(vacancyDetailsIn.toJsonString());
    const clientOptions = {
      url: "/rest/hcm/recruitment/queries/vacancyDetails",
      method: HttpMethod.POST,
      data: vacancyDetailsInJSON,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  };

  vacancyDetailsSummary = (
    vacancyDetailsSummaryIn: VacancyDetailsSummaryIn
  ) => {
    const vacancyDetailsSummaryInJSON = JSON.parse(
      vacancyDetailsSummaryIn.toJsonString()
    );

    const clientOptions = {
      url: "/rest/hcm/recruitment/queries/vacancyDetailsSummary",
      method: HttpMethod.POST,
      data: vacancyDetailsSummaryInJSON,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };

    return this.request(clientOptions);
  };

  searchPersons = (searchPersonsIn: SearchPersonsIn) => {
    const searchPersonsInJSON = JSON.parse(searchPersonsIn.toJsonString());
    const clientOptions = {
      url: "/rest/hcm/recruitment/queries/searchPersons",
      method: HttpMethod.POST,
      data: searchPersonsInJSON,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  };
}
