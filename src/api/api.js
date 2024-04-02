import axios from 'axios';
import { BASE_URL, LOGIN_ENDPOINT, ACCOUNT_INFO, SEARCH_HISTOGRAMS, OBJECT_SEARCH, SEARCH_DOC } from './constants';


const api = axios.create({
  baseURL: BASE_URL
})

api.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  config.headers.Accept = "application/json";
  config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
  return config;
});

async function Login(login, password) {
  try {
    const response = await api.post(LOGIN_ENDPOINT, { login, password });
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Ошибка при авторизации:', error.message);
    throw error;
  }
}

async function getAccountInfo(accessToken) {
  try {
    const response = await api.get(ACCOUNT_INFO, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return response.data.eventFiltersInfo;
  } catch (error) {
    console.error('Ошибка при получении информации об аккаунте:', error.message);
    throw error;
  }
}

async function histograms(data) {
  try {
    const response = await api.post(SEARCH_HISTOGRAMS, {
      issueDateInterval: {
        startDate: data.startDate,
        endDate: data.endDate
      },
      searchContext: {
        targetSearchEntitiesContext: {
          targetSearchEntities: [
            {
              type: "company",
              inn: data.inn,
              maxFullness: data.maxFullness,
              inBusinessNews: data.inBusinessNews
            }
          ],
          onlyMainRole: data.onlyMainRole,
          tonality: data.tonality,
          onlyWithRiskFactors: data.onlyWithRiskFactors,
          riskFactors: {
            and: [],
            or: [],
            not: []
          },
          themes: {
            and: [],
            or: [],
            not: []
          }
        },
        themesFilter: {
          and: [],
          or: [],
          not: []
        }
      },
      searchArea: {
        includedSources: [],
        excludedSources: [],
        includedSourceGroups: [],
        excludedSourceGroups: [],
        includedDistributionMethods: [],
        excludedDistributionMethods: []
      },
      attributeFilters: {
        excludeTechNews: data.isTechNews,
        excludeAnnouncements: data.isAnnouncement,
        excludeDigests: data.isDigest,
      },
      similarMode: "duplicates",
      limit: data.limit,
      sortType: "sourceInfluence",
      sortDirectionType: "desc",
      intervalType: "month",
      histogramTypes: ["totalDocuments", "riskFactors"],

    });


    console.log(response.data);
    return response;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}


async function objectsearch(data) {
  try {
    const response = await api.post(OBJECT_SEARCH, {
      issueDateInterval: {
        startDate: data.startDate,
        endDate: data.endDate
      },
      searchContext: {
        targetSearchEntitiesContext: {
          targetSearchEntities: [
            {
              type: "company",
              inn: data.inn,
              maxFullness: data.maxFullness,
              inBusinessNews: data.inBusinessNews
            }
          ],
          onlyMainRole: data.onlyMainRole,
          tonality: data.tonality,
          onlyWithRiskFactors: data.onlyWithRiskFactors,
          riskFactors: {
            and: [],
            or: [],
            not: []
          },
          themes: {
            and: [],
            or: [],
            not: []
          }
        },
        themesFilter: {
          and: [],
          or: [],
          not: []
        }
      },
      searchArea: {
        includedSources: [],
        excludedSources: [],
        includedSourceGroups: [],
        excludedSourceGroups: [],
        includedDistributionMethods: [],
        excludedDistributionMethods: []
      },
      attributeFilters: {
        excludeTechNews: data.isTechNews,
        excludeAnnouncements: data.isAnnouncement,
        excludeDigests: data.isDigest,
      },
      similarMode: "duplicates",
      limit: data.limit,
      sortType: "sourceInfluence",
      sortDirectionType: "desc",
      intervalType: "month",
      histogramTypes: ["totalDocuments", "riskFactors"],

    });

    console.log(response.data);
    return response;


  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function documents(ids) {
  try {
    const response = await api.post(SEARCH_DOC, {
      ids: ids
    });

    console.log(response.data);
    return response;

  }
  catch (error) {
    console.error('Error:', error);
    throw error;
  }
}


export { api, Login, getAccountInfo, histograms, objectsearch, documents};